'use client'

import { useEffect, useRef } from 'react'

// Velocity-responsive marquee:
// Scrolling fast → marquee speeds up. Stopping → decays back to base speed.
// This creates a satisfying connection between page scroll and the brand strip.

const BRANDS = [
  'Nike', 'boAt', 'Mamaearth', 'Apple', 'CRED', 'Zomato',
  "Levi's", 'Samsung', 'Nykaa', 'OnePlus', 'Myntra', 'Adidas',
  'Swiggy', 'Flipkart', 'realme', 'Jio', 'H&M', 'boAt',
]

export default function Marquee() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef   = useRef<HTMLDivElement>(null)

  // Scroll reveal
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

  // Velocity-responsive speed
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const BASE_SPEED = 32
    let lastY    = window.scrollY
    let velocity = 0
    let raf: number

    const onScroll = () => {
      const newY = window.scrollY
      velocity = Math.abs(newY - lastY)
      lastY = newY
    }

    const tick = () => {
      velocity *= 0.88 // decay
      const speed = Math.max(BASE_SPEED - velocity * 2.5, 7)
      track.style.animationDuration = `${speed}s`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
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
        fontSize: '9px', letterSpacing: '0.2em',
        textTransform: 'uppercase', color: 'rgba(0,0,0,0.28)',
        marginBottom: '20px',
      }}>
        Trusted by leading brands
      </div>

      <div style={{
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}>
        <div ref={trackRef} className="marquee-track">
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
