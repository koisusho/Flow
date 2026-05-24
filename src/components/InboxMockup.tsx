import { motion } from 'motion/react'
import { SectionEyebrow } from './primitives/SectionEyebrow'

const MESSAGES = [
  {
    id: 1,
    from: 'Sarah Chen',
    initials: 'SC',
    subject: 'Q3 Product Roadmap Review',
    preview: 'Hey, can we sync on the feature prioritization before...',
    time: '9:41 AM',
    unread: true,
    active: true,
    tag: 'Priority',
  },
  {
    id: 2,
    from: 'Design Team',
    initials: 'DT',
    subject: 'New brand assets ready',
    preview: 'The updated Figma file is now live with all the new...',
    time: '8:23 AM',
    unread: true,
    active: false,
    tag: null,
  },
  {
    id: 3,
    from: 'Alex Rivera',
    initials: 'AR',
    subject: 'Re: Budget approval needed',
    preview: 'I reviewed the proposal and have a few questions...',
    time: 'Yesterday',
    unread: false,
    active: false,
    tag: null,
  },
  {
    id: 4,
    from: 'GitHub',
    initials: 'GH',
    subject: '[aura-app] PR #142 merged',
    preview: 'Your pull request "feat: smart triage v2" has been...',
    time: 'Yesterday',
    unread: false,
    active: false,
    tag: null,
  },
  {
    id: 5,
    from: 'Stripe',
    initials: 'ST',
    subject: 'Invoice #2847 paid',
    preview: '$4,200.00 has been successfully processed for...',
    time: 'Mon',
    unread: false,
    active: false,
    tag: null,
  },
]

const SIDEBAR_ITEMS = [
  { label: 'Inbox', count: 12, active: true },
  { label: 'Priority', count: 3, active: false },
  { label: 'Sent', count: null, active: false },
  { label: 'Drafts', count: 2, active: false },
  { label: 'Snoozed', count: null, active: false },
  { label: 'Archive', count: null, active: false },
]

const LABELS = [
  { label: 'Work', color: '#14D8F7' },
  { label: 'Personal', color: '#A78BFA' },
  { label: 'Finance', color: '#34D399' },
]

