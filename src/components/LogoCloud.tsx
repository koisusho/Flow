import { motion } from 'motion/react'

const LOGOS = [
  { name: 'Figma', letter: 'F' },
  { name: 'Notion', letter: 'N' },
  { name: 'Slack', letter: 'S' },
  { name: 'Linear', letter: 'L' },
  { name: 'GitHub', letter: 'G' },
  { name: 'Stripe', letter: '₹' },
]

export function LogoCloud() {
  return (
    <section className="relative z-10 py-16 px-6 border-y border-white/[0.06]">
      <div className="max-w-[1080px] mx-auto">
        <p className="text-center text-[12px] uppercase tracking-[0.2em] text-white/25 mb-10 font-medium">
          Trusted by teams at
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center"
        >
          {LOGOS.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex items-center gap-2.5 opacity-30 hover:opacity-60 transition-opacity duration-300 cursor-default group"
            >
              <div className="w-7 h-7 rounded-[8px] bg-white/10 flex items-center justify-center text-[13px] font-bold text-white group-hover:bg-white/15 transition-colors">
                {logo.letter}
              </div>
              <span className="text-[14px] font-semibold text-white hidden sm:block">{logo.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
