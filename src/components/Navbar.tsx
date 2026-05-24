import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { LogoMark } from './primitives/LogoMark'
import { AppleButton } from './primitives/AppleButton'

const NAV_LINKS = ['Solutions', 'Pricing', 'Blog', 'Documentation', 'Careers']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 py-3'
          : 'py-5'
      }`}
    >
      <div className="max-w-[1080px] mx-auto px-7 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <LogoMark className="w-7 h-7 drop-shadow-[0_0_8px_rgba(61,129,227,0.7)]" />
          <span className="text-white font-bold text-lg tracking-tight hidden sm:block">Aura</span>
        </div>

        {/* Center: Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link}
              href="#"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: 'easeOut' }}
              className="text-white/70 text-sm font-medium hover:text-white transition-colors duration-200"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Right: CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <AppleButton />
          </div>
          <button
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden overflow-hidden bg-black/95 backdrop-blur-2xl border-t border-white/10"
      >
        <div className="flex flex-col gap-5 px-7 py-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white/70 text-lg font-medium hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="pt-2">
            <AppleButton full />
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}
