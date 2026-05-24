import { motion } from 'motion/react'
import { SectionEyebrow } from './primitives/SectionEyebrow'

const CHIPS = [
  'Meeting requests',
  'Action items',
  'FYI threads',
  'Newsletters',
  'Receipts & invoices',
  'Notifications',
  'VIP senders',
  'Follow-ups',
  'Deadlines',
  'Promotions',
]

const TRIAGE_CATEGORIES = [
  {
    label: 'Needs your reply',
    color: '#14D8F7',
    count: 3,
    items: ['Sarah Chen — Q3 roadmap sync', 'Board Meeting prep — Alex', 'Contract review due Friday'],
  },
  {
    label: 'FYI / No action',
    color: '#A78BFA',
    count: 7,
    items: ['GitHub — PR #142 merged', 'Stripe — Invoice paid', 'Notion — Page shared with you'],
  },
  {
    label: 'Newsletters & Digests',
    color: '#F59E0B',
    count: 14,
    items: ['Morning Brew — Daily digest', 'Lenny\'s Newsletter #82', 'Product Hunt — Top posts'],
  },
]

export function FeatureTriage() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-[1080px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionEyebrow label="Smart Triage" tag="AI-Powered" />
            <h2 className="mt-4 text-[clamp(28px,4.5vw,48px)] font-semibold tracking-[-0.035em] leading-[1.05] text-white">
              Every email,{' '}
              <span className="text-white/40">instantly understood.</span>
            </h2>
            <p className="mt-5 text-white/50 text-[17px] leading-relaxed">
              Aura reads sender context, thread history, and message intent to
              route every email to the right bucket — before you even open it.
            </p>

            <div className="flex flex-wrap gap-2 mt-7">
              {CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="text-[12.5px] text-white/60 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.025] hover:border-[rgba(20,216,247,0.4)] hover:text-white transition-all duration-300 cursor-default"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: triage card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="liquid-glass rounded-[20px] p-5"
          >
            <p className="text-[12px] text-white/35 mb-4 font-medium tracking-wide uppercase">
              Aura has sorted your 24 new messages
            </p>
            {TRIAGE_CATEGORIES.map((cat) => (
              <div
                key={cat.label}
                className="p-3 rounded-[12px] mb-2.5 last:mb-0"
                style={{ background: `rgba(${cat.color === '#14D8F7' ? '20,216,247' : cat.color === '#A78BFA' ? '167,139,250' : '245,158,11'},0.05)`, border: `1px solid ${cat.color}20` }}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
                  <span className="text-[13px] font-semibold text-white flex-1">{cat.label}</span>
                  <span className="text-[12px] text-white/30">{cat.count}</span>
                </div>
                {cat.items.map((item) => (
                  <p key={item} className="text-[12px] text-white/50 pl-[18px] py-1 border-b border-white/[0.04] last:border-0">
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
