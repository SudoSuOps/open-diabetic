import { CarePacks } from './components/CarePacks'
import { ComputeLayer } from './components/ComputeLayer'
import { CTA } from './components/CTA'
import { DiabeticMOS } from './components/DiabeticMOS'
import { DiabeticOS } from './components/DiabeticOS'
import { Footer } from './components/Footer'
import { FoundationModel } from './components/FoundationModel'
import { FounderNote } from './components/FounderNote'
import { Hero } from './components/Hero'
import { LocalVault } from './components/LocalVault'
import { Problem } from './components/Problem'
import { ResearchDevelopers } from './components/ResearchDevelopers'
import { Roadmap } from './components/Roadmap'
import { TrustDoctrine } from './components/TrustDoctrine'

function App() {
  return (
    <div className="min-h-screen bg-[#f8fbf7] text-slate-950">
      <header className="sticky top-0 z-40 border-b border-teal-950/10 bg-white/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main navigation">
          <a href="#top" className="flex items-center gap-3 text-lg font-black tracking-tight text-[#073f3b]" aria-label="OpenDiabetic home">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#f2b632] text-[#073f3b]" aria-hidden="true">◆</span>
            <span>OpenDiabetic</span>
          </a>
          <div className="hidden items-center gap-5 text-sm font-bold text-slate-700 lg:flex">
            <a className="hover:text-[#0f766e]" href="#doctrine">Doctrine</a>
            <a className="hover:text-[#0f766e]" href="#compute">Compute</a>
            <a className="hover:text-[#0f766e]" href="#diabetic-os">DiabeticOS</a>
            <a className="hover:text-[#0f766e]" href="#diabetic-mos">DiabeticMOS</a>
            <a className="hover:text-[#0f766e]" href="#localdiabetic">LocalDiabetic</a>
            <a className="hover:text-[#0f766e]" href="#join">Join</a>
          </div>
        </nav>
      </header>
      <main>
        <Hero />
        <Problem />
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
