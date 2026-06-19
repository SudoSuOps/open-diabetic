type IconCardProps = {
  title: string
  body?: string
  index?: number
  dark?: boolean
}

export function IconCard({ title, body, index, dark = false }: IconCardProps) {
  return (
    <article className={`rounded-3xl border p-6 shadow-sm ${dark ? 'border-white/15 bg-white/8 text-white' : 'border-slate-200 bg-white text-slate-950'}`}>
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f2b632] text-base font-black text-[#073f3b]" aria-hidden="true">
        {index ? String(index).padStart(2, '0') : '◆'}
      </div>
      <h3 className="text-xl font-bold tracking-tight">{title}</h3>
      {body ? <p className={`mt-3 leading-7 ${dark ? 'text-white/78' : 'text-slate-700'}`}>{body}</p> : null}
    </article>
  )
}
