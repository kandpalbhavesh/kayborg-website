'use client'

import { useEffect, useRef } from 'react'

const PANELS = [
  {
    label: 'For Brands',
    headline: 'Stop buying attention.\nStart earning presence.',
    points: [
      { title: 'Zero skip rate', body: 'Your product lives inside the content — not between it. There is nothing to skip.' },
      { title: 'Pixel-level precision', body: 'AI identifies the exact frame, surface, and depth where your product belongs.' },
      { title: 'Creator-native reach', body: 'Audiences that already trust the creator. Your brand inherits that trust.' },
    ],
    cta: 'Partner as a brand',
  },
  {
    label: 'For Creators',
    headline: 'Earn from every\nframe you already made.',
    points: [
      { title: 'No compromise', body: 'Your content stays exactly as you made it. We work around your work, not over it.' },
      { title: 'Passive by design', body: 'Post once. Brands pay per placement. You keep creating while revenue accumulates.' },
      { title: 'Right fit only', body: 'Our AI matches brands to your content — only products that actually belong in your world.' },
    ],
    cta: 'Join as a creator',
  },
]

export default function Audience() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const panels = ref.current?.querySelectorAll('.audience-panel')
    if (!panels?.length) return
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target) } })
      },
      { threshold: 0.12 },
    )
    panels.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const scrollToWaitlist = () => {
    try { document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' }) } catch { /* silent */ }
  }

  return (
    <section style={{
      background: '#FFFFFF',
      borderTop: '1px solid rgba(0,0,0,0.07)',
      padding: 'clamp(80px, 12vh, 140px) clamp(20px, 5vw, 48px)',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 'clamp(48px, 7vh, 80px)' }}>
        <h2 style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 'clamp(28px, 4.5vw, 56px)',
          color: '#0A0A0A',
          letterSpacing: '-0.04em',
          margin: 0, lineHeight: 1.05,
        }}>
          Built for two sides<br />of the same story.
        </h2>
      </div>

      <div ref={ref} className="audience-grid" style={{ maxWidth: '1080px', margin: '0 auto' }}>
        {PANELS.map((panel, i) => (
          <div
            key={i}
            className="audience-panel reveal"
            style={{
              background: '#F7F7F7',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: '12px',
              padding: 'clamp(32px, 4vw, 52px)',
              transitionDelay: `${i * 150}ms`,
              transition: 'opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1), border-color 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.18)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)' }}
          >
            <div style={{
              fontFamily: 'var(--font-dm-mono)',
              fontSize: '9px', letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(0,0,0,0.3)',
              marginBottom: '20px',
            }}>
              {panel.label}
            </div>

            <h3 style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 800,
              fontSize: 'clamp(22px, 3vw, 36px)',
              color: '#0A0A0A',
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              margin: '0 0 clamp(28px, 4vh, 40px)',
              whiteSpace: 'pre-line',
            }}>
              {panel.headline}
            </h3>

            <ul style={{ listStyle: 'none', margin: '0 0 clamp(32px, 5vh, 48px)', padding: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {panel.points.map((pt, j) => (
                <li key={j} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: 0, marginTop: '5px',
                    width: '5px', height: '5px',
                    borderRadius: '50%', background: 'rgba(0,0,0,0.25)',
                  }} />
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-syne)',
                      fontWeight: 700, fontSize: '14px',
                      color: '#0A0A0A', marginBottom: '4px',
                    }}>
                      {pt.title}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontWeight: 300, fontSize: '13px',
                      color: 'rgba(0,0,0,0.5)', lineHeight: 1.6,
                    }}>
                      {pt.body}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToWaitlist}
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 500, fontSize: '13px',
                color: 'rgba(0,0,0,0.55)',
                background: 'none',
                border: '1px solid rgba(0,0,0,0.14)',
                borderRadius: '20px',
                padding: '9px 20px',
                cursor: 'pointer',
                transition: 'color 0.2s, border-color 0.2s',
                display: 'inline-flex', alignItems: 'center', gap: '6px',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#0A0A0A'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(0,0,0,0.55)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.14)' }}
            >
              {panel.cta}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6H10M6.5 2.5L10 6L6.5 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        ))}
      </div>

      <style>{`
        .audience-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 767px) { .audience-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
