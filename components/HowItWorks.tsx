'use client'

import { useEffect, useRef } from 'react'

// "How It Works" — 3 steps with numbered reveals and a connecting timeline line
// Parallel structure (Linear pattern): each step has the same visual weight

const STEPS = [
  {
    num: '01',
    title: 'Creator posts',
    body: 'Your creator publishes their video. Real content. Real audience. Nothing changes — their voice stays entirely theirs.',
  },
  {
    num: '02',
    title: 'AI identifies',
    body: 'Our model scans every frame — finding the right surface, the right depth, the right moment for your product to exist naturally.',
  },
  {
    num: '03',
    title: 'Brand appears',
    body: "Your product is present inside the story. Invisible to ad blockers. Invisible in its intrusion. Visible to every real viewer.",
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const items = ref.current?.querySelectorAll('.step-card')
    if (!items?.length) return

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target) }
        })
      },
      { threshold: 0.15 },
    )
    items.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section
      id="how-it-works"
      style={{
        background: '#080808',
        padding: 'clamp(80px, 12vh, 140px) clamp(20px, 5vw, 48px)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div style={{ maxWidth: '840px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 'clamp(56px, 8vh, 96px)' }}>
          <div style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: '9px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.28)',
            marginBottom: '16px',
          }}>
            How it works
          </div>
          <h2 style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(32px, 5.5vw, 64px)',
            color: '#FFFFFF',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            margin: 0,
          }}>
            Three steps.<br />Zero friction.
          </h2>
        </div>

        {/* Steps */}
        <div ref={ref} style={{ position: 'relative' }}>
          {/* Timeline line (desktop) */}
          <div className="timeline-line" style={{
            position: 'absolute',
            left: '19px',
            top: '12px',
            bottom: '12px',
            width: '1px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)',
          }} />

          {STEPS.map((step, i) => (
            <div
              key={i}
              className="step-card reveal"
              style={{
                display: 'flex',
                gap: 'clamp(24px, 4vw, 56px)',
                alignItems: 'flex-start',
                marginBottom: i < STEPS.length - 1 ? 'clamp(44px, 7vh, 72px)' : 0,
                transitionDelay: `${i * 140}ms`,
              }}
            >
              {/* Number circle */}
              <div style={{
                flexShrink: 0,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.12)',
                background: '#080808',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1,
              }}>
                <span style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: '10px',
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.05em',
                }}>
                  {step.num}
                </span>
              </div>

              {/* Content */}
              <div style={{ paddingTop: '8px', flex: 1 }}>
                <h3 style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700,
                  fontSize: 'clamp(20px, 2.8vw, 28px)',
                  color: '#FFFFFF',
                  letterSpacing: '-0.03em',
                  margin: '0 0 12px',
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 300,
                  fontSize: 'clamp(14px, 1.6vw, 16px)',
                  color: 'rgba(255,255,255,0.48)',
                  lineHeight: 1.7,
                  maxWidth: '480px',
                  margin: 0,
                }}>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .timeline-line { display: none; }
        }
      `}</style>
    </section>
  )
}
