'use client'

import { useEffect, useState } from 'react'

export default function ProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      try {
        const scrollTop = window.scrollY ?? 0
        const docHeight = (document.documentElement.scrollHeight ?? 0) - (window.innerHeight ?? 0)
        setProgress(docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0)
      } catch {
        // silent — DOM not ready
      }
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
      style={{
        position: 'fixed',
        top: 0, left: 0,
        height: '2px',
        width: `${progress}%`,
        background: 'linear-gradient(to right, #C8A96E, #00E5C3)',
        zIndex: 200,
        transition: 'width 0.1s linear',
        pointerEvents: 'none',
      }}
    />
  )
}
