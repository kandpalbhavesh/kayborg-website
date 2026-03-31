'use client'

// Cosmos manifesto text — "Taste isn't born. It's built. Image by image. Day by day."
// KayBOrg equivalent below the hero, above the video grid

const lines = [
  { text: "Ads weren't built to be skipped." },
  { text: "But they were." },
  { spacer: true },
  { text: "912 million people said no." },
  { spacer: true },
  { text: "You cannot fight your way back" },
  { text: "into a room you were asked to leave." },
  { spacer: true },
  { text: "We found a different way in." },
]

export default function Vision() {
  return (
    <section style={{
      background: '#0D0D0D',
      padding: 'clamp(80px, 13vh, 140px) clamp(20px, 5vw, 48px)',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '540px', margin: '0 auto' }}>
        {lines.map((line, i) =>
          line.spacer ? (
            <div key={i} style={{ height: 'clamp(16px, 3vh, 28px)' }} />
          ) : (
            <p key={i} style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 300,
              fontSize: 'clamp(18px, 3vw, 28px)',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.45,
              margin: 0,
            }}>
              {line.text}
            </p>
          )
        )}
      </div>
    </section>
  )
}
