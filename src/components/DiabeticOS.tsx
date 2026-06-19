import { diabeticOSFeatures } from '../lib/constants'
import { Section } from './Section'

export function DiabeticOS() {
  return (
    <Section id="diabetic-os" eyebrow="DiabeticOS" title="DiabeticOS: daily simplicity for people living with diabetes." copy="A caregiver should understand it immediately: what needs doing today, what is running low, what documents are needed, who should be updated, and what should be packed before leaving the house. DiabeticOS organizes, reminds, and prepares; it does not diagnose or prescribe." tone="white">
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {diabeticOSFeatures.map((feature) => (
          <div key={feature} className="rounded-2xl border border-slate-200 bg-[#fbfdfb] p-5 font-bold text-slate-950 shadow-sm">
            <div className="mb-4 h-2 w-12 rounded-full bg-gradient-to-r from-[#0f766e] to-[#f2b632]" aria-hidden="true" />
            {feature}
          </div>
        ))}
      </div>
    </Section>
  )
}
