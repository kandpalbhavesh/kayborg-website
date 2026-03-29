'use client'

import { useState } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isValid, setIsValid] = useState(false)

  const validateEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setIsValid(validateEmail(e.target.value))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid) return
    setSubmitted(true)
  }

  return (
    <section
      id="waitlist"
      style={{
        minHeight: '100vh',
        background: '#0C0C0E',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Large gold ambient glow */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '500px',
        background: 'radial-gradient(ellipse, rgba(200,169,110,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative' }}>
        {/* Label */}
        <div
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 700,
            fontSize: '9px',
            color: 'rgba(200,169,110,0.4)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            marginBottom: '40px',
          }}
        >
          Launching 2026
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(40px, 7vw, 88px)',
            color: '#F0EDE8',
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            margin: '0 0 40px',
          }}
        >
          The ad that<br /><span style={{ color: '#C8A96E' }}>cannot be blocked.</span>
        </h2>

        {/* Sub copy */}
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 300,
            fontSize: '16px',
            color: 'rgba(240,237,232,0.35)',
            maxWidth: '400px',
            margin: '0 auto 56px',
            lineHeight: 1.65,
          }}
        >
          We&apos;re building this in India first.
          The first cohort is small on purpose.

          If you&apos;ve been waiting for the format to change —
          this is the moment.
        </p>

        {/* Email Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: '420px',
            width: '100%',
            margin: '0 auto',
            display: 'flex',
          }}
        >
          <input
            type="email"
            value={submitted ? '' : email}
            onChange={handleChange}
            placeholder={submitted ? "You're on the list. We'll be in touch before launch." : 'your@email.com'}
            disabled={submitted}
            style={{
              flex: 1,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(200,169,110,0.2)',
              borderRight: 'none',
              borderRadius: '24px 0 0 24px',
              padding: '14px 20px',
              color: '#F0EDE8',
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 400,
              fontSize: '14px',
              outline: 'none',
              minWidth: 0,
            }}
            onFocus={e => { e.target.style.borderColor = 'rgba(200,169,110,0.5)' }}
            onBlur={e => { e.target.style.borderColor = 'rgba(200,169,110,0.2)' }}
          />
          <button
            type="submit"
            style={{
              background: submitted ? '#00E5C3' : '#C8A96E',
              color: '#0C0C0E',
              fontFamily: 'var(--font-syne)',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              borderRadius: '0 24px 24px 0',
              padding: '14px 24px',
              border: 'none',
              cursor: submitted ? 'default' : 'pointer',
              whiteSpace: 'nowrap',
              transition: 'opacity 0.2s, background 0.3s',
            }}
            onMouseEnter={e => { if (!submitted) e.currentTarget.style.opacity = '0.85' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
          >
            {submitted ? 'Done ✓' : 'Join the Waitlist'}
          </button>
        </form>
      </div>
    </section>
  )
}
