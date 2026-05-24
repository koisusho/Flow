export function MacBar() {
  const menuItems = ['Apple', 'Aura', 'File', 'Edit', 'View', 'Mailbox', 'Message', 'Window', 'Help']
  const rightItems = ['Wed 9:41 AM', '●●●']

  return (
    <div className="h-10 relative z-10 bg-black/40 backdrop-blur-xl border-t border-b border-white/[0.06]">
      <div className="max-w-[1080px] mx-auto px-7 h-full flex items-center justify-between text-[12px]">
        <div className="flex items-center gap-[18px] text-white/80">
          {menuItems.map((item, i) => (
            <span
              key={item}
              className={`cursor-default hover:text-white transition-colors ${
                i === 0 ? 'font-bold' : i === 1 ? 'font-semibold' : 'text-white/60'
              }`}
            >
              {item === 'Apple' ? (
                <svg viewBox="0 0 384 512" className="w-3 h-3 fill-current" aria-label="Apple">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
              ) : (
                item
              )}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-white/40">
          <span className="hidden sm:block">{rightItems[0]}</span>
          <span className="text-white/20 tracking-widest text-[8px]">⌘⌥⇧</span>
        </div>
      </div>
    </div>
  )
}
