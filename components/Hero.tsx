'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const labelRef = useRef<HTMLDivElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const h2Ref = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const elements = [
      { el: labelRef.current, delay: 0 },
      { el: h1Ref.current, delay: 120 },
      { el: h2Ref.current, delay: 220 },
      { el: subRef.current, delay: 340 },
      { el: btnRef.current, delay: 440 },
    ]
    elements.forEach(({ el, delay }) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(16px)'
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
      setTimeout(() => {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, delay + 100)
    })
  }, [])

  const scrollToWaitlist = () => {
    try {
      const el = document.getElementById('waitlist')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } catch {
      // silent
    }
  }

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0C0C0E',
        padding: 'clamp(72px, 10vh, 100px) clamp(20px, 5vw, 48px) clamp(60px, 8vh, 80px)',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'min(600px, 90vw)',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(200,169,110,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 'min(800px, 100%)', width: '100%', position: 'relative' }}>
        {/* Label */}
        <div ref={labelRef} style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 700,
          fontSize: '10px',
          color: 'rgba(200,169,110,0.5)',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          marginBottom: '40px',
          opacity: 0,
        }}>
          Launching 2026 · India
        </div>

        {/* H1 */}
        <h1 ref={h1Ref} style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 'clamp(48px, 9vw, 116px)',
          color: '#F0EDE8',
          letterSpacing: '-0.05em',
          lineHeight: 0.92,
          margin: 0,
          opacity: 0,
        }}>
          Advertising.
        </h1>

        {/* H2 */}
        <h2 ref={h2Ref} style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 'clamp(48px, 9vw, 116px)',
          color: '#C8A96E',
          letterSpacing: '-0.05em',
          lineHeight: 0.92,
          margin: '0 0 clamp(24px, 4vh, 40px)',
          opacity: 0,
        }}>
          Reinvented.
        </h2>

        {/* Sub copy */}
        <p ref={subRef} style={{
          fontFamily: 'var(--font-dm-sans)',
          fontWeight: 300,
          fontSize: 'clamp(15px, 2.5vw, 18px)',
          color: 'rgba(240,237,232,0.5)',
          maxWidth: '420px',
          margin: '0 auto clamp(28px, 4vh, 40px)',
          lineHeight: 1.65,
          opacity: 0,
        }}>
          The people you are trying to reach decided they were done a long time ago.
          We found a way back in.
        </p>

        {/* CTA */}
        <button
          ref={btnRef}
          onClick={scrollToWaitlist}
          aria-label="Join the KayBorg AI waitlist"
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 700,
            fontSize: '13px',
            color: '#0C0C0E',
            background: '#C8A96E',
            border: 'none',
            borderRadius: '24px',
            padding: 'clamp(11px, 2vw, 13px) clamp(24px, 4vw, 30px)',
            cursor: 'pointer',
            letterSpacing: '0.04em',
            opacity: 0,
            transition: 'opacity 0.2s',
            minHeight: '44px',
            minWidth: '160px',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
        >
          Join the Waitlist
        </button>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '28px', left: '50%',
        transform: 'translateX(-50%)',
        pointerEvents: 'none',
      }}>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, transparent, rgba(200,169,110,0.4))',
          animation: 'scrollPulse 1.8s ease-in-out infinite',
        }} />
        <style>{`
          @keyframes scrollPulse {
            0%, 100% { opacity: 0.3; transform: scaleY(0.8); }
            50% { opacity: 1; transform: scaleY(1); }
          }
        `}</style>
      </div>
    </section>
  )
}
