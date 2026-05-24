import { useState } from 'react'
import { motion } from 'motion/react'
import { BrainCircuit, Star, Sparkles, Target, ArrowUpRight } from 'lucide-react'
import { SectionEyebrow } from './primitives/SectionEyebrow'

interface CardData {
  id: number
  icon: React.ReactNode
  title: string
  shortDesc: string
  badge: string
  badgeColor: string
  backDesc: string
  capabilities: string[]
}

const CARDS: CardData[] = [
  {
    id: 1,
    icon: <BrainCircuit className="w-6 h-6" />,
    title: 'Smart Triage',
    shortDesc: 'Understands intent, routes noise away',
    badge: 'Active',
    badgeColor: '#14D8F7',
    backDesc: 'AI that reads your email like you do — understanding context, tone, and urgency to route every message perfectly.',
    capabilities: [
      'Reads sender context and history',
      'Auto-categorizes by urgency',
      'Flags time-sensitive threads',
      'Learns your preferences over time',
    ],
  },
  {
    id: 2,
    icon: <Star className="w-6 h-6" />,
    title: 'Priority Inbox',
    shortDesc: 'Surfaces what needs your attention now',
    badge: 'Live',
    badgeColor: '#34D399',
    backDesc: 'A dynamic inbox that reshuffles itself in real time — VIP senders always rise to the top, deadlines never slip.',
    capabilities: [
      'VIP sender detection',
      'Deadline-aware sorting',
      'Meeting request priority boost',
      'Follow-up reminders',
    ],
  },
  {
    id: 3,
    icon: <Sparkles className="w-6 h-6" />,
    title: 'AI Compose',
    shortDesc: "Drafts replies with your voice",
    badge: 'Beta',
    badgeColor: '#A78BFA',
    backDesc: 'Replies that sound exactly like you wrote them — because Aura has learned your tone, vocabulary, and style.',
    capabilities: [
      'Tone matching to your style',
      'Context-aware suggestions',
      'One-click full drafts',
      'Multi-language support',
    ],
  },
  {
    id: 4,
    icon: <Target className="w-6 h-6" />,
    title: 'Inbox Zero',
    shortDesc: 'Reach zero every day, automatically',
    badge: 'New',
    badgeColor: '#F59E0B',
    backDesc: 'The inbox zero you always dreamed of — automated, painless, and sustainable without any manual effort.',
    capabilities: [
      'Auto-archive newsletters',
      'Smart unsubscribe suggestions',
      'Scheduled digest summaries',
      'Quiet hours enforcement',
    ],
  },
]

function FeatureCard({ card }: { card: CardData }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={`flip-card h-[240px] cursor-pointer${flipped ? ' flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && setFlipped(!flipped)}
      aria-label={`${card.title} - click to flip`}
    >
      <div className="flip-card-inner w-full h-full relative">
        {/* Front */}
        <div className="flip-card-front absolute inset-0 liquid-glass rounded-[20px] p-5 flex flex-col">
          <div
            className="w-11 h-11 rounded-[12px] flex items-center justify-center mb-4 transition-all duration-400"
            style={{
              background: `rgba(${card.badgeColor === '#14D8F7' ? '20,216,247' : card.badgeColor === '#34D399' ? '52,211,153' : card.badgeColor === '#A78BFA' ? '167,139,250' : '245,158,11'},0.1)`,
              border: `1px solid ${card.badgeColor}30`,
              color: card.badgeColor,
            }}
          >
            {card.icon}
          </div>
          <h3 className="text-[17px] font-semibold text-white mb-1.5">{card.title}</h3>
          <p className="text-[13px] text-white/50 leading-relaxed flex-1">{card.shortDesc}</p>
          <div className="flex items-center justify-between mt-4">
            <span
              className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
              style={{
                color: card.badgeColor,
                background: `${card.badgeColor}15`,
                border: `1px solid ${card.badgeColor}30`,
              }}
            >
              {card.badge}
            </span>
            <span className="text-[11px] text-white/25">Tap to learn more</span>
          </div>
        </div>

        {/* Back */}
        <div
          className="flip-card-back absolute inset-0 rounded-[20px] p-5 flex flex-col"
          style={{
            background: `linear-gradient(135deg, ${card.badgeColor}18 0%, rgba(0,0,0,0.7) 100%)`,
            border: `1px solid ${card.badgeColor}35`,
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
          }}
        >
          <h3 className="text-[15px] font-semibold text-white mb-2">{card.title}</h3>
          <p className="text-[12.5px] text-white/60 leading-relaxed mb-4">{card.backDesc}</p>
          <ul className="flex-1 space-y-2">
            {card.capabilities.map((cap) => (
              <li key={cap} className="flex items-start gap-2 text-[12.5px] text-white/75">
                <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: card.badgeColor }} />
                {cap}
              </li>
            ))}
          </ul>
          <a
            href="#"
            onClick={(e) => e.stopPropagation()}
            className="mt-3 inline-flex items-center gap-1 text-[12px] font-medium transition-opacity hover:opacity-80"
            style={{ color: card.badgeColor }}
          >
            Learn more <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}

export function FeatureCards() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-[1080px] mx-auto">
        <div className="mb-10">
          <SectionEyebrow label="AI Agents" />
          <h2 className="mt-4 text-[clamp(28px,4.5vw,48px)] font-semibold tracking-[-0.035em] leading-[1.05] text-white">
            Four agents,{' '}
            <span className="text-white/40">working in concert.</span>
          </h2>
          <p className="mt-4 max-w-lg text-white/50 text-[17px] leading-relaxed">
            Each agent handles a distinct layer of your inbox. Together, they
            make email effortless.{' '}
            <span className="text-white/30">Tap any card to explore.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <FeatureCard card={card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
