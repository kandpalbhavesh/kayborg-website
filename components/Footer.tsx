'use client'

/* ─────────────────────────────────────────────
   KAYBORG AI — NEW FOOTER
   Brand tokens used:
     Obsidian   #0C0C0E
     Void       #17171A
     Gold       #C8A96E
     Teal       #00E5C3
     Warm White #F4F2EE
     Muted      #8A8882
     Graphite   #2A2A2F
───────────────────────────────────────────── */

// ── Small logomark: gold tile, dark mark ──────
function LogoTileSmall() {
  return (
    <svg
      width="72" height="72"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ borderRadius: '10px', flexShrink: 0 }}
    >
      {/* Gold background */}
      <rect width="300" height="300" fill="#C8A96E" rx="10" />

      <defs>
        {/* Punch out the play-triangle gap from the B pieces */}
        <mask id="footer-bMaskSmall">
          <rect width="300" height="300" fill="white" />
          <polygon points="88,98 88,202 224,150" fill="black" />
        </mask>
      </defs>

      {/* K pieces */}
      <path d="M55 82 Q55 68 69 68 L124 68 A82 82 0 0 1 55 137 Z" fill="#0C0C0E" />
      <path d="M55 223 Q55 237 69 237 L124 237 A82 82 0 0 1 55 168 Z" fill="#0C0C0E" />

      {/* B pieces (masked so play triangle cuts through) */}
      <path d="M137 68 L195 68 Q242 68 242 109 Q242 150 195 150 L137 150 Z"
        fill="#0C0C0E" mask="url(#footer-bMaskSmall)" />
      <path d="M137 155 L137 237 Q242 237 242 196 Q242 155 137 155 Z"
        fill="#0C0C0E" mask="url(#footer-bMaskSmall)" />

      {/* Play triangle — gold bg shows through = transparent */}
      <polygon points="100,110 100,190 210,150" fill="#C8A96E" />

      {/* Eye */}
      <ellipse cx="152" cy="150" rx="40" ry="24" fill="#0C0C0E" />
      <circle cx="152" cy="150" r="15" fill="#C8A96E" />
      <circle cx="159" cy="144" r="5.5" fill="#0C0C0E" />
    </svg>
  )
}

// ── Large logomark: gradient mark, dark bg, circle border ──
function LogoCircleLarge() {
  return (
    <svg
      width="140" height="140"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        borderRadius: '50%',
        border: '2px solid #2A2A2F',
        background: '#0C0C0E',
        flexShrink: 0,
      }}
    >
      <defs>
        <linearGradient
          id="footer-goldTealGrad"
          x1="55" y1="68" x2="242" y2="237"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#C8A96E" />
          <stop offset="100%" stopColor="#00E5C3" />
        </linearGradient>

        <mask id="footer-bMaskLarge">
          <rect width="300" height="300" fill="white" />
          <polygon points="88,98 88,202 224,150" fill="black" />
        </mask>
      </defs>

      {/* K pieces */}
      <path d="M55 82 Q55 68 69 68 L124 68 A82 82 0 0 1 55 137 Z"
        fill="url(#footer-goldTealGrad)" />
      <path d="M55 223 Q55 237 69 237 L124 237 A82 82 0 0 1 55 168 Z"
        fill="url(#footer-goldTealGrad)" />

      {/* B pieces */}
      <path d="M137 68 L195 68 Q242 68 242 109 Q242 150 195 150 L137 150 Z"
        fill="url(#footer-goldTealGrad)" mask="url(#footer-bMaskLarge)" />
      <path d="M137 155 L137 237 Q242 237 242 196 Q242 155 137 155 Z"
        fill="url(#footer-goldTealGrad)" mask="url(#footer-bMaskLarge)" />

      {/* Play triangle — dark */}
      <polygon points="100,110 100,190 210,150" fill="#0C0C0E" />

      {/* Eye */}
      <ellipse cx="152" cy="150" rx="40" ry="24" fill="#0C0C0E" />
      <circle cx="152" cy="150" r="15" fill="url(#footer-goldTealGrad)" />
      <circle cx="159" cy="144" r="5.5" fill="#00E5C3" />
    </svg>
  )
}

// ── Social icons ──────────────────────────────
function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="4" stroke="#C8A96E" strokeWidth="1.5" />
      <line x1="7" y1="10" x2="7" y2="17" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="7" cy="7.5" r="1.2" fill="#C8A96E" />
      <path d="M11 10v7M11 13c0-1.7 1.2-3 3-3s3 1.3 3 3v4"
        stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconX() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 4l7 7-7 9h2.5l5.5-7 5.5 7H21l-7.5-9.5L20 4h-2.5l-4.5 6L8.5 4H4z"
        fill="#C8A96E" />
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="#C8A96E" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="#C8A96E" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="#C8A96E" />
    </svg>
  )
}

