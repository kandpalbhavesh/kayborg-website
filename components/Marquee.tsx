'use client'

import { useEffect, useRef } from 'react'

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

  const items = [...BRANDS, ...BRANDS]

  return (
    <section ref={sectionRef} className="reveal" style={{
      background: '#F7F7F7',
      borderTop: '1px solid rgba(0,0,0,0.07)',
      borderBottom: '1px solid rgba(0,0,0,0.07)',
      padding: '28px 0',
      overflow: 'hidden',
    }}>
      <div style={{
        textAlign: 'center',
        fontFamily: 'var(--font-dm-mono)',
        fontSize: '9px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'rgba(0,0,0,0.28)',
        marginBottom: '20px',
      }}>
        Trusted by leading brands
      </div>

      <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)' }}>
        <div className="marquee-track">
          {items.map((brand, i) => (
            <span key={i} style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 700,
              fontSize: 'clamp(13px, 1.5vw, 16px)',
              color: 'rgba(0,0,0,0.22)',
              whiteSpace: 'nowrap',
              padding: '0 clamp(24px, 3vw, 40px)',
              letterSpacing: '-0.01em',
            }}>
              {brand}
              <span style={{ marginLeft: 'clamp(24px, 3vw, 40px)', color: 'rgba(0,0,0,0.1)' }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
