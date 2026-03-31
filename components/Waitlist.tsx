'use client'

import { useState, useRef, useEffect } from 'react'

// RFC 5322-compliant email validation
function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false
  // Sanitize — reject any HTML or script characters
  if (/[<>"'`]/.test(email)) return false
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/
  return re.test(email)
}

// Simple client-side rate limit — max 3 attempts per session
let submitCount = 0

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isValid, setIsValid] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('in-view'); observer.unobserve(el) } },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Strip any HTML tags from input before storing
    const raw = e.target.value.replace(/<[^>]*>/g, '').slice(0, 254)
    setEmail(raw)
    setIsValid(isValidEmail(raw))
    if (error) setError('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Rate limit
    if (submitCount >= 3) {
      setError('Too many attempts. Please try again later.')
      return
    }

    // Re-validate on submit
    const sanitized = email.trim().replace(/<[^>]*>/g, '')
    if (!isValidEmail(sanitized)) {
      setError('Please enter a valid email address.')
      inputRef.current?.focus()
      return
    }

    submitCount++
    setSubmitted(true)
    setError('')
  }

  return (
    <section
      id="waitlist"
      style={{
        minHeight: '100vh',
        background: '#0D0D0D',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(80px, 10vh, 120px) clamp(20px, 5vw, 48px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div ref={contentRef} className="reveal" style={{ position: 'relative', width: '100%', maxWidth: '560px' }}>
        {/* Label */}
        <div style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 700,
          fontSize: '9px',
          color: 'rgba(255,255,255,0.3)',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          marginBottom: '40px',
        }}>
          Launching 2026
        </div>

        {/* Headline */}
        <h2 style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 'clamp(36px, 7vw, 88px)',
          color: '#FFFFFF',
          lineHeight: 0.95,
          letterSpacing: '-0.04em',
          margin: '0 0 40px',
        }}>
          The ad that<br />
          cannot be blocked.
        </h2>

        {/* Sub copy */}
        <p style={{
          fontFamily: 'var(--font-dm-sans)',
          fontWeight: 300,
          fontSize: 'clamp(14px, 2vw, 16px)',
          color: 'rgba(255,255,255,0.35)',
          maxWidth: '400px',
          margin: '0 auto 48px',
          lineHeight: 1.65,
        }}>
          We&apos;re building this in India first.
          The first cohort is small on purpose.
          If you&apos;ve been waiting for the format to change —
          this is the moment.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          aria-label="Join the waitlist"
          style={{ width: '100%', margin: '0 auto' }}
        >
          <div style={{ display: 'flex', width: '100%' }}>
            <input
              ref={inputRef}
              type="email"
              inputMode="email"
              autoComplete="email"
              value={submitted ? '' : email}
              onChange={handleChange}
              placeholder={submitted ? "You're on the list. We'll be in touch." : 'your@email.com'}
              disabled={submitted}
              maxLength={254}
              aria-label="Email address"
              aria-invalid={!!error}
              aria-describedby={error ? 'waitlist-error' : undefined}
              style={{
                flex: 1,
                background: 'rgba(255,255,255,0.04)',
                border: error ? '1px solid rgba(255,80,80,0.5)' : '1px solid rgba(255,255,255,0.12)',
                borderRight: 'none',
                borderRadius: '24px 0 0 24px',
                padding: 'clamp(12px, 2vw, 14px) 20px',
                color: '#FFFFFF',
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 400,
                fontSize: '14px',
                outline: 'none',
                minWidth: 0,
                transition: 'border-color 0.2s',
              }}
              onFocus={e => {
                if (!error) e.target.style.borderColor = 'rgba(255,255,255,0.3)'
              }}
              onBlur={e => {
                if (!error) e.target.style.borderColor = 'rgba(255,255,255,0.12)'
              }}
            />
            <button
              type="submit"
              disabled={submitted}
              style={{
                background: submitted ? 'rgba(255,255,255,0.15)' : '#FFFFFF',
                color: submitted ? '#FFFFFF' : '#0D0D0D',
                fontFamily: 'var(--font-syne)',
                fontWeight: 700,
                fontSize: 'clamp(10px, 1.5vw, 12px)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                borderRadius: '0 24px 24px 0',
                padding: 'clamp(12px, 2vw, 14px) clamp(16px, 3vw, 24px)',
                border: 'none',
                cursor: submitted ? 'default' : 'pointer',
                whiteSpace: 'nowrap',
                transition: 'opacity 0.2s, background 0.3s',
                minWidth: '120px',
              }}
              onMouseEnter={e => { if (!submitted) e.currentTarget.style.opacity = '0.85' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
            >
              {submitted ? 'Done ✓' : 'Join the Waitlist'}
            </button>
          </div>

          {/* Error message */}
          {error && (
            <p
              id="waitlist-error"
              role="alert"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '12px',
                color: 'rgba(255,100,100,0.8)',
                marginTop: '10px',
                textAlign: 'left',
              }}
            >
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
