'use client'

import { useEffect, useRef } from 'react'

// Cosmos image grid — video frames with AI-placed brand products
// Cosmos color theme: #0D0D0D bg, white-only accents, no gold/teal

type Frame = {
  brand: string
  creator: string
  type: 'portrait' | 'landscape' | 'square'
  luminance: number // 0-1 — controls how light/visible the gradient is
}

const frames: Frame[] = [
  { brand: 'Nike',      creator: '@arjun.runs',    type: 'portrait',  luminance: 0.07 },
  { brand: 'boAt',      creator: '@music.daily',   type: 'landscape', luminance: 0.05 },
  { brand: 'Mamaearth', creator: '@skincare.ria',  type: 'portrait',  luminance: 0.06 },
  { brand: 'Apple',     creator: '@techreview.in', type: 'landscape', luminance: 0.05 },
  { brand: 'CRED',      creator: '@finance.tips',  type: 'portrait',  luminance: 0.07 },
  { brand: 'Zomato',    creator: '@foodie.mum',    type: 'square',    luminance: 0.05 },
  { brand: "Levi's",    creator: '@style.delhi',   type: 'portrait',  luminance: 0.06 },
  { brand: 'Samsung',   creator: '@gadget.world',  type: 'landscape', luminance: 0.06 },
  { brand: 'Nykaa',     creator: '@beauty.guru',   type: 'portrait',  luminance: 0.05 },
  { brand: 'OnePlus',   creator: '@tech.india',    type: 'landscape', luminance: 0.06 },
  { brand: 'Myntra',    creator: '@fashion.life',  type: 'portrait',  luminance: 0.07 },
  { brand: 'Jio',       creator: '@digital.in',    type: 'square',    luminance: 0.05 },
  { brand: 'Flipkart',  creator: '@deals.daily',   type: 'landscape', luminance: 0.06 },
  { brand: 'realme',    creator: '@unbox.life',    type: 'portrait',  luminance: 0.05 },
  { brand: 'H&M',       creator: '@ootd.india',    type: 'landscape', luminance: 0.06 },
  { brand: 'Adidas',    creator: '@fit.life',      type: 'portrait',  luminance: 0.07 },
  { brand: 'Swiggy',    creator: '@chef.home',     type: 'landscape', luminance: 0.05 },
  { brand: 'Nike',      creator: '@cricket.fan',   type: 'portrait',  luminance: 0.06 },
  { brand: 'Apple',     creator: '@review.hub',    type: 'square',    luminance: 0.05 },
  { brand: 'boAt',      creator: '@workout.daily', type: 'portrait',  luminance: 0.07 },
  { brand: 'CRED',      creator: '@savings.club',  type: 'landscape', luminance: 0.05 },
  { brand: "Levi's",    creator: '@denim.life',    type: 'portrait',  luminance: 0.06 },
  { brand: 'Mamaearth', creator: '@natural.glow',  type: 'landscape', luminance: 0.06 },
  { brand: 'Samsung',   creator: '@tech.life.in',  type: 'portrait',  luminance: 0.05 },
]

const pad: Record<Frame['type'], string> = {
  portrait:  '177.78%',
  landscape: '56.25%',
  square:    '100%',
}

export default function VideoGrid() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const frames = gridRef.current?.querySelectorAll('.vframe')
    if (!frames?.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' },
    )

    frames.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section style={{ background: '#0D0D0D' }}>
      <div className="vgrid" ref={gridRef}>
        {frames.map((f, i) => {
          const a = f.luminance
          const angle = 120 + (i % 6) * 20
          // Cap stagger at 600ms so late items don't wait forever
          const delay = Math.min(i * 40, 600)

          return (
            <div
              key={i}
              className="vframe reveal"
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div style={{ paddingBottom: pad[f.type] }} />
              <div style={{ position: 'absolute', inset: 0 }}>
                {/* Subtle white gradient */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(${angle}deg, rgba(255,255,255,${a}) 0%, transparent 70%)`,
                }} />

                {/* Brand badge */}
                <div style={{
                  position: 'absolute', top: '8px', left: '8px',
                  background: 'rgba(255,255,255,0.88)',
                  color: '#0D0D0D',
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700,
                  fontSize: '8px',
                  letterSpacing: '0.05em',
                  padding: '3px 8px',
                  borderRadius: '20px',
                }}>
                  {f.brand}
                </div>

                {/* AI placed dot */}
                <div style={{
                  position: 'absolute', top: '10px', right: '10px',
                  width: '5px', height: '5px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.5)',
                }} />

                {/* Creator handle */}
                <div style={{
                  position: 'absolute', bottom: '8px', left: '8px',
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: '9px',
                  color: 'rgba(255,255,255,0.22)',
                  letterSpacing: '0.02em',
                }}>
                  {f.creator}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <style>{`
        .vgrid {
          columns: 4;
          column-gap: 3px;
          padding: 3px;
        }
        .vframe {
          break-inside: avoid;
          margin-bottom: 3px;
          position: relative;
          border-radius: 3px;
          overflow: hidden;
          background: #111111;
          cursor: default;
          transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1),
                      transform 0.75s cubic-bezier(0.16,1,0.3,1);
        }
        .vframe:hover { opacity: 0.75; }

        @media (max-width: 1023px) { .vgrid { columns: 3; } }
        @media (max-width: 600px)  { .vgrid { columns: 2; } }
      `}</style>
    </section>
  )
}
