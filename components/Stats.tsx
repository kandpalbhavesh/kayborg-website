'use client'

import { useEffect, useRef } from 'react'

const stats = [
  {
    number: '912',
    suffix: 'M',
    label: "people who made a quiet decision and never came back",
  },
  {
    prefix: '$',
    number: '54',
    suffix: 'B',
    label: "in revenue that left with them",
  },
  {
    number: '54',
    suffix: '%',
    label: "of those same people still watch when it doesn't feel like an ad",
  },
]

export default function Stats() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cols = gridRef.current?.querySelectorAll('.stats-col')
    if (!cols?.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    cols.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      style={{
        borderTop: '1px solid rgba(255,255,255,0.07)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        background: '#0D0D0D',
        width: '100%',
      }}
    >
      <div className="stats-grid" ref={gridRef}>
        {stats.map((s, i) => (
          <div
            key={i}
            className="stats-col reveal"
            style={{
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : undefined,
              transitionDelay: `${i * 120}ms`,
            }}
          >
            <div style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 800,
              fontSize: 'clamp(36px, 5.5vw, 60px)',
              color: '#FFFFFF',
              letterSpacing: '-0.04em',
              lineHeight: 1,
            }}>
              {s.prefix && <span>{s.prefix}</span>}
              {s.number}
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>{s.suffix}</span>
            </div>
            <p style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 300,
              fontSize: '13px',
              color: 'rgba(255,255,255,0.35)',
              maxWidth: '160px',
              margin: '0 auto',
              lineHeight: 1.5,
            }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }
        .stats-col {
          padding: 48px 40px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        @media (max-width: 767px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .stats-col {
            padding: 36px 24px;
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.07);
          }
          .stats-col:last-child {
            border-bottom: none;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .stats-col {
            padding: 40px 24px;
          }
        }
      `}</style>
    </section>
  )
}
