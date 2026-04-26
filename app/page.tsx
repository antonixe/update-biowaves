import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Packages } from "@/components/packages"
import { Products } from "@/components/products"
import { About } from "@/components/about"
import { Coverage } from "@/components/coverage"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { PageLoader } from "@/components/page-loader"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--field)] text-[var(--ink)]">
      <PageLoader />
      <Header />
      <main>
        <Hero />
        <Features />
        <Packages />
        <Products />
        <About />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
