'use client'

import { useEffect, useRef } from 'react'

// Passive scroll event (not RAF loop) — only fires when user actually scrolls.
// One RAF frame per scroll event for smooth update without idle CPU waste.

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const update = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      bar.style.width = `${total > 0 ? Math.min((scrolled / total) * 100, 100) : 0}%`
    }

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(update)
    }

    // Set initial value
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        height: '2px', zIndex: 500, pointerEvents: 'none',
      }}
    >
      <div
        ref={barRef}
        style={{
          height: '100%',
          width: '0%',
          background: 'rgba(255,255,255,0.4)',
          willChange: 'width',
          transformOrigin: 'left',
        }}
      />
    </div>
  )
}
