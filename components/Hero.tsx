'use client'

import { useEffect, useRef } from 'react'

const LINES = [
  "The Ad That",
  "Lives Inside",
  "the Story.",
]

function WordReveal({ line, baseDelay }: { line: string; baseDelay: number }) {
  return (
    <div style={{ display: 'block' }}>
      {line.split(' ').map((word, i) => (
        <span key={i} className="word-wrap" style={{ marginRight: '0.22em' }}>
          <span className="word-inner" style={{ transitionDelay: `${baseDelay + i * 85}ms` }}>
            {word}
          </span>
        </span>
      ))}
    </div>
  )
}

export default function Hero() {
  const headRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const t = setTimeout(() => {
      headRef.current?.querySelectorAll('.word-inner').forEach(el => el.classList.add('up'))
    }, 60)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = (id: string) => {
    try { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) } catch { /* silent */ }
  }

  return (
    <section style={{
      minHeight: '100vh',
      background: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(100px, 14vh, 140px) clamp(20px, 5vw, 48px) clamp(60px, 8vh, 80px)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle background circle */}
      <div style={{
        position: 'absolute',
        top: '40%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw', height: '60vw',
        maxWidth: '700px', maxHeight: '700px',
        background: 'radial-gradient(ellipse, rgba(0,0,0,0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'glowPulse 6s ease-in-out infinite',
      }} />

      {/* Label */}
      <div className="fade-up" style={{
        fontFamily: 'var(--font-dm-mono)',
        fontSize: '10px',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'rgba(0,0,0,0.3)',
        marginBottom: 'clamp(28px, 4vh, 40px)',
        animationDelay: '0ms',
      }}>
        AI-powered brand placement
      </div>

      {/* Headline */}
      <h1 ref={headRef} style={{
        fontFamily: 'var(--font-syne)',
        fontWeight: 800,
        fontSize: 'clamp(52px, 9.5vw, 128px)',
        color: '#0A0A0A',
        letterSpacing: '-0.05em',
        lineHeight: 0.92,
        margin: '0 0 clamp(20px, 3vh, 32px)',
      }}>
        {LINES.map((line, i) => (
          <WordReveal key={i} line={line} baseDelay={100 + i * 180} />
        ))}
      </h1>

      {/* Subheading */}
      <p className="fade-up" style={{
        fontFamily: 'var(--font-dm-sans)',
        fontWeight: 300,
        fontSize: 'clamp(15px, 1.8vw, 18px)',
        color: 'rgba(0,0,0,0.48)',
        maxWidth: '440px',
        margin: '0 auto clamp(36px, 5vh, 52px)',
        lineHeight: 1.65,
        animationDelay: '820ms',
      }}>
        KayBOrg AI embeds brand products inside creator videos —
        frame by frame, pixel by pixel.
        Unblockable by design.
      </p>

      {/* CTAs */}
      <div className="fade-up" style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        animationDelay: '1000ms',
      }}>
        <button
          onClick={() => scrollTo('waitlist')}
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 500,
            fontSize: '14px',
            color: '#FFFFFF',
            background: '#0A0A0A',
            border: 'none',
            borderRadius: '24px',
            padding: 'clamp(12px, 2vw, 14px) clamp(28px, 4vw, 36px)',
            cursor: 'pointer',
            transition: 'opacity 0.2s, transform 0.2s',
            minHeight: '46px',
            letterSpacing: '0.01em',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.82'; e.currentTarget.style.transform = 'scale(0.97)' }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)' }}
        >
          Get early access
        </button>

        <button
          onClick={() => scrollTo('how-it-works')}
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 400,
            fontSize: '14px',
            color: 'rgba(0,0,0,0.45)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 'clamp(12px, 2vw, 14px) 4px',
            minHeight: '46px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#0A0A0A' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(0,0,0,0.45)' }}
        >
          See how it works
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2.5L7 11.5M3 7.5L7 11.5L11 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="fade-up" style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)', animationDelay: '1400ms' }}>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), transparent)', margin: '0 auto' }} />
      </div>
    </section>
  )
}
