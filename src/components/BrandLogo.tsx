type BrandLogoProps = {
  variant?: 'horizontal' | 'stacked'
  tone?: 'standard' | 'inverse'
  className?: string
  markClassName?: string
  textClassName?: string
}

export function BrandLogo({
  variant = 'horizontal',
  tone = 'standard',
  className = '',
  markClassName = '',
  textClassName = '',
}: BrandLogoProps) {
  const isStacked = variant === 'stacked'
  const openColor = tone === 'inverse' ? 'text-[#d8f3eb]' : 'text-[#073f3b]'
  const diabeticColor = tone === 'inverse' ? 'text-[#f7d37a]' : 'text-[#c47b00]'

  return (
    <span className={`inline-flex ${isStacked ? 'flex-col items-start gap-3' : 'items-center gap-3'} ${className}`}>
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#f2b632]/55 bg-[#fff3c4] text-2xl shadow-sm shadow-amber-900/10 ${markClassName}`}
        aria-hidden="true"
      >
        🐝
      </span>
      <span className={`leading-none tracking-tight ${textClassName}`}>
        <span className={`font-black ${openColor}`}>Open</span>
        <span className={`font-black ${diabeticColor}`}>Diabetic</span>
      </span>
    </span>
  )
}
