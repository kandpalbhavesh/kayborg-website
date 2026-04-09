'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import type { ProductType } from '@/app/page'

interface Props {
  onOpen: (product: ProductType) => void
}

const PRODUCTS = [
  {
    id: 'vaidyabot' as ProductType,
    status: 'Launching · May 2026',
    statusDot: 'rgba(180,255,200,0.7)',
    statusText: 'rgba(180,255,200,0.55)',
    title: 'VaidyaBot',
    tagline: 'The AI that makes healthcare accessible — one conversation at a time.',
    tags: ['Healthcare', 'Conversational AI', 'WhatsApp'],
    floatDuration: 5.2,
    floatDelay: 0,
    entranceDelay: 0,
  },
  {
    id: 'admind' as ProductType,
    status: 'Coming Soon',
    statusDot: 'rgba(200,180,255,0.6)',
    statusText: 'rgba(200,180,255,0.45)',
    title: 'AdMind\u2122',
    tagline: 'A large language model engineered from the ground up for the advertising industry.',
    tags: ['LLM', 'Advertising', 'Enterprise'],
    floatDuration: 6.4,
    floatDelay: 0.8,
    entranceDelay: 0.13,
  },
]

export default function ProductsSection({ onOpen }: Props) {
  const ref = useRef<HTMLElement>(null)
  // Only float on desktop non-reduced-motion — avoid GPU waste on mobile
  const [shouldFloat, setShouldFloat] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)')
    setShouldFloat(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setShouldFloat(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view') }),
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' },
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="work" className="ps-section">

      <div className="reveal ps-label">Our Creations</div>

      <p className="reveal ps-intro" style={{ transitionDelay: '0.07s' }}>
        Two products. Two industries. One mission — to make AI indispensable.
      </p>

      <div className="ps-grid">
        {PRODUCTS.map(p => (
          /* Entrance */
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.72, delay: p.entranceDelay, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Float (desktop only) */}
            <motion.div
              animate={shouldFloat ? { y: [0, -9, 0] } : undefined}
              transition={shouldFloat ? {
                duration: p.floatDuration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: p.floatDelay,
              } : undefined}
            >
              {/* Hover scale */}
              <motion.div
                whileHover={{ scale: 1.018 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="holo-card"
                onClick={() => onOpen(p.id)}
                role="button"
                tabIndex={0}
                aria-label={`Learn more about ${p.title}`}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(p.id) } }}
              >
                {/* Gradient border */}
                <div className="holo-card__border" aria-hidden />

                {/* Top glow */}
                <div className="holo-card__glow" aria-hidden />

                {/* Status */}
                <div className="holo-card__status">
                  <span className="holo-card__status-dot"
                    style={{ background: p.statusDot, boxShadow: `0 0 6px ${p.statusDot}` }} />
                  <span className="holo-card__status-text"
                    style={{ color: p.statusText }}>{p.status}</span>
                </div>

                {/* Title */}
                <h3 className="holo-card__title">{p.title}</h3>

                {/* Tagline */}
                <p className="holo-card__tagline">{p.tagline}</p>

                {/* Tags */}
                <div className="holo-card__tags">
                  {p.tags.map(tag => (
                    <span key={tag} className="holo-card__tag">{tag}</span>
                  ))}
                </div>

                {/* CTA */}
                <div className="holo-card__cta">
                  Learn More <span className="holo-card__arrow">→</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .ps-section {
          background: #0A0A0A;
          padding: clamp(64px, 12vh, 152px) clamp(20px, 5vw, 64px);
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .ps-label {
          font-family: var(--font-dm-mono);
          font-size: 9px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.18);
          margin-bottom: 14px;
        }

        .ps-intro {
          font-family: var(--font-dm-sans);
          font-weight: 300;
          font-size: clamp(13px, 1.3vw, 15px);
          color: rgba(255,255,255,0.3);
          margin-bottom: clamp(40px, 7vh, 88px);
          max-width: 48ch;
        }

        .ps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
          gap: clamp(14px, 2.5vw, 28px);
          max-width: 800px;
        }

        /* ── Hologram card ── */
        .holo-card {
          position: relative;
          padding: clamp(24px, 4vw, 42px);
          border-radius: 3px;
          background: rgba(255,255,255,0.025);
          /* Only blur on devices that handle it well */
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          overflow: hidden;
        }
        @media (max-width: 767px) {
          /* Remove backdrop-filter on mobile for performance */
          .holo-card {
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
            background: rgba(255,255,255,0.03);
          }
        }

        /* ── Focus ring ── */
        .holo-card:focus-visible {
          outline: 1.5px solid rgba(255,255,255,0.35);
          outline-offset: 3px;
        }

        /* ── 1px gradient border via mask trick ── */
        .holo-card__border {
          position: absolute;
          inset: 0;
          border-radius: 3px;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(255,255,255,0.12) 0%,
            rgba(255,255,255,0.03) 50%,
            rgba(255,255,255,0.08) 100%
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        /* ── Top ambient glow ── */
        .holo-card__glow {
          position: absolute;
          top: -60px; left: 0; right: 0;
          height: 150px;
          background: radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Status ── */
        .holo-card__status {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 20px;
        }
        .holo-card__status-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
          animation: glowPulse 2.2s ease-in-out infinite;
        }
        .holo-card__status-text {
          font-family: var(--font-dm-mono);
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        /* ── Title ── */
        .holo-card__title {
          font-family: var(--font-syne);
          font-weight: 800;
          font-size: clamp(28px, 4vw, 46px);
          letter-spacing: -0.035em;
          line-height: 0.95;
          color: rgba(255,255,255,0.9);
          margin: 0 0 14px;
        }

        /* ── Tagline ── */
        .holo-card__tagline {
          font-family: var(--font-dm-sans);
          font-weight: 300;
          font-size: clamp(12px, 1.2vw, 14px);
          color: rgba(255,255,255,0.36);
          line-height: 1.7;
          margin: 0 0 26px;
        }

        /* ── Tags ── */
        .holo-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 30px;
        }
        .holo-card__tag {
          font-family: var(--font-dm-mono);
          font-size: 8px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.22);
          padding: 4px 8px;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 2px;
        }

        /* ── CTA ── */
        .holo-card__cta {
          font-family: var(--font-dm-sans);
          font-size: 12px;
          font-weight: 400;
          color: rgba(255,255,255,0.38);
          letter-spacing: 0.02em;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: color 0.2s;
          /* Ensure 44px touch target height */
          min-height: 44px;
          padding-top: 6px;
        }
        .holo-card:hover .holo-card__cta { color: rgba(255,255,255,0.72); }
        .holo-card__arrow { transition: transform 0.2s; }
        .holo-card:hover .holo-card__arrow { transform: translateX(4px); }

        @media (prefers-reduced-motion: reduce) {
          .holo-card__status-dot { animation: none; }
        }
      `}</style>
    </section>
  )
}