export function InboxMockup() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-[1080px] mx-auto">
        <div className="mb-10">
          <SectionEyebrow label="Intelligent Inbox" tag="Live" />
          <h2 className="mt-4 text-[clamp(28px,4.5vw,48px)] font-semibold tracking-[-0.035em] leading-[1.05] text-white">
            Your inbox, finally{' '}
            <span className="text-white/40">under control.</span>
          </h2>
          <p className="mt-4 max-w-lg text-white/50 text-[17px] leading-relaxed">
            Aura reads every message and surfaces exactly what needs your
            attention — burying the noise, elevating the signal.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[20px] overflow-hidden border border-white/[0.08] bg-[rgba(14,16,20,0.85)] backdrop-blur-[30px]"
        >
          {/* Title bar */}
          <div className="h-[42px] flex items-center px-4 border-b border-white/[0.06] relative">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <span className="absolute left-1/2 -translate-x-1/2 text-[12px] text-white/40">
              Aura — Inbox (12)
            </span>
          </div>

          {/* Body */}
          <div className="grid grid-template-cols-[3fr_4fr_5fr] md:grid-cols-[200px_1fr_1.4fr] h-[520px]">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col border-r border-white/[0.06] bg-black/30 p-4 gap-1">
              <button className="flex items-center gap-2 bg-white text-black text-[12.5px] font-semibold px-3 py-2 rounded-[9px] mb-3 cursor-pointer hover:bg-[#14D8F7] transition-colors w-full">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Compose
              </button>
              {SIDEBAR_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 text-[13px] px-2.5 py-2 rounded-[8px] cursor-pointer transition-colors ${
                    item.active
                      ? 'bg-[rgba(20,216,247,0.1)] text-white'
                      : 'text-white/40 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="flex-1">{item.label}</span>
                  {item.count && (
                    <span className={`text-[11px] ${item.active ? 'text-[#14D8F7]' : 'text-white/30'}`}>
                      {item.count}
                    </span>
                  )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-white/[0.06]">
                <p className="text-[10px] uppercase tracking-[0.12em] text-white/25 px-2.5 mb-2">Labels</p>
                {LABELS.map((l) => (
                  <div key={l.label} className="flex items-center gap-2.5 px-2.5 py-1.5 text-[13px] text-white/40">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: l.color }} />
                    {l.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Message list */}
            <div className="border-r border-white/[0.06] flex flex-col overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3.5 border-b border-white/[0.06] text-white/30 text-[13px]">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="m21 21-4.35-4.35" />
                </svg>
                <span>Search mail…</span>
              </div>
              <div className="flex-1 overflow-y-auto">
                {MESSAGES.map((msg) => (
                  <div
                    key={msg.id}
                    className={`px-4 py-3.5 border-b border-white/[0.03] cursor-pointer transition-colors ${
                      msg.active
                        ? 'bg-[rgba(20,216,247,0.06)]'
                        : 'hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className={`text-[13.5px] font-semibold text-white flex items-center gap-1.5 ${msg.unread ? '' : 'opacity-70'}`}>
                        {msg.unread && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#14D8F7] shadow-[0_0_8px_#14D8F7] flex-shrink-0" />
                        )}
                        {msg.from}
                      </span>
                      <span className="text-[11px] text-white/25">{msg.time}</span>
                    </div>
                    <p className="text-[12.5px] text-white/70 mb-0.5">{msg.subject}</p>
                    <p className="text-[12px] text-white/30 truncate">{msg.preview}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reader pane */}
            <div className="flex flex-col overflow-hidden">
              {/* Toolbar */}
              <div className="flex items-center gap-1 px-4 py-3 border-b border-white/[0.06]">
                {['↩', '↪', '⋯', '🗑', '📁'].map((icon) => (
                  <button key={icon} className="w-8 h-8 rounded-[7px] flex items-center justify-center text-white/35 hover:bg-white/[0.06] hover:text-white transition-colors text-sm">
                    {icon}
                  </button>
                ))}
                <div className="flex-1" />
                <button className="w-8 h-8 rounded-[7px] flex items-center justify-center text-white/35 hover:bg-white/[0.06] hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </div>

              {/* Header */}
              <div className="px-5 py-4 border-b border-white/[0.06]">
                <h3 className="text-[17px] font-semibold text-white mb-3">
                  Q3 Product Roadmap Review
                </h3>
                <div className="flex items-center gap-2.5">
                  <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-[#14D8F7] to-[#0B2551] flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0">
                    SC
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-semibold text-white">Sarah Chen</p>
                    <p className="text-[11.5px] text-white/35">sarah.chen@acmecorp.io → me</p>
                  </div>
                  <span className="text-[11px] px-3 py-1 rounded-full bg-[rgba(20,216,247,0.12)] text-[#14D8F7] flex-shrink-0">
                    Priority
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto px-5 py-4 text-[13.5px] text-white/70 leading-relaxed">
                {/* AI Summary */}
                <div className="flex gap-2.5 p-3 rounded-[12px] bg-[rgba(20,216,247,0.05)] border border-[rgba(20,216,247,0.15)] mb-4">
                  <svg className="w-4 h-4 text-[#14D8F7] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                  </svg>
                  <div>
                    <p className="text-[11px] font-bold text-[#14D8F7] uppercase tracking-[0.06em] mb-1">Aura Summary</p>
                    <p className="text-[12.5px] text-white/70">Sarah wants to sync on feature prioritization for Q3 before the Thursday board meeting. Action required by Wed 5 PM.</p>
                  </div>
                </div>

                <p className="mb-3">Hi,</p>
                <p className="mb-3">
                  Can we find 30 minutes this week to walk through the Q3 roadmap together? I want to make sure we're aligned on the feature prioritization before Thursday's board presentation.
                </p>
                <p className="mb-3">
                  I've put together a draft in Notion but would love your input on the AI triage features — specifically around the confidence scoring model. Let me know what works.
                </p>
                <p className="mb-3">Best,<br />Sarah</p>

                {/* Attachment */}
                <div className="inline-flex items-center gap-2 text-[12.5px] text-white/60 px-3 py-2 rounded-[9px] border border-white/[0.08] bg-white/[0.02] mt-2">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.47" />
                  </svg>
                  Q3_Roadmap_Draft_v2.pdf
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
