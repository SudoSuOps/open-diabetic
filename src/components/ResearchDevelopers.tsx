import { researchDeveloperCards } from '../lib/constants'
import { Section } from './Section'

export function ResearchDevelopers() {
  return (
    <Section id="research" eyebrow="Research + developers" title="Compute for researchers and builders." copy="OpenDiabetic Foundation should give researchers and developers trusted compute, safe toolkits, and evaluation infrastructure to build better diabetic support tools without requiring diabetic data to be harvested." tone="soft">
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {researchDeveloperCards.map((card) => <div key={card} className="rounded-2xl border border-slate-200 bg-white p-5 font-bold text-slate-950 shadow-sm">{card}</div>)}
      </div>
      <p className="mt-8 max-w-4xl rounded-3xl border border-[#0f766e]/15 bg-white p-6 text-lg font-semibold leading-8 text-slate-800">Builders should be able to create useful diabetic tools without reinventing privacy, consent, records, and safety from scratch.</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a className="inline-flex rounded-2xl border border-[#0f766e]/25 bg-white px-6 py-3 font-bold text-[#07554f] hover:bg-teal-50" href="/open-diabetic-core-strategy.md">Read the research strategy brief</a>
        <a className="inline-flex rounded-2xl border border-[#0f766e]/25 bg-white px-6 py-3 font-bold text-[#07554f] hover:bg-teal-50" href="/synology-nas-install-guide.html">Set up a Synology vault</a>
              <a className="inline-flex rounded-2xl border border-[#0f766e]/25 bg-white px-6 py-3 font-bold text-[#07554f] hover:bg-teal-50" href="/datasets-for-developers.html">Datasets for developers</a>
      </div>
    </Section>
  )
}
