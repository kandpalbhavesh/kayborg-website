'use client'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(0,0,0,0.07)',
      padding: '20px clamp(24px, 4vw, 48px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px',
      background: '#FFFFFF',
    }}>
      <span style={{
        fontFamily: 'var(--font-dm-sans)',
        fontSize: '12px',
        color: 'rgba(0,0,0,0.28)',
        letterSpacing: '0.01em',
      }}>
        © 2026 KayBOrg AI
      </span>

      <span style={{
        fontFamily: 'var(--font-dm-mono)',
        fontSize: '10px',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'rgba(0,0,0,0.2)',
      }}>
        Confidential
      </span>
    </footer>
  )
}
