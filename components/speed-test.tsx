"use client"

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react"
import {
  ArrowLeft,
  Download,
  Gauge,
  Play,
  RotateCcw,
  ShieldCheck,
  Square,
  Upload,
  Wifi,
} from "lucide-react"

type Stage = "ready" | "ping" | "download" | "upload" | "complete" | "error"

type Result = {
  date: string
  download: number
  upload: number
  ping: number
  jitter: number
}

const DOWNLOAD_URL = "https://speed.cloudflare.com/__down"
const UPLOAD_URL = "https://speed.cloudflare.com/__up"
const TEST_SECONDS = 6

function median(values: number[]) {
  const sorted = [...values].sort((a, b) => a - b)
  const middle = Math.floor(sorted.length / 2)
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2
}

function formatMbps(value: number | null) {
  return value === null ? "—" : value.toFixed(value >= 100 ? 0 : 1)
}

export function SpeedTest() {
  const [stage, setStage] = useState<Stage>("ready")
  const [download, setDownload] = useState<number | null>(null)
  const [upload, setUpload] = useState<number | null>(null)
  const [ping, setPing] = useState<number | null>(null)
  const [jitter, setJitter] = useState<number | null>(null)
  const [progress, setProgress] = useState(0)
  const [message, setMessage] = useState("Ready when you are")
  const [history, setHistory] = useState<Result[]>([])
  const [cellular, setCellular] = useState(false)
  const controllerRef = useRef<AbortController | null>(null)
  const uploadRef = useRef<XMLHttpRequest | null>(null)

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("seacom-speed-test-history")
      if (saved) setHistory(JSON.parse(saved))
    } catch {
      // Local results are an optional convenience.
    }

    const connection = (navigator as Navigator & { connection?: { type?: string } }).connection
    setCellular(connection?.type === "cellular")
  }, [])

  const busy = stage !== "ready" && stage !== "complete" && stage !== "error"
  const primaryLabel = useMemo(() => {
    if (stage === "ready" || stage === "complete" || stage === "error") return "Start speed test"
    if (stage === "ping") return "Checking latency"
    if (stage === "download") return "Testing download"
    return "Testing upload"
  }, [stage])

  function saveHistory(result: Result) {
    setHistory((current) => {
      const next = [result, ...current].slice(0, 5)
      window.localStorage.setItem("seacom-speed-test-history", JSON.stringify(next))
      return next
    })
  }

  async function testPing(signal: AbortSignal) {
    setStage("ping")
    setMessage("Checking your connection latency")
    const measurements: number[] = []
    for (let index = 0; index < 6; index += 1) {
      const started = performance.now()
      await fetch(`${DOWNLOAD_URL}?bytes=0&cache=${Math.random()}`, { cache: "no-store", signal })
      measurements.push(performance.now() - started)
      setProgress(((index + 1) / 6) * 10)
    }
    const value = median(measurements)
    const variation = measurements.slice(1).map((measurement, index) => Math.abs(measurement - measurements[index]))
    setPing(value)
    setJitter(variation.length ? median(variation) : 0)
    return { ping: value, jitter: variation.length ? median(variation) : 0 }
  }

  async function testDownload(signal: AbortSignal) {
    setStage("download")
    setMessage("Measuring download speed")
    const started = performance.now()
    const endsAt = started + TEST_SECONDS * 1000
    let transferred = 0

    const run = async () => {
      while (performance.now() < endsAt && !signal.aborted) {
        const response = await fetch(`${DOWNLOAD_URL}?bytes=25000000&cache=${Math.random()}`, { cache: "no-store", signal })
        const reader = response.body?.getReader()
        if (!reader) continue
        while (!signal.aborted && performance.now() < endsAt) {
          const { done, value } = await reader.read()
          if (done) break
          transferred += value.byteLength
          const elapsed = performance.now() - started
          setDownload((transferred * 8) / Math.max(elapsed, 1) / 1000)
          setProgress(10 + Math.min(elapsed / (TEST_SECONDS * 1000), 1) * 45)
        }
        await reader.cancel().catch(() => undefined)
      }
    }

    await Promise.all([run(), run()])
    const value = (transferred * 8) / Math.max(performance.now() - started, 1) / 1000
    setDownload(value)
    return value
  }

  function testUpload(signal: AbortSignal) {
    setStage("upload")
    setMessage("Measuring upload speed")
    const started = performance.now()
    const endsAt = started + TEST_SECONDS * 1000
    let transferred = 0
    const payload = new Blob([new Uint8Array(1024 * 1024)])

    return new Promise<number>((resolve, reject) => {
      const send = () => {
        if (signal.aborted) return reject(new DOMException("Cancelled", "AbortError"))
        if (performance.now() >= endsAt) {
          const value = (transferred * 8) / Math.max(performance.now() - started, 1) / 1000
          setUpload(value)
          return resolve(value)
        }

        const request = new XMLHttpRequest()
        uploadRef.current = request
        request.open("POST", `${UPLOAD_URL}?cache=${Math.random()}`)
        request.upload.onprogress = (event) => {
          if (event.lengthComputable) {
            const current = transferred + event.loaded
            const elapsed = performance.now() - started
            setUpload((current * 8) / Math.max(elapsed, 1) / 1000)
            setProgress(55 + Math.min(elapsed / (TEST_SECONDS * 1000), 1) * 45)
          }
        }
        request.onload = () => {
          transferred += payload.size
          send()
        }
        request.onerror = () => reject(new Error("Upload test could not reach the benchmark server."))
        request.send(payload)
      }
      signal.addEventListener("abort", () => uploadRef.current?.abort(), { once: true })
      send()
    })
  }

  async function startTest() {
    const controller = new AbortController()
    controllerRef.current = controller
    setDownload(null)
    setUpload(null)
    setPing(null)
    setJitter(null)
    setProgress(0)

    try {
      const latency = await testPing(controller.signal)
      const down = await testDownload(controller.signal)
      const up = await testUpload(controller.signal)
      setProgress(100)
      setStage("complete")
      setMessage("Test complete")
      saveHistory({ date: new Date().toLocaleDateString(undefined, { month: "short", day: "numeric" }), download: down, upload: up, ...latency })
    } catch (error) {
      if ((error as DOMException).name === "AbortError") {
        setStage("ready")
        setMessage("Test cancelled")
      } else {
        setStage("error")
        setMessage("We could not complete this test. Please try again.")
      }
    } finally {
      controllerRef.current = null
      uploadRef.current = null
    }
  }

  function stopTest() {
    controllerRef.current?.abort()
  }

  function clearHistory() {
    window.localStorage.removeItem("seacom-speed-test-history")
    setHistory([])
  }

  return (
    <div className="min-h-screen bg-[var(--field)] text-[var(--ink)]">
      <header className="border-b border-[var(--route)] bg-[var(--paper)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <a href="/" className="group flex items-center gap-3" aria-label="Back to Seacom Networks">
            <span className="grid size-10 place-items-center rounded-lg bg-[var(--ink)] text-[var(--service)]"><Wifi className="size-5" /></span>
            <span>
              <span className="block text-sm font-black tracking-tight">Seacom Networks</span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ink-soft)]">Kapsabet</span>
            </span>
          </a>
          <a href="/" className="inline-flex items-center gap-2 text-sm font-bold transition-colors hover:text-[var(--signal)]"><ArrowLeft className="size-4" /> Back to site</a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <section className="lg:sticky lg:top-10">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--service)] px-4 py-2 text-[11px] font-black uppercase tracking-[0.15em] text-[var(--ink)]"><Gauge className="size-4" /> Connection check</p>
            <h1 className="max-w-xl text-4xl font-black tracking-[-0.045em] md:text-6xl">Know what your internet can do.</h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-[var(--ink-soft)]">Measure the connection from this device to help choose the right Seacom plan or troubleshoot a slow connection.</p>
            <div className="mt-8 rounded-2xl border border-[var(--route)] bg-[var(--paper)] p-5">
              <div className="flex gap-3"><ShieldCheck className="mt-0.5 size-5 shrink-0 text-[var(--signal)]" /><p className="text-sm leading-6 text-[var(--ink-soft)]">Results can vary with Wi-Fi distance, other devices using the network, and your browser. For the clearest result, pause downloads and use a wired connection if possible.</p></div>
              {cellular && <p className="mt-4 rounded-lg bg-[var(--service)] px-3 py-2 text-xs font-semibold leading-5">You appear to be on mobile data. This test may use a meaningful amount of data.</p>}
            </div>
          </section>

          <section className="overflow-hidden rounded-2xl border border-[var(--route)] bg-[var(--paper)] shadow-[0_24px_70px_rgba(25,50,47,0.12)]">
            <div className="border-b border-[var(--route)] px-6 py-5 md:px-8">
              <div className="flex items-center justify-between gap-4"><div><p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--ink-soft)]">Seacom speed test</p><p className="mt-1 text-lg font-black">{message}</p></div><span className="rounded-full bg-[var(--field)] px-3 py-1.5 text-xs font-bold">{busy ? `${Math.round(progress)}%` : stage === "complete" ? "Complete" : "Ready"}</span></div>
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-[var(--field)]"><div className="h-full rounded-full bg-[var(--signal)] transition-[width] duration-300" style={{ width: `${progress}%` }} /></div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid gap-3 sm:grid-cols-2">
                <Metric icon={<Download className="size-5" />} label="Download" value={formatMbps(download)} unit="Mbps" active={stage === "download"} />
                <Metric icon={<Upload className="size-5" />} label="Upload" value={formatMbps(upload)} unit="Mbps" active={stage === "upload"} />
                <Metric icon={<Wifi className="size-5" />} label="Ping" value={ping === null ? "—" : Math.round(ping).toString()} unit="ms" active={stage === "ping"} />
                <Metric icon={<Gauge className="size-5" />} label="Jitter" value={jitter === null ? "—" : Math.round(jitter).toString()} unit="ms" active={stage === "ping"} />
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <button type="button" onClick={busy ? stopTest : startTest} className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-[var(--ink)] px-5 text-sm font-black text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60">
                  {busy ? <Square className="size-4 fill-current" /> : <Play className="size-4 fill-current" />}{busy ? "Stop test" : primaryLabel}
                </button>
                {(stage === "complete" || stage === "error") && <button type="button" onClick={startTest} className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-[var(--route)] px-5 text-sm font-bold hover:bg-[var(--field)]"><RotateCcw className="size-4" /> Test again</button>}
              </div>
              <p className="mt-4 text-xs leading-5 text-[var(--ink-soft)]">Benchmark traffic is securely handled by Cloudflare’s speed-test service. No account or personal details are required.</p>
            </div>

            {history.length > 0 && <div className="border-t border-[var(--route)] bg-[var(--field)] px-6 py-5 md:px-8">
              <div className="mb-4 flex items-center justify-between"><h2 className="text-sm font-black">Recent results</h2><button type="button" onClick={clearHistory} className="text-xs font-bold text-[var(--ink-soft)] underline underline-offset-4 hover:text-[var(--ink)]">Clear</button></div>
              <div className="space-y-2">{history.map((result, index) => <div key={`${result.date}-${index}`} className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-3 rounded-lg bg-[var(--paper)] px-3 py-3 text-xs"><span className="font-bold text-[var(--ink-soft)]">{result.date}</span><span className="font-black">{result.download.toFixed(1)} Mbps down</span><span>{result.upload.toFixed(1)} up</span><span>{Math.round(result.ping)} ms</span></div>)}</div>
            </div>}
          </section>
        </div>
      </main>
    </div>
  )
}

function Metric({ icon, label, value, unit, active }: { icon: ReactNode; label: string; value: string; unit: string; active: boolean }) {
  return <div className={`rounded-xl border p-5 transition-colors ${active ? "border-[var(--signal)] bg-[var(--service)]" : "border-[var(--route)] bg-[var(--field)]"}`}><div className="flex items-center gap-2 text-[var(--ink-soft)]">{icon}<span className="text-[11px] font-black uppercase tracking-[0.14em]">{label}</span></div><p className="mt-6 text-3xl font-black tracking-tight">{value}<span className="ml-1 text-sm font-bold text-[var(--ink-soft)]">{unit}</span></p></div>
}
