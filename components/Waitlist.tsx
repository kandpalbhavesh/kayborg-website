'use client'

import { useState, useRef, useEffect } from 'react'

// RFC 5322-compliant email validation
function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false
  if (/[<>"'`]/.test(email)) return false
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/
  return re.test(email)
}

let submitCount = 0

export default function Waitlist() {
  const [email, setEmail]       = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]       = useState('')
  const inputRef  = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const btnRef    = useRef<HTMLButtonElement>(null)
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 })

  // Scroll reveal
  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('in-view'); io.unobserve(el) } },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/<[^>]*>/g, '').slice(0, 254)
    setEmail(raw)
    if (error) setError('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (submitCount >= 3) { setError('Too many attempts. Please try again later.'); return }
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

  // Magnetic button
  const onBtnMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = btnRef.current!.getBoundingClientRect()
    setBtnPos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.28,
      y: (e.clientY - rect.top  - rect.height / 2) * 0.28,
    })
  }
  const onBtnMouseLeave = () => setBtnPos({ x: 0, y: 0 })

  return (
    <section
      id="waitlist"
      style={{
        minHeight: '100vh',
        background: '#080808',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(80px, 12vh, 140px) clamp(20px, 5vw, 48px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        top: '45%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw', height: '40vw',
        maxWidth: '800px', maxHeight: '500px',
        background: 'radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'glowPulse 6s ease-in-out infinite',
      }} />

      <div
        ref={contentRef}
        className="reveal"
        style={{ position: 'relative', width: '100%', maxWidth: '600px' }}
      >
        {/* Label */}
        <div style={{
          fontFamily: 'var(--font-dm-mono)',
          fontSize: '9px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.28)',
          marginBottom: 'clamp(28px, 4vh, 44px)',
        }}>
          Launching 2026 · India first
        </div>

        {/* Headline */}
        <h2 style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 'clamp(36px, 6.5vw, 88px)',
          color: '#FFFFFF',
          lineHeight: 0.95,
          letterSpacing: '-0.05em',
          margin: '0 0 clamp(20px, 3vh, 32px)',
        }}>
          The format that<br />changes advertising<br />starts here.
        </h2>

        {/* Sub */}
        <p style={{
          fontFamily: 'var(--font-dm-sans)',
          fontWeight: 300,
          fontSize: 'clamp(14px, 1.8vw, 16px)',
          color: 'rgba(255,255,255,0.38)',
          maxWidth: '420px',
          margin: '0 auto clamp(36px, 5vh, 52px)',
          lineHeight: 1.7,
        }}>
          The first cohort is intentionally small.
          If you&apos;ve been waiting for the format
          to change — this is the moment.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          aria-label="Join the KayBOrg AI waitlist"
          style={{ width: '100%' }}
        >
          <div style={{ display: 'flex', width: '100%', maxWidth: '480px', margin: '0 auto' }}>
            <input
              ref={inputRef}
              type="email"
              inputMode="email"
              autoComplete="email"
              value={submitted ? '' : email}
              onChange={handleChange}
              placeholder={submitted ? "You're on the list — we'll be in touch." : 'your@email.com'}
              disabled={submitted}
              maxLength={254}
              aria-label="Email address"
              aria-invalid={!!error}
              aria-describedby={error ? 'wl-error' : undefined}
              style={{
                flex: 1,
                background: 'rgba(255,255,255,0.04)',
                border: error
                  ? '1px solid rgba(255,80,80,0.45)'
                  : '1px solid rgba(255,255,255,0.1)',
                borderRight: 'none',
                borderRadius: '24px 0 0 24px',
                padding: 'clamp(13px, 2vw, 15px) 20px',
                color: '#FFFFFF',
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 400,
                fontSize: '14px',
                outline: 'none',
                minWidth: 0,
                transition: 'border-color 0.2s',
              }}
              onFocus={e => { if (!error) e.target.style.borderColor = 'rgba(255,255,255,0.25)' }}
              onBlur={e  => { if (!error) e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
            />
            <button
              ref={btnRef}
              type="submit"
              disabled={submitted}
              onMouseMove={onBtnMouseMove}
              onMouseLeave={onBtnMouseLeave}
              style={{
                background: submitted ? 'rgba(255,255,255,0.12)' : '#FFFFFF',
                color: submitted ? '#FFFFFF' : '#080808',
                fontFamily: 'var(--font-syne)',
                fontWeight: 700,
                fontSize: 'clamp(10px, 1.4vw, 12px)',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                borderRadius: '0 24px 24px 0',
                padding: 'clamp(13px, 2vw, 15px) clamp(16px, 2.5vw, 24px)',
                border: 'none',
                cursor: submitted ? 'default' : 'pointer',
                whiteSpace: 'nowrap',
                minWidth: '130px',
                transform: submitted
                  ? 'none'
                  : `translate(${btnPos.x}px, ${btnPos.y}px)`,
                transition: submitted
                  ? 'background 0.3s'
                  : 'transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.2s',
              }}
              onMouseEnter={e => { if (!submitted) e.currentTarget.style.opacity = '0.88' }}
            >
              {submitted ? 'Done ✓' : 'Reserve your spot'}
            </button>
          </div>

          {error && (
            <p
              id="wl-error"
              role="alert"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '12px',
                color: 'rgba(255,90,90,0.85)',
                marginTop: '10px',
                textAlign: 'left',
                maxWidth: '480px',
                marginLeft: 'auto',
                marginRight: 'auto',
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
