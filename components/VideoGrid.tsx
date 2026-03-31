'use client'

import { useEffect, useRef } from 'react'

// Video frames with AI scan-line effect on hover:
// Hovering a frame triggers a light beam that sweeps top → bottom,
// representing the AI scanning for the perfect placement moment.

type Frame = {
  brand: string
  creator: string
  type: 'portrait' | 'landscape' | 'square'
  luminance: number
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
  portrait: '177.78%', landscape: '56.25%', square: '100%',
}

export default function VideoGrid() {
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('in-view'); io.unobserve(el) } },
      { threshold: 0.2 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const items = gridRef.current?.querySelectorAll('.vframe')
    if (!items?.length) return
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target) } })
      },
      { threshold: 0.04, rootMargin: '0px 0px -20px 0px' },
    )
    items.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section style={{ background: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
      {/* Section header */}
      <div ref={headerRef} className="reveal" style={{
        padding: 'clamp(56px, 8vh, 96px) clamp(20px, 5vw, 48px) clamp(32px, 5vh, 56px)',
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: 'var(--font-dm-mono)',
          fontSize: '9px', letterSpacing: '0.2em',
          textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)',
          marginBottom: '16px',
        }}>
          In action
        </div>
        <h2 style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 'clamp(28px, 4.5vw, 56px)',
          color: '#0A0A0A',
          letterSpacing: '-0.04em',
          margin: 0, lineHeight: 1,
        }}>
          Every frame is an opportunity.
        </h2>
      </div>

      {/* Grid */}
      <div className="vgrid" ref={gridRef}>
        {frames.map((f, i) => {
          const angle = 120 + (i % 6) * 20
          const delay = Math.min(i * 38, 580)
          return (
            <div key={i} className="vframe reveal" style={{ transitionDelay: `${delay}ms` }}>
              <div style={{ paddingBottom: pad[f.type] }} />
              <div style={{ position: 'absolute', inset: 0 }}>

                {/* Base gradient */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(${angle}deg, rgba(255,255,255,${f.luminance}) 0%, transparent 70%)`,
                }} />

                {/* AI scan line — triggered by CSS :hover */}
                <div className="scan-line" aria-hidden="true" />

                {/* Brand badge */}
                <div style={{
                  position: 'absolute', top: '8px', left: '8px',
                  background: 'rgba(255,255,255,0.9)',
                  color: '#0A0A0A',
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700, fontSize: '8px',
                  letterSpacing: '0.06em',
                  padding: '3px 8px', borderRadius: '20px',
                  textTransform: 'uppercase',
                  transition: 'background 0.2s',
                }}>
                  {f.brand}
                </div>

                {/* AI placement dot */}
                <div style={{
                  position: 'absolute', top: '9px', right: '9px',
                  width: '5px', height: '5px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.45)',
                  transition: 'transform 0.3s, background 0.3s',
                }} className="ai-dot" />

                {/* Creator handle */}
                <div style={{
                  position: 'absolute', bottom: '8px', left: '8px',
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: '9px', color: 'rgba(255,255,255,0.2)',
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
        .vgrid { columns: 4; column-gap: 3px; padding: 0 3px 3px; }

        .vframe {
          break-inside: avoid; margin-bottom: 3px;
          position: relative; border-radius: 4px; overflow: hidden;
          background: #111; cursor: none;
          transition: opacity 0.85s cubic-bezier(0.16,1,0.3,1),
                      transform 0.85s cubic-bezier(0.16,1,0.3,1);
        }
        .vframe:hover { opacity: 0.88; }
        .vframe:hover .ai-dot {
          transform: scale(1.8);
          background: rgba(255,255,255,0.8);
        }

        /* AI scan line */
        .scan-line {
          position: absolute;
          left: 0; right: 0;
          height: 2px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.55), transparent);
          top: 0;
          transform: translateY(-100%);
          pointer-events: none;
        }
        .vframe:hover .scan-line {
          animation: aiScan 1.4s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        @keyframes aiScan {
          0%   { transform: translateY(-100%); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(4000%); opacity: 0; }
        }

        @media (max-width: 1023px) { .vgrid { columns: 3; } }
        @media (max-width: 600px)  { .vgrid { columns: 2; } }
      `}</style>
    </section>
  )
}
