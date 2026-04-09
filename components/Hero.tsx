'use client'

import { useEffect, useRef } from 'react'

const LINES = [
  ['We', "Don't", 'Follow'],
  ['The', 'Future.'],
  ['We', 'Build', 'It.'],
]

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => {
      if (!rootRef.current) return
      rootRef.current.classList.add('hi-visible')
      const words = rootRef.current.querySelectorAll<HTMLElement>('.word-inner')
      words.forEach((w, i) => {
        setTimeout(() => w.classList.add('up'), 260 + i * 68)
      })
    }, 60)
    return () => clearTimeout(t)
  }, [])

  return (
    <div ref={rootRef} className="hi-root hero-shell">

      {/* ── Gradient mesh background ── */}
      <div aria-hidden className="hero-mesh">
        <div className="mesh-orb orb-a" />
        <div className="mesh-orb orb-b" />
        <div className="mesh-orb orb-c" />
      </div>

      {/* ── Horizontal rule across full width ── */}
      <div className="hero-rule" aria-hidden />

      {/* ── Main content ── */}
      <main className="hero-body">

        {/* Pre-label */}
        <div className="hero-prelabel fade-up" style={{ animationDelay: '0.28s' }}>
          Artificial Intelligence · Reinvented
        </div>

        {/* Headline — word-by-word reveal */}
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

        {/* Sub-copy */}
        <p className="hero-sub fade-up" style={{ animationDelay: '0.92s' }}>
          KayBOrg AI is an artificial intelligence company engineering
          the technologies that will define the next era of human experience.
          We don&apos;t iterate. We originate.
        </p>
      </main>

      {/* ── Footer strip ── */}
      <div className="hero-foot fade-up" style={{ animationDelay: '1.18s' }}>
        <span className="hero-foot__label">Founded · India · 2024</span>
        <div className="hero-scroll-hint" aria-hidden>
          <span className="hero-scroll-hint__text">Scroll</span>
          <svg width="14" height="22" viewBox="0 0 14 22" fill="none" className="hero-scroll-hint__arrow">
            <line x1="7" y1="2" x2="7" y2="18" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeLinecap="round"/>
            <path d="M2.5 13.5 L7 18 L11.5 13.5" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <style>{`
        .hi-root  { opacity: 0; transition: opacity 1.1s ease; }
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
          filter: blur(100px);
        }
        .orb-a {
          width: 55vw; height: 55vw;
          background: radial-gradient(circle, rgba(80,20,180,0.22) 0%, transparent 72%);
          top: -18%; left: -8%;
          animation: orbA 20s ease-in-out infinite;
        }
        .orb-b {
          width: 45vw; height: 45vw;
          background: radial-gradient(circle, rgba(180,180,200,0.06) 0%, transparent 70%);
          top: 5%; right: -12%;
          animation: orbB 26s ease-in-out infinite;
        }
        .orb-c {
          width: 38vw; height: 38vw;
          background: radial-gradient(circle, rgba(50,10,120,0.14) 0%, transparent 70%);
          bottom: -12%; left: 35%;
          animation: orbC 18s ease-in-out infinite;
        }
        @keyframes orbA {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(4%, 7%) scale(1.07); }
          70%      { transform: translate(-3%, 3%) scale(0.96); }
        }
        @keyframes orbB {
          0%,100% { transform: translate(0,0); }
          45%     { transform: translate(-6%, 5%); }
        }
        @keyframes orbC {
          0%,100% { transform: translate(0,0) scale(1); }
          55%     { transform: translate(5%,-6%) scale(1.1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .mesh-orb { animation: none !important; }
        }

        /* ── Rule ── */
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
          padding: clamp(100px, 16vh, 160px) clamp(20px, 5vw, 64px) clamp(60px, 8vh, 80px);
        }

        /* Pre-label */
        .hero-prelabel {
          font-family: var(--font-dm-mono);
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          margin-bottom: clamp(24px, 4vh, 40px);
        }

        /* Headline */
        .hero-h1 {
          font-family: var(--font-syne);
          font-weight: 800;
          font-size: clamp(54px, 9.5vw, 132px);
          line-height: 0.93;
          letter-spacing: -0.045em;
          color: rgba(255,255,255,0.94);
          margin: 0 0 clamp(28px, 4vh, 44px);
        }
        .hero-h1__line {
          display: block;
        }
        .word-wrap {
          margin-right: 0.24em;
        }
        .word-wrap:last-child {
          margin-right: 0;
        }

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

        /* ── Foot ── */
        .hero-foot {
          position: relative;
          z-index: 10;
          padding: clamp(20px, 3vh, 32px) clamp(20px, 5vw, 64px) clamp(24px, 4vh, 40px);
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,0.04);
        }
        .hero-foot__label {
          font-family: var(--font-dm-mono);
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.16);
        }
        .hero-scroll-hint {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 7px;
        }
        .hero-scroll-hint__text {
          font-family: var(--font-dm-mono);
          font-size: 8px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.14);
        }
        .hero-scroll-hint__arrow {
          animation: scrollBounce 2.2s ease-in-out infinite;
        }
        @keyframes scrollBounce {
          0%,100% { transform: translateY(0); opacity: 0.6; }
          50%      { transform: translateY(5px); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-scroll-hint__arrow { animation: none; }
        }
      `}</style>
    </div>
  )
}
