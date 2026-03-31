'use client'

import { useEffect, useRef, useState } from 'react'
import Logo from './Logo'

function isValidEmail(e: string) {
  if (!e || e.length > 254 || /[<>"'`]/.test(e)) return false
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(e)
}

let submitCount = 0

export default function Hero() {
  const [email, setEmail]         = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]         = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  // Fade in on mount
  const rootRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const t = setTimeout(() => rootRef.current?.classList.add('hero-visible'), 80)
    return () => clearTimeout(t)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.replace(/<[^>]*>/g, '').slice(0, 254))
    if (error) setError('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (submitCount >= 3) { setError('Too many attempts. Please try again later.'); return }
    const s = email.trim().replace(/<[^>]*>/g, '')
    if (!isValidEmail(s)) { setError('Enter a valid email address.'); inputRef.current?.focus(); return }
    submitCount++
    setSubmitted(true)
    setError('')
  }

  return (
    <>
      {/* Top-left brand mark */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        height: '56px', zIndex: 100,
        display: 'flex', alignItems: 'center',
        padding: '0 clamp(24px, 4vw, 48px)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', userSelect: 'none' }}>
          <Logo size={16} color="#0A0A0A" />
          <span style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 700, fontSize: '13px',
            color: '#0A0A0A', letterSpacing: '-0.01em',
          }}>
            KayBOrg AI
          </span>
        </div>
      </header>

      {/* Main */}
      <main
        ref={rootRef}
        className="hero-root"
        style={{
          minHeight: '100dvh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(96px, 14vh, 140px) clamp(24px, 5vw, 64px) clamp(64px, 10vh, 100px)',
          textAlign: 'center',
          background: '#FFFFFF',
        }}
      >
        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 'clamp(44px, 9vw, 120px)',
          color: '#0A0A0A',
          letterSpacing: '-0.05em',
          lineHeight: 0.93,
          margin: '0 0 clamp(24px, 4vh, 40px)',
          maxWidth: '14ch',
        }}>
          The Ad That Lives Inside the Story.
        </h1>

        {/* One-liner */}
        <p style={{
          fontFamily: 'var(--font-dm-sans)',
          fontWeight: 300,
          fontSize: 'clamp(14px, 1.6vw, 17px)',
          color: 'rgba(0,0,0,0.42)',
          letterSpacing: '0.01em',
          lineHeight: 1.65,
          margin: '0 0 clamp(40px, 6vh, 64px)',
          maxWidth: '38ch',
        }}>
          AI brand placement inside creator videos.
          Frame by frame. Unblockable by design.
        </p>

        {/* Waitlist form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          aria-label="Join the KayBOrg AI waitlist"
          style={{ width: '100%', maxWidth: '400px' }}
        >
          <div style={{ display: 'flex', width: '100%' }}>
            <input
              ref={inputRef}
              type="email" inputMode="email" autoComplete="email"
              value={submitted ? '' : email}
              onChange={handleChange}
              disabled={submitted}
              maxLength={254}
              placeholder={submitted ? "You're on the list." : 'your@email.com'}
              aria-label="Email address"
              aria-invalid={!!error}
              style={{
                flex: 1,
                background: '#F5F5F5',
                border: error ? '1px solid rgba(180,40,40,0.4)' : '1px solid rgba(0,0,0,0.1)',
                borderRight: 'none',
                borderRadius: '6px 0 0 6px',
                padding: '11px 16px',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '14px', fontWeight: 400,
                color: '#0A0A0A',
                outline: 'none',
                minWidth: 0,
                transition: 'border-color 0.2s',
              }}
              onFocus={e => { if (!error) e.target.style.borderColor = 'rgba(0,0,0,0.3)' }}
              onBlur={e  => { if (!error) e.target.style.borderColor = 'rgba(0,0,0,0.1)' }}
            />
            <button
              type="submit"
              disabled={submitted}
              style={{
                background: submitted ? 'rgba(0,0,0,0.06)' : '#0A0A0A',
                color: submitted ? 'rgba(0,0,0,0.4)' : '#FFFFFF',
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 500, fontSize: '13px',
                border: 'none',
                borderRadius: '0 6px 6px 0',
                padding: '11px 20px',
                cursor: submitted ? 'default' : 'pointer',
                whiteSpace: 'nowrap',
                transition: 'opacity 0.2s',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => { if (!submitted) e.currentTarget.style.opacity = '0.78' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
            >
              {submitted ? 'Done' : 'Request access'}
            </button>
          </div>

          {error && (
            <p role="alert" style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '12px', color: 'rgba(160,30,30,0.85)',
              marginTop: '8px', textAlign: 'left',
            }}>
              {error}
            </p>
          )}
        </form>

        {/* Launch note */}
        <p style={{
          fontFamily: 'var(--font-dm-mono)',
          fontSize: '10px', letterSpacing: '0.16em',
          textTransform: 'uppercase', color: 'rgba(0,0,0,0.22)',
          marginTop: 'clamp(28px, 4vh, 44px)',
        }}>
          Launching 2026 · India
        </p>
      </main>

      <style>{`
        .hero-root {
          opacity: 0;
          transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-visible { opacity: 1; }
      `}</style>
    </>
  )
}
