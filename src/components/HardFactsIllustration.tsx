const positions = [
  'left-1/2 top-0 -translate-x-1/2',
  'right-2 top-12',
  'right-0 top-1/2 -translate-y-1/2',
  'bottom-12 right-2',
  'bottom-0 left-1/2 -translate-x-1/2',
  'bottom-12 left-2',
  'left-0 top-1/2 -translate-y-1/2',
  'left-2 top-12',
]

const nodes = ['Person', 'Family', 'Clinician', 'Local help', 'Records', 'Supplies', 'Research', 'Developers']

export function HardFactsIllustration() {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-[#041f1d] p-5" aria-label="Swarm support diagram">
      <div className="relative mx-auto aspect-square max-w-md">
        <div className="absolute inset-10 rounded-full border border-[#f2b632]/30" />
        <div className="absolute inset-20 rounded-full border border-white/10" />
        <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-[#f2b632] bg-white text-center shadow-2xl shadow-[#f2b632]/20">
          <span className="text-sm font-black leading-5 text-[#073f3b]">Diabetic life</span>
        </div>
        {nodes.map((node, index) => (
          <div key={node} className={`absolute ${positions[index]} rounded-2xl border border-white/12 bg-white/10 px-3 py-2 text-center text-xs font-black text-white shadow-lg shadow-black/20`}>
            {node}
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-sm font-bold text-white/65">Records, reminders, local help, and compute have to coordinate around the person.</p>
    </div>
  )
}
