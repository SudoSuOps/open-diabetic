import { roadmap } from '../lib/constants'
import { Section } from './Section'

export function Roadmap() {
  return (
    <Section id="roadmap" eyebrow="Roadmap" title="Where we are going." tone="soft">
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {Object.entries(roadmap).map(([phase, items]) => (
          <article key={phase} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black text-[#073f3b]">{phase}</h3>
            <ul className="mt-5 grid gap-3">
              {items.map((item) => <li key={item} className="rounded-xl bg-[#eef8f3] px-4 py-3 font-semibold text-slate-800">{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
