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
      el.style.transition = `opacity 0.7s ease, transform 0.7s ease`
      setTimeout(() => {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, delay + 100)
    })
  }, [])

  const scrollToWaitlist = () => {
    const el = document.querySelector('#waitlist')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      data-scroll
      data-scroll-section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FFFFFF',
        paddingTop: '52px',
        paddingBottom: '80px',
        textAlign: 'center',
        padding: '52px 24px 80px',
      }}
    >
      <div style={{ maxWidth: '800px', width: '100%' }}>
        {/* Label */}
        <div
          ref={labelRef}
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 700,
            fontSize: '10px',
            color: '#AEAEB2',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            marginBottom: '40px',
            opacity: 0,
          }}
        >
          Launching 2026 · India
        </div>

        {/* H1 */}
        <h1
          ref={h1Ref}
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(56px, 9vw, 116px)',
            color: '#111111',
            letterSpacing: '-0.05em',
            lineHeight: 0.92,
            margin: 0,
            opacity: 0,
          }}
        >
          Advertising.
        </h1>

        {/* H2 */}
        <h2
          ref={h2Ref}
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(56px, 9vw, 116px)',
            color: '#111111',
            letterSpacing: '-0.05em',
            lineHeight: 0.92,
            margin: '0 0 40px',
            opacity: 0,
          }}
        >
          Reinvented.
        </h2>

        {/* Sub copy */}
        <p
          ref={subRef}
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 300,
            fontSize: '18px',
            color: '#6B6B6B',
            maxWidth: '420px',
            margin: '0 auto 40px',
            lineHeight: 1.65,
            opacity: 0,
          }}
        >
          The people you are trying to reach
          decided they were done a long time ago.
          We found a way back in.
        </p>

        {/* CTA Button */}
        <button
          ref={btnRef}
          onClick={scrollToWaitlist}
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 700,
            fontSize: '13px',
            color: '#FFFFFF',
            background: '#111111',
            border: 'none',
            borderRadius: '24px',
            padding: '13px 30px',
            cursor: 'pointer',
            letterSpacing: '0.02em',
            opacity: 0,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.8' }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
        >
          Join the Waitlist
        </button>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, transparent, #CCCCCC)',
            animation: 'scrollPulse 1.8s ease-in-out infinite',
          }}
        />
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
