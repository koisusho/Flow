interface Props { label: string; tag?: string }
export function SectionEyebrow({ label, tag }: Props) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-white" />
      <span className="text-sm text-white/60 font-medium">{label}</span>
      {tag && (
        <span className="px-2 py-0.5 rounded-full border border-white/10 text-white/50 text-xs">
          {tag}
        </span>
      )}
    </div>
  )
}
