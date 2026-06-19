import { localDiabeticFeatures } from '../lib/constants'
import { Section } from './Section'

export function LocalVault() {
  return (
    <Section id="localdiabetic" eyebrow="LocalDiabetic" title="LocalDiabetic: the local node for real-world support." copy="LocalDiabetic is the future local deployment layer: a community node, edge appliance, or vault that helps coordinate trusted resources close to the person." tone="white">
      <div className="mt-10 grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div className="rounded-[2rem] border border-slate-200 bg-[#073f3b] p-6 text-white shadow-xl shadow-teal-950/10">
          <div className="rounded-3xl border border-white/10 bg-white/7 p-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f7d37a]">Personal vault</p>
            <h3 className="mt-3 text-3xl font-black">NAS + edge + phone alerts</h3>
            <p className="mt-4 leading-7 text-white/78">A local-first vault can hold records, recipes, contacts, care notes, emergency sheets, and reminders under the user’s control.</p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {localDiabeticFeatures.map((feature) => <div key={feature} className="rounded-2xl border border-slate-200 bg-[#fbfdfb] p-5 font-bold text-slate-950 shadow-sm">{feature}</div>)}
        </div>
      </div>
    </Section>
  )
}
