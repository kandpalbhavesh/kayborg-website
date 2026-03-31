'use client'

// Cosmos-exact hero: large headline + short subheading + white CTA
// Elements animate in on load via .hero-in CSS keyframe

export default function Hero() {
  const go = () => {
    try {
      document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
    } catch { /* silent */ }
  }

  return (
    <section style={{
      minHeight: '100vh',
      background: '#0D0D0D',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(80px, 12vh, 120px) clamp(20px, 5vw, 48px) clamp(60px, 8vh, 80px)',
      textAlign: 'center',
    }}>
      {/* Headline — staggered fade-up */}
      <h1
        className="hero-in"
        style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 'clamp(48px, 9.5vw, 120px)',
          color: '#FFFFFF',
          letterSpacing: '-0.05em',
          lineHeight: 0.9,
          margin: '0 0 clamp(16px, 2vw, 24px)',
          animationDelay: '0ms',
        }}
      >
        Advertising.<br />Reinvented.
      </h1>

      {/* Subheading */}
      <p
        className="hero-in"
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontWeight: 300,
          fontSize: 'clamp(15px, 2vw, 18px)',
          color: 'rgba(255,255,255,0.45)',
          maxWidth: '420px',
          margin: '0 auto clamp(32px, 5vh, 48px)',
          lineHeight: 1.6,
          animationDelay: '120ms',
        }}
      >
        Brand products embedded inside creator videos.
        Frame by frame. At pixel level. Unblockable.
      </p>

      {/* CTA */}
      <button
        className="hero-in"
        onClick={go}
        aria-label="Join the KayBOrg AI waitlist"
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontWeight: 500,
          fontSize: '14px',
          color: '#0D0D0D',
          background: '#FFFFFF',
          border: 'none',
          borderRadius: '24px',
          padding: 'clamp(11px, 2vw, 13px) clamp(24px, 4vw, 32px)',
          cursor: 'pointer',
          transition: 'opacity 0.2s',
          minHeight: '44px',
          minWidth: '140px',
          animationDelay: '240ms',
        }}
        onMouseEnter={e => { e.currentTarget.style.opacity = '0.8' }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
      >
        Sign up
      </button>
    </section>
  )
}
