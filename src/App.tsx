import { BrandLogo } from './components/BrandLogo'
import { CarePacks } from './components/CarePacks'
import { ComputeLayer } from './components/ComputeLayer'
import { CTA } from './components/CTA'
import { DiabeticMOS } from './components/DiabeticMOS'
import { DiabeticOS } from './components/DiabeticOS'
import { Footer } from './components/Footer'
import { FoundationModel } from './components/FoundationModel'
import { FounderNote } from './components/FounderNote'
import { HardFacts } from './components/HardFacts'
import { Hero } from './components/Hero'
import { LocalVault } from './components/LocalVault'
import { Problem } from './components/Problem'
import { ResearchDevelopers } from './components/ResearchDevelopers'
import { Roadmap } from './components/Roadmap'
import { TrustDoctrine } from './components/TrustDoctrine'

function App() {
  return (
    <div className="min-h-screen bg-[#f8fbf7] text-slate-950">
      <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-[#f2b632] focus:px-4 focus:py-3 focus:font-black focus:text-[#073f3b]" href="#main-content">Skip to main content</a>
      <header className="sticky top-0 z-40 border-b border-teal-950/10 bg-white/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8" aria-label="Main navigation">
          <a href="#top" className="rounded-2xl" aria-label="OpenDiabetic home">
            <BrandLogo textClassName="text-lg sm:text-xl" markClassName="h-10 w-10 text-xl" />
          </a>
          <div className="hidden items-center gap-5 text-sm font-bold text-slate-700 lg:flex">
            <a className="hover:text-[#0f766e]" href="#hard-facts">Hard facts</a>
            <a className="hover:text-[#0f766e]" href="#doctrine">Doctrine</a>
            <a className="hover:text-[#0f766e]" href="#compute">Compute</a>
            <a className="hover:text-[#0f766e]" href="#diabetic-os">DiabeticOS</a>
            <a className="hover:text-[#0f766e]" href="#diabetic-mos">DiabeticMOS</a>
            <a className="hover:text-[#0f766e]" href="#localdiabetic">LocalDiabetic</a>
            <a className="hover:text-[#0f766e]" href="#join">Join</a>
          </div>
        </nav>
      </header>
      <main id="main-content">
        <Hero />
        <Problem />
        <HardFacts />
        <TrustDoctrine />
        <ComputeLayer />
        <DiabeticOS />
        <DiabeticMOS />
        <LocalVault />
        <ResearchDevelopers />
        <CarePacks />
        <FoundationModel />
        <FounderNote />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
