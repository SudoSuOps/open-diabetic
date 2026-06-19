import { CONTACT_EMAIL } from '../lib/constants'
import { Section } from './Section'

const paths = [
  {
    audience: 'People living with diabetes',
    need: 'Reduce daily chaos without handing over private records.',
    action: 'Ask for the DiabeticOS printable toolkit and local vault checklist.',
    href: `mailto:${CONTACT_EMAIL}?subject=OpenDiabetic%20DiabeticOS%20Toolkit%20Interest`,
  },
  {
    audience: 'Caregivers and family',
    need: 'Know what needs attention today and what to do in an emergency.',
    action: 'Request caregiver checklist, emergency sheet, and support-circle plan.',
    href: `mailto:${CONTACT_EMAIL}?subject=OpenDiabetic%20Caregiver%20Support%20Plan`,
  },
  {
    audience: 'Donors and sponsors',
    need: 'Fund care packs, local pilots, and compute credits with visible impact.',
    action: 'Start a care-pack or compute-credit conversation.',
    href: `mailto:${CONTACT_EMAIL}?subject=OpenDiabetic%20Donor%20Impact%20Conversation`,
  },
  {
    audience: 'Developers and researchers',
    need: 'Build useful support tools without reinventing privacy and evaluation.',
    action: 'Open the dataset and compute grant guide.',
    href: '/datasets-for-developers.html',
  },
  {
    audience: 'Clinicians and educators',
    need: 'See cleaner records, appointment prep, and patient-owned context.',
    action: 'Request the clinician workflow review packet.',
    href: `mailto:${CONTACT_EMAIL}?subject=OpenDiabetic%20Clinician%20Workflow%20Review`,
  },
  {
    audience: 'Local vendors and volunteers',
    need: 'Help with supplies, transportation, home support, and local resources.',
    action: 'Join the LocalDiabetic resource network.',
    href: `mailto:${CONTACT_EMAIL}?subject=OpenDiabetic%20LocalDiabetic%20Resource%20Network`,
  },
]

const guardrails = [
  'No diagnosis, treatment, medication dosing, or emergency triage.',
  'Human review before any care-pack, vendor, dataset, or research workflow goes live.',
  'Local-first records by default; sharing should be explicit, limited, and revocable.',
  'AI agents assist with organization and explanation, not independent medical decisions.',
]

export function ActionPaths() {
  return (
    <Section id="action-paths" eyebrow="What works now" title="Choose the path that matches your role." copy="OpenDiabetic should be useful before it is complex. Start with a concrete request: a printable toolkit, a caregiver plan, a care-pack pilot, a dataset review, a Synology vault, or a local resource workflow." tone="soft">
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {paths.map((path) => (
          <article key={path.audience} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-black text-[#073f3b]">{path.audience}</h3>
            <p className="mt-4 leading-7 text-slate-700">{path.need}</p>
            <a className="mt-6 inline-flex min-h-12 items-center justify-center rounded-2xl border border-[#0f766e]/25 bg-[#f8fbf7] px-5 py-3 text-sm font-black text-[#07554f] transition hover:border-[#0f766e] hover:bg-teal-50" href={path.href}>
              {path.action}
            </a>
          </article>
        ))}
      </div>
      <div className="mt-10 rounded-[2rem] border border-[#f2b632]/45 bg-[#fff8db] p-6 sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9a6400]">Human-in-the-loop guardrails</p>
        <h3 className="mt-3 text-2xl font-black text-[#073f3b]">Useful infrastructure still needs human judgment.</h3>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {guardrails.map((guardrail) => (
            <div key={guardrail} className="rounded-2xl bg-white px-5 py-4 text-sm font-bold leading-6 text-slate-800 shadow-sm">
              {guardrail}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
