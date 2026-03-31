'use client'

export default function Vision() {
  return (
    <section style={{
      borderTop: '1px solid rgba(255,255,255,0.07)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      padding: 'clamp(100px, 14vh, 180px) clamp(20px, 5vw, 48px)',
      background: '#0C0C0E',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'min(700px, 90vw)', height: '300px',
        background: 'radial-gradient(ellipse, rgba(200,169,110,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: 'min(680px, 100%)', margin: '0 auto' }}>
        {/* Cosmos-style editorial label */}
        <p style={{
          fontFamily: 'var(--font-instrument-serif)',
          fontStyle: 'italic',
          fontSize: '14px',
          color: 'rgba(200,169,110,0.5)',
          letterSpacing: '0.04em',
          margin: '0 0 28px',
        }}>
          On the future of attention
        </p>

        {/* Cosmos-style decorative rule */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '48px' }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
          <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#C8A96E', opacity: 0.4 }} />
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
        </div>

        <blockquote style={{
          fontFamily: 'var(--font-instrument-serif)',
          fontWeight: 400,
          fontStyle: 'italic',
          fontSize: 'clamp(22px, 4vw, 50px)',
          color: '#F0EDE8',
          margin: '0 auto 48px',
          lineHeight: 1.2,
          letterSpacing: '-0.01em',
        }}>
          Every once in a while something comes along
          and you wonder how advertising
          ever worked any other way.

          This is that thing.
        </blockquote>

        {/* Bottom rule */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
          <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#C8A96E', opacity: 0.4 }} />
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
        </div>
      </div>
    </section>
  )
}
