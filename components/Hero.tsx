'use client'

import { useEffect, useRef } from 'react'

const LINES = [
  ['We', "Don\u2019t", 'Follow'],
  ['The', 'Future.'],
  ['We', 'Build', 'It.'],
]

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    const t0 = setTimeout(() => {
      if (!rootRef.current) return
      rootRef.current.classList.add('hi-visible')
      const words = rootRef.current.querySelectorAll<HTMLElement>('.word-inner')
      words.forEach((w, i) => {
        const tid = setTimeout(() => w.classList.add('up'), 260 + i * 68)
        timers.push(tid)
      })
    }, 60)

    return () => {
      clearTimeout(t0)
      timers.forEach(clearTimeout)
    }
  }, [])

  return (
    <div ref={rootRef} className="hi-root hero-shell">

      {/* ── CSS gradient mesh — disabled on mobile via media query ── */}
      <div aria-hidden className="hero-mesh">
        <div className="mesh-orb orb-a" />
        <div className="mesh-orb orb-b" />
        <div className="mesh-orb orb-c" />
      </div>

      {/* Hairline below nav */}
      <div className="hero-rule" aria-hidden />

      {/* ── Main ── */}
      <main className="hero-body">

        {/* Pre-label */}
        <div className="hero-prelabel fade-up" style={{ animationDelay: '0.28s' }}>
          Artificial Intelligence · Reinvented
        </div>

        {/* Headline — word-by-word */}
        <h1 className="hero-h1">
          {LINES.map((words, li) => (
            <span key={li} className="hero-h1__line">
              {words.map((word, wi) => (
                <span key={wi} className="word-wrap">
                  <span className="word-inner">{word}</span>
                </span>
              ))}
            </span>
          ))}
        </h1>

        {/* Sub */}
        <p className="hero-sub fade-up" style={{ animationDelay: '0.92s' }}>
          KayBOrg AI is an artificial intelligence company engineering
          the technologies that will define the next era of human experience.
          We don&apos;t iterate. We originate.
        </p>
      </main>

      {/* ── Bottom strip ── */}
      <div className="hero-foot fade-up" style={{ animationDelay: '1.18s' }}>
        <span className="hero-foot__label">Founded · India · 2024</span>
        <div className="hero-scroll-hint" aria-hidden>
          <span className="hero-scroll-hint__text">Scroll</span>
          <svg width="14" height="22" viewBox="0 0 14 22" fill="none"
            className="hero-scroll-hint__arrow">
            <line x1="7" y1="2" x2="7" y2="18"
              stroke="rgba(255,255,255,0.22)" strokeWidth="1" strokeLinecap="round"/>
            <path d="M2.5 14 L7 18.5 L11.5 14"
              stroke="rgba(255,255,255,0.22)" strokeWidth="1"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <style>{`
        .hi-root { opacity: 0; transition: opacity 1.1s ease; }
        .hi-visible { opacity: 1; }

        .hero-shell {
          position: relative;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: #0A0A0A;
        }

        /* ── Mesh ── */
        .hero-mesh {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        .mesh-orb {
          position: absolute;
          border-radius: 50%;
          will-change: transform;
          filter: blur(90px);
        }
        .orb-a {
          width: 55vw; height: 55vw;
          background: radial-gradient(circle, rgba(80,20,180,0.2) 0%, transparent 72%);
          top: -18%; left: -8%;
          animation: orbA 22s ease-in-out infinite;
        }
        .orb-b {
          width: 44vw; height: 44vw;
          background: radial-gradient(circle, rgba(160,160,200,0.06) 0%, transparent 70%);
          top: 5%; right: -12%;
          animation: orbB 28s ease-in-out infinite;
        }
        .orb-c {
          width: 36vw; height: 36vw;
          background: radial-gradient(circle, rgba(50,10,120,0.13) 0%, transparent 70%);
          bottom: -12%; left: 35%;
          animation: orbC 19s ease-in-out infinite;
        }
        @keyframes orbA {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(4%, 7%) scale(1.06); }
          70%      { transform: translate(-3%, 2%) scale(0.97); }
        }
        @keyframes orbB {
          0%,100% { transform: translate(0,0); }
          45%     { transform: translate(-5%, 5%); }
        }
        @keyframes orbC {
          0%,100% { transform: translate(0,0) scale(1); }
          55%     { transform: translate(4%, -5%) scale(1.08); }
        }

        /* Disable heavy animations on mobile */
        @media (max-width: 767px) {
          .mesh-orb {
            animation: none !important;
            filter: blur(60px);
            opacity: 0.6;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .mesh-orb { animation: none !important; }
          .hero-scroll-hint__arrow { animation: none !important; }
        }

        /* ── Hairline ── */
        .hero-rule {
          position: absolute;
          top: 60px; left: 0; right: 0;
          height: 1px;
          background: rgba(255,255,255,0.04);
          z-index: 5;
        }

        /* ── Body ── */
        .hero-body {
          position: relative;
          z-index: 10;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          /* Top pad: nav height + breathing room */
          padding:
            clamp(96px, 14vh, 148px)
            clamp(20px, 5vw, 64px)
            clamp(40px, 6vh, 72px);
        }

        /* Pre-label */
        .hero-prelabel {
          font-family: var(--font-dm-mono);
          font-size: clamp(9px, 1.8vw, 11px);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          margin-bottom: clamp(20px, 3.5vh, 36px);
        }

        /* Headline */
        .hero-h1 {
          font-family: var(--font-syne);
          font-weight: 800;
          font-size: clamp(46px, 9vw, 130px);
          line-height: 0.93;
          letter-spacing: -0.045em;
          color: rgba(255,255,255,0.94);
          margin: 0 0 clamp(22px, 3.5vh, 40px);
          /* prevent orphan lines on narrow screens */
          word-break: break-word;
          hyphens: manual;
        }
        .hero-h1__line { display: block; }
        .word-wrap { margin-right: 0.22em; }
        .word-wrap:last-child { margin-right: 0; }

        /* Sub */
        .hero-sub {
          font-family: var(--font-dm-sans);
          font-weight: 300;
          font-size: clamp(13px, 1.4vw, 16px);
          color: rgba(255,255,255,0.3);
          line-height: 1.78;
          max-width: 44ch;
          margin: 0;
        }

        /* ── Footer strip ── */
        .hero-foot {
          position: relative;
          z-index: 10;
          padding: clamp(16px, 2.5vh, 28px) clamp(20px, 5vw, 64px) clamp(20px, 3vh, 36px);
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,0.04);
        }
        .hero-foot__label {
          font-family: var(--font-dm-mono);
          font-size: clamp(8px, 1.6vw, 10px);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.16);
        }
        .hero-scroll-hint {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .hero-scroll-hint__text {
          font-family: var(--font-dm-mono);
          font-size: 8px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.14);
        }
        .hero-scroll-hint__arrow {
          animation: scrollBounce 2.4s ease-in-out infinite;
        }
        @keyframes scrollBounce {
          0%,100% { transform: translateY(0); opacity: 0.5; }
          50%      { transform: translateY(5px); opacity: 1; }
        }

        /* ── Tablet tweaks (768–1023px) ── */
        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-h1 { font-size: clamp(62px, 9vw, 96px); }
        }
      `}</style>
    </div>
  )
}
