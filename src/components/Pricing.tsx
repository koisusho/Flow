import { useState } from 'react'

const CHECK_SVG = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7L5.5 10.5L12 3.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

interface Plan {
  tier: string
  monthly: string
  yearly: string
  desc: string
  features: string[]
  pro?: boolean
}

const PLANS: Plan[] = [
  {
    tier: 'Free',
    monthly: 'Free',
    yearly: 'Free',
    desc: 'For creators taking their first steps with Aura.',
    features: [
      'Up to 3 projects in the cloud',
      'Image export up to 1080p',
      'Basic editing tools',
      'Free templates and icons',
      'Access via web and mobile app',
    ],
  },
  {
    tier: 'Standard',
    monthly: '$9.99/m',
    yearly: '$99.99/y',
    desc: 'For freelancers and small teams who need more freedom and flexibility.',
    features: [
      'Up to 50 projects in the cloud',
      'Export up to 4K',
      'Advanced editing toolkit',
      'Team collaboration (up to 5 members)',
      'Access to premium template library',
    ],
  },
  {
    tier: 'Pro',
    monthly: '$19.99/m',
    yearly: '$199.99/y',
    desc: 'For studios, agencies, and professional creators working with brands.',
    features: [
      'Unlimited projects',
      'Export up to 8K + animations',
      'AI-powered content generation tools',
      'Unlimited team members',
      'Brand customization',
    ],
    pro: true,
  },
]

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section className="c3-pricing-section">
      {/* Pricing noise filter */}
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          <filter id="c3-noise-pricing">
            <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.075" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" result="noise" />
            <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
          </filter>
        </defs>
      </svg>

      {/* Watermark headline */}
      <div className="c3-watermark-container">
        <div className="c3-watermark-main" style={{ filter: 'url(#c3-noise-pricing)' }}>
          <span className="c3-watermark-line-1">Your email.</span>
          <span className="c3-watermark-line-2">Revitalized</span>
        </div>
      </div>

      {/* Billing toggle */}
      <div className="c3-toggle-wrap">
        <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)' }}>Yearly</span>
        <button
          className={`c3-toggle${yearly ? ' active' : ''}`}
          onClick={() => setYearly((y) => !y)}
          aria-label="Toggle yearly billing"
        >
          <span className="c3-toggle-knob" />
        </button>
      </div>

      {/* Plan cards */}
      <div className="c3-grid">
        {PLANS.map((plan) => (
          <div key={plan.tier} className={`c3-card${plan.pro ? ' c3-card-pro' : ''}`}>
            <div className="c3-tier-small">{plan.tier}</div>
            <div className="c3-tier-large">{yearly ? plan.yearly : plan.monthly}</div>
            <div className="c3-desc">{plan.desc}</div>
            <ul className="c3-list">
              {plan.features.map((f) => (
                <li key={f}>
                  <span className="c3-check">{CHECK_SVG}</span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="c3-btn">Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  )
}
