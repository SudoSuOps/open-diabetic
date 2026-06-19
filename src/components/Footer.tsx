import { CONTACT_EMAIL, X_URL } from '../lib/constants'
import { BrandLogo } from './BrandLogo'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-5 py-10 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <BrandLogo tone="inverse" textClassName="text-2xl" markClassName="h-12 w-12 text-2xl" />
          <p className="mt-4 max-w-2xl text-slate-300">OpenDiabetic Foundation. Privacy-first compute for diabetic life.</p>
          <p className="mt-3 text-sm text-slate-300">Contact: <a className="font-semibold text-white underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> · <a className="font-semibold text-white underline underline-offset-4" href={X_URL} target="_blank" rel="noreferrer">@opendiabetics on X</a></p>
          <p className="mt-5 max-w-4xl text-sm leading-6 text-slate-400">OpenDiabetic does not provide medical advice, diagnosis, treatment, medication dosing, or emergency triage. Always consult licensed medical professionals for medical decisions and seek emergency care when needed.</p>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-400">OpenDiabetic is being designed around local-first data ownership, explicit consent, and no data harvesting.</p>
        </div>
        <div className="grid gap-2 text-sm font-semibold text-slate-300 sm:grid-cols-2 lg:text-right">
          <span>DiabeticOS</span>
          <span>DiabeticMOS</span>
          <span>LocalDiabetic</span>
          <span>Care Packs</span>
        </div>
      </div>
    </footer>
  )
}
