'use client'

import { useEffect, useRef } from 'react'

// Video frame grid — each frame simulates a creator video scene.
// Real-looking gradients, subject shapes, and environment layers per category.
// AI scan-line + brand badge on hover.

type Category = 'fitness' | 'food' | 'tech' | 'beauty' | 'fashion' | 'finance' | 'lifestyle'

type Frame = {
  brand: string
  creator: string
  type: 'portrait' | 'landscape' | 'square'
  category: Category
  views: string
}

const frames: Frame[] = [
  { brand: 'Nike',      creator: '@arjun.runs',    type: 'portrait',  category: 'fitness',   views: '2.1M' },
  { brand: 'boAt',      creator: '@music.daily',   type: 'landscape', category: 'lifestyle', views: '890K' },
  { brand: 'Mamaearth', creator: '@skincare.ria',  type: 'portrait',  category: 'beauty',    views: '1.4M' },
  { brand: 'Apple',     creator: '@techreview.in', type: 'landscape', category: 'tech',      views: '3.2M' },
  { brand: 'CRED',      creator: '@finance.tips',  type: 'portrait',  category: 'finance',   views: '760K' },
  { brand: 'Zomato',    creator: '@foodie.mum',    type: 'square',    category: 'food',      views: '1.8M' },
  { brand: "Levi's",    creator: '@style.delhi',   type: 'portrait',  category: 'fashion',   views: '920K' },
  { brand: 'Samsung',   creator: '@gadget.world',  type: 'landscape', category: 'tech',      views: '2.5M' },
  { brand: 'Nykaa',     creator: '@beauty.guru',   type: 'portrait',  category: 'beauty',    views: '1.1M' },
  { brand: 'OnePlus',   creator: '@tech.india',    type: 'landscape', category: 'tech',      views: '1.9M' },
  { brand: 'Myntra',    creator: '@fashion.life',  type: 'portrait',  category: 'fashion',   views: '680K' },
  { brand: 'Jio',       creator: '@digital.in',    type: 'square',    category: 'lifestyle', views: '4.1M' },
  { brand: 'Flipkart',  creator: '@deals.daily',   type: 'landscape', category: 'lifestyle', views: '2.7M' },
  { brand: 'realme',    creator: '@unbox.life',    type: 'portrait',  category: 'tech',      views: '1.3M' },
  { brand: 'H&M',       creator: '@ootd.india',    type: 'landscape', category: 'fashion',   views: '840K' },
  { brand: 'Adidas',    creator: '@fit.life',      type: 'portrait',  category: 'fitness',   views: '1.6M' },
  { brand: 'Swiggy',    creator: '@chef.home',     type: 'landscape', category: 'food',      views: '990K' },
  { brand: 'Nike',      creator: '@cricket.fan',   type: 'portrait',  category: 'fitness',   views: '3.8M' },
  { brand: 'Apple',     creator: '@review.hub',    type: 'square',    category: 'tech',      views: '2.2M' },
  { brand: 'boAt',      creator: '@workout.daily', type: 'portrait',  category: 'fitness',   views: '540K' },
  { brand: 'CRED',      creator: '@savings.club',  type: 'landscape', category: 'finance',   views: '1.1M' },
  { brand: "Levi's",    creator: '@denim.life',    type: 'portrait',  category: 'fashion',   views: '720K' },
  { brand: 'Mamaearth', creator: '@natural.glow',  type: 'landscape', category: 'beauty',    views: '1.3M' },
  { brand: 'Samsung',   creator: '@tech.life.in',  type: 'portrait',  category: 'tech',      views: '870K' },
]

