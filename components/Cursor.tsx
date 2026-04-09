'use client'

import { useEffect, useRef, useState } from 'react'

// Custom cursor — desktop/mouse only. Touch devices: not rendered.
// Fix: empty dep array prevents multiple RAF loops; WeakSet prevents duplicate listeners.

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const pos       = useRef({ x: -100, y: -100 })
  const current   = useRef({ x: -100, y: -100 })
  const visible   = useRef(false)

  const [visibleState, setVisibleState] = useState(false)
  const [mode, setMode] = useState<'default' | 'hover'>('default')

  useEffect(() => {
    // Touch / stylus devices — skip entirely
    if (window.matchMedia('(hover: none)').matches) return

    const attached = new WeakSet<Element>()

    const onEnterBtn = () => setMode('hover')
    const onLeaveBtn = () => setMode('default')

    const attachHovers = () => {
      document.querySelectorAll('button, a, [role="button"]').forEach(el => {
        if (attached.has(el)) return
        attached.add(el)
        el.addEventListener('mouseenter', onEnterBtn)
        el.addEventListener('mouseleave', onLeaveBtn)
      })
    }

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (!visible.current) {
        visible.current = true
        setVisibleState(true)
      }
    }

    // Smooth lerp follow via RAF
    let raf: number
    const LERP = 0.1
    const tick = () => {
      current.current.x += (pos.current.x - current.current.x) * LERP
      current.current.y += (pos.current.y - current.current.y) * LERP
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${current.current.x}px, ${current.current.y}px)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    window.addEventListener('mousemove', onMove, { passive: true })
    attachHovers()

    // Re-attach only on childList changes (dynamic content)
    const observer = new MutationObserver(attachHovers)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, []) // empty — runs once only

  if (!visibleState) return null

  const scale = mode === 'hover' ? 1.45 : 1

  return (
    <div
      ref={cursorRef}
      aria-hidden
      style={{
        position: 'fixed',
        top: 0, left: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        marginLeft: '-18px',
        marginTop: '-12px',
        willChange: 'transform',
      }}
    >
      <svg
        width="36"
        height="24"
        viewBox="0 0 36 24"
        fill="none"
        style={{
          transition: 'transform 0.25s cubic-bezier(0.16,1,0.3,1), opacity 0.3s',
          transform: `scale(${scale})`,
          opacity: visibleState ? 1 : 0,
        }}
      >
        <rect x="0.75" y="0.75" width="34.5" height="22.5" rx="3.5"
          stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/>
        <rect x="6" y="8" width="9" height="8" rx="1.5"
          fill="rgba(255,255,255,0.7)"/>
        <path d="M 17 12 L 22.5 12" stroke="rgba(255,255,255,0.7)"
          strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.35"/>
        <circle cx="26" cy="12" r="2.5" stroke="rgba(255,255,255,0.7)"
          strokeWidth="1.5" strokeOpacity="0.35"/>
      </svg>
    </div>
  )
}
