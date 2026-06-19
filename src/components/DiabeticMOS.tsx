import { diabeticMOSFeatures } from '../lib/constants'
import { Section } from './Section'

export function DiabeticMOS() {
  return (
    <Section id="diabetic-mos" eyebrow="DiabeticMOS" title="DiabeticMOS: management operating system for care coordination." copy="DiabeticMOS helps coordinate the support circle around the person: family, caregivers, local vendors, donors, volunteers, and trusted community resources." tone="light">
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {diabeticMOSFeatures.map((feature) => (
          <div key={feature} className="rounded-2xl border border-teal-900/10 bg-white p-5 text-center font-bold text-[#073f3b] shadow-sm">{feature}</div>
        ))}
      </div>
    </Section>
  )
}
