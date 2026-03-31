'use client'

import { useEffect, useRef, useState } from 'react'

// Animated product placement demo:
// Shows a simulated video frame with AI targeting + brand product being embedded.
// Loops: scan → identify surface → place product → hold → reset.
// All pure CSS + RAF. No external dependencies.

type Phase = 'scan' | 'lock' | 'place' | 'hold'

const CYCLE: Phase[] = ['scan', 'lock', 'place', 'hold']
const PHASE_DURATION: Record<Phase, number> = {
  scan: 1600,
  lock: 800,
  place: 900,
  hold: 2200,
}

// Simulated "shelf" surfaces inside a kitchen-style creator video
const SURFACES = [
  { x: '18%', y: '55%', w: '24%', h: '3%', label: 'counter edge' },
  { x: '58%', y: '38%', w: '14%', h: '2%', label: 'shelf top' },
  { x: '30%', y: '72%', w: '18%', h: '2.5%', label: 'table surface' },
]

// The "placed" product — a simple brand tile that appears on surface[1]
const PRODUCT = { x: '59%', y: '28%', w: '12%', h: '10%' }

export default function Demo() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive]   = useState(false)
  const [phase, setPhase]     = useState<Phase>('scan')
  const [scanY, setScanY]     = useState(0) // 0-100 scan line position
  const rafRef  = useRef<number>(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Intersection trigger
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('in-view'); setActive(true); io.unobserve(el) } },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Phase sequencer
  useEffect(() => {
    if (!active) return
    const advance = (current: Phase) => {
      const nextIdx = (CYCLE.indexOf(current) + 1) % CYCLE.length
      const next = CYCLE[nextIdx]
      timerRef.current = setTimeout(() => {
        setPhase(next)
        advance(next)
      }, PHASE_DURATION[current])
    }
    advance(phase)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [active]) // eslint-disable-line react-hooks/exhaustive-deps

  // Scan line animation during 'scan' phase
  useEffect(() => {
    if (phase !== 'scan') { setScanY(0); return }
    const t0 = performance.now()
    const dur = PHASE_DURATION.scan
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1)
      setScanY(p * 100)
      if (p < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [phase])

  const showScan    = phase === 'scan'
  const showLock    = phase === 'lock' || phase === 'place' || phase === 'hold'
  const showProduct = phase === 'place' || phase === 'hold'
  const showLabel   = phase === 'hold'

  return (
    <section ref={sectionRef} className="reveal" style={{
      background: '#F7F7F7',
      borderTop: '1px solid rgba(0,0,0,0.07)',
      borderBottom: '1px solid rgba(0,0,0,0.07)',
      padding: 'clamp(80px, 12vh, 140px) clamp(20px, 5vw, 48px)',
    }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vh, 72px)' }}>
          <div style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: '9px', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)',
            marginBottom: '16px',
          }}>
            The technology
          </div>
          <h2 style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(28px, 4.5vw, 56px)',
            color: '#0A0A0A',
            letterSpacing: '-0.04em',
            margin: 0, lineHeight: 1.05,
          }}>
            Watch the AI find<br />its moment.
          </h2>
        </div>

        {/* Demo frame */}
        <div style={{ position: 'relative' }}>

          {/* Outer "phone/video" shell */}
          <div style={{
            maxWidth: '680px',
            margin: '0 auto',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(0,0,0,0.1)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06)',
            background: '#111',
            aspectRatio: '16/9',
            position: 'relative',
          }}>

            {/* Simulated video scene — kitchen creator video */}
            <div style={{ position: 'absolute', inset: 0 }}>

              {/* Background scene layers */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(165deg, #1a1612 0%, #0f0d0b 40%, #141210 100%)',
              }} />

              {/* Simulated "counter" */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '38%',
                background: 'linear-gradient(to top, rgba(35,28,20,0.95), rgba(28,22,16,0.7))',
                borderTop: '1px solid rgba(255,255,255,0.04)',
              }} />

              {/* Simulated cabinet/shelf in background */}
              <div style={{
                position: 'absolute', top: '20%', left: '50%', right: '5%', height: '42%',
                background: 'rgba(25,20,14,0.6)',
                borderRadius: '2px',
                border: '1px solid rgba(255,255,255,0.03)',
              }} />
              <div style={{
                position: 'absolute', top: '34%', left: '52%', right: '7%', height: '1px',
                background: 'rgba(255,255,255,0.06)',
              }} />

              {/* Creator silhouette suggestion */}
              <div style={{
                position: 'absolute', bottom: '30%', left: '8%',
                width: '28%', height: '55%',
                background: 'linear-gradient(to top, rgba(50,38,25,0.4) 0%, rgba(40,30,18,0.15) 100%)',
                borderRadius: '40% 40% 0 0',
              }} />

              {/* Surface highlight indicators */}
              {SURFACES.map((s, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  left: s.x, top: s.y, width: s.w, height: s.h,
                  background: showLock && i === 1
                    ? 'rgba(255,255,255,0.12)'
                    : 'rgba(255,255,255,0.02)',
                  borderBottom: showLock && i === 1
                    ? '1px solid rgba(255,255,255,0.3)'
                    : '1px solid rgba(255,255,255,0.04)',
                  transition: 'background 0.4s, border-color 0.4s',
                }} />
              ))}

              {/* AI scan line */}
              {showScan && (
                <div style={{
                  position: 'absolute',
                  left: 0, right: 0,
                  height: '2px',
                  top: `${scanY}%`,
                  background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.4) 30%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 70%, transparent)',
                  pointerEvents: 'none',
                  boxShadow: '0 0 12px rgba(255,255,255,0.2)',
                }} />
              )}

              {/* Lock-on targeting reticle — surface[1]: shelf */}
              {showLock && (
                <div style={{
                  position: 'absolute',
                  left: PRODUCT.x, top: PRODUCT.y, width: PRODUCT.w, height: PRODUCT.h,
                  border: '1px solid rgba(255,255,255,0.35)',
                  borderRadius: '2px',
                  boxSizing: 'border-box',
                  transition: 'opacity 0.4s',
                }}>
                  {/* Corner marks */}
                  {[
                    { top: -1, left: -1, borderTop: '1px solid rgba(255,255,255,0.8)', borderLeft: '1px solid rgba(255,255,255,0.8)', width: '8px', height: '8px' },
                    { top: -1, right: -1, borderTop: '1px solid rgba(255,255,255,0.8)', borderRight: '1px solid rgba(255,255,255,0.8)', width: '8px', height: '8px' },
                    { bottom: -1, left: -1, borderBottom: '1px solid rgba(255,255,255,0.8)', borderLeft: '1px solid rgba(255,255,255,0.8)', width: '8px', height: '8px' },
                    { bottom: -1, right: -1, borderBottom: '1px solid rgba(255,255,255,0.8)', borderRight: '1px solid rgba(255,255,255,0.8)', width: '8px', height: '8px' },
                  ].map((style, j) => (
                    <div key={j} style={{ position: 'absolute', ...style as React.CSSProperties }} />
                  ))}
                </div>
              )}

              {/* Placed product tile */}
              {showProduct && (
                <div style={{
                  position: 'absolute',
                  left: PRODUCT.x, top: PRODUCT.y, width: PRODUCT.w, height: PRODUCT.h,
                  background: 'rgba(245,240,232,0.92)',
                  borderRadius: '3px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '2px',
                  animation: 'productIn 0.5s cubic-bezier(0.16,1,0.3,1) both',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
                }}>
                  {/* Simplified brand product */}
                  <div style={{
                    width: '55%', height: '2px',
                    background: 'rgba(0,0,0,0.18)', borderRadius: '1px',
                  }} />
                  <div style={{
                    width: '70%', height: '40%',
                    background: 'rgba(0,0,0,0.08)', borderRadius: '1px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{ width: '50%', height: '1.5px', background: 'rgba(0,0,0,0.15)', borderRadius: '1px' }} />
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-syne)',
                    fontWeight: 800,
                    fontSize: 'clamp(4px, 0.7vw, 7px)',
                    color: 'rgba(0,0,0,0.35)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}>
                    Brand
                  </div>
                </div>
              )}

              {/* "Placed" label */}
              {showLabel && (
                <div style={{
                  position: 'absolute',
                  left: PRODUCT.x, top: `calc(${PRODUCT.y} - 24px)`,
                  background: 'rgba(0,0,0,0.75)',
                  color: 'rgba(255,255,255,0.9)',
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: 'clamp(6px, 0.8vw, 9px)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap',
                  animation: 'fadeLabel 0.4s ease both',
                }}>
                  Placed ·{' '}
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Nike Air
                  </span>
                </div>
              )}

              {/* Status pill */}
              <div style={{
                position: 'absolute', top: '10px', right: '10px',
                background: 'rgba(0,0,0,0.55)',
                backdropFilter: 'blur(8px)',
                borderRadius: '20px',
                padding: '4px 10px',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <div style={{
                  width: '5px', height: '5px', borderRadius: '50%',
                  background: phase === 'scan'  ? 'rgba(255,220,80,0.9)'
                             : phase === 'lock'  ? 'rgba(255,150,50,0.9)'
                             : 'rgba(100,220,100,0.9)',
                  transition: 'background 0.4s',
                  boxShadow: phase === 'hold'
                    ? '0 0 6px rgba(100,220,100,0.6)'
                    : 'none',
                }} />
                <span style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: 'clamp(7px, 0.9vw, 9px)',
                  color: 'rgba(255,255,255,0.7)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  {phase === 'scan' ? 'Scanning'
                   : phase === 'lock' ? 'Surface locked'
                   : phase === 'place' ? 'Placing'
                   : 'Live'}
                </span>
              </div>

              {/* Frame counter (authenticity detail) */}
              <div style={{
                position: 'absolute', bottom: '10px', left: '10px',
                fontFamily: 'var(--font-dm-mono)',
                fontSize: 'clamp(7px, 0.8vw, 8px)',
                color: 'rgba(255,255,255,0.2)',
                letterSpacing: '0.08em',
              }}>
                f:1247 · 24fps · 1080p
              </div>
            </div>
          </div>

          {/* Below-frame metadata */}
          <div style={{
            maxWidth: '680px',
            margin: '16px auto 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div style={{
              fontFamily: 'var(--font-dm-mono)',
              fontSize: '9px', letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)',
            }}>
              @arjun.runs · 2.1M views · Cooking with Nike
            </div>
            <div style={{
              fontFamily: 'var(--font-dm-mono)',
              fontSize: '9px', letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)',
            }}>
              AI model v2.4
            </div>
          </div>
        </div>

        {/* Three-metric strip */}
        <div className="demo-metrics">
          {[
            { value: '< 3s', label: 'Time to place per frame' },
            { value: '0%',   label: 'Skip rate possible' },
            { value: '100%', label: 'Of real viewers see it' },
          ].map((m, i) => (
            <div key={i} className="demo-metric reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 44px)',
                color: '#0A0A0A',
                letterSpacing: '-0.05em',
                lineHeight: 1,
              }}>
                {m.value}
              </div>
              <div style={{
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 300,
                fontSize: '12px',
                color: 'rgba(0,0,0,0.4)',
                marginTop: '8px',
                lineHeight: 1.5,
              }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes productIn {
          from { opacity: 0; transform: scale(0.8); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeLabel {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .demo-metrics {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1px;
          margin-top: clamp(48px, 7vh, 80px);
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 12px;
          overflow: hidden;
          background: rgba(0,0,0,0.07);
        }
        .demo-metric {
          background: #F7F7F7;
          padding: clamp(24px, 3.5vw, 40px);
          text-align: center;
        }
        @media (max-width: 600px) {
          .demo-metrics { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
