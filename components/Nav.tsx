'use client'

import { useEffect, useState, useCallback } from 'react'

// Whitelisted scroll targets — prevents CSS selector injection
const ALLOWED_SCROLL_IDS: Record<string, string> = {
  '#chapter-problem': 'chapter-problem',
  '#waitlist': 'waitlist',
}

function safeScrollTo(id: string) {
  const safeId = ALLOWED_SCROLL_IDS[id]
  if (!safeId) return
  const el = document.getElementById(safeId)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const KMark = ({ muted = false }: { muted?: boolean }) => (
  <svg width="26" height="26" viewBox="0 0 38 38" fill="none" aria-hidden="true">
    <rect
      x="1" y="1" width="36" height="36" rx="7"
      stroke={muted ? 'rgba(200,169,110,0.3)' : '#C8A96E'}
      strokeWidth="1.8" fill="none"
    />
    <line x1="12" y1="10" x2="12" y2="28"
      stroke={muted ? 'rgba(240,237,232,0.2)' : '#F0EDE8'}
      strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="19" x2="25" y2="10"
      stroke={muted ? 'rgba(240,237,232,0.2)' : '#F0EDE8'}
      strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="19" x2="25" y2="28"
      stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" />
    <circle cx="28" cy="10" r="2.2" fill="#C8A96E" />
  </svg>
)

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = useCallback((id: string) => {
    setMenuOpen(false)
    setTimeout(() => safeScrollTo(id), 50)
  }, [])

  const linkStyle = {
    fontFamily: 'var(--font-dm-sans)',
    fontWeight: 400,
    fontSize: '13px',
    color: 'rgba(240,237,232,0.45)' as string,
    background: 'none' as const,
    border: 'none' as const,
    cursor: 'pointer' as const,
    padding: 0,
    transition: 'color 0.2s',
  }

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          height: '52px',
          zIndex: 100,
          background: 'rgba(12,12,14,0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(200,169,110,0.15)' : '1px solid transparent',
          transition: 'border-color 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(16px, 4vw, 40px)',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <KMark />
          <span style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 700,
            fontSize: '15px',
            color: '#F0EDE8',
            letterSpacing: '-0.01em',
          }}>
            KayBOrg AI
          </span>
        </div>

        {/* Desktop centre links */}
        <div className="nav-desktop-links" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <button
            onClick={() => handleNav('#chapter-problem')}
            style={linkStyle}
            onMouseEnter={e => { e.currentTarget.style.color = '#C8A96E' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(240,237,232,0.45)' }}
          >
            How it works
          </button>
          <button
            onClick={() => handleNav('#waitlist')}
            style={linkStyle}
            onMouseEnter={e => { e.currentTarget.style.color = '#C8A96E' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(240,237,232,0.45)' }}
          >
            Early Access
          </button>
        </div>

        {/* Desktop CTA */}
        <button
          className="nav-desktop-cta"
          onClick={() => handleNav('#waitlist')}
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

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            alignItems: 'flex-end',
          }}
        >
          <span style={{
            display: 'block',
            width: menuOpen ? '22px' : '22px',
            height: '1.5px',
            background: '#C8A96E',
            borderRadius: '2px',
            transition: 'transform 0.3s, opacity 0.3s',
            transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block',
            width: '16px',
            height: '1.5px',
            background: '#C8A96E',
            borderRadius: '2px',
            transition: 'opacity 0.3s',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block',
            width: '22px',
            height: '1.5px',
            background: '#C8A96E',
            borderRadius: '2px',
            transition: 'transform 0.3s, opacity 0.3s',
            transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        aria-hidden={!menuOpen}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: 'rgba(12,12,14,0.98)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      >
        {[
          { label: 'How it works', id: '#chapter-problem' },
          { label: 'Early Access', id: '#waitlist' },
        ].map(({ label, id }) => (
          <button
            key={id}
            onClick={() => handleNav(id)}
            style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 700,
              fontSize: 'clamp(28px, 8vw, 40px)',
              color: '#F0EDE8',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '-0.02em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#C8A96E' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#F0EDE8' }}
          >
            {label}
          </button>
        ))}

        <button
          onClick={() => handleNav('#waitlist')}
          style={{
            marginTop: '16px',
            fontFamily: 'var(--font-syne)',
            fontWeight: 700,
            fontSize: '13px',
            color: '#0C0C0E',
            background: '#C8A96E',
            border: 'none',
            borderRadius: '24px',
            padding: '14px 36px',
            cursor: 'pointer',
            letterSpacing: '0.04em',
          }}
        >
          Join the Waitlist
        </button>
      </div>

      <style>{`
        .nav-hamburger { display: none !important; }
        @media (max-width: 767px) {
          .nav-desktop-links { display: none !important; }
          .nav-desktop-cta   { display: none !important; }
          .nav-hamburger     { display: flex !important; }
        }
      `}</style>
    </>
  )
}

export { KMark }
