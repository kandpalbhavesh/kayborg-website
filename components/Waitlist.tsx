'use client'

import { useState } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isValid, setIsValid] = useState(false)

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
  }

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
      data-scroll
      data-scroll-section
      style={{
        minHeight: '100vh',
        background: '#111111',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px',
        textAlign: 'center',
      }}
    >
      {/* Label */}
      <div
        style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 700,
          fontSize: '9px',
          color: 'rgba(255,255,255,0.2)',
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
          color: '#FFFFFF',
          lineHeight: 0.95,
          letterSpacing: '-0.04em',
          margin: '0 0 40px',
        }}
      >
        The ad that<br />cannot be blocked.
      </h2>

      {/* Sub copy */}
      <p
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontWeight: 300,
          fontSize: '16px',
          color: 'rgba(255,255,255,0.4)',
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
          maxWidth: '400px',
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
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRight: 'none',
            borderRadius: '24px 0 0 24px',
            padding: '14px 20px',
            color: '#FFFFFF',
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 400,
            fontSize: '14px',
            outline: 'none',
            minWidth: 0,
          }}
          onFocus={e => { e.target.style.borderColor = 'rgba(255,255,255,0.3)' }}
          onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.12)' }}
        />
        <button
          type="submit"
          style={{
            background: submitted ? '#28A745' : '#FFFFFF',
            color: submitted ? '#FFFFFF' : '#111111',
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
            transition: 'opacity 0.2s, background 0.3s, color 0.3s',
          }}
          onMouseEnter={e => { if (!submitted) e.currentTarget.style.opacity = '0.85' }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
        >
          {submitted ? 'Done' : 'Join the Waitlist'}
        </button>
      </form>
    </section>
  )
}
