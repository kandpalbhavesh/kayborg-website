'use client'

import { useEffect, useRef } from 'react'

// Thin scroll-progress line at top of page — updates via RAF, no React re-renders

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf: number

    const update = () => {
      const bar = barRef.current
      if (!bar) return
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      const pct = total > 0 ? Math.min((scrolled / total) * 100, 100) : 0
      bar.style.width = `${pct}%`
      raf = requestAnimationFrame(update)
    }

    raf = requestAnimationFrame(update)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      height: '2px', zIndex: 200, pointerEvents: 'none',
      background: 'rgba(255,255,255,0.06)',
    }}>
      <div
        ref={barRef}
        style={{
          height: '100%', width: '0%',
          background: 'rgba(255,255,255,0.5)',
          transformOrigin: 'left',
          willChange: 'width',
        }}
      />
    </div>
  )
}
