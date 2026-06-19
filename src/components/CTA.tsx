import { CONTACT_EMAIL } from '../lib/constants'

export function CTA() {
  return (
    <section id="join" className="bg-white px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#073f3b] p-8 text-center text-white shadow-2xl shadow-teal-950/15 sm:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f7d37a]">Join the mission</p>
        <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Help build privacy-first diabetic infrastructure.</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/78">Join as a diabetic, caregiver, donor, builder, researcher, vendor, clinician, or volunteer.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#f2b632] px-7 py-3 font-black text-[#073f3b] hover:bg-[#e2a923]" href={`mailto:${CONTACT_EMAIL}?subject=OpenDiabetic%20Mission%20Interest`}>Join the mission</a>
          <a className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/30 px-7 py-3 font-bold text-white hover:bg-white/10" href={`mailto:${CONTACT_EMAIL}`}>Contact OpenDiabetic</a>
        </div>
      </div>
    </section>
  )
}
