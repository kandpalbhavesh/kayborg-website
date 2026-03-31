'use client'

import { useEffect, useState, useCallback } from 'react'
import Logo from './Logo'

function safeScrollTo(id: string) {
  if (id !== 'waitlist') return
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const nav = useCallback((id: string) => {
    setMenuOpen(false)
    setTimeout(() => safeScrollTo(id), 50)
  }, [])

  const linkStyle = {
    fontFamily: 'var(--font-dm-sans)',
    fontSize: '13px',
    color: 'rgba(0,0,0,0.45)' as string,
    background: 'none' as const,
    border: 'none' as const,
    cursor: 'pointer' as const,
    padding: '0' as const,
    letterSpacing: '0.01em',
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
          height: '56px',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(16px, 3.5vw, 32px)',
          background: scrolled ? 'rgba(255,255,255,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.07)' : '1px solid transparent',
          transition: 'background 0.4s ease, border-color 0.4s ease',
        }}
      >
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'default', userSelect: 'none' }}>
          <Logo size={20} color="#0A0A0A" />
          <span style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 700,
            fontSize: '14px',
            color: '#0A0A0A',
            letterSpacing: '-0.02em',
          }}>
            KayBOrg AI
          </span>
        </div>

        {/* Centre links */}
        <div className="nav-center" style={{ display: 'flex', gap: '32px' }}>
          {['For Brands', 'For Creators'].map(label => (
            <button
              key={label}
              onClick={() => nav('waitlist')}
              style={linkStyle}
              onMouseEnter={e => { e.currentTarget.style.color = '#0A0A0A' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(0,0,0,0.45)' }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right CTAs */}
        <div className="nav-right" style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <button
            style={{ ...linkStyle, padding: '7px 12px' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#0A0A0A' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(0,0,0,0.45)' }}
          >
            Log in
          </button>
          <button
            onClick={() => nav('waitlist')}
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 500,
              fontSize: '13px',
              color: '#FFFFFF',
              background: '#0A0A0A',
              border: 'none',
              borderRadius: '20px',
              padding: '7px 18px',
              cursor: 'pointer',
              transition: 'opacity 0.2s, transform 0.2s',
              minHeight: '34px',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity = '0.82'
              e.currentTarget.style.transform = 'scale(0.97)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.transform = 'scale(1)'
            }}
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
            { w: '14px', o: menuOpen ? 0 : 1 },
            { w: '22px', t: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' },
          ].map((b, i) => (
            <span key={i} style={{
              display: 'block', width: b.w, height: '1.5px',
              background: '#0A0A0A', borderRadius: '2px',
              transition: 'transform 0.3s, opacity 0.3s',
              transform: b.t, opacity: b.o ?? 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        aria-hidden={!menuOpen}
        style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(24px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '44px',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      >
        {['For Brands', 'For Creators'].map(label => (
          <button key={label} onClick={() => nav('waitlist')} style={{
            fontFamily: 'var(--font-syne)', fontWeight: 700,
            fontSize: 'clamp(28px, 8vw, 44px)', color: '#0A0A0A',
            background: 'none', border: 'none', cursor: 'pointer',
            letterSpacing: '-0.03em',
          }}>
            {label}
          </button>
        ))}
        <button onClick={() => nav('waitlist')} style={{
          fontFamily: 'var(--font-dm-sans)', fontWeight: 500,
          fontSize: '14px', color: '#FFFFFF',
          background: '#0A0A0A', border: 'none', borderRadius: '24px',
          padding: '14px 40px', cursor: 'pointer', marginTop: '8px',
        }}>
          Get early access
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
