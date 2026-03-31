'use client'

import { useEffect, useRef } from 'react'

// Cosmos manifesto — each line reveals on scroll with a stagger

const lines = [
  { text: "Ads weren't built to be skipped." },
  { text: "But they were." },
  { spacer: true },
  { text: "912 million people said no." },
  { spacer: true },
  { text: "You cannot fight your way back" },
  { text: "into a room you were asked to leave." },
  { spacer: true },
  { text: "We found a different way in." },
]

export default function Vision() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll('.vision-line')
    if (!items?.length) return

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

    items.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Count only non-spacer lines to compute stagger index
  let lineIdx = 0

  return (
    <section style={{
      background: '#0D0D0D',
      padding: 'clamp(80px, 13vh, 140px) clamp(20px, 5vw, 48px)',
      textAlign: 'center',
    }}>
      <div ref={containerRef} style={{ maxWidth: '540px', margin: '0 auto' }}>
        {lines.map((line, i) => {
          if (line.spacer) {
            return <div key={i} style={{ height: 'clamp(16px, 3vh, 28px)' }} />
          }

          const delay = lineIdx * 80
          lineIdx++

          return (
            <p
              key={i}
              className="reveal vision-line"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 300,
                fontSize: 'clamp(18px, 3vw, 28px)',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.45,
                margin: 0,
                transitionDelay: `${delay}ms`,
              }}
            >
              {line.text}
            </p>
          )
        })}
      </div>
    </section>
  )
}
