import { carePacks, CONTACT_EMAIL } from '../lib/constants'
import { Section } from './Section'

export function CarePacks() {
  return (
    <Section id="care-packs" eyebrow="Real-world help" title="Digital tools are not enough." copy="Behind every record and reminder is a real person trying to get through the day. People need supplies, warm socks, safe shoes, food support, transportation, home help, family coordination, and post-hospital support, not just another dashboard." tone="dark">
      <p className="mt-8 max-w-4xl rounded-3xl border border-white/15 bg-white/8 p-6 text-lg leading-8 text-white/82">Care packs are the bridge between trusted compute and human help: the checklist becomes a box, the reminder becomes a ride, the support request becomes someone showing up.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {carePacks.map((pack) => <div key={pack} className="rounded-2xl border border-white/15 bg-white/8 p-5 text-lg font-bold text-white">{pack}</div>)}
      </div>
      <a className="mt-8 inline-flex rounded-2xl bg-[#f2b632] px-7 py-3 font-black text-[#073f3b] hover:bg-[#e2a923]" href={`mailto:${CONTACT_EMAIL}?subject=OpenDiabetic%20Care%20Pack%20Network`}>Help us build the care pack network</a>
    </Section>
  )
}
