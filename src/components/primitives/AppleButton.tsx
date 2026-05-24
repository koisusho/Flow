import { ChevronRight } from 'lucide-react'
import { AppleLogo } from './AppleLogo'

interface Props { label?: string; full?: boolean }
export function AppleButton({ label = 'Download Aura', full }: Props) {
  return (
    <button
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98] hover:shadow-[0_8px_30px_-6px_rgba(255,255,255,0.4)]${full ? ' w-full' : ''}`}
    >
      <AppleLogo className="w-4 h-4" />
      {label}
      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  )
}
