'use client'

const lines: { text: string; accent?: boolean; spacer?: boolean }[] = [
  { text: 'The people you are trying to reach' },
  { text: 'decided they were done a long time ago.' },
  { spacer: true, text: '' },
  { text: '912 million of them.', accent: true },
  { spacer: true, text: '' },
  { text: 'Ad blockers. Skip buttons.' },
  { text: 'The second screen.' },
  { spacer: true, text: '' },
  { text: 'You cannot fight your way back' },
  { text: 'into a room you were asked to leave.' },
  { spacer: true, text: '' },
  { text: 'We found a different way in.', accent: true },
]

export default function Hero() {
  const scrollToWaitlist = () => {
    try {
      const el = document.getElementById('waitlist')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } catch { /* silent */ }
  }

  return (
    <section style={{
      minHeight: '100vh',
      background: '#0C0C0E',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(90px, 13vh, 130px) clamp(20px, 5vw, 48px) clamp(60px, 8vh, 80px)',
      textAlign: 'center',
    }}>
      {/* Main headline — cosmos large type */}
      <h1 style={{
        fontFamily: 'var(--font-syne)',
        fontWeight: 800,
        fontSize: 'clamp(52px, 10vw, 130px)',
        color: '#F0EDE8',
        letterSpacing: '-0.05em',
        lineHeight: 0.88,
        margin: 0,
      }}>
        Advertising.
      </h1>
      <h2 style={{
        fontFamily: 'var(--font-syne)',
        fontWeight: 800,
        fontSize: 'clamp(52px, 10vw, 130px)',
        color: '#C8A96E',
        letterSpacing: '-0.05em',
        lineHeight: 0.88,
        margin: '0 0 clamp(48px, 8vh, 88px)',
      }}>
        Reinvented.
      </h2>

      {/* Cosmos-style stacked manifesto lines */}
      <div style={{ maxWidth: '460px', margin: '0 auto clamp(48px, 7vh, 80px)' }}>
        {lines.map((line, i) =>
          line.spacer ? (
            <div key={i} style={{ height: '18px' }} />
          ) : (
            <p key={i} style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 300,
              fontSize: 'clamp(15px, 2.2vw, 19px)',
              color: line.accent ? '#C8A96E' : 'rgba(240,237,232,0.45)',
              lineHeight: 1.55,
              margin: 0,
            }}>
              {line.text}
            </p>
          )
        )}
      </div>

      {/* CTA — cosmos white pill button style */}
      <button
        onClick={scrollToWaitlist}
        aria-label="Join the KayBOrg AI waitlist"
        style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 700,
          fontSize: '13px',
          color: '#0C0C0E',
          background: '#F0EDE8',
          border: 'none',
          borderRadius: '24px',
          padding: 'clamp(11px, 2vw, 13px) clamp(24px, 4vw, 32px)',
          cursor: 'pointer',
          letterSpacing: '0.01em',
          transition: 'opacity 0.2s',
          minHeight: '44px',
          minWidth: '160px',
        }}
        onMouseEnter={e => { e.currentTarget.style.opacity = '0.82' }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
      >
        Join the Waitlist →
      </button>
    </section>
  )
}
