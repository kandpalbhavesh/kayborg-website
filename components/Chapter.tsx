'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

const Chapter1Illustration = dynamic(() => import('./illustrations/Chapter1Illustration'), { ssr: false })
const Chapter2Illustration = dynamic(() => import('./illustrations/Chapter2Illustration'), { ssr: false })
const Chapter3Illustration = dynamic(() => import('./illustrations/Chapter3Illustration'), { ssr: false })
const Chapter4Illustration = dynamic(() => import('./illustrations/Chapter4Illustration'), { ssr: false })

// Allowed HTML tags and attributes for beat copy — prevents XSS
function sanitizeBeatHtml(raw: string): string {
  // Whitelist: only <br/>, <strong style="color:...;font-weight:...">
  // Strip any script, onclick, href, or other attributes
  return raw
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/<(?!\/?(br|strong)\b)[^>]+>/gi, '')
}

interface Beat { html: string }

interface ChapterProps {
  id: string
  chapterIndex: number
  beatTag: string
  beats: Beat[]
}

const illustrations = [
  Chapter1Illustration,
  Chapter2Illustration,
  Chapter3Illustration,
  Chapter4Illustration,
]

export default function Chapter({ id, chapterIndex, beatTag, beats }: ChapterProps) {
  const [activeBeat, setActiveBeat] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const beatRefs = useRef<(HTMLDivElement | null)[]>([])
  const IllustrationComponent = illustrations[chapterIndex]

  useEffect(() => {
    const updateBeat = () => {
      if (!sectionRef.current) return
      try {
        const rect = sectionRef.current.getBoundingClientRect()
        const sectionHeight = sectionRef.current.offsetHeight
        const windowHeight = window.innerHeight
        const scrolled = -rect.top
        const scrollable = sectionHeight - windowHeight
        const progress = Math.max(0, Math.min(1, scrolled / scrollable))
        let newBeat = 0
        if (progress >= 0.75) newBeat = 3
        else if (progress >= 0.5) newBeat = 2
        else if (progress >= 0.25) newBeat = 1
        setActiveBeat(newBeat)
      } catch {
        // silent — scroll calculation failed
      }
    }
    window.addEventListener('scroll', updateBeat, { passive: true })
    updateBeat()
    return () => window.removeEventListener('scroll', updateBeat)
  }, [])

  useEffect(() => {
    const animateBeats = async () => {
      try {
        const { gsap } = await import('gsap')
        beatRefs.current.forEach((el, i) => {
          if (!el) return
          if (i === activeBeat) {
            gsap.to(el, { opacity: 1, y: 0, color: '#F0EDE8', duration: 0.5, ease: 'power2.out' })
          } else if (i < activeBeat) {
            gsap.to(el, { opacity: 0.15, y: 0, color: 'rgba(240,237,232,0.15)', duration: 0.4, ease: 'power2.out' })
          } else {
            gsap.to(el, { opacity: 0, y: 14, duration: 0.3, ease: 'power2.in' })
          }
        })
      } catch {
        // GSAP failed — beats still visible via inline styles
      }
    }
    animateBeats()
  }, [activeBeat])

  return (
    <section
      ref={sectionRef}
      id={id}
      style={{ position: 'relative', background: '#0C0C0E' }}
      className="chapter-section"
    >
      <div className="chapter-sticky">

        {/* Left: Illustration */}
        <div className="chapter-left">
          <IllustrationComponent />
        </div>

        {/* Right: Beats */}
        <div className="chapter-right">
          <div style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 700,
            fontSize: '9px',
            color: '#C8A96E',
            letterSpacing: '0.22em',
            textTransform: 'uppercase' as const,
            marginBottom: '32px',
            opacity: 0.7,
          }}>
            {beatTag}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '28px' }}>
            {beats.map((beat, i) => (
              <div
                key={i}
                ref={el => { beatRefs.current[i] = el }}
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 300,
                  fontSize: 'clamp(15px, 2vw, 22px)',
                  lineHeight: 1.55,
                  color: i === 0 ? '#F0EDE8' : 'rgba(240,237,232,0.5)',
                  opacity: i === 0 ? 1 : 0,
                  transform: i === 0 ? 'translateY(0px)' : 'translateY(14px)',
                }}
                dangerouslySetInnerHTML={{ __html: sanitizeBeatHtml(beat.html) }}
              />
            ))}
          </div>

          {/* Beat dots */}
          <div className="beat-dots">
            {beats.map((_, i) => (
              <div key={i} style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: i === activeBeat ? '#C8A96E' : 'rgba(255,255,255,0.12)',
                transition: 'background 0.3s',
              }} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* ── Desktop: sticky 300vh scroll ── */
        .chapter-section {
          height: 300vh;
        }
        .chapter-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
        }
        .chapter-left {
          border-right: 1px solid rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(32px, 5vw, 60px) clamp(24px, 5vw, 48px);
          background: #0C0C0E;
        }
        .chapter-right {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(32px, 5vw, 60px) clamp(24px, 5vw, 48px);
          background: #0C0C0E;
          position: relative;
        }
        .beat-dots {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        /* ── Tablet: still 2-col but shorter sticky ── */
        @media (max-width: 1023px) and (min-width: 768px) {
          .chapter-sticky {
            height: auto;
            min-height: 100vh;
          }
        }

        /* ── Mobile: single column, no sticky ── */
        @media (max-width: 767px) {
          .chapter-section {
            height: auto !important;
          }
          .chapter-sticky {
            position: relative !important;
            top: auto !important;
            height: auto !important;
            grid-template-columns: 1fr;
            min-height: unset;
          }
          .chapter-left {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.07);
            padding: 40px 24px;
          }
          .chapter-left svg {
            max-width: 260px !important;
          }
          .chapter-right {
            padding: 40px 24px 48px;
          }
          .beat-dots {
            display: none;
          }
          /* On mobile show all beats stacked, no GSAP opacity hide */
          .chapter-right > div > div[style*="opacity: 0"] {
            opacity: 0.5 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}
