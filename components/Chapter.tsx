'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

const Chapter1Illustration = dynamic(() => import('./illustrations/Chapter1Illustration'), { ssr: false })
const Chapter2Illustration = dynamic(() => import('./illustrations/Chapter2Illustration'), { ssr: false })
const Chapter3Illustration = dynamic(() => import('./illustrations/Chapter3Illustration'), { ssr: false })
const Chapter4Illustration = dynamic(() => import('./illustrations/Chapter4Illustration'), { ssr: false })

interface Beat {
  html: string
}

interface ChapterProps {
  id: string
  chapterIndex: number
  beatTag: string
  beats: Beat[]
  scrollInstance?: React.MutableRefObject<any>
}

const illustrations = [
  Chapter1Illustration,
  Chapter2Illustration,
  Chapter3Illustration,
  Chapter4Illustration,
]

export default function Chapter({ id, chapterIndex, beatTag, beats, scrollInstance }: ChapterProps) {
  const [activeBeat, setActiveBeat] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const beatRefs = useRef<(HTMLDivElement | null)[]>([])

  const IllustrationComponent = illustrations[chapterIndex]

  useEffect(() => {
    const updateBeat = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = sectionRef.current.offsetHeight
      const windowHeight = window.innerHeight

      // How far we've scrolled into this section
      const scrolled = -rect.top
      const scrollable = sectionHeight - windowHeight
      const progress = Math.max(0, Math.min(1, scrolled / scrollable))

      let newBeat = 0
      if (progress >= 0.75) newBeat = 3
      else if (progress >= 0.5) newBeat = 2
      else if (progress >= 0.25) newBeat = 1
      else newBeat = 0

      setActiveBeat(newBeat)
    }

    // Listen on window scroll for SSR compatibility
    window.addEventListener('scroll', updateBeat, { passive: true })

    // Also listen to locomotive scroll events if available
    const checkLocomotive = () => {
      if (scrollInstance?.current) {
        scrollInstance.current.on('scroll', (args: any) => {
          if (!sectionRef.current) return
          const sectionTop = sectionRef.current.offsetTop
          const sectionHeight = sectionRef.current.offsetHeight
          const scrollY = args.scroll?.y ?? 0
          const windowHeight = window.innerHeight

          const scrolled = scrollY - sectionTop
          const scrollable = sectionHeight - windowHeight
          const progress = Math.max(0, Math.min(1, scrolled / scrollable))

          let newBeat = 0
          if (progress >= 0.75) newBeat = 3
          else if (progress >= 0.5) newBeat = 2
          else if (progress >= 0.25) newBeat = 1
          else newBeat = 0

          setActiveBeat(newBeat)
        })
      }
    }

    const timer = setTimeout(checkLocomotive, 1000)
    updateBeat()

    return () => {
      window.removeEventListener('scroll', updateBeat)
      clearTimeout(timer)
    }
  }, [scrollInstance])

  // Animate beats with GSAP
  useEffect(() => {
    const animateBeats = async () => {
      const { gsap } = await import('gsap')
      beatRefs.current.forEach((el, i) => {
        if (!el) return
        if (i === activeBeat) {
          gsap.to(el, { opacity: 1, y: 0, color: '#111111', duration: 0.5, ease: 'power2.out' })
        } else if (i < activeBeat) {
          gsap.to(el, { opacity: 0.15, y: 0, color: '#AEAEB2', duration: 0.4, ease: 'power2.out' })
        } else {
          gsap.to(el, { opacity: 0, y: 14, duration: 0.3, ease: 'power2.in' })
        }
      })
    }
    animateBeats()
  }, [activeBeat])

  return (
    <section
      ref={sectionRef}
      id={id}
      data-scroll
      data-scroll-section
      style={{ height: '300vh', position: 'relative' }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          overflow: 'hidden',
        }}
      >
        {/* Left: Illustration */}
        <div
          style={{
            borderRight: '1px solid #E8E8E8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px 48px',
            background: '#FFFFFF',
          }}
        >
          <IllustrationComponent />
        </div>

        {/* Right: Beats */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px 48px',
            background: '#FFFFFF',
            position: 'relative',
          }}
        >
          {/* Beat tag */}
          <div
            style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 700,
              fontSize: '9px',
              color: '#D72638',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: '40px',
            }}
          >
            {beatTag}
          </div>

          {/* Beats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {beats.map((beat, i) => (
              <div
                key={i}
                ref={el => { beatRefs.current[i] = el }}
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 300,
                  fontSize: 'clamp(17px, 2vw, 24px)',
                  lineHeight: 1.5,
                  color: i === 0 ? '#111111' : '#6B6B6B',
                  opacity: i === 0 ? 1 : 0,
                  transform: i === 0 ? 'translateY(0)' : 'translateY(14px)',
                  whiteSpace: 'pre-line',
                }}
                dangerouslySetInnerHTML={{ __html: beat.html }}
              />
            ))}
          </div>

          {/* Beat indicator dots */}
          <div
            style={{
              position: 'absolute',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {beats.map((_, i) => (
              <div
                key={i}
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: i === activeBeat ? '#D72638' : '#E8E8E8',
                  transition: 'background 0.3s',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
