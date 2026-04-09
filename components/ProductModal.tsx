'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import type { ProductType } from '@/app/page'

interface Props {
  product: ProductType
  onClose: () => void
}

const CONTENT = {
  vaidyabot: {
    name: 'VaidyaBot',
    tagline: 'Healthcare, Finally Speaks Your Language.',
    body: [
      'VaidyaBot is an AI-powered healthcare assistant built for the way India actually uses technology — on WhatsApp, in Hindi and English, without friction.',
      "It doesn't replace doctors. It makes reaching them effortless. Instant appointment booking, symptom triage, clinic communication — all through a conversation.",
      "For clinics, VaidyaBot is a front-desk that never sleeps. For patients, it's healthcare that finally feels human.",
    ],
    stats: [
      { value: '24/7', sub: 'Availability' },
      { value: 'Multi', sub: 'lingual' },
      { value: 'WA',   sub: 'Native' },
      { value: 'May',  sub: '2026' },
    ],
    cta: 'Join the Waitlist',
    ctaHref: 'mailto:hello@kayborg.ai',
    statusLabel: 'Launching · May 2026',
    statusColor: 'rgba(180,255,200,0.55)',
    statusDot:   'rgba(180,255,200,0.7)',
    accentLine: 'rgba(180,255,200,0.15)',
    taglineColor: 'rgba(180,255,210,0.55)',
  },
  admind: {
    name: 'AdMind™',
    tagline: 'The Model That Thinks in Campaigns.',
    body: [
      'AdMind™ is a large language model purpose-built for the advertising industry — not a general model fine-tuned on ads, but an architecture designed from the ground up to understand brands, audiences, intent, and persuasion.',
      "It doesn't just generate copy. It understands context, campaign structure, media channels, and conversion psychology. It's the first AI that thinks the way great ad people think.",
      "Built for agencies, brands, and media companies who refuse to let generic AI define their creative output.",
    ],
    stats: [
      { value: 'Ent.',  sub: 'Grade' },
      { value: 'Ad',    sub: 'Native' },
      { value: 'Multi', sub: 'format' },
      { value: '—',     sub: 'Soon' },
    ],
    cta: 'Express Interest',
    ctaHref: 'mailto:hello@kayborg.ai',
    statusLabel: 'Coming Soon',
    statusColor: 'rgba(200,180,255,0.45)',
    statusDot:   'rgba(200,180,255,0.6)',
    accentLine: 'rgba(200,180,255,0.12)',
    taglineColor: 'rgba(210,195,255,0.5)',
  },
} satisfies Record<ProductType, unknown>

