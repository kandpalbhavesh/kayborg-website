'use client'

import { useEffect, useState } from 'react'

const KMark = ({ muted = false }: { muted?: boolean }) => (
  <svg width="26" height="26" viewBox="0 0 38 38" fill="none">
    <rect
      x="1" y="1" width="36" height="36" rx="7"
      stroke={muted ? 'rgba(255,255,255,0.3)' : '#111111'}
      strokeWidth="1.8"
      fill="none"
    />
    <line
      x1="12" y1="10" x2="12" y2="28"
      stroke={muted ? 'rgba(255,255,255,0.3)' : '#111111'}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="12" y1="19" x2="25" y2="10"
      stroke={muted ? 'rgba(255,255,255,0.3)' : '#111111'}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="12" y1="19" x2="25" y2="28"
      stroke="#D72638"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="28" cy="10" r="2.2" fill="#D72638" />
  </svg>
)

interface NavProps {
  scrollInstance?: React.MutableRefObject<any>
}

export default function Nav({ scrollInstance }: NavProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    // Also listen to locomotive scroll if available
    const checkScrolled = () => {
      const scroller = document.querySelector('[data-scroll-container]')
      if (scroller) {
        // handled by window scroll fallback
      }
    }

    window.addEventListener('scroll', handleScroll)
    checkScrolled()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (!el) return

    if (scrollInstance?.current) {
      scrollInstance.current.scrollTo(el)
    } else {
      el.scrollIntoView({ behavior: 'smooth' })
    }
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
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid #E8E8E8' : '1px solid transparent',
        transition: 'border-color 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
      }}
    >
      {/* Left: Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <KMark />
        <span
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 700,
            fontSize: '15px',
            color: '#111111',
            letterSpacing: '-0.01em',
          }}
        >
          KayBOrg AI
        </span>
      </div>

      {/* Centre: Links */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        <button
          onClick={() => scrollTo('#how-it-works')}
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 400,
            fontSize: '13px',
            color: '#6B6B6B',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          How it works
        </button>
        <button
          onClick={() => scrollTo('#waitlist')}
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 400,
            fontSize: '13px',
            color: '#6B6B6B',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          Early Access
        </button>
      </div>

      {/* Right: CTA */}
      <button
        onClick={() => scrollTo('#waitlist')}
        className="nav-cta"
        style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 700,
          fontSize: '12px',
          color: '#111111',
          background: 'transparent',
          border: '1px solid #111111',
          borderRadius: '24px',
          padding: '8px 20px',
          cursor: 'pointer',
          letterSpacing: '0.04em',
          transition: 'background 0.2s, color 0.2s',
        }}
        onMouseEnter={e => {
          const t = e.currentTarget
          t.style.background = '#111111'
          t.style.color = '#ffffff'
        }}
        onMouseLeave={e => {
          const t = e.currentTarget
          t.style.background = 'transparent'
          t.style.color = '#111111'
        }}
      >
        Early Access
      </button>
    </nav>
  )
}

export { KMark }
