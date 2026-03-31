'use client'

type Frame = {
  brand: string
  creator: string
  type: 'portrait' | 'landscape' | 'square'
  bg: string
}

const frames: Frame[] = [
  { brand: 'Nike',      creator: '@arjun.runs',     type: 'portrait',  bg: 'linear-gradient(155deg, rgba(200,169,110,0.14) 0%, transparent 65%)' },
  { brand: 'boAt',      creator: '@music.daily',    type: 'landscape', bg: 'linear-gradient(200deg, rgba(0,229,195,0.11) 0%, transparent 60%)' },
  { brand: 'Mamaearth', creator: '@skincare.ria',   type: 'portrait',  bg: 'linear-gradient(140deg, rgba(160,200,100,0.09) 0%, transparent 60%)' },
  { brand: 'Apple',     creator: '@techreview.in',  type: 'landscape', bg: 'linear-gradient(185deg, rgba(0,229,195,0.09) 0%, transparent 55%)' },
  { brand: 'CRED',      creator: '@finance.tips',   type: 'portrait',  bg: 'linear-gradient(150deg, rgba(200,169,110,0.12) 0%, transparent 60%)' },
  { brand: 'Zomato',    creator: '@foodie.mum',     type: 'square',    bg: 'linear-gradient(170deg, rgba(180,60,60,0.09) 0%, transparent 60%)' },
  { brand: "Levi's",    creator: '@style.delhi',    type: 'portrait',  bg: 'linear-gradient(130deg, rgba(80,100,200,0.09) 0%, transparent 58%)' },
  { brand: 'Samsung',   creator: '@gadget.world',   type: 'landscape', bg: 'linear-gradient(210deg, rgba(0,229,195,0.1) 0%, transparent 60%)' },
  { brand: 'Nykaa',     creator: '@beauty.guru',    type: 'portrait',  bg: 'linear-gradient(145deg, rgba(200,100,160,0.09) 0%, transparent 58%)' },
  { brand: 'OnePlus',   creator: '@tech.india',     type: 'landscape', bg: 'linear-gradient(180deg, rgba(200,60,60,0.08) 0%, transparent 55%)' },
  { brand: 'Myntra',    creator: '@fashion.life',   type: 'portrait',  bg: 'linear-gradient(155deg, rgba(200,169,110,0.1) 0%, transparent 60%)' },
  { brand: 'Jio',       creator: '@digital.in',     type: 'square',    bg: 'linear-gradient(175deg, rgba(0,229,195,0.08) 0%, transparent 55%)' },
  { brand: 'Flipkart',  creator: '@deals.daily',    type: 'landscape', bg: 'linear-gradient(165deg, rgba(60,80,200,0.09) 0%, transparent 58%)' },
  { brand: 'realme',    creator: '@unbox.life',     type: 'portrait',  bg: 'linear-gradient(140deg, rgba(200,169,110,0.09) 0%, transparent 60%)' },
  { brand: 'H&M',       creator: '@ootd.india',     type: 'landscape', bg: 'linear-gradient(195deg, rgba(0,229,195,0.07) 0%, transparent 52%)' },
  { brand: 'Adidas',    creator: '@fit.life',       type: 'portrait',  bg: 'linear-gradient(135deg, rgba(200,169,110,0.13) 0%, transparent 58%)' },
  { brand: 'Swiggy',    creator: '@chef.home',      type: 'landscape', bg: 'linear-gradient(185deg, rgba(200,120,40,0.09) 0%, transparent 58%)' },
  { brand: 'Nike',      creator: '@cricket.fan',    type: 'portrait',  bg: 'linear-gradient(150deg, rgba(0,229,195,0.11) 0%, transparent 60%)' },
  { brand: 'Apple',     creator: '@review.hub',     type: 'square',    bg: 'linear-gradient(170deg, rgba(200,169,110,0.08) 0%, transparent 55%)' },
  { brand: 'boAt',      creator: '@workout.daily',  type: 'portrait',  bg: 'linear-gradient(145deg, rgba(0,229,195,0.1) 0%, transparent 60%)' },
  { brand: 'CRED',      creator: '@savings.club',   type: 'landscape', bg: 'linear-gradient(200deg, rgba(200,169,110,0.09) 0%, transparent 58%)' },
  { brand: "Levi's",    creator: '@denim.life',     type: 'portrait',  bg: 'linear-gradient(130deg, rgba(60,100,200,0.08) 0%, transparent 58%)' },
  { brand: 'Mamaearth', creator: '@natural.glow',   type: 'landscape', bg: 'linear-gradient(160deg, rgba(100,180,80,0.08) 0%, transparent 58%)' },
  { brand: 'Samsung',   creator: '@tech.life.in',   type: 'portrait',  bg: 'linear-gradient(155deg, rgba(0,229,195,0.09) 0%, transparent 60%)' },
]

const aspectPadding: Record<Frame['type'], string> = {
  portrait:  '177.78%',
  landscape: '56.25%',
  square:    '100%',
}

export default function VideoGrid() {
  return (
    <section style={{ background: '#0C0C0E' }}>
      <div className="vgrid">
        {frames.map((f, i) => (
          <div key={i} className="vframe">
            {/* Aspect ratio spacer */}
            <div style={{ paddingBottom: aspectPadding[f.type] }} />

            {/* Frame content */}
            <div style={{ position: 'absolute', inset: 0 }}>
              {/* Gradient background */}
              <div style={{ position: 'absolute', inset: 0, background: f.bg }} />

              {/* Brand badge */}
              <div style={{
                position: 'absolute',
                top: '8px', left: '8px',
                background: 'rgba(200,169,110,0.88)',
                backdropFilter: 'blur(4px)',
                color: '#0C0C0E',
                fontFamily: 'var(--font-syne)',
                fontWeight: 700,
                fontSize: '8px',
                letterSpacing: '0.05em',
                padding: '3px 8px',
                borderRadius: '20px',
              }}>
                {f.brand}
              </div>

              {/* AI placed indicator */}
              <div style={{
                position: 'absolute',
                top: '10px', right: '10px',
                width: '5px', height: '5px',
                borderRadius: '50%',
                background: '#00E5C3',
                boxShadow: '0 0 6px rgba(0,229,195,0.7)',
              }} />

              {/* Creator handle */}
              <div style={{
                position: 'absolute',
                bottom: '8px', left: '8px',
                fontFamily: 'var(--font-dm-mono)',
                fontSize: '9px',
                color: 'rgba(240,237,232,0.3)',
                letterSpacing: '0.02em',
              }}>
                {f.creator}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .vgrid {
          columns: 4;
          column-gap: 4px;
          padding: 4px;
        }
        .vframe {
          break-inside: avoid;
          margin-bottom: 4px;
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          background: #111114;
          transition: opacity 0.2s;
          cursor: default;
        }
        .vframe:hover { opacity: 0.85; }

        @media (max-width: 1023px) { .vgrid { columns: 3; } }
        @media (max-width: 600px)  { .vgrid { columns: 2; } }
      `}</style>
    </section>
  )
}
