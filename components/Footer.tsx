'use client'

import Logo from './Logo'

const SOCIAL = ['Instagram', 'TikTok', 'X', 'LinkedIn']
const LEGAL  = ['Terms', 'Privacy']

export default function Footer() {
  const dim = {
    fontFamily: 'var(--font-dm-sans)',
    fontSize: '12px',
    color: 'rgba(255,255,255,0.24)',
    background: 'none' as const,
    border: 'none' as const,
    cursor: 'pointer' as const,
    padding: '0' as const,
    letterSpacing: '0.01em',
    transition: 'color 0.2s',
  }

  return (
    <footer style={{
      background: '#080808',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '20px clamp(16px, 3.5vw, 32px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '16px',
    }}>
      {/* Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.4 }}>
        <Logo size={14} />
        <span style={{ ...dim, cursor: 'default', color: 'rgba(255,255,255,0.4)', fontSize: '12px', fontFamily: 'var(--font-syne)', fontWeight: 700, letterSpacing: '-0.01em' }}>
          KayBOrg AI
        </span>
        <span style={{ ...dim, cursor: 'default', marginLeft: '4px' }}>© 2026</span>
      </div>

      {/* Social */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        {SOCIAL.map(s => (
          <button
            key={s} style={dim}
            onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.24)' }}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Legal */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        {LEGAL.map(l => (
          <button
            key={l} style={dim}
            onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.24)' }}
          >
            {l}
          </button>
        ))}
      </div>
    </footer>
  )
}
