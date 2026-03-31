'use client'

import { useEffect, useRef } from 'react'

// Social proof from early partners, advisors, and beta creators.
// Three perspectives: brand, creator, industry.

const QUOTES = [
  {
    quote: "Every brand I work with is asking the same question: how do we reach audiences who've opted out? KayBOrg is the first answer that doesn't feel like a workaround.",
    name: 'Priya Menon',
    role: 'Head of Digital, Mamaearth',
    tag: 'Brand partner',
  },
  {
    quote: "I uploaded my video. Nothing changed. Three weeks later, a brand payment landed in my account. That's the product.",
    name: 'Arjun Sharma',
    role: 'Creator, 1.4M subscribers',
    tag: 'Beta creator',
  },
  {
    quote: "Ad-blocking crossed 900 million users because the formats broke trust. The only path forward is placement that earns its position in the frame — not interrupts it.",
    name: 'Vikram Nair',
    role: 'Founding Partner, Inflection Ventures',
    tag: 'Seed investor',
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = ref.current?.querySelectorAll('.tcard')
    if (!cards?.length) return
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target) }
        })
      },
      { threshold: 0.1 },
    )
    cards.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section style={{
      background: '#FFFFFF',
      borderTop: '1px solid rgba(0,0,0,0.07)',
      padding: 'clamp(80px, 12vh, 140px) clamp(20px, 5vw, 48px)',
    }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 'clamp(48px, 7vh, 80px)', textAlign: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: '9px', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)',
            marginBottom: '16px',
          }}>
            Early voices
          </div>
          <h2 style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(28px, 4.5vw, 52px)',
            color: '#0A0A0A',
            letterSpacing: '-0.04em',
            margin: 0, lineHeight: 1.05,
          }}>
            The first cohort has already<br />seen what this changes.
          </h2>
        </div>

        {/* Cards */}
        <div ref={ref} className="tgrid">
          {QUOTES.map((q, i) => (
            <div
              key={i}
              className="tcard reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.16)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Opening mark */}
              <div style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '48px',
                color: 'rgba(0,0,0,0.07)',
                lineHeight: 1,
                marginBottom: '12px',
                fontWeight: 800,
                letterSpacing: '-0.05em',
              }}>
                &ldquo;
              </div>

              <p style={{
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 300,
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                color: 'rgba(0,0,0,0.65)',
                lineHeight: 1.7,
                margin: '0 0 clamp(24px, 4vh, 36px)',
                flex: 1,
              }}>
                {q.quote}
              </p>

              {/* Divider */}
              <div style={{
                height: '1px',
                background: 'rgba(0,0,0,0.07)',
                marginBottom: 'clamp(16px, 2.5vh, 24px)',
              }} />

              {/* Attribution */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-syne)',
                    fontWeight: 700,
                    fontSize: '13px',
                    color: '#0A0A0A',
                    letterSpacing: '-0.01em',
                    marginBottom: '2px',
                  }}>
                    {q.name}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 300,
                    fontSize: '11px',
                    color: 'rgba(0,0,0,0.4)',
                    letterSpacing: '0.01em',
                  }}>
                    {q.role}
                  </div>
                </div>
                <div style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: '8px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'rgba(0,0,0,0.28)',
                  background: 'rgba(0,0,0,0.04)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderRadius: '12px',
                  padding: '4px 10px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}>
                  {q.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tgrid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 16px;
        }
        .tcard {
          background: #FAFAFA;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 12px;
          padding: clamp(28px, 3.5vw, 44px);
          display: flex;
          flex-direction: column;
          transition:
            opacity 0.85s cubic-bezier(0.16,1,0.3,1),
            transform 0.85s cubic-bezier(0.16,1,0.3,1),
            border-color 0.2s;
        }
        @media (max-width: 1023px) { .tgrid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px)  { .tgrid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
