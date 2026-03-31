'use client'

import { useEffect, useRef } from 'react'

// Problem section — establish the broken state of advertising
// Leads with the massive number (912M), then emotional copy
// Raycast pattern: emotional truth over metrics

const COPY_LINES = [
  "They didn't stop watching.",
  "They stopped tolerating.",
  "",
  "The skip button wasn't a feature request.",
  "It was a verdict.",
]

export default function Problem() {
  const statRef = useRef<HTMLDivElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const targets = [statRef.current, copyRef.current]

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    targets.forEach(t => t && io.observe(t))
    return () => io.disconnect()
  }, [])

  // Stagger copy lines
  useEffect(() => {
    const lines = copyRef.current?.querySelectorAll('.problem-line')
    if (!lines?.length) return

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    lines.forEach(l => io.observe(l))
    return () => io.disconnect()
  }, [])

  return (
    <section style={{
      background: '#080808',
      padding: 'clamp(80px, 14vh, 160px) clamp(20px, 5vw, 48px)',
      textAlign: 'center',
    }}>
      {/* Giant stat */}
      <div
        ref={statRef}
        className="reveal"
        style={{ marginBottom: 'clamp(12px, 2vh, 20px)' }}
      >
        <div style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 'clamp(72px, 14vw, 180px)',
          color: '#FFFFFF',
          letterSpacing: '-0.06em',
          lineHeight: 0.88,
        }}>
          912M
        </div>
        <div style={{
          fontFamily: 'var(--font-dm-mono)',
          fontSize: '10px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.28)',
          marginTop: '16px',
        }}>
          people actively blocking ads
        </div>
      </div>

      {/* Horizontal rule */}
      <div style={{
        width: '1px',
        height: 'clamp(40px, 6vh, 64px)',
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.12), transparent)',
        margin: 'clamp(32px, 5vh, 56px) auto',
      }} />

      {/* Emotional copy */}
      <div ref={copyRef} style={{ maxWidth: '480px', margin: '0 auto' }}>
        {COPY_LINES.map((line, i) =>
          line === '' ? (
            <div key={i} style={{ height: 'clamp(14px, 2.5vh, 24px)' }} />
          ) : (
            <p
              key={i}
              className="problem-line reveal"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 300,
                fontSize: 'clamp(18px, 2.8vw, 26px)',
                color: 'rgba(255,255,255,0.52)',
                lineHeight: 1.45,
                margin: 0,
                transitionDelay: `${i * 90}ms`,
              }}
            >
              {line}
            </p>
          )
        )}
      </div>
    </section>
  )
}
