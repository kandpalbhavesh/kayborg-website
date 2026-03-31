'use client'

import { useEffect, useRef } from 'react'

// Infinite horizontal brand scroll — social proof / trust signal
// Appears directly below hero to anchor the product in familiar brands

const BRANDS = [
  'Nike', 'boAt', 'Mamaearth', 'Apple', 'CRED', 'Zomato',
  "Levi's", 'Samsung', 'Nykaa', 'OnePlus', 'Myntra', 'Adidas',
  'Swiggy', 'Flipkart', 'realme', 'Jio', 'H&M', 'boAt',
]

export default function Marquee() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('in-view'); io.unobserve(el) } },
      { threshold: 0.2 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Duplicate for seamless loop
  const items = [...BRANDS, ...BRANDS]

  return (
    <section
      ref={sectionRef}
      className="reveal"
      style={{
        background: '#080808',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '28px 0',
        overflow: 'hidden',
      }}
    >
      {/* Label */}
      <div style={{
        textAlign: 'center',
        fontFamily: 'var(--font-dm-mono)',
        fontSize: '9px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.22)',
        marginBottom: '20px',
      }}>
        Trusted by leading brands
      </div>

      {/* Scrolling track */}
      <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)' }}>
        <div className="marquee-track">
          {items.map((brand, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 700,
                fontSize: 'clamp(13px, 1.5vw, 16px)',
                color: 'rgba(255,255,255,0.22)',
                whiteSpace: 'nowrap',
                padding: '0 clamp(24px, 3vw, 40px)',
                letterSpacing: '-0.01em',
                transition: 'color 0.2s',
              }}
            >
              {brand}
              <span style={{ marginLeft: 'clamp(24px, 3vw, 40px)', color: 'rgba(255,255,255,0.08)' }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
