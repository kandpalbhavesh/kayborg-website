'use client'

import { useEffect, useCallback } from 'react'
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
      "It doesn\u2019t replace doctors. It makes reaching them effortless. Instant appointment booking, symptom triage, clinic communication \u2014 all through a conversation.",
      "For clinics, VaidyaBot is a front-desk that never sleeps. For patients, it\u2019s healthcare that finally feels human.",
    ],
    stats: [
      { value: '24/7', sub: 'Availability' },
      { value: 'Multi', sub: 'lingual' },
      { value: 'WA',   sub: 'Native' },
      { value: 'May',  sub: '2026' },
    ],
    cta: 'Join the Waitlist',
    ctaHref: 'mailto:hello@kayborg.ai',
    statusLabel: 'Launching \u00b7 May 2026',
    statusColor: 'rgba(180,255,200,0.55)',
    statusDot:   'rgba(180,255,200,0.7)',
    accentLine:  'rgba(180,255,200,0.15)',
    taglineColor:'rgba(180,255,210,0.5)',
  },
  admind: {
    name: 'AdMind\u2122',
    tagline: 'The Model That Thinks in Campaigns.',
    body: [
      'AdMind\u2122 is a large language model purpose-built for the advertising industry \u2014 not a general model fine-tuned on ads, but an architecture designed from the ground up to understand brands, audiences, intent, and persuasion.',
      "It doesn\u2019t just generate copy. It understands context, campaign structure, media channels, and conversion psychology. It\u2019s the first AI that thinks the way great ad people think.",
      "Built for agencies, brands, and media companies who refuse to let generic AI define their creative output.",
    ],
    stats: [
      { value: 'Ent.',  sub: 'Grade' },
      { value: 'Ad',    sub: 'Native' },
      { value: 'Multi', sub: 'format' },
      { value: '\u2014',sub: 'Soon' },
    ],
    cta: 'Express Interest',
    ctaHref: 'mailto:hello@kayborg.ai',
    statusLabel: 'Coming Soon',
    statusColor: 'rgba(200,180,255,0.45)',
    statusDot:   'rgba(200,180,255,0.6)',
    accentLine:  'rgba(200,180,255,0.12)',
    taglineColor:'rgba(210,195,255,0.5)',
  },
}

