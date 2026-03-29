'use client'

import { useEffect, useState } from 'react'

const KMark = ({ muted = false }: { muted?: boolean }) => (
  <svg width="26" height="26" viewBox="0 0 38 38" fill="none">
    <rect
      x="1" y="1" width="36" height="36" rx="7"
      stroke={muted ? 'rgba(200,169,110,0.3)' : '#C8A96E'}
      strokeWidth="1.8"
      fill="none"
    />
    <line
      x1="12" y1="10" x2="12" y2="28"
      stroke={muted ? 'rgba(240,237,232,0.2)' : '#F0EDE8'}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="12" y1="19" x2="25" y2="10"
      stroke={muted ? 'rgba(240,237,232,0.2)' : '#F0EDE8'}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="12" y1="19" x2="25" y2="28"
      stroke="#C8A96E"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="28" cy="10" r="2.2" fill="#C8A96E" />
  </svg>
)

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '52px',
        zIndex: 100,
        background: 'rgba(12,12,14,0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(200,169,110,0.15)' : '1px solid transparent',
        transition: 'border-color 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <KMark />
        <span
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 700,
            fontSize: '15px',
            color: '#F0EDE8',
            letterSpacing: '-0.01em',
          }}
        >
          KayBOrg AI
        </span>
      </div>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        <button
          onClick={() => scrollTo('#chapter-problem')}
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 400,
            fontSize: '13px',
            color: 'rgba(240,237,232,0.45)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#C8A96E' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(240,237,232,0.45)' }}
        >
          How it works
        </button>
        <button
          onClick={() => scrollTo('#waitlist')}
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 400,
            fontSize: '13px',
            color: 'rgba(240,237,232,0.45)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#C8A96E' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(240,237,232,0.45)' }}
        >
          Early Access
        </button>
      </div>

      <button
        onClick={() => scrollTo('#waitlist')}
        style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 700,
          fontSize: '12px',
          color: '#C8A96E',
          background: 'transparent',
          border: '1px solid rgba(200,169,110,0.4)',
          borderRadius: '24px',
          padding: '8px 20px',
          cursor: 'pointer',
          letterSpacing: '0.04em',
          transition: 'background 0.2s, color 0.2s, border-color 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = '#C8A96E'
          e.currentTarget.style.color = '#0C0C0E'
          e.currentTarget.style.borderColor = '#C8A96E'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'transparent'
          e.currentTarget.style.color = '#C8A96E'
          e.currentTarget.style.borderColor = 'rgba(200,169,110,0.4)'
        }}
      >
        Early Access
      </button>
    </nav>
  )
}

export { KMark }
