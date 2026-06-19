import { HardFactsIllustration } from './HardFactsIllustration'

const sourceLinks = [
  { label: 'CDC National Diabetes Statistics Report', href: 'https://www.cdc.gov/diabetes/php/data-research/index.html' },
  { label: 'CDC Diabetes Basics', href: 'https://www.cdc.gov/diabetes/about/index.html' },
  { label: 'CDC Living with Diabetes', href: 'https://www.cdc.gov/diabetes/living-with/index.html' },
  { label: 'CDC Diabetes and Mental Health', href: 'https://www.cdc.gov/diabetes/living-with/mental-health.html' },
  { label: 'American Diabetes Association Statistics', href: 'https://diabetes.org/about-diabetes/statistics/about-diabetes' },
]

const hardFacts = [
  { stat: '40.1M', label: 'people in the United States estimated to have diagnosed or undiagnosed diabetes in 2023', source: 'CDC' },
  { stat: '115.2M', label: 'U.S. adults estimated to have prediabetes', source: 'CDC' },
  { stat: '7th', label: 'leading cause of death in the United States', source: 'CDC / ADA' },
  { stat: '$412.9B', label: 'estimated annual U.S. cost of diagnosed diabetes in 2022', source: 'ADA' },
  { stat: '2.6x', label: 'higher average medical expenditures for people with diagnosed diabetes', source: 'ADA' },
  { stat: '2-3x', label: 'higher likelihood of depression among people with diabetes than people without diabetes', source: 'CDC' },
]

const dailyLoad = [
  'Medication and supply routines',
  'Meals, movement, stress, and sleep',
  'Blood sugar checks and device alerts',
  'Foot care, wound notes, and infection awareness',
  'Insurance, prescriptions, labs, and appointments',
  'Family updates, transport, vendors, and recovery support',
]

const swarm = [
  'A person managing the condition every day',
  'Family and caregivers who need the right visibility',
  'Clinicians and educators who need organized context',
  'Local vendors, volunteers, donors, and transport support',
  'Developers and researchers building safer support tools',
  'Trusted compute that keeps records useful without harvesting data',
]

export function HardFacts() {
  return (
    <section id="hard-facts" className="bg-[#062f2c] px-5 py-16 text-white sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f2b632]">Hard facts</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-6xl">This is why diabetic life needs infrastructure.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            Diabetes is not a once-a-year problem or a single dashboard. It is a 24/7 operating load across food, medication, records, supplies, foot care, appointments, insurance, family communication, stress, and emergency readiness. The danger is real, and the support system has to be real too.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {hardFacts.map((fact) => (
              <article key={fact.stat} className="rounded-3xl border border-white/12 bg-white/[0.06] p-5 shadow-2xl shadow-black/10">
                <p className="text-4xl font-black text-[#f2b632]">{fact.stat}</p>
                <p className="mt-3 text-sm leading-6 text-white/82">{fact.label}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-white/45">Source: {fact.source}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/12 bg-white/[0.07] p-5 shadow-2xl shadow-black/20 sm:p-7">
          <HardFactsIllustration />
          <div className="mt-8 grid gap-5">
            <div className="rounded-3xl bg-white p-6 text-slate-950">
              <h3 className="text-xl font-black text-[#073f3b]">The daily management load</h3>
              <div className="mt-5 grid gap-3">
                {dailyLoad.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl bg-[#eef8f3] px-4 py-3 text-sm font-bold text-slate-800">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#0f766e]" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-[#f2b632]/45 bg-[#f2b632]/12 p-6">
              <h3 className="text-xl font-black text-[#f8d66d]">It takes a swarm.</h3>
              <p className="mt-3 text-sm leading-7 text-white/78">
                Better outcomes need organized support around the person, not another silo. OpenDiabetic turns this into a privacy-first coordination layer.
              </p>
              <div className="mt-5 grid gap-2">
                {swarm.map((item) => (
                  <p key={item} className="rounded-2xl bg-black/10 px-4 py-3 text-sm text-white/82">{item}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="/hard-facts-diabetes.html" className="inline-flex justify-center rounded-full bg-[#f2b632] px-6 py-3 text-sm font-black text-[#073f3b] shadow-lg shadow-black/20 hover:bg-[#f8d66d]">Read the hard facts</a>
            <a href="#care-packs" className="inline-flex justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-black text-white hover:bg-white/10">See real-world help</a>
          </div>
          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">Verified source links</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {sourceLinks.map((link) => (
                <a key={link.href} className="rounded-full border border-white/14 px-3 py-2 text-xs font-bold text-white/70 hover:border-[#f2b632] hover:text-white" href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
