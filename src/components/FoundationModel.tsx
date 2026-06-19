import { foundationPillars } from '../lib/constants'
import { Section } from './Section'

export function FoundationModel() {
  return (
    <Section id="foundation" eyebrow="Foundation model" title="A foundation built for trust." copy="OpenDiabetic Foundation is designed as public-good infrastructure for diabetic life: donation-supported, developer-friendly, research-aligned, and structurally opposed to diabetic data exploitation." tone="white">
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {foundationPillars.map((pillar) => <div key={pillar} className="rounded-2xl border border-slate-200 bg-[#fbfdfb] p-5 text-center font-bold text-[#073f3b] shadow-sm">{pillar}</div>)}
      </div>
    </Section>
  )
}
