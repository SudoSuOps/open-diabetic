import { useState, type FormEvent } from 'react'

const toolkitItems = [
  'Daily reminders',
  'Medication and supply tracking',
  'Food and recipe library',
  'Foot-care and wound-care notes',
  'Doctor and insurance records',
  'Emergency contact sheet',
  'Family and support-circle coordination',
  'Future wearable notifications',
]

const mosCards = [
  {
    title: 'Records Vault',
    body: 'Keep insurance details, medical records, device notes, contacts, recipes, and care notes organized in one place.',
  },
  {
    title: 'Reminder Engine',
    body: 'Plan medication, supplies, appointments, daily routines, foot checks, and family follow-up reminders.',
  },
  {
    title: 'Care Pack Builder',
    body: 'Coordinate practical support packs for daily life, recovery, travel, weather, and emergency gaps.',
  },
  {
    title: 'Local Vendor Directory',
    body: 'Map vetted suppliers, cleaners, shoppers, transportation help, and community resources by location.',
  },
  {
    title: 'Support Circle',
    body: 'Help trusted family, caregivers, and friends understand what is needed and when to step in.',
  },
  {
    title: 'Privacy-first AI Assistant',
    body: 'Use assistive agents for organization, checklists, summaries, and reminders without replacing clinicians.',
  },
]

const helpItems = [
  'Donation-supported care packs',
  'Vetted local vendors',
  'Cleaners and home support',
  'Medical suppliers',
  'Shoppers and errand help',
  'Transportation and community support',
  'Family coordination',
]

