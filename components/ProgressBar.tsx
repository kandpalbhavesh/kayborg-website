'use client'

import { useEffect, useState } from 'react'

interface ProgressBarProps {
  scrollInstance?: React.MutableRefObject<any>
}

export default function ProgressBar({ scrollInstance }: ProgressBarProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(Math.min(100, Math.max(0, pct)))
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()

    // Also wire to locomotive scroll
    const wireLocomotive = () => {
      if (scrollInstance?.current) {
        scrollInstance.current.on('scroll', (args: any) => {
          const scrollY = args.scroll?.y ?? 0
          const limit = args.limit?.y ?? 1
          setProgress((scrollY / limit) * 100)
        })
      }
    }

    const timer = setTimeout(wireLocomotive, 1000)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      clearTimeout(timer)
    }
  }, [scrollInstance])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '2px',
        width: `${progress}%`,
        background: '#D72638',
        zIndex: 200,
        transition: 'width 0.1s linear',
        pointerEvents: 'none',
      }}
    />
  )
}
