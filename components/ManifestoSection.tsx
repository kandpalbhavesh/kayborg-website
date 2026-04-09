'use client'

import { useEffect, useRef } from 'react'

const LEFT  = ['Intelligence at the core.', 'Not tools. Architectures.', 'Built for scale from day one.']
const RIGHT = ['Obsessed with first principles.', 'Vertical by design.', 'India-first. World-next.']

export default function ManifestoSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    // Lower threshold so short mobile viewports still trigger reveals
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view') }),
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' },
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="philosophy" className="mf-section">

      <div className="reveal mf-label">Our Philosophy</div>

      <p className="reveal mf-statement" style={{ transitionDelay: '0.08s' }}>
        Most companies apply AI to existing problems.{' '}
        <em className="mf-statement__em">
          We ask what becomes possible when AI is the foundation.
        </em>
      </p>

      <div className="reveal mf-divider" style={{ transitionDelay: '0.18s' }} aria-hidden />

      <div className="mf-grid">
        <div className="mf-col">
          {LEFT.map((point, i) => (
            <div key={point} className="reveal mf-point"
              style={{ transitionDelay: `${0.22 + i * 0.09}s` }}>
              <span className="mf-dot mf-dot--l" aria-hidden />
              <span className="mf-point__text">{point}</span>
            </div>
          ))}
        </div>
        <div className="mf-col">
          {RIGHT.map((point, i) => (
            <div key={point} className="reveal mf-point"
              style={{ transitionDelay: `${0.36 + i * 0.09}s` }}>
              <span className="mf-dot mf-dot--r" aria-hidden />
              <span className="mf-point__text">{point}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .mf-section {
          background: #0A0A0A;
          padding: clamp(64px, 12vh, 152px) clamp(20px, 5vw, 64px);
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .mf-label {
          font-family: var(--font-dm-mono);
          font-size: 9px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.18);
          margin-bottom: clamp(28px, 5vh, 60px);
        }

        .mf-statement {
          font-family: var(--font-syne);
          font-weight: 800;
          font-size: clamp(24px, 4vw, 56px);
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: rgba(255,255,255,0.88);
          max-width: 22ch;
          margin-bottom: clamp(44px, 8vh, 96px);
          /* Prevent a single word spilling on narrow phones */
          word-break: break-word;
          hyphens: manual;
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
          margin-bottom: clamp(40px, 7vh, 88px);
          max-width: 560px;
        }

        .mf-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
          gap: clamp(0px, 4vw, 64px);
          max-width: 760px;
        }

        .mf-col { display: flex; flex-direction: column; }

        .mf-point {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 15px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .mf-point:last-child { border-bottom: none; }

        .mf-dot {
          width: 3px; height: 3px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 9px;
        }
        .mf-dot--l { background: rgba(255,255,255,0.3); }
        .mf-dot--r { background: rgba(255,255,255,0.18); }

        .mf-point__text {
          font-family: var(--font-dm-sans);
          font-weight: 300;
          font-size: clamp(13px, 1.3vw, 15px);
          color: rgba(255,255,255,0.42);
          line-height: 1.6;
        }

        /* On mobile, collapse to single column */
        @media (max-width: 480px) {
          .mf-grid { gap: 0; }
        }
      `}</style>
    </section>
  )
}
