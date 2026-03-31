'use client'

import { useEffect, useRef, useState } from 'react'

type Stat = { prefix?: string; target: number; suffix: string; label: string }

const STATS: Stat[] = [
  { target: 912, suffix: 'M', label: 'people actively using ad blockers globally' },
  { target: 54,  suffix: '%', label: 'of viewers still purchase from brands seen in creator content' },
  { target: 3,   suffix: 's', prefix: '<', label: 'average time for AI to identify and place a product per frame' },
]

function Counter({ stat }: { stat: Stat }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1800
        const t0 = performance.now()
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1)
          setVal(Math.round((1 - Math.pow(1 - p, 4)) * stat.target))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [stat.target])

  return (
    <div ref={ref} style={{
      fontFamily: 'var(--font-syne)',
      fontWeight: 800,
      fontSize: 'clamp(40px, 5.5vw, 68px)',
      color: '#0A0A0A',
      letterSpacing: '-0.05em',
      lineHeight: 1,
    }}>
      {stat.prefix && <span style={{ color: 'rgba(0,0,0,0.3)' }}>{stat.prefix}</span>}
      {val}
      <span style={{ color: 'rgba(0,0,0,0.3)' }}>{stat.suffix}</span>
    </div>
  )
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = ref.current?.querySelectorAll('.stat-card')
    if (!cards?.length) return
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target) } })
      },
      { threshold: 0.2 },
    )
    cards.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section style={{
      background: '#F7F7F7',
      borderTop: '1px solid rgba(0,0,0,0.07)',
      borderBottom: '1px solid rgba(0,0,0,0.07)',
    }}>
      <div ref={ref} className="stats-grid">
        {STATS.map((s, i) => (
          <div key={i} className="stat-card reveal" style={{
            borderRight: i < STATS.length - 1 ? '1px solid rgba(0,0,0,0.07)' : undefined,
            transitionDelay: `${i * 120}ms`,
          }}>
            <Counter stat={s} />
            <p style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 300, fontSize: '13px',
              color: 'rgba(0,0,0,0.42)',
              maxWidth: '180px',
              margin: '14px auto 0',
              lineHeight: 1.55, textAlign: 'center',
            }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .stats-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; }
        .stat-card { padding: 52px 40px; text-align: center; display: flex; flex-direction: column; align-items: center; }
        @media (max-width: 767px) {
          .stats-grid { grid-template-columns: 1fr; }
          .stat-card { padding: 40px 24px; border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.07); }
          .stat-card:last-child { border-bottom: none; }
        }
        @media (min-width: 768px) and (max-width: 1023px) { .stat-card { padding: 44px 28px; } }
      `}</style>
    </section>
  )
}
