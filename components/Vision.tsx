'use client'

export default function Vision() {
  return (
    <section
      data-scroll
      data-scroll-section
      style={{
        borderTop: '1px solid #E8E8E8',
        borderBottom: '1px solid #E8E8E8',
        padding: '160px 24px',
        background: '#FFFFFF',
        textAlign: 'center',
      }}
    >
      <blockquote
        data-scroll
        data-scroll-speed="0.5"
        style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 'clamp(26px, 4vw, 52px)',
          color: '#111111',
          maxWidth: '640px',
          margin: '0 auto',
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          fontStyle: 'normal',
        }}
      >
        Every once in a while something comes along
        and you wonder how advertising
        ever worked any other way.

        This is that thing.
      </blockquote>
    </section>
  )
}
