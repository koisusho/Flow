import { motion } from 'motion/react'
import { ChevronRight } from 'lucide-react'
import { AppleButton } from './primitives/AppleButton'

export function FinalCTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-24 text-center"
      >
        {/* Radial glow overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              'radial-gradient(600px circle at 50% 0%, rgba(255,255,255,0.15), transparent 70%)',
          }}
        />

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
            Close the tabs.
            <br />
            Open your day.
          </h2>

          <p className="mt-6 text-white/60 max-w-md mx-auto text-sm leading-[1.6]">
            Join thousands of builders, founders, and operators who treat email like a tool —
            not an obligation.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <AppleButton label="Download Aura" />
            <button className="group inline-flex items-center gap-2 rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 hover:bg-white/5 transition-colors">
              Talk to sales
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Footer strip */}
      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
        <p>© 2025 Aura. All rights reserved.</p>
        <div className="flex gap-6">
          {['Privacy', 'Terms', 'Security', 'Status'].map((link) => (
            <a key={link} href="#" className="hover:text-white/60 transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