export default function ProductModal({ product, onClose }: Props) {
  const c = CONTENT[product]

  const handleClose = useCallback(() => onClose(), [onClose])

  useEffect(() => {
    // Lock body scroll — restore original overflow on close
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', onKey)

    // Trap focus: move focus into modal
    const panel = document.getElementById('pm-panel')
    const prevFocus = document.activeElement as HTMLElement | null
    panel?.focus()

    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
      prevFocus?.focus()
    }
  }, [handleClose])

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="pm-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={handleClose}
        aria-hidden
      />

      {/* Panel */}
      <motion.div
        id="pm-panel"
        className="pm-panel"
        role="dialog"
        aria-modal
        aria-label={`${c.name} — product details`}
        tabIndex={-1}
        initial={{ opacity: 0, scale: 0.97, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 14 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button — sticky top-right, always visible */}
        <button
          onClick={handleClose}
          className="pm-close"
          aria-label="Close product details"
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden>
            <path d="M1 1L10 10M10 1L1 10"
              stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Scrollable area */}
        <div className="pm-scroll" role="document">
          <div className="pm-inner">

            {/* Status */}
            <div className="pm-status">
              <span className="pm-status__dot"
                style={{ background: c.statusDot, boxShadow: `0 0 8px ${c.statusDot}` }} />
              <span className="pm-status__text" style={{ color: c.statusColor }}>
                {c.statusLabel}
              </span>
            </div>

            {/* Name */}
            <h2 className="pm-name">{c.name}</h2>

            {/* Tagline */}
            <p className="pm-tagline" style={{ color: c.taglineColor }}>{c.tagline}</p>

            {/* Accent rule */}
            <div className="pm-rule"
              style={{ background: `linear-gradient(90deg, ${c.accentLine}, transparent)` }}
              aria-hidden />

            {/* Body */}
            <div className="pm-body">
              {c.body.map((para, i) => (
                <p key={i} className="pm-para">{para}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="pm-stats" role="list" aria-label="Key stats">
              {c.stats.map((s, i) => (
                <div key={i} className="pm-stat" role="listitem">
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
        /* ── Backdrop ── */
        .pm-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 300;
          touch-action: none;
        }
        @media (max-width: 767px) {
          .pm-backdrop {
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
          }
        }

        /* ── Panel ── */
        .pm-panel {
          position: fixed;
          /* Desktop: centred with inset */
          inset: clamp(12px, 3vw, 48px);
          background: #0D0D0D;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 4px;
          z-index: 400;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          outline: none;
          /* Stack above backdrop */
          will-change: transform, opacity;
        }
        /* Full-screen on small phones */
        @media (max-width: 480px) {
          .pm-panel {
            inset: 0;
            border-radius: 0;
            border: none;
            border-top: 1px solid rgba(255,255,255,0.07);
          }
        }

        /* ── Close button ── */
        .pm-close {
          position: absolute;
          top: 16px; right: 16px;
          z-index: 10;
          /* Minimum 44×44 touch target */
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(10,10,10,0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: rgba(255,255,255,0.45);
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
        .pm-close:focus-visible {
          outline: 1.5px solid rgba(255,255,255,0.4);
          outline-offset: 3px;
        }
        @media (max-width: 480px) {
          .pm-close { top: 12px; right: 12px; }
        }

        /* ── Scroll container ── */
        .pm-scroll {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.08) transparent;
          overscroll-behavior: contain;
        }
        .pm-scroll::-webkit-scrollbar { width: 3px; }
        .pm-scroll::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
        }

        /* ── Inner content ── */
        .pm-inner {
          padding:
            clamp(52px, 8vh, 88px)
            clamp(20px, 6vw, 80px)
            clamp(40px, 6vh, 72px);
          max-width: 740px;
        }

        /* Status */
        .pm-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
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
          font-size: clamp(44px, 8vw, 106px);
          letter-spacing: -0.045em;
          line-height: 0.9;
          color: rgba(255,255,255,0.94);
          margin: 0 0 clamp(12px, 2.5vh, 22px);
          /* Avoid runaway text on narrow screens */
          word-break: break-word;
          hyphens: manual;
        }

        /* Tagline */
        .pm-tagline {
          font-family: var(--font-instrument-serif);
          font-style: italic;
          font-size: clamp(15px, 2.2vw, 26px);
          line-height: 1.35;
          margin: 0 0 clamp(28px, 4.5vh, 48px);
        }

        /* Accent rule */
        .pm-rule {
          height: 1px;
          margin-bottom: clamp(28px, 4.5vh, 48px);
          opacity: 0.8;
        }

        /* Body */
        .pm-body { margin-bottom: clamp(32px, 5vh, 56px); }
        .pm-para {
          font-family: var(--font-dm-sans);
          font-weight: 300;
          font-size: clamp(13px, 1.4vw, 16px);
          color: rgba(255,255,255,0.42);
          line-height: 1.82;
          margin-bottom: 18px;
        }
        .pm-para:last-child { margin-bottom: 0; }

        /* Stats */
        .pm-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          padding: clamp(16px, 2.5vh, 26px);
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 3px;
          margin-bottom: clamp(28px, 4.5vh, 52px);
        }
        @media (max-width: 480px) {
          .pm-stats { grid-template-columns: repeat(2, 1fr); gap: 16px; }
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
          font-size: clamp(18px, 2.8vw, 30px);
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
          /* 44px min height for touch */
          min-height: 44px;
          padding: 0 24px;
          border-radius: 2px;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.2s;
        }
        .pm-cta:hover {
          opacity: 0.8;
          transform: translateY(-2px);
        }
        .pm-cta:focus-visible {
          outline: 1.5px solid rgba(255,255,255,0.5);
          outline-offset: 3px;
        }

        @media (prefers-reduced-motion: reduce) {
          .pm-status__dot { animation: none; }
          .pm-cta:hover   { transform: none; }
        }
      `}</style>
    </>
  )
}
