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
        <a href="#" className="kb-nav__logo" aria-label="KayBOrg AI — home">
          <Logo size={14} color="rgba(255,255,255,0.7)" />
          <span className="kb-nav__wordmark">KayBOrg AI</span>
        </a>

        {/* Desktop links */}
        <div className="kb-nav__links kb-nav__links--desktop">
          <a href="#philosophy" className="kb-nav__link">Philosophy</a>
          <a href="#work"       className="kb-nav__link">Work</a>
          <a href="mailto:hello@kayborg.ai" className="kb-nav__link">Contact</a>
          <a href="mailto:hello@kayborg.ai" className="kb-nav__cta">Enter the Future</a>
        </div>

        {/* Mobile — contact CTA only */}
        <div className="kb-nav__links kb-nav__links--mobile">
          <a href="mailto:hello@kayborg.ai" className="kb-nav__cta-mobile" aria-label="Contact us">
            {/* Envelope icon */}
            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" aria-hidden>
              <rect x="0.75" y="0.75" width="13.5" height="10.5" rx="1.5"
                stroke="rgba(255,255,255,0.45)" strokeWidth="1.2"/>
              <path d="M1 2L7.5 7L14 2" stroke="rgba(255,255,255,0.45)"
                strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <span className="kb-nav__cta-mobile-label">Contact</span>
          </a>
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
          padding: 0 clamp(16px, 4vw, 64px);
          background: transparent;
          border-bottom: 1px solid transparent;
          transition:
            transform 0.45s cubic-bezier(0.16,1,0.3,1),
            background 0.35s ease,
            border-color 0.35s ease;
          /* GPU compositing layer */
          will-change: transform;
        }
        .kb-nav--scrolled {
          background: rgba(10,10,10,0.9);
          border-color: rgba(255,255,255,0.05);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }
        .kb-nav--hidden { transform: translateY(-100%); }

        /* Logo */
        .kb-nav__logo {
          display: flex;
          align-items: center;
          gap: 9px;
          text-decoration: none;
          user-select: none;
          min-height: 44px; /* touch target */
        }
        .kb-nav__wordmark {
          font-family: var(--font-syne);
          font-weight: 700;
          font-size: 13px;
          color: rgba(255,255,255,0.75);
          letter-spacing: -0.01em;
        }

        /* Desktop links */
        .kb-nav__links { display: flex; align-items: center; gap: 32px; }
        .kb-nav__links--desktop { display: flex; }
        .kb-nav__links--mobile  { display: none; }

        .kb-nav__link {
          font-family: var(--font-dm-sans);
          font-size: 12px;
          font-weight: 300;
          color: rgba(255,255,255,0.28);
          text-decoration: none;
          letter-spacing: 0.02em;
          padding: 4px 0;
          min-height: 44px;
          display: flex;
          align-items: center;
          transition: color 0.2s;
        }
        .kb-nav__link:hover { color: rgba(255,255,255,0.72); }

        .kb-nav__cta {
          font-family: var(--font-dm-sans);
          font-size: 11px;
          font-weight: 400;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0 16px;
          height: 34px;
          display: flex;
          align-items: center;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 2px;
          transition: border-color 0.2s, color 0.2s;
          white-space: nowrap;
        }
        .kb-nav__cta:hover {
          border-color: rgba(255,255,255,0.3);
          color: rgba(255,255,255,0.9);
        }

        /* Mobile CTA */
        .kb-nav__cta-mobile {
          display: flex;
          align-items: center;
          gap: 7px;
          min-height: 44px;
          min-width: 44px;
          padding: 0 4px;
          text-decoration: none;
          color: rgba(255,255,255,0.4);
          font-family: var(--font-dm-sans);
          font-size: 12px;
          font-weight: 300;
          letter-spacing: 0.03em;
          transition: color 0.2s;
        }
        .kb-nav__cta-mobile:hover { color: rgba(255,255,255,0.75); }
        .kb-nav__cta-mobile-label { color: inherit; }

        /* ── Responsive ── */
        @media (max-width: 767px) {
          .kb-nav__links--desktop { display: none; }
          .kb-nav__links--mobile  { display: flex; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .kb-nav__links { gap: 20px; }
          .kb-nav__cta   { padding: 0 12px; }
        }
      `}</style>
    </>
  )
}
