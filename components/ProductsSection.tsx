'use client'

import { useEffect, useRef } from 'react'
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
    title: 'AdMind™',
    tagline: 'A large language model engineered from the ground up for the advertising industry.',
    tags: ['LLM', 'Advertising', 'Enterprise'],
    floatDuration: 6.4,
    floatDelay: 0.8,
    entranceDelay: 0.13,
  },
]

export default function ProductsSection({ onOpen }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view') }),
      { threshold: 0.1 },
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="work" className="ps-section">

      {/* Label */}
      <div className="reveal ps-label">Our Creations</div>

      {/* Intro */}
      <p className="reveal ps-intro" style={{ transitionDelay: '0.07s' }}>
        Two products. Two industries. One mission — to make AI indispensable.
      </p>

      {/* Cards */}
      <div className="ps-grid">
        {PRODUCTS.map(p => (
          /* Entrance */
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.72, delay: p.entranceDelay, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Float */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{
                duration: p.floatDuration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: p.floatDelay,
              }}
            >
              {/* Hover */}
              <motion.div
                whileHover={{ scale: 1.018 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="holo-card"
                onClick={() => onOpen(p.id)}
                role="button"
                tabIndex={0}
                aria-label={`Learn more about ${p.title}`}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onOpen(p.id) }}
              >
                {/* Gradient border */}
                <div className="holo-card__border" aria-hidden />

                {/* Top glow */}
                <div className="holo-card__glow" aria-hidden />

                {/* Status */}
                <div className="holo-card__status">
                  <span className="holo-card__status-dot" style={{ background: p.statusDot, boxShadow: `0 0 6px ${p.statusDot}` }} />
                  <span className="holo-card__status-text" style={{ color: p.statusText }}>{p.status}</span>
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
          padding: clamp(80px, 14vh, 160px) clamp(20px, 5vw, 64px);
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
          margin-bottom: clamp(48px, 8vh, 96px);
          max-width: 50ch;
        }

        .ps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
          gap: clamp(16px, 2.5vw, 32px);
          max-width: 820px;
        }

        /* Hologram card */
        .holo-card {
          position: relative;
          padding: clamp(28px, 4vw, 44px);
          border-radius: 3px;
          background: rgba(255,255,255,0.025);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          overflow: hidden;
          cursor: pointer;
        }
        .holo-card:focus-visible {
          outline: 1.5px solid rgba(255,255,255,0.3);
          outline-offset: 3px;
        }

        /* 1px gradient border via mask */
        .holo-card__border {
          position: absolute;
          inset: 0;
          border-radius: 3px;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(255,255,255,0.12) 0%,
            rgba(255,255,255,0.04) 50%,
            rgba(255,255,255,0.08) 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
                        linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        /* Subtle top glow */
        .holo-card__glow {
          position: absolute;
          top: -60px; left: 0; right: 0;
          height: 160px;
          background: radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Status */
        .holo-card__status {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 22px;
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

        /* Title */
        .holo-card__title {
          font-family: var(--font-syne);
          font-weight: 800;
          font-size: clamp(30px, 4vw, 48px);
          letter-spacing: -0.035em;
          line-height: 0.95;
          color: rgba(255,255,255,0.9);
          margin: 0 0 16px;
        }

        /* Tagline */
        .holo-card__tagline {
          font-family: var(--font-dm-sans);
          font-weight: 300;
          font-size: clamp(12px, 1.15vw, 14px);
          color: rgba(255,255,255,0.36);
          line-height: 1.7;
          margin: 0 0 28px;
        }

        /* Tags */
        .holo-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 32px;
        }
        .holo-card__tag {
          font-family: var(--font-dm-mono);
          font-size: 8px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.22);
          padding: 4px 9px;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 2px;
        }

        /* CTA */
        .holo-card__cta {
          font-family: var(--font-dm-sans);
          font-size: 12px;
          font-weight: 400;
          color: rgba(255,255,255,0.38);
          letter-spacing: 0.03em;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: color 0.2s ease;
        }
        .holo-card:hover .holo-card__cta {
          color: rgba(255,255,255,0.72);
        }
        .holo-card__arrow {
          transition: transform 0.2s ease;
        }
        .holo-card:hover .holo-card__arrow {
          transform: translateX(4px);
        }
        @media (prefers-reduced-motion: reduce) {
          .holo-card__status-dot { animation: none; }
        }
      `}</style>
    </section>
  )
}