function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [formMessage, setFormMessage] = useState('')

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      role: String(formData.get('role') || '').trim(),
      message: String(formData.get('message') || '').trim(),
      website: String(formData.get('website') || '').trim(),
    }

    setFormStatus('sending')
    setFormMessage('Sending your message...')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await response.json().catch(() => ({}))
      if (!response.ok || result.ok === false) {
        throw new Error(result.error || 'Contact form is unavailable right now.')
      }
      form.reset()
      setFormStatus('sent')
      setFormMessage('Message sent. We also sent a confirmation email to the address you provided.')
    } catch (error) {
      setFormStatus('error')
      setFormMessage(error instanceof Error ? error.message : 'Contact form is unavailable right now. Email build@opendiabetic.com directly.')
    }
  }

  return (
    <div className="min-h-screen bg-[#f8fbf9] text-slate-900">
      <header className="border-b border-teal-900/10 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main navigation">
          <a href="#top" className="text-lg font-bold tracking-tight text-teal-900">OpenDiabetic</a>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <a className="hover:text-teal-800" href="#compute">Foundation</a>
            <a className="hover:text-teal-800" href="#toolkit">DiabeticOS</a>
            <a className="hover:text-teal-800" href="#mos">DiabeticMOS</a>
            <a className="hover:text-teal-800" href="#vault">Local vault</a>
            <a className="hover:text-teal-800" href="#faq">FAQ</a>
            <a className="hover:text-teal-800" href="#join">Join</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-sky-50">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
            <div className="flex flex-col justify-center">
              <p className="mb-4 w-fit rounded-full border border-teal-700/20 bg-white px-4 py-2 text-sm font-semibold text-teal-800">Privacy-first diabetic compute infrastructure</p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">OpenDiabetic: trusted compute for life with diabetes.</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">A privacy-first compute foundation for diabetic records, reminders, care packs, local support, research, developer tools, and personal health vaults controlled by the people who use them.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="inline-flex items-center justify-center rounded-xl bg-teal-800 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-teal-900" href="#join">Join the mission</a>
                <a className="inline-flex items-center justify-center rounded-xl border border-teal-800/30 bg-white px-6 py-3 text-base font-semibold text-teal-900 transition hover:border-teal-800 hover:bg-teal-50" href="#toolkit">Explore the toolkit</a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-teal-900/10 bg-white p-5 shadow-xl shadow-teal-900/5">
              <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-sm font-semibold text-emerald-200">DiabeticMOS Preview</span>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-100">local-first</span>
                </div>
                <div className="grid gap-3">
                  {['Medication reminder', 'Supply inventory', 'Insurance card', 'Foot-care note', 'Emergency contact'].map((item, index) => (
                    <div key={item} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                      <span>{item}</span>
                      <span className="text-sm text-sky-200">{index < 2 ? 'today' : 'saved'}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-6 text-slate-300">Wearables and phones become the notification layer. The private vault remains organized under the user’s control.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-teal-900 px-5 py-10 text-white sm:px-8">
          <div className="mx-auto max-w-5xl text-center text-xl font-medium leading-9">OpenDiabetic Foundation provides diabetic compute as public-good infrastructure. We do not harvest diabetic data. We design around local ownership, explicit consent, local-first storage, and tools that serve people, families, researchers, developers, and local communities without turning health data into the business model.</div>
        </section>

        <section id="compute" className="bg-white px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">OpenDiabetic Foundation</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">A privacy-first diabetic compute foundation.</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">OpenDiabetic does not exist only to publish diabetes content, sell supplies, or build another app. It exists to own and operate the compute layer for DiabeticOS, DiabeticMOS, LocalDiabetic edge deployments, research workloads, developer toolkits, AI agents, personal vaults, wearable notifications, and real-world support coordination.</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                ['Compute for diabetics', 'Local reminders, records, appointment prep, supply lists, emergency sheets, and user-owned summaries.'],
                ['Compute for research', 'Privacy-preserving workloads, synthetic and de-identified data workflows, model evaluation, and public-good credits.'],
                ['Compute for developers', 'SDKs, APIs, DiabeticOS modules, local-first patterns, agent templates, and safety guardrails.'],
                ['Compute for communities', 'LocalDiabetic nodes, care pack routing, vendor verification, volunteer workflows, and donation matching.'],
              ].map(([title, body]) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-[#fbfdfc] p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-950">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{body}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 rounded-3xl border border-teal-800/20 bg-teal-50 p-6">
              <h3 className="text-xl font-bold text-teal-950">Data ownership doctrine</h3>
              <p className="mt-3 leading-7 text-slate-800">No harvesting. User-owned records. Explicit consent. Local-first defaults. Optional sharing. Research opt-in only. Emergency access boundaries. Family and caregiver permissions that respect the person living with diabetes.</p>
            </div>
          </div>
        </section>

        <section id="toolkit" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">DiabeticOS</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">A personal diabetic toolkit for daily life.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">DiabeticOS is the practical layer for people and families: reminders, records, care notes, recipes, supplies, and trusted coordination without pretending an app can replace medical care.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {toolkitItems.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 h-2 w-12 rounded-full bg-gradient-to-r from-teal-700 to-sky-500" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-slate-950">{item}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="mos" className="bg-white px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">DiabeticMOS</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">The management operating system for diabetic care coordination.</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {mosCards.map((card) => (
                <article key={card.title} className="rounded-2xl border border-slate-200 bg-[#fbfdfc] p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-950">{card.title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="vault" className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Local-first vault</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">A NAS and edge appliance vision for personal health organization.</h2>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-lg leading-8 text-slate-700">Your most important diabetic records should not be scattered across portals, emails, paper folders, and apps. OpenDiabetic is exploring a local-first vault where your records, reminders, recipes, contacts, and care notes stay organized under your control.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {['Insurance info', 'Medical records', 'Wound-care notes', 'Cookbooks', 'Doctor contacts', 'Emergency contacts', 'Device logs', 'Reminders'].map((item) => (
                <div key={item} className="rounded-xl bg-emerald-50 px-4 py-3 font-medium text-teal-950">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-sky-950 px-5 py-16 text-white sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-200">Real-world help</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Support has to work outside the clinic.</h2>
              <p className="mt-4 text-lg leading-8 text-sky-50/85">OpenDiabetic is designed around the daily support people actually need: supplies, rides, food, home help, care packs, local vendors, family coordination, and community compute that does not require data harvesting.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {helpItems.map((item) => (
                <div key={item} className="rounded-2xl border border-white/15 bg-white/8 p-5 text-lg font-semibold">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-800">Founder note</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Built from lived experience.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-800">OpenDiabetic began from lived experience. Diabetes is not only glucose numbers. It is appointments, supplies, infections, foot care, paperwork, food, insurance, family, fear, recovery, and resilience. We are building tools for the real life around the condition.</p>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">OpenDiabetic FAQ</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Clear answers for people, families, builders, and search engines.</h2>
          </div>
          <div className="mt-8 grid gap-4">
            {[
              ['What is OpenDiabetic?', 'OpenDiabetic is a privacy-first diabetic compute foundation for records, reminders, care packs, local resources, research tools, developer infrastructure, and personal health vaults.'],
              ['What is DiabeticOS?', 'DiabeticOS is the daily lifestyle operating system for reminders, routines, supplies, food, foot care, doctor prep, family updates, emergency sheets, recovery, and reduced cognitive load.'],
              ['What is DiabeticMOS?', 'DiabeticMOS is the management operating system around the person. It coordinates records, reminders, support circles, care packs, vetted vendors, insurance documents, local resources, and privacy permissions.'],
              ['What is LocalDiabetic?', 'LocalDiabetic is the local deployment layer for NAS personal vaults, optional edge appliances, Apple Watch and iPhone alerts, local-first records, family permissions, emergency access, and local support networks.'],
              ['Does OpenDiabetic harvest diabetic data?', 'No. OpenDiabetic is designed around local ownership, explicit consent, local-first defaults, optional sharing, research opt-in only, and no data harvesting.'],
              ['Does OpenDiabetic provide medical advice?', 'No. OpenDiabetic does not provide diagnosis, treatment, medication guidance, or emergency care. Always consult licensed medical professionals for medical decisions.'],
            ].map(([question, answer]) => (
              <article key={question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-950">{question}</h3>
                <p className="mt-3 leading-7 text-slate-700">{answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="join" className="bg-white px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Join the mission</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Help shape OpenDiabetic.</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">We are gathering caregivers, clinicians, donors, vendors, volunteers, builders, and people living with diabetes to build a trustworthy public resource network.</p>
              <p className="mt-5 rounded-2xl border border-teal-800/20 bg-teal-50 p-4 text-slate-800">Use the form for general interest only. Do not send private medical details, glucose logs, insurance numbers, medication instructions, or emergency requests. You can also email <a className="font-semibold text-teal-900 underline underline-offset-4" href="mailto:build@opendiabetic.com">build@opendiabetic.com</a> or follow <a className="font-semibold text-teal-900 underline underline-offset-4" href="https://x.com/opendiabetics" target="_blank" rel="noreferrer">@opendiabetics</a>.</p>
            </div>
            <form className="rounded-3xl border border-slate-200 bg-[#fbfdfc] p-6 shadow-sm" aria-label="OpenDiabetic interest form" onSubmit={handleContactSubmit}>
              <div className="grid gap-5">
                <label className="hidden" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" name="website" /></label>
                <label className="grid gap-2 font-medium text-slate-800">Name<input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-base" type="text" name="name" autoComplete="name" required /></label>
                <label className="grid gap-2 font-medium text-slate-800">Email<input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-base" type="email" name="email" autoComplete="email" required /></label>
                <label className="grid gap-2 font-medium text-slate-800">I am a...<select className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-base" name="role" defaultValue="" required><option value="" disabled>Select one</option><option>Person with diabetes</option><option>Caregiver/family</option><option>Clinician</option><option>Donor</option><option>Vendor</option><option>Volunteer</option><option>Builder</option></select></label>
                <label className="grid gap-2 font-medium text-slate-800">Message<textarea className="min-h-32 rounded-xl border border-slate-300 bg-white px-4 py-3 text-base" name="message" maxLength={2000} required /></label>
                <p className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-950">This form is not for medical advice or emergencies. OpenDiabetic does not provide diagnosis, treatment, medication guidance, or emergency care.</p>
                <button className="inline-flex items-center justify-center rounded-xl bg-teal-800 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-teal-900 disabled:cursor-not-allowed disabled:bg-slate-500" type="submit" disabled={formStatus === 'sending'}>{formStatus === 'sending' ? 'Sending...' : 'Send message'}</button>
                {formMessage ? <p className={formStatus === 'error' ? 'rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900' : 'rounded-xl border border-teal-200 bg-teal-50 px-4 py-3 text-sm text-teal-950'} role="status">{formMessage}</p> : null}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-950 px-5 py-10 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-2xl font-bold">OpenDiabetic</h2>
            <p className="mt-3 max-w-2xl text-slate-300">Built for trust, privacy-first compute, and real-world support.</p>
            <p className="mt-3 text-sm text-slate-300">Contact <a className="font-semibold text-white underline underline-offset-4" href="mailto:build@opendiabetic.com">build@opendiabetic.com</a> · <a className="font-semibold text-white underline underline-offset-4" href="https://x.com/opendiabetics" target="_blank" rel="noreferrer">@opendiabetics on X</a></p>
            <p className="mt-5 max-w-4xl text-sm leading-6 text-slate-400">OpenDiabetic does not provide medical advice. Always consult licensed medical professionals for diagnosis, treatment, medication, and emergency care.</p>
          </div>
          <div className="grid gap-2 text-sm text-slate-300 sm:grid-cols-2 md:text-right">
            <span>OpenDiabetic</span>
            <span>DiabeticOS</span>
            <span>DiabeticMOS</span>
            <span>LocalDiabetic</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
