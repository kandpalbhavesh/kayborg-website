'use client'

import { KMark } from './Nav'

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0C0C0E',
        borderTop: '1px solid rgba(200,169,110,0.1)',
        padding: '28px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <KMark muted />
        <span
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 700,
            fontSize: '14px',
            color: 'rgba(200,169,110,0.3)',
          }}
        >
          KayBOrg AI
        </span>
      </div>

      <p
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontWeight: 300,
          fontSize: '11px',
          color: 'rgba(240,237,232,0.18)',
          margin: 0,
        }}
      >
        © 2026 KayBorg AI · Advertising. Reinvented.
      </p>
    </footer>
  )
}