function IconYouTube() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="4" stroke="#C8A96E" strokeWidth="1.5" />
      <polygon points="10,8.5 10,15.5 16,12" fill="#C8A96E" />
    </svg>
  )
}

function IconTikTok() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M16.5 3h-2.8v12.2a2.7 2.7 0 01-2.7 2.5 2.7 2.7 0 01-2.7-2.7 2.7 2.7 0 012.7-2.7c.26 0 .51.04.74.1V9.5a6.2 6.2 0 00-.74-.05 6.15 6.15 0 00-6.15 6.15 6.15 6.15 0 006.15 6.15 6.15 6.15 0 006.14-6.15V9.2a7.9 7.9 0 004.62 1.47V7.88A4.72 4.72 0 0116.5 3z"
        fill="#C8A96E"
      />
    </svg>
  )
}

// ── Nav links data ────────────────────────────
const navLeft = ['About', 'Platform', 'Pricing', 'Blog']
const navRight = ['For Brands', 'For Creators', 'API Docs', 'Privacy Policy']

// ── Footer ────────────────────────────────────
export default function Footer() {
  return (
    <footer style={{ background: '#0C0C0E', width: '100%' }}>

      {/* TOP RULE — 2px gold */}
      <div style={{ height: '2px', background: '#C8A96E', width: '100%' }} />

      {/* MAIN BODY */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '72px 48px 56px',
      }}>
        <div className="footer-grid">

          {/* ── COL 1: Brand block ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <LogoTileSmall />

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              {[IconInstagram, IconTikTok, IconX, IconLinkedIn, IconYouTube].map((Icon, i) => (
                <button
                  key={i}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    opacity: 0.8,
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '1' }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '0.8' }}
                >
                  <Icon />
                </button>
              ))}
            </div>

            {/* Tagline */}
            <p style={{
              fontFamily: 'var(--font-dm-mono, monospace)',
              fontSize: '10px',
              color: '#8A8882',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              margin: 0,
              lineHeight: 1.4,
            }}>
              In-Content Video<br />Personalization
            </p>
          </div>

          {/* ── COL 2: CTA block ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', paddingTop: '4px' }}>
            <p style={{
              fontFamily: 'var(--font-instrument-serif, serif)',
              fontStyle: 'italic',
              fontSize: '18px',
              color: '#F4F2EE',
              lineHeight: 1.4,
              margin: 0,
              maxWidth: '240px',
            }}>
              &ldquo;Attention isn&apos;t bought. It&apos;s earned — frame by frame.&rdquo;
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { label: 'Drop your email →', href: '#waitlist' },
                { label: 'Reach us →', href: 'mailto:hello@kayborgai.com' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={href === '#waitlist' ? (e) => {
                    e.preventDefault()
                    document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' })
                  } : undefined}
                  style={{
                    fontFamily: 'var(--font-dm-mono, monospace)',
                    fontSize: '11px',
                    color: '#C8A96E',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    borderBottom: '1px solid #C8A96E',
                    paddingBottom: '4px',
                    display: 'inline-block',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.7' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* ── COL 3: Nav links ── */}
          <div style={{ display: 'flex', gap: '40px', paddingTop: '4px' }}>
            {[navLeft, navRight].map((col, ci) => (
              <div key={ci} style={{ display: 'flex', flexDirection: 'column' }}>
                {col.map(link => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      fontFamily: 'var(--font-figtree, sans-serif)',
                      fontSize: '13px',
                      color: '#8A8882',
                      textDecoration: 'none',
                      lineHeight: '2.2',
                      transition: 'color 0.2s',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#F4F2EE' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#8A8882' }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* ── COL 4: Large logo lockup ── */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            paddingTop: '4px',
          }}>
            <LogoCircleLarge />
            <p style={{
              fontFamily: 'var(--font-figtree, sans-serif)',
              fontWeight: 500,
              fontSize: '16px',
              color: '#F4F2EE',
              margin: 0,
              textAlign: 'center',
            }}>
              KayBorg AI
            </p>
            <p style={{
              fontFamily: 'var(--font-figtree, sans-serif)',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: '11px',
              color: '#8A8882',
              margin: 0,
              textAlign: 'center',
            }}>
              Intelligence invisible until it isn&apos;t.
            </p>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div style={{ borderTop: '1px solid #2A2A2F' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '16px 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
        }}>
          <span style={{
            fontFamily: 'var(--font-dm-mono, monospace)',
            fontSize: '10px',
            color: '#3A3A3F',
          }}>
            © KayBorg AI. All rights reserved 2026.
          </span>
          <span style={{
            fontFamily: 'var(--font-dm-mono, monospace)',
            fontSize: '10px',
            color: '#3A3A3F',
          }}>
            Propelled by KayBorg AI
          </span>
        </div>
      </div>

      {/* RESPONSIVE STYLES */}
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: auto 1fr 1fr auto;
          gap: 64px;
          align-items: start;
        }

        @media (max-width: 1023px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
          }
        }

        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-grid > div:nth-child(4) {
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  )
}
