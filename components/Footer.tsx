'use client'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '20px clamp(24px, 5vw, 56px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px',
      background: '#0A0A0A',
    }}>
      <span style={{
        fontFamily: 'var(--font-dm-sans)',
        fontSize: '12px',
        color: 'rgba(255,255,255,0.2)',
        letterSpacing: '0.01em',
      }}>
        © 2026 KayBOrg AI
      </span>
      <span style={{
        fontFamily: 'var(--font-dm-mono)',
        fontSize: '10px',
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.14)',
      }}>
        Confidential · India
      </span>
    </footer>
  )
}
