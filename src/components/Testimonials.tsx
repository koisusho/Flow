import { motion } from 'motion/react'
import { SectionEyebrow } from './primitives/SectionEyebrow'

const TESTIMONIALS = [
  {
    quote:
      'Aura gave our leadership team four hours of their week back. It reads like email from the future.',
    name: 'Parker Wilf',
    role: 'Group Product Manager',
    company: 'MERCURY',
  },
  {
    quote:
      'The command palette alone has changed how I process messages. I can\'t imagine going back to a traditional client.',
    name: 'Andrew von Rosenbach',
    role: 'Senior Engineering Program Manager',
    company: 'COHERE',
  },
  {
    quote:
      'Triage that actually understands context. Our team stopped dreading Monday morning inboxes.',
    name: 'Mathies Christensen',
    role: 'Engineering Manager',
    company: 'LUNAR',
  },
]

export function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
      <div className="mb-12 text-center">
        <SectionEyebrow label="Testimonials" />
        <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight">
          Loved by the teams<br />who move fast.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="liquid-glass rounded-2xl p-6"
          >
            <blockquote className="text-sm text-white/80 leading-[1.6]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 pt-5 border-t border-white/10">
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-white/50 mt-0.5">{t.role}</p>
              <p className="text-xs text-white font-semibold tracking-wide uppercase mt-1">
                {t.company}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
