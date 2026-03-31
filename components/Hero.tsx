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
  const rootRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => rootRef.current?.classList.add('hi-visible'), 60)
    return () => clearTimeout(t)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.replace(/<[^>]*>/g, '').slice(0, 254))
    if (error) setError('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (submitCount >= 3) { setError('Too many attempts.'); return }
    const s = email.trim().replace(/<[^>]*>/g, '')
    if (!isValidEmail(s)) { setError('Enter a valid email.'); inputRef.current?.focus(); return }
    submitCount++
    setSubmitted(true)
    setError('')
  }

  return (
    <div ref={rootRef} className="hi-root">

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        height: '60px', zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(24px, 5vw, 56px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', userSelect: 'none' }}>
          <Logo size={16} color="rgba(255,255,255,0.85)" />
          <span style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 700, fontSize: '13px',
            color: 'rgba(255,255,255,0.85)',
            letterSpacing: '-0.01em',
          }}>
            KayBOrg AI
          </span>
        </div>

        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a
            href="mailto:hello@kayborg.ai"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '13px', color: 'rgba(255,255,255,0.35)',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Main */}
      <main style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 'clamp(100px, 16vh, 160px) clamp(24px, 5vw, 56px) clamp(80px, 12vh, 120px)',
      }}>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 'clamp(36px, 6.5vw, 88px)',
          color: 'rgba(255,255,255,0.92)',
          letterSpacing: '-0.04em',
          lineHeight: 1.0,
          margin: '0 0 clamp(20px, 3vh, 32px)',
          maxWidth: '18ch',
        }}>
          The Ad That Lives<br />Inside the Story.
        </h1>

        {/* Sub */}
        <p style={{
          fontFamily: 'var(--font-dm-sans)',
          fontWeight: 300,
          fontSize: 'clamp(14px, 1.4vw, 16px)',
          color: 'rgba(255,255,255,0.38)',
          letterSpacing: '0.01em',
          lineHeight: 1.7,
          margin: '0 0 clamp(36px, 5vh, 56px)',
          maxWidth: '42ch',
        }}>
          KayBOrg AI embeds brand products inside creator videos
          at the pixel level — frame by frame, unblockable by design.
          Launching 2026.
        </p>

        {/* Waitlist */}
        <form onSubmit={handleSubmit} noValidate aria-label="Request access" style={{ width: '100%', maxWidth: '380px' }}>
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
                background: 'rgba(255,255,255,0.05)',
                border: error
                  ? '1px solid rgba(220,80,80,0.5)'
                  : '1px solid rgba(255,255,255,0.1)',
                borderRight: 'none',
                borderRadius: '4px 0 0 4px',
                padding: '11px 16px',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '14px', fontWeight: 400,
                color: 'rgba(255,255,255,0.85)',
                outline: 'none', minWidth: 0,
                transition: 'border-color 0.2s',
              }}
              onFocus={e => { if (!error) e.target.style.borderColor = 'rgba(255,255,255,0.28)' }}
              onBlur={e  => { if (!error) e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
            />
            <button
              type="submit"
              disabled={submitted}
              style={{
                background: submitted ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.9)',
                color: submitted ? 'rgba(255,255,255,0.3)' : '#0A0A0A',
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 500, fontSize: '13px',
                border: 'none',
                borderRadius: '0 4px 4px 0',
                padding: '11px 20px',
                cursor: submitted ? 'default' : 'pointer',
                whiteSpace: 'nowrap',
                transition: 'opacity 0.2s, background 0.2s',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => { if (!submitted) e.currentTarget.style.opacity = '0.75' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
            >
              {submitted ? 'Done' : 'Request access'}
            </button>
          </div>

          {error && (
            <p role="alert" style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '12px', color: 'rgba(220,80,80,0.85)',
              marginTop: '8px',
            }}>
              {error}
            </p>
          )}
        </form>
      </main>

      <style>{`
        .hi-root {
          opacity: 0;
          transition: opacity 1s ease;
        }
        .hi-visible { opacity: 1; }
      `}</style>
    </div>
  )
}
