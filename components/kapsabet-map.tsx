const tiles = [
  { x: 9789, y: 8182 },
  { x: 9790, y: 8182 },
  { x: 9789, y: 8183 },
  { x: 9790, y: 8183 },
]

const coverageSignals = [
  { top: "18%", left: "22%", delay: "0ms", size: "h-2 w-2" },
  { top: "25%", left: "41%", delay: "340ms", size: "h-1.5 w-1.5" },
  { top: "29%", left: "74%", delay: "680ms", size: "h-2 w-2" },
  { top: "38%", left: "18%", delay: "120ms", size: "h-1.5 w-1.5" },
  { top: "43%", left: "60%", delay: "520ms", size: "h-2 w-2" },
  { top: "52%", left: "33%", delay: "860ms", size: "h-1.5 w-1.5" },
  { top: "58%", left: "77%", delay: "220ms", size: "h-2 w-2" },
  { top: "66%", left: "24%", delay: "740ms", size: "h-2 w-2" },
  { top: "72%", left: "49%", delay: "430ms", size: "h-1.5 w-1.5" },
  { top: "78%", left: "68%", delay: "980ms", size: "h-2 w-2" },
  { top: "84%", left: "38%", delay: "610ms", size: "h-1.5 w-1.5" },
]

interface KapsabetMapProps {
  compact?: boolean
}

export function KapsabetMap({ compact = false }: KapsabetMapProps) {
  return (
    <div className={`relative overflow-hidden bg-[var(--route)] ${compact ? "min-h-[230px]" : "min-h-[380px]"}`}>
      <div className="absolute inset-0 grid grid-cols-2 opacity-75 saturate-[0.72] sepia-[0.18]">
        {tiles.map((tile) => (
          <img
            key={`${tile.x}-${tile.y}`}
            src={`https://tile.openstreetmap.org/14/${tile.x}/${tile.y}.png`}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[color-mix(in_oklch,var(--field)_22%,transparent)]" />
      {coverageSignals.map((signal, index) => (
        <span
          key={`${signal.top}-${signal.left}`}
          className={`absolute rounded-full bg-[var(--signal-live)] shadow-[0_0_12px_color-mix(in_oklch,var(--signal-live)_80%,transparent)] ${signal.size} ${
            compact && index > 6 ? "hidden sm:block" : ""
          }`}
          style={{
            top: signal.top,
            left: signal.left,
            animation: "signal-glow 2.8s cubic-bezier(0.16, 1, 0.3, 1) infinite",
            animationDelay: signal.delay,
          }}
          aria-hidden="true"
        />
      ))}

      {!compact && (
        <div className="absolute bottom-3 left-3 rounded-md bg-[var(--paper)] px-3 py-2 text-xs font-semibold text-[var(--ink-soft)] shadow-sm">
          Map tiles: OpenStreetMap contributors
        </div>
      )}
    </div>
  )
}
