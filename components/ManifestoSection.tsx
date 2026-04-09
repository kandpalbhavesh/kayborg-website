'use client'

import { useEffect, useRef } from 'react'

const LEFT_POINTS  = ['Intelligence at the core.', 'Not tools. Architectures.', 'Built for scale from day one.']
const RIGHT_POINTS = ['Obsessed with first principles.', 'Vertical by design.', 'India-first. World-next.']

export default function ManifestoSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view') }),
      { threshold: 0.12 },
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="philosophy" className="mf-section">

      {/* Section label */}
      <div className="reveal mf-label">Our Philosophy</div>

      {/* Statement */}
      <p className="reveal mf-statement" style={{ transitionDelay: '0.08s' }}>
        Most companies apply AI to existing problems.{' '}
        <em className="mf-statement__em">
          We ask what becomes possible when AI is the foundation.
        </em>
      </p>

      {/* Divider */}
      <div className="reveal mf-divider" style={{ transitionDelay: '0.18s' }} aria-hidden />

      {/* Two-column ethos */}
      <div className="mf-grid">
        <div className="mf-col">
          {LEFT_POINTS.map((point, i) => (
            <div
              key={point}
              className="reveal mf-point"
              style={{ transitionDelay: `${0.22 + i * 0.09}s` }}
            >
              <span className="mf-point__dot mf-point__dot--left" aria-hidden />
              <span className="mf-point__text">{point}</span>
            </div>
          ))}
        </div>
        <div className="mf-col">
          {RIGHT_POINTS.map((point, i) => (
            <div
              key={point}
              className="reveal mf-point"
              style={{ transitionDelay: `${0.36 + i * 0.09}s` }}
            >
              <span className="mf-point__dot mf-point__dot--right" aria-hidden />
              <span className="mf-point__text">{point}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .mf-section {
          background: #0A0A0A;
          padding: clamp(80px, 14vh, 160px) clamp(20px, 5vw, 64px);
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .mf-label {
          font-family: var(--font-dm-mono);
          font-size: 9px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.18);
          margin-bottom: clamp(36px, 6vh, 64px);
        }

        .mf-statement {
          font-family: var(--font-syne);
          font-weight: 800;
          font-size: clamp(26px, 4vw, 58px);
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: rgba(255,255,255,0.88);
          max-width: 22ch;
          margin-bottom: clamp(52px, 9vh, 104px);
        }
        .mf-statement__em {
          font-family: var(--font-instrument-serif);
          font-weight: 400;
          font-style: italic;
          color: rgba(255,255,255,0.38);
        }

        .mf-divider {
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin-bottom: clamp(48px, 8vh, 96px);
          max-width: 600px;
        }

        .mf-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
          gap: clamp(32px, 5vw, 72px);
          max-width: 780px;
        }

        .mf-col {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .mf-point {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .mf-point:last-child { border-bottom: none; }

        .mf-point__dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 9px;
        }
        .mf-point__dot--left  { background: rgba(255,255,255,0.3); }
        .mf-point__dot--right { background: rgba(255,255,255,0.18); }

        .mf-point__text {
          font-family: var(--font-dm-sans);
          font-weight: 300;
          font-size: clamp(13px, 1.25vw, 15px);
          color: rgba(255,255,255,0.42);
          line-height: 1.6;
        }
      `}</style>
    </section>
  )
}
