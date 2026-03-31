'use client'

import { useEffect, useState, useCallback } from 'react'

const ALLOWED_SCROLL_IDS: Record<string, string> = {
  '#waitlist': 'waitlist',
}

function safeScrollTo(id: string) {
  const safeId = ALLOWED_SCROLL_IDS[id]
  if (!safeId) return
  const el = document.getElementById(safeId)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

// KayBOrg K-mark logomark
const KMark = ({ muted = false }: { muted?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 38 38" fill="none" aria-hidden="true">
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
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = useCallback((id: string) => {
    setMenuOpen(false)
    setTimeout(() => safeScrollTo(id), 50)
  }, [])

  const navLinkStyle = {
    fontFamily: 'var(--font-dm-sans)',
    fontSize: '13px',
    color: 'rgba(240,237,232,0.5)' as string,
    background: 'none' as const,
    border: 'none' as const,
    cursor: 'pointer' as const,
    padding: '0' as const,
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(16px, 3vw, 32px)',
          background: scrolled ? 'rgba(12,12,14,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
          transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
          <KMark />
          <span style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: '15px',
            color: '#F0EDE8',
            letterSpacing: '-0.02em',
          }}>
            KayBOrg AI
          </span>
        </div>

        {/* Desktop centre links — cosmos "Discover · Careers" style */}
        <div className="nav-center" style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          <button
            onClick={() => handleNav('#waitlist')}
            style={navLinkStyle}
            onMouseEnter={e => { e.currentTarget.style.color = '#F0EDE8' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(240,237,232,0.5)' }}
          >
            For Brands
          </button>
          <button
            onClick={() => handleNav('#waitlist')}
            style={navLinkStyle}
            onMouseEnter={e => { e.currentTarget.style.color = '#F0EDE8' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(240,237,232,0.5)' }}
          >
            For Creators
          </button>
        </div>

        {/* Desktop right — cosmos "Log in · Sign up" style */}
        <div className="nav-right" style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <button
            style={{
              ...navLinkStyle,
              padding: '7px 12px',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#F0EDE8' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(240,237,232,0.5)' }}
          >
            Log in
          </button>
          <button
            onClick={() => handleNav('#waitlist')}
            style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 700,
              fontSize: '12px',
              color: '#0C0C0E',
              background: '#F0EDE8',
              border: 'none',
              borderRadius: '20px',
              padding: '7px 16px',
              cursor: 'pointer',
              letterSpacing: '0.01em',
              transition: 'opacity 0.2s',
              minHeight: '36px',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.82' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
          >
            Join Waitlist
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '8px', display: 'flex', flexDirection: 'column',
            gap: '5px', alignItems: 'flex-end',
          }}
        >
          {[
            { w: '22px', transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' },
            { w: '16px', opacity: menuOpen ? 0 : 1 },
            { w: '22px', transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' },
          ].map((bar, i) => (
            <span key={i} style={{
              display: 'block',
              width: (bar as { w: string }).w,
              height: '1.5px',
              background: '#F0EDE8',
              borderRadius: '2px',
              transition: 'transform 0.3s, opacity 0.3s',
              transform: (bar as { transform?: string }).transform,
              opacity: (bar as { opacity?: number }).opacity ?? 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        aria-hidden={!menuOpen}
        style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'rgba(12,12,14,0.98)',
          backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: '40px',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      >
        {(['For Brands', 'For Creators'] as const).map(label => (
          <button
            key={label}
            onClick={() => handleNav('#waitlist')}
            style={{
              fontFamily: 'var(--font-syne)', fontWeight: 700,
              fontSize: 'clamp(28px, 8vw, 40px)',
              color: '#F0EDE8', background: 'none', border: 'none',
              cursor: 'pointer', letterSpacing: '-0.02em',
            }}
          >
            {label}
          </button>
        ))}
        <button
          onClick={() => handleNav('#waitlist')}
          style={{
            marginTop: '8px',
            fontFamily: 'var(--font-syne)', fontWeight: 700,
            fontSize: '13px', color: '#0C0C0E',
            background: '#F0EDE8', border: 'none',
            borderRadius: '24px', padding: '14px 36px',
            cursor: 'pointer',
          }}
        >
          Join Waitlist
        </button>
      </div>

      <style>{`
        .nav-hamburger { display: none !important; }
        @media (max-width: 767px) {
          .nav-center  { display: none !important; }
          .nav-right   { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}

export { KMark }
