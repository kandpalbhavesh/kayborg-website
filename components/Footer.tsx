'use client'

import { KMark } from './Nav'

export default function Footer() {
  return (
    <footer
      data-scroll
      data-scroll-section
      style={{
        background: '#111111',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '28px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Left: Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <KMark muted />
        <span
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 700,
            fontSize: '14px',
            color: 'rgba(255,255,255,0.25)',
          }}
        >
          KayBOrg AI
        </span>
      </div>

      {/* Right: Copyright */}
      <p
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontWeight: 300,
          fontSize: '11px',
          color: 'rgba(255,255,255,0.2)',
          margin: 0,
        }}
      >
        © 2026 KayBorg AI · Advertising. Reinvented.
      </p>
    </footer>
  )
}
