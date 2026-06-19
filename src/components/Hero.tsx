import { CONTACT_EMAIL } from '../lib/constants'

const flow = ['Phone / Watch', 'Local Vault / NAS', 'Edge AI', 'Foundation Compute']

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,#d8f3eb,transparent_34%),linear-gradient(135deg,#ffffff,#f6fbf8_52%,#eaf7f4)] px-5 py-16 sm:px-8 lg:py-24">
      <div className="absolute left-8 top-10 hidden h-14 w-14 rotate-12 rounded-[1.2rem] border border-[#f2b632]/50 bg-[#f2b632]/20 lg:block" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_.98fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-[#0f766e]/20 bg-white px-4 py-2 text-sm font-bold text-[#0f766e] shadow-sm">Public-good infrastructure. Local data. Real-world support.</p>
          <h1 className="max-w-5xl text-5xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">Privacy-first compute for diabetic life.</h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-700">OpenDiabetic Foundation builds the trusted compute layer for diabetic life: DiabeticOS, DiabeticMOS, LocalDiabetic nodes, personal vaults, research compute, developer tools, care packs, and day-to-day simplicity without harvesting diabetic data.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#0f766e] px-7 py-3 text-base font-bold text-white shadow-lg shadow-teal-900/15 transition hover:bg-[#0b5f59]" href={`mailto:${CONTACT_EMAIL}?subject=OpenDiabetic%20Mission%20Interest`}>Join the mission</a>
            <a className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-[#0f766e]/25 bg-white px-7 py-3 text-base font-bold text-[#07554f] transition hover:border-[#0f766e] hover:bg-teal-50" href="#diabetic-os">Explore DiabeticOS</a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-teal-950/10">
          <div className="rounded-[1.5rem] bg-[#062f2d] p-5 text-white">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <span className="font-bold text-[#f7d37a]">Public-good compute flow</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">no harvesting</span>
            </div>
            <div className="grid gap-3">
              {flow.map((item, index) => (
                <div key={item} className="grid grid-cols-[auto_1fr] items-center gap-4 rounded-2xl border border-white/10 bg-white/7 p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f2b632] font-black text-[#062f2d]">{index + 1}</div>
                  <div>
                    <p className="font-bold">{item}</p>
                    <p className="text-sm text-white/68">{index === 0 ? 'Alerts and checklists' : index === 1 ? 'User-owned records' : index === 2 ? 'Local organization agents' : 'Research and developer infrastructure'}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-2xl bg-white/8 p-4 text-sm leading-6 text-white/78">Infrastructure should reduce burden, protect records, coordinate support, and fund research without converting diabetic data into someone else’s asset.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
