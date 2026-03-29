'use client'

export default function Stats() {
  return (
    <section
      data-scroll
      data-scroll-section
      style={{
        borderTop: '1px solid #E8E8E8',
        borderBottom: '1px solid #E8E8E8',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        width: '100%',
      }}
    >
      {/* Column 1 */}
      <div
        style={{
          borderRight: '1px solid #E8E8E8',
          padding: '48px 40px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(40px, 5.5vw, 60px)',
            color: '#111111',
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
        >
          912<span style={{ color: '#D72638' }}>M</span>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 300,
            fontSize: '13px',
            color: '#AEAEB2',
            maxWidth: '160px',
            margin: '0 auto',
            lineHeight: 1.5,
          }}
        >
          people who made a quiet decision and never came back
        </p>
      </div>

      {/* Column 2 */}
      <div
        style={{
          borderRight: '1px solid #E8E8E8',
          padding: '48px 40px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(40px, 5.5vw, 60px)',
            color: '#111111',
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
        >
          <span style={{ color: '#D72638' }}>$</span>54<span style={{ color: '#D72638' }}>B</span>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 300,
            fontSize: '13px',
            color: '#AEAEB2',
            maxWidth: '160px',
            margin: '0 auto',
            lineHeight: 1.5,
          }}
        >
          in revenue that left with them
        </p>
      </div>

      {/* Column 3 */}
      <div
        style={{
          padding: '48px 40px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(40px, 5.5vw, 60px)',
            color: '#111111',
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
        >
          54<span style={{ color: '#D72638' }}>%</span>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 300,
            fontSize: '13px',
            color: '#AEAEB2',
            maxWidth: '160px',
            margin: '0 auto',
            lineHeight: 1.5,
          }}
        >
          of those same people still watch when it doesn&apos;t feel like an ad
        </p>
      </div>
    </section>
  )
}
