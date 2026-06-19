import { problemCards } from '../lib/constants'
import { IconCard } from './IconCard'
import { Section } from './Section'

export function Problem() {
  return (
    <Section eyebrow="The problem" title="Diabetes is more than glucose numbers." copy="Living with diabetes means managing records, appointments, supplies, food, foot care, insurance, family communication, alerts, recovery, and fear. Most tools focus on one slice. OpenDiabetic focuses on the lifestyle operating system around the person." tone="white">
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {problemCards.map((item, index) => <IconCard key={item} title={item} index={index + 1} />)}
      </div>
    </Section>
  )
}
