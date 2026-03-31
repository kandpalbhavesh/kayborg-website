'use client'

import { useEffect, useRef } from 'react'

// World-class hero: word-by-word reveal, ambient glow, dual CTA
// Copy: "The Ad That Lives Inside the Story." — positioning: embedded, not interrupting

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
          <span
            className="word-inner"
            style={{ transitionDelay: `${baseDelay + i * 85}ms` }}
          >
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
      headRef.current
        ?.querySelectorAll('.word-inner')
        .forEach(el => el.classList.add('up'))
    }, 60)
    return () => clearTimeout(t)
  }, [])

  const scrollToWaitlist = () => {
    try { document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' }) }
    catch { /* silent */ }
  }

  const scrollToHow = () => {
    try { document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }) }
    catch { /* silent */ }
  }

  return (
    <section style={{
      minHeight: '100vh',
      background: '#080808',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(100px, 14vh, 140px) clamp(20px, 5vw, 48px) clamp(60px, 8vh, 80px)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient radial glow — subtle, breathes */}
      <div style={{
        position: 'absolute',
        top: '42%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70vw', height: '50vw',
        maxWidth: '900px', maxHeight: '600px',
        background: 'radial-gradient(ellipse, rgba(255,255,255,0.055) 0%, transparent 68%)',
        pointerEvents: 'none',
        animation: 'glowPulse 5s ease-in-out infinite',
      }} />

      {/* Label */}
      <div
        className="fade-up"
        style={{
          fontFamily: 'var(--font-dm-mono)',
          fontSize: '10px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.3)',
          marginBottom: 'clamp(28px, 4vh, 40px)',
          animationDelay: '0ms',
        }}
      >
        AI-powered brand placement
      </div>

      {/* Headline — word-by-word reveal */}
      <h1
        ref={headRef}
        style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 'clamp(52px, 9.5vw, 128px)',
          color: '#FFFFFF',
          letterSpacing: '-0.05em',
          lineHeight: 0.92,
          margin: '0 0 clamp(20px, 3vh, 32px)',
        }}
      >
        {LINES.map((line, i) => (
          <WordReveal key={i} line={line} baseDelay={100 + i * 180} />
        ))}
      </h1>

      {/* Subheading */}
      <p
        className="fade-up"
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontWeight: 300,
          fontSize: 'clamp(15px, 1.8vw, 18px)',
          color: 'rgba(255,255,255,0.48)',
          maxWidth: '440px',
          margin: '0 auto clamp(36px, 5vh, 52px)',
          lineHeight: 1.65,
          animationDelay: '820ms',
        }}
      >
        KayBOrg AI embeds brand products inside creator videos —
        frame by frame, pixel by pixel.
        Unblockable by design.
      </p>

      {/* CTA pair */}
      <div
        className="fade-up"
        style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center',
          animationDelay: '1000ms',
        }}
      >
        {/* Primary */}
        <button
          onClick={scrollToWaitlist}
          aria-label="Get early access to KayBOrg AI"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 500,
            fontSize: '14px',
            color: '#080808',
            background: '#FFFFFF',
            border: 'none',
            borderRadius: '24px',
            padding: 'clamp(12px, 2vw, 14px) clamp(28px, 4vw, 36px)',
            cursor: 'pointer',
            transition: 'opacity 0.2s, transform 0.2s',
            minHeight: '46px',
            letterSpacing: '0.01em',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.opacity = '0.88'
            e.currentTarget.style.transform = 'scale(0.97)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.opacity = '1'
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          Get early access
        </button>

        {/* Ghost */}
        <button
          onClick={scrollToHow}
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 400,
            fontSize: '14px',
            color: 'rgba(255,255,255,0.5)',
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
          onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
        >
          See how it works
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2.5L7 11.5M3 7.5L7 11.5L11 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Scroll hint */}
      <div
        className="fade-up"
        style={{
          position: 'absolute',
          bottom: '28px',
          left: '50%',
          transform: 'translateX(-50%)',
          animationDelay: '1400ms',
        }}
      >
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)',
          margin: '0 auto',
        }} />
      </div>
    </section>
  )
}
