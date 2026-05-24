import { motion } from 'motion/react'
import { AppleButton } from './primitives/AppleButton'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center pt-16 md:pt-28 pb-20 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-bold tracking-[-0.04em] leading-[0.92] text-[clamp(48px,9vw,96px)]"
      >
        <span className="block text-white">Your email.</span>
        <span
          className="block animate-shiny"
          style={{
            backgroundImage:
              'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #14D8F7 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            WebkitTextFillColor: 'transparent',
            filter: 'url(#c3-noise)',
          }}
        >
          Revitalized.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mt-7 max-w-[520px] text-white/55 text-[clamp(16px,2vw,18px)] leading-relaxed"
      >
        Aura uses AI to triage, prioritize, and reply to your inbox — so you
        can focus on what actually matters.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mt-9 flex flex-col items-center gap-3"
      >
        <div className="flex gap-3 flex-wrap justify-center">
          <AppleButton label="Download Aura" />
          <button className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 text-white font-medium text-sm px-5 py-3 transition-all hover:bg-white/10 hover:border-white/30 active:scale-[0.98]">
            Watch Demo
          </button>
        </div>
        <p className="text-xs text-white/30 mt-1">
          Download for{' '}
          <a href="#" className="underline underline-offset-2 hover:text-white/60 transition-colors">
            Intel
          </a>{' '}
          /{' '}
          <a href="#" className="underline underline-offset-2 hover:text-white/60 transition-colors">
            Apple Silicon
          </a>
        </p>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: 'bob 2.4s ease-in-out infinite' }}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase text-white/30">Scroll</span>
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" className="text-white/20">
          <rect x="1" y="1" width="12" height="18" rx="6" stroke="currentColor" strokeWidth="1.5" />
          <rect x="6" y="4" width="2" height="4" rx="1" fill="currentColor" />
        </svg>
      </motion.div>

      <style>{`
        @keyframes bob {
          0%, 100% { transform: translate(-50%, 0); opacity: 0.6; }
          50% { transform: translate(-50%, 7px); opacity: 1; }
        }
      `}</style>
    </section>
  )
}
