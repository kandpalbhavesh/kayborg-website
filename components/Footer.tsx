'use client'

// Cosmos-style minimal footer
// © year | Connect (Instagram · TikTok · X · LinkedIn) | More (Terms · Privacy)

const connect = ['Instagram', 'TikTok', 'X', 'LinkedIn']
const more    = ['Terms', 'Privacy']

export default function Footer() {
  const mutedStyle = {
    fontFamily: 'var(--font-dm-sans)',
    fontSize: '12px',
    color: 'rgba(240,237,232,0.28)',
    background: 'none' as const,
    border: 'none' as const,
    cursor: 'pointer' as const,
    padding: '0' as const,
    transition: 'color 0.2s',
  }

  return (
    <footer style={{
      background: '#0C0C0E',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '20px clamp(16px, 3vw, 32px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px',
    }}>
      {/* Copyright */}
      <span style={{ ...mutedStyle, cursor: 'default' }}>
        © 2026 KayBOrg AI
      </span>

      {/* Connect — cosmos social links */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        {connect.map(s => (
          <button
            key={s}
            style={mutedStyle}
            onMouseEnter={e => { e.currentTarget.style.color = '#F0EDE8' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(240,237,232,0.28)' }}
          >
            {s}
          </button>
        ))}
      </div>

      {/* More — legal links */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        {more.map(l => (
          <button
            key={l}
            style={mutedStyle}
            onMouseEnter={e => { e.currentTarget.style.color = 'rgba(240,237,232,0.6)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(240,237,232,0.28)' }}
          >
            {l}
          </button>
        ))}
      </div>
    </footer>
  )
}
