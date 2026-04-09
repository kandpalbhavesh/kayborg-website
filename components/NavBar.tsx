'use client'

import { useEffect, useRef, useState } from 'react'
import Logo from './Logo'

export default function NavBar() {
  const [visible, setVisible]   = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    lastY.current = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setVisible(y < 80 || y <= lastY.current)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`kb-nav${scrolled ? ' kb-nav--scrolled' : ''}${visible ? '' : ' kb-nav--hidden'}`}>
        {/* Logo */}
        <a href="#" className="kb-nav__logo" aria-label="KayBOrg AI home">
          <Logo size={14} color="rgba(255,255,255,0.7)" />
          <span className="kb-nav__wordmark">KayBOrg AI</span>
        </a>

        {/* Links */}
        <div className="kb-nav__links">
          <a href="#philosophy" className="kb-nav__link">Philosophy</a>
          <a href="#work"       className="kb-nav__link">Work</a>
          <a href="mailto:hello@kayborg.ai" className="kb-nav__link">Contact</a>
          <a href="mailto:hello@kayborg.ai" className="kb-nav__cta">Enter the Future</a>
        </div>
      </nav>

      <style>{`
        .kb-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 60px;
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 clamp(20px, 5vw, 64px);
          background: transparent;
          border-bottom: 1px solid transparent;
          transition:
            transform 0.45s cubic-bezier(0.16,1,0.3,1),
            background 0.35s ease,
            border-color 0.35s ease,
            backdrop-filter 0.35s ease;
        }
        .kb-nav--scrolled {
          background: rgba(10,10,10,0.88);
          border-color: rgba(255,255,255,0.05);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }
        .kb-nav--hidden {
          transform: translateY(-100%);
        }
        .kb-nav__logo {
          display: flex;
          align-items: center;
          gap: 9px;
          text-decoration: none;
          user-select: none;
        }
        .kb-nav__wordmark {
          font-family: var(--font-syne);
          font-weight: 700;
          font-size: 13px;
          color: rgba(255,255,255,0.75);
          letter-spacing: -0.01em;
        }
        .kb-nav__links {
          display: flex;
          align-items: center;
          gap: 36px;
        }
        .kb-nav__link {
          font-family: var(--font-dm-sans);
          font-size: 12px;
          font-weight: 300;
          color: rgba(255,255,255,0.28);
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s ease;
        }
        .kb-nav__link:hover {
          color: rgba(255,255,255,0.72);
        }
        .kb-nav__cta {
          font-family: var(--font-dm-sans);
          font-size: 11px;
          font-weight: 400;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 7px 16px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 2px;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .kb-nav__cta:hover {
          border-color: rgba(255,255,255,0.32);
          color: rgba(255,255,255,0.9);
        }
        @media (max-width: 600px) {
          .kb-nav__links { gap: 20px; }
          .kb-nav__link  { display: none; }
          .kb-nav__cta   { display: none; }
        }
      `}</style>
    </>
  )
}
