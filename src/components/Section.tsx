import type { ReactNode } from 'react'

type SectionProps = {
  eyebrow?: string
  title: string
  copy?: string
  children?: ReactNode
  id?: string
  tone?: 'light' | 'white' | 'dark' | 'soft'
}

export function Section({ eyebrow, title, copy, children, id, tone = 'light' }: SectionProps) {
  const toneClass = {
    light: 'bg-[#f8fbf7]',
    white: 'bg-white',
    dark: 'bg-[#073f3b] text-white',
    soft: 'bg-[#eef8f3]',
  }[tone]

  return (
    <section id={id} className={`${toneClass} px-5 py-16 sm:px-8 lg:py-24`}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          {eyebrow ? <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b98211]">{eyebrow}</p> : null}
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
          {copy ? <p className="mt-5 text-lg leading-8 text-current/75">{copy}</p> : null}
        </div>
        {children}
      </div>
    </section>
  )
}