// Scene palettes — each category gets a distinct visual signature
const PALETTE: Record<Category, {
  bg: string
  mid: string
  accent: string
  subjectL: string
  subjectR: string
}> = {
  fitness: {
    bg:       'linear-gradient(160deg, #0f1a0f 0%, #121f0f 60%, #0a1208 100%)',
    mid:      'rgba(30, 55, 25, 0.7)',
    accent:   'rgba(80, 140, 50, 0.12)',
    subjectL: 'rgba(40, 80, 30, 0.5)',
    subjectR: 'rgba(25, 55, 18, 0.3)',
  },
  food: {
    bg:       'linear-gradient(145deg, #1a0f08 0%, #1f1208 60%, #170e06 100%)',
    mid:      'rgba(55, 30, 8, 0.7)',
    accent:   'rgba(180, 90, 20, 0.12)',
    subjectL: 'rgba(90, 45, 10, 0.5)',
    subjectR: 'rgba(60, 28, 6, 0.3)',
  },
  tech: {
    bg:       'linear-gradient(160deg, #080f1a 0%, #091218 60%, #060c12 100%)',
    mid:      'rgba(15, 35, 60, 0.7)',
    accent:   'rgba(30, 100, 200, 0.1)',
    subjectL: 'rgba(20, 50, 100, 0.45)',
    subjectR: 'rgba(10, 30, 70, 0.3)',
  },
  beauty: {
    bg:       'linear-gradient(150deg, #1a0f14 0%, #1f1018 60%, #170c12 100%)',
    mid:      'rgba(55, 20, 40, 0.7)',
    accent:   'rgba(180, 60, 120, 0.1)',
    subjectL: 'rgba(90, 30, 65, 0.45)',
    subjectR: 'rgba(60, 18, 45, 0.3)',
  },
  fashion: {
    bg:       'linear-gradient(155deg, #0f0f0f 0%, #141414 60%, #0a0a0a 100%)',
    mid:      'rgba(35, 30, 30, 0.7)',
    accent:   'rgba(200, 180, 140, 0.08)',
    subjectL: 'rgba(60, 50, 40, 0.45)',
    subjectR: 'rgba(40, 35, 28, 0.3)',
  },
  finance: {
    bg:       'linear-gradient(165deg, #0a0c14 0%, #0c0f1a 60%, #080a10 100%)',
    mid:      'rgba(20, 30, 55, 0.7)',
    accent:   'rgba(50, 80, 160, 0.1)',
    subjectL: 'rgba(30, 50, 100, 0.45)',
    subjectR: 'rgba(18, 30, 70, 0.3)',
  },
  lifestyle: {
    bg:       'linear-gradient(155deg, #0f0f12 0%, #131318 60%, #0a0a0d 100%)',
    mid:      'rgba(30, 30, 45, 0.7)',
    accent:   'rgba(120, 100, 200, 0.08)',
    subjectL: 'rgba(50, 45, 80, 0.45)',
    subjectR: 'rgba(32, 28, 55, 0.3)',
  },
}

const pad: Record<Frame['type'], string> = {
  portrait: '177.78%', landscape: '56.25%', square: '100%',
}

function FrameScene({ f, angle }: { f: Frame; angle: number }) {
  const p = PALETTE[f.category]
  return (
    <>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, background: p.bg }} />

      {/* Environment mid-layer */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0, height: '45%',
        background: p.mid,
        borderTop: `1px solid rgba(255,255,255,0.03)`,
      }} />

      {/* Accent light bloom */}
      <div style={{
        position: 'absolute',
        top: '10%', left: '40%',
        width: '60%', height: '50%',
        background: `radial-gradient(ellipse, ${p.accent} 0%, transparent 70%)`,
      }} />

      {/* Subtle top-left light */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(${angle}deg, rgba(255,255,255,0.04) 0%, transparent 55%)`,
      }} />

      {/* Subject silhouette — left side */}
      <div style={{
        position: 'absolute',
        bottom: '30%', left: '5%',
        width: f.type === 'landscape' ? '22%' : '32%',
        height: f.type === 'landscape' ? '50%' : '55%',
        background: `linear-gradient(to top, ${p.subjectL} 0%, ${p.subjectR} 100%)`,
        borderRadius: '45% 45% 0 0',
      }} />

      {/* Environment detail lines */}
      <div style={{
        position: 'absolute',
        top: '35%', left: '35%', right: '5%', height: '1px',
        background: 'rgba(255,255,255,0.04)',
      }} />
      <div style={{
        position: 'absolute',
        top: '55%', left: '30%', right: '8%', height: '1px',
        background: 'rgba(255,255,255,0.03)',
      }} />
    </>
  )
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

                {/* Rich scene */}
                <FrameScene f={f} angle={angle} />

                {/* AI scan line — triggered by CSS :hover */}
                <div className="scan-line" aria-hidden="true" />

                {/* Brand badge */}
                <div style={{
                  position: 'absolute', top: '8px', left: '8px',
                  background: 'rgba(255,255,255,0.92)',
                  color: '#0A0A0A',
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700, fontSize: '8px',
                  letterSpacing: '0.06em',
                  padding: '3px 8px', borderRadius: '20px',
                  textTransform: 'uppercase',
                  transition: 'background 0.2s',
                  backdropFilter: 'blur(8px)',
                }}>
                  {f.brand}
                </div>

                {/* AI placement dot */}
                <div style={{
                  position: 'absolute', top: '9px', right: '9px',
                  width: '5px', height: '5px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.4)',
                  transition: 'transform 0.3s, background 0.3s',
                }} className="ai-dot" />

                {/* Creator handle + view count */}
                <div style={{
                  position: 'absolute', bottom: '8px', left: '8px', right: '8px',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-dm-mono)',
                    fontSize: '8px', color: 'rgba(255,255,255,0.22)',
                    letterSpacing: '0.02em',
                  }}>
                    {f.creator}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-dm-mono)',
                    fontSize: '8px', color: 'rgba(255,255,255,0.18)',
                    letterSpacing: '0.03em',
                  }}>
                    {f.views}
                  </div>
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
          cursor: none;
          transition: opacity 0.85s cubic-bezier(0.16,1,0.3,1),
                      transform 0.85s cubic-bezier(0.16,1,0.3,1);
        }
        .vframe:hover { opacity: 0.82; }
        .vframe:hover .ai-dot {
          transform: scale(1.8);
          background: rgba(255,255,255,0.85);
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
