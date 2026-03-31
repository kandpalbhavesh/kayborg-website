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

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = useCallback((id: string) => {
    setMenuOpen(false)
    setTimeout(() => safeScrollTo(id), 50)
  }, [])

  const link = {
    fontFamily: 'var(--font-dm-sans)',
    fontSize: '13px',
    color: 'rgba(255,255,255,0.5)' as string,
    background: 'none' as const,
    border: 'none' as const,
    cursor: 'pointer' as const,
    padding: '0' as const,
    transition: 'color 0.2s',
  }

  return (
    <>
      {/* ── Cosmos-exact nav ─────────────────── */}
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
          padding: '0 clamp(16px, 3vw, 28px)',
          background: scrolled ? 'rgba(13,13,13,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
          transition: 'background 0.3s, border-color 0.3s',
        }}
      >
        {/* Logo — cosmos uses plain wordmark */}
        <span style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: '15px',
          color: '#FFFFFF',
          letterSpacing: '-0.03em',
          cursor: 'default',
          userSelect: 'none',
        }}>
          KayBOrg AI
        </span>

        {/* Centre links — "Discover · Careers" equivalent */}
        <div className="nav-center" style={{ display: 'flex', gap: '28px' }}>
          {['For Brands', 'For Creators'].map(label => (
            <button
              key={label}
              onClick={() => handleNav('#waitlist')}
              style={link}
              onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right — "Log in · Sign up" exact cosmos */}
        <div className="nav-right" style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <button
            style={{ ...link, padding: '7px 10px' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
          >
            Log in
          </button>
          {/* Cosmos "Sign up" = white pill, dark text */}
          <button
            onClick={() => handleNav('#waitlist')}
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 500,
              fontSize: '13px',
              color: '#0D0D0D',
              background: '#FFFFFF',
              border: 'none',
              borderRadius: '20px',
              padding: '7px 16px',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
              minHeight: '34px',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.8' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
          >
            Sign up
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
            { w: '22px', t: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' },
            { w: '16px', o: menuOpen ? 0 : 1 },
            { w: '22px', t: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' },
          ].map((b, i) => (
            <span key={i} style={{
              display: 'block', width: b.w, height: '1.5px',
              background: '#FFFFFF', borderRadius: '2px',
              transition: 'transform 0.3s, opacity 0.3s',
              transform: b.t, opacity: b.o ?? 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <div aria-hidden={!menuOpen} style={{
        position: 'fixed', inset: 0, zIndex: 99,
        background: 'rgba(13,13,13,0.98)', backdropFilter: 'blur(20px)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '40px',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'auto' : 'none',
        transition: 'opacity 0.3s ease',
      }}>
        {['For Brands', 'For Creators'].map(label => (
          <button key={label} onClick={() => handleNav('#waitlist')} style={{
            fontFamily: 'var(--font-syne)', fontWeight: 700,
            fontSize: 'clamp(28px, 8vw, 40px)', color: '#FFFFFF',
            background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '-0.02em',
          }}>
            {label}
          </button>
        ))}
        <button onClick={() => handleNav('#waitlist')} style={{
          marginTop: '8px',
          fontFamily: 'var(--font-dm-sans)', fontWeight: 500,
          fontSize: '14px', color: '#0D0D0D',
          background: '#FFFFFF', border: 'none', borderRadius: '24px',
          padding: '14px 36px', cursor: 'pointer',
        }}>
          Sign up
        </button>
      </div>

      <style>{`
        .nav-hamburger { display: none !important; }
        @media (max-width: 767px) {
          .nav-center    { display: none !important; }
          .nav-right     { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
