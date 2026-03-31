'use client'

import { useEffect, useRef, useState } from 'react'

// Branded custom cursor — the KayBOrg logo mark follows your mouse with lerp smoothing.
// On button hover: scales up. On video frame hover: switches to targeting crosshair.
// Desktop/mouse only — hidden on touch devices.

export default function Cursor() {
  const cursorRef  = useRef<HTMLDivElement>(null)
  const pos        = useRef({ x: -100, y: -100 })
  const current    = useRef({ x: -100, y: -100 })
  const [mode, setMode] = useState<'default' | 'hover' | 'target'>('default')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only on pointer devices
    if (window.matchMedia('(hover: none)').matches) return

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (!visible) setVisible(true)
    }

    const onEnterBtn = () => setMode('hover')
    const onLeaveBtn = () => setMode('default')
    const onEnterFrame = () => setMode('target')
    const onLeaveFrame = () => setMode('default')

    const attachHovers = () => {
      document.querySelectorAll('button, a, input').forEach(el => {
        el.addEventListener('mouseenter', onEnterBtn)
        el.addEventListener('mouseleave', onLeaveBtn)
      })
      document.querySelectorAll('.vframe').forEach(el => {
        el.addEventListener('mouseenter', onEnterFrame)
        el.addEventListener('mouseleave', onLeaveFrame)
      })
    }

    // Smooth follow via RAF + lerp
    let raf: number
    const tick = () => {
      const lerpFactor = 0.1
      current.current.x += (pos.current.x - current.current.x) * lerpFactor
      current.current.y += (pos.current.y - current.current.y) * lerpFactor

      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${current.current.x}px, ${current.current.y}px)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    window.addEventListener('mousemove', onMove)
    attachHovers()

    // Re-attach on DOM changes (dynamic content)
    const observer = new MutationObserver(attachHovers)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [visible])

  const scale  = mode === 'hover' ? 1.5 : mode === 'target' ? 1.2 : 1
  const opacity = visible ? 1 : 0

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        opacity,
        transition: 'opacity 0.3s',
        // Center the cursor on the mouse point
        marginLeft: '-18px',
        marginTop: '-12px',
        willChange: 'transform',
      }}
    >
      {mode === 'target' ? (
        // Targeting crosshair — shown on video frames
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
          style={{ transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)', transform: `scale(${scale})` }}
        >
          <circle cx="14" cy="14" r="5" stroke="#0A0A0A" strokeWidth="1.5"/>
          <line x1="14" y1="0" x2="14" y2="8" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="14" y1="20" x2="14" y2="28" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="0" y1="14" x2="8" y2="14" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="20" y1="14" x2="28" y2="14" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ) : (
        // Logo mark cursor
        <svg width="36" height="24" viewBox="0 0 36 24" fill="none"
          style={{ transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)', transform: `scale(${scale})` }}
        >
          <rect x="0.75" y="0.75" width="34.5" height="22.5" rx="3.5"
            stroke="#0A0A0A" strokeWidth="1.5"/>
          <rect x="6" y="8" width="9" height="8" rx="1.5" fill="#0A0A0A"/>
          <path d="M 17 12 L 22.5 12" stroke="#0A0A0A" strokeWidth="1.5"
            strokeLinecap="round" strokeOpacity="0.35"/>
          <circle cx="26" cy="12" r="2.5" stroke="#0A0A0A" strokeWidth="1.5" strokeOpacity="0.35"/>
        </svg>
      )}
    </div>
  )
}
