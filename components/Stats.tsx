'use client'

import { useEffect, useRef } from 'react'

// Stats with digit-scramble reveal effect:
// Each digit cycles through random numbers before snapping to the real value.
// Updates directly via DOM refs — zero React re-renders, silky smooth.

type Stat = { prefix?: string; target: number; suffix: string; label: string }

const STATS: Stat[] = [
  { target: 912, suffix: 'M', label: 'people actively using ad blockers globally' },
  { target: 54,  suffix: '%', label: 'of viewers still purchase from brands seen in creator content' },
  { target: 3,   suffix: 's', prefix: '<', label: 'average time for AI to identify and place a product per frame' },
]

const DIGITS = '0123456789'

function ScrambleCounter({ stat }: { stat: Stat }) {
  const wrapRef    = useRef<HTMLDivElement>(null)
  const displayRef = useRef<HTMLSpanElement>(null)
  const started    = useRef(false)

  useEffect(() => {
    const wrap = wrapRef.current
    const display = displayRef.current
    if (!wrap || !display) return

    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return
      started.current = true

      const targetStr = String(stat.target)
      const duration  = 2200

      const t0 = performance.now()
      const tick = (now: number) => {
        const p      = Math.min((now - t0) / duration, 1)
        const eased  = 1 - Math.pow(1 - p, 3)

        const scrambled = targetStr.split('').map((char, i) => {
          const charP = (eased * (targetStr.length + 1.5)) - i
          if (charP >= 1.5) return char
          if (charP <= 0)   return DIGITS[Math.floor(Math.random() * 10)]
          return Math.random() < charP ? char : DIGITS[Math.floor(Math.random() * 10)]
        }).join('')

        display.textContent = scrambled
        if (p < 1) requestAnimationFrame(tick)
        else display.textContent = targetStr
      }

      requestAnimationFrame(tick)
      wrap.classList.add('in-view')
    }, { threshold: 0.5 })

    io.observe(wrap)
    return () => io.disconnect()
  }, [stat.target])

  return (
    <div ref={wrapRef} className="stat-card reveal">
      <div style={{
        fontFamily: 'var(--font-syne)',
        fontWeight: 800,
        fontSize: 'clamp(40px, 5.5vw, 68px)',
        color: '#0A0A0A',
        letterSpacing: '-0.05em',
        lineHeight: 1,
        fontVariantNumeric: 'tabular-nums',
      }}>
        {stat.prefix && <span style={{ color: 'rgba(0,0,0,0.28)' }}>{stat.prefix}</span>}
        <span ref={displayRef} aria-label={String(stat.target)}>0</span>
        <span style={{ color: 'rgba(0,0,0,0.28)' }}>{stat.suffix}</span>
      </div>
      <p style={{
        fontFamily: 'var(--font-dm-sans)',
        fontWeight: 300, fontSize: '13px',
        color: 'rgba(0,0,0,0.42)',
        maxWidth: '180px', margin: '14px auto 0',
        lineHeight: 1.55, textAlign: 'center',
      }}>
        {stat.label}
      </p>
    </div>
  )
}

export default function Stats() {
  return (
    <section style={{
      background: '#F7F7F7',
      borderTop: '1px solid rgba(0,0,0,0.07)',
      borderBottom: '1px solid rgba(0,0,0,0.07)',
    }}>
      <div className="stats-grid">
        {STATS.map((s, i) => (
          <div key={i} style={{
            borderRight: i < STATS.length - 1 ? '1px solid rgba(0,0,0,0.07)' : undefined,
            transitionDelay: `${i * 120}ms`,
          }}>
            <ScrambleCounter stat={s} />
          </div>
        ))}
      </div>

      <style>{`
        .stats-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; }
        .stat-card {
          padding: 52px 40px; text-align: center;
          display: flex; flex-direction: column; align-items: center;
        }
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
