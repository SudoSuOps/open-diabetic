import { doctrineCards } from '../lib/constants'
import { IconCard } from './IconCard'
import { Section } from './Section'

export function TrustDoctrine() {
  return (
    <Section id="doctrine" eyebrow="Trust doctrine" title="We do not harvest diabetic data." copy="This is the line we do not cross: diabetic data should serve the person living with diabetes, not become someone else’s business model. Every product decision starts here." tone="dark">
      <div className="mt-8 rounded-[2rem] border border-[#f2b632]/40 bg-[#f2b632] p-6 text-2xl font-black leading-tight text-[#073f3b] shadow-xl shadow-black/10 sm:text-3xl">No harvesting. No hidden resale. No platform lock-in as the business model.</div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {doctrineCards.map((card, index) => <IconCard key={card.title} title={card.title} body={card.body} index={index + 1} dark />)}
      </div>
    </Section>
  )
}
