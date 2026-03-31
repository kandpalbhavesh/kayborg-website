'use client'

export default function Vision() {
  const scrollToWaitlist = () => {
    try {
      const el = document.getElementById('waitlist')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } catch { /* silent */ }
  }

  return (
    <section style={{
      background: '#0C0C0E',
      padding: 'clamp(80px, 13vh, 160px) clamp(20px, 5vw, 48px)',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '580px', margin: '0 auto' }}>
        {/* Cosmos-style serif manifesto — paragraph 1 */}
        <p style={{
          fontFamily: 'var(--font-instrument-serif)',
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: 'clamp(22px, 4vw, 44px)',
          color: '#F0EDE8',
          lineHeight: 1.28,
          margin: '0 0 clamp(32px, 5vh, 56px)',
        }}>
          KayBOrg is where advertising breathes.
          Where brands and creators move together.
          And attention is earned frame by frame.
        </p>

        {/* Paragraph 2 */}
        <p style={{
          fontFamily: 'var(--font-instrument-serif)',
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: 'clamp(20px, 3.5vw, 38px)',
          color: 'rgba(240,237,232,0.5)',
          lineHeight: 1.3,
          margin: '0 0 clamp(40px, 6vh, 72px)',
        }}>
          A place to begin. To become.
          Where products find their audience
          without ever interrupting them.
        </p>

        {/* Cosmos-style text CTA */}
        <button
          onClick={scrollToWaitlist}
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 400,
            fontSize: 'clamp(14px, 2vw, 16px)',
            color: 'rgba(240,237,232,0.5)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            letterSpacing: '0.01em',
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#F0EDE8' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(240,237,232,0.5)' }}
        >
          Come build with us. Get started →
        </button>
      </div>
    </section>
  )
}