export default function ProductModal({ product, onClose }: Props) {
  const c = CONTENT[product] as (typeof CONTENT)[ProductType]

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <>
      {/* Backdrop */}
      <motion.div
        key="pm-backdrop"
        className="pm-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        onClick={onClose}
        aria-hidden
      />

      {/* Panel */}
      <motion.div
        key="pm-panel"
        className="pm-panel"
        role="dialog"
        aria-modal
        aria-label={`${c.name} details`}
        initial={{ opacity: 0, scale: 0.97, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 16 }}
        transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="pm-close"
          aria-label="Close"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Scrollable content */}
        <div className="pm-scroll">
          <div className="pm-inner">

            {/* Status */}
            <div className="pm-status">
              <span
                className="pm-status__dot"
                style={{ background: c.statusDot, boxShadow: `0 0 8px ${c.statusDot}` }}
              />
              <span className="pm-status__text" style={{ color: c.statusColor }}>
                {c.statusLabel}
              </span>
            </div>

            {/* Name */}
            <h2 className="pm-name">{c.name}</h2>

            {/* Tagline */}
            <p className="pm-tagline" style={{ color: c.taglineColor }}>{c.tagline}</p>

            {/* Accent line */}
            <div className="pm-line" style={{ background: `linear-gradient(90deg, ${c.accentLine}, transparent)` }} />

            {/* Body paragraphs */}
            <div className="pm-body">
              {c.body.map((para, i) => (
                <p key={i} className="pm-body__para">{para}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="pm-stats">
              {c.stats.map((s, i) => (
                <div key={i} className="pm-stat">
                  <span className="pm-stat__value">{s.value}</span>
                  <span className="pm-stat__sub">{s.sub}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href={c.ctaHref} className="pm-cta">
              {c.cta} →
            </a>
          </div>
        </div>
      </motion.div>

      <style>{`
        .pm-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.72);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 300;
        }

        .pm-panel {
          position: fixed;
          inset: clamp(16px, 3vw, 48px);
          background: #0D0D0D;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 4px;
          z-index: 400;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* Close button — top-right fixed within panel */
        .pm-close {
          position: absolute;
          top: 24px; right: 24px;
          z-index: 10;
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(8px);
          color: rgba(255,255,255,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
          flex-shrink: 0;
        }
        .pm-close:hover {
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.9);
          border-color: rgba(255,255,255,0.18);
        }

        .pm-scroll {
          flex: 1;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.08) transparent;
        }
        .pm-scroll::-webkit-scrollbar { width: 3px; }
        .pm-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }

        .pm-inner {
          padding: clamp(48px, 8vh, 96px) clamp(24px, 6vw, 80px);
          max-width: 760px;
        }

        /* Status */
        .pm-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 28px;
        }
        .pm-status__dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
          animation: glowPulse 2s ease-in-out infinite;
        }
        .pm-status__text {
          font-family: var(--font-dm-mono);
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        /* Name */
        .pm-name {
          font-family: var(--font-syne);
          font-weight: 800;
          font-size: clamp(48px, 8vw, 108px);
          letter-spacing: -0.045em;
          line-height: 0.9;
          color: rgba(255,255,255,0.94);
          margin: 0 0 clamp(14px, 2.5vh, 24px);
        }

        /* Tagline */
        .pm-tagline {
          font-family: var(--font-instrument-serif);
          font-style: italic;
          font-size: clamp(16px, 2.2vw, 26px);
          line-height: 1.3;
          margin: 0 0 clamp(32px, 5vh, 52px);
        }

        /* Accent line */
        .pm-line {
          height: 1px;
          margin-bottom: clamp(32px, 5vh, 52px);
          opacity: 0.8;
        }

        /* Body */
        .pm-body { margin-bottom: clamp(40px, 6vh, 64px); }
        .pm-body__para {
          font-family: var(--font-dm-sans);
          font-weight: 300;
          font-size: clamp(13px, 1.4vw, 16px);
          color: rgba(255,255,255,0.42);
          line-height: 1.82;
          margin-bottom: 20px;
        }
        .pm-body__para:last-child { margin-bottom: 0; }

        /* Stats */
        .pm-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          padding: clamp(18px, 2.5vh, 28px);
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 3px;
          margin-bottom: clamp(36px, 5vh, 56px);
        }
        .pm-stat {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
        }
        .pm-stat__value {
          font-family: var(--font-syne);
          font-weight: 800;
          font-size: clamp(18px, 2.8vw, 32px);
          color: rgba(255,255,255,0.82);
          letter-spacing: -0.03em;
        }
        .pm-stat__sub {
          font-family: var(--font-dm-mono);
          font-size: 8px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
        }
        @media (max-width: 480px) {
          .pm-stats { grid-template-columns: repeat(2, 1fr); }
        }

        /* CTA */
        .pm-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-dm-sans);
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.02em;
          color: #0A0A0A;
          background: rgba(255,255,255,0.9);
          padding: 12px 24px;
          border-radius: 2px;
          text-decoration: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .pm-cta:hover {
          opacity: 0.8;
          transform: translateY(-2px);
        }
        @media (prefers-reduced-motion: reduce) {
          .pm-status__dot { animation: none; }
        }
      `}</style>
    </>
  )
}
