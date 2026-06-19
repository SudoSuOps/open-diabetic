import { computeTiers } from '../lib/constants'
import { Section } from './Section'

export function ComputeLayer() {
  return (
    <Section id="compute" eyebrow="Compute layer" title="The compute layer that runs the diabetic lifestyle OS." copy="OpenDiabetic Foundation operates the infrastructure layer for local vaults, edge inference, consent-bound coordination, developer SDKs, model evaluation, synthetic data pipelines, and privacy-preserving research workloads." tone="soft">
      <div className="mt-10 grid gap-5 lg:grid-cols-4">
        {computeTiers.map((tier, index) => (
          <article key={tier.title} className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f766e] text-lg font-black text-white">{index + 1}</div>
            <h3 className="text-xl font-bold text-slate-950">{tier.title}</h3>
            <p className="mt-3 leading-7 text-slate-700">{tier.body}</p>
            {index < computeTiers.length - 1 ? <div className="absolute -right-4 top-1/2 hidden h-px w-8 bg-[#0f766e]/30 lg:block" aria-hidden="true" /> : null}
          </article>
        ))}
      </div>
      <p className="mt-8 rounded-3xl border border-[#f2b632]/40 bg-[#fff7df] p-6 text-xl font-bold text-[#073f3b]">The cloud coordinates. The user owns. Researchers and builders get infrastructure without raw-data extraction.</p>
    </Section>
  )
}
