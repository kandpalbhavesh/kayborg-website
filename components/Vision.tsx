'use client'

export default function Vision() {
  return (
    <section style={{
      borderTop: '1px solid rgba(255,255,255,0.07)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      padding: 'clamp(80px, 12vh, 160px) clamp(20px, 5vw, 48px)',
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
      <blockquote style={{
        fontFamily: 'var(--font-syne)',
        fontWeight: 800,
        fontSize: 'clamp(22px, 4vw, 52px)',
        color: '#F0EDE8',
        maxWidth: 'min(640px, 100%)',
        margin: '0 auto',
        lineHeight: 1.1,
        letterSpacing: '-0.03em',
        fontStyle: 'normal',
        position: 'relative',
      }}>
        Every once in a while something comes along
        and you wonder how advertising
        ever worked any other way.

        This is that thing.
      </blockquote>
    </section>
  )
}
