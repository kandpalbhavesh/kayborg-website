'use client'

export default function Footer() {
  return (
    <footer className="ft-footer">
      {/* Top row */}
      <div className="ft-row">
        {/* Left */}
        <div className="ft-col ft-col--left">
          <span className="ft-brand">KayBOrg AI</span>
          <span className="ft-copy">© 2026 · All rights reserved</span>
        </div>

        {/* Center */}
        <div className="ft-col ft-col--center">
          <span className="ft-name">Bhavesh Kandpal</span>
          <span className="ft-role">Founder &amp; CEO</span>
        </div>

        {/* Right */}
        <div className="ft-col ft-col--right">
          <a href="mailto:hello@kayborg.ai" className="ft-email">hello@kayborg.ai</a>
          <span className="ft-region">India</span>
        </div>
      </div>

      {/* Bottom micro-text */}
      <div className="ft-micro">
        Building the intelligence of tomorrow.
      </div>

      <style>{`
        .ft-footer {
          background: #0A0A0A;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: clamp(40px, 7vh, 72px) clamp(20px, 5vw, 64px) clamp(24px, 4vh, 40px);
        }

        .ft-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: start;
          gap: 24px;
          padding-bottom: clamp(28px, 4vh, 48px);
          border-bottom: 1px solid rgba(255,255,255,0.04);
          margin-bottom: clamp(20px, 3vh, 32px);
        }
        @media (max-width: 560px) {
          .ft-row {
            grid-template-columns: 1fr;
          }
          .ft-col--center { text-align: left !important; }
          .ft-col--right  { text-align: left !important; }
        }

        .ft-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .ft-col--center { text-align: center; align-items: center; }
        .ft-col--right  { text-align: right; align-items: flex-end; }

        .ft-brand {
          font-family: var(--font-syne);
          font-weight: 700;
          font-size: 13px;
          color: rgba(255,255,255,0.6);
          letter-spacing: -0.01em;
        }
        .ft-copy {
          font-family: var(--font-dm-sans);
          font-weight: 300;
          font-size: 11px;
          color: rgba(255,255,255,0.18);
        }

        .ft-name {
          font-family: var(--font-instrument-serif);
          font-style: italic;
          font-size: clamp(13px, 1.2vw, 15px);
          color: rgba(255,255,255,0.32);
        }
        .ft-role {
          font-family: var(--font-dm-mono);
          font-size: 8px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.14);
        }

        .ft-email {
          font-family: var(--font-dm-sans);
          font-weight: 300;
          font-size: 12px;
          color: rgba(255,255,255,0.28);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .ft-email:hover { color: rgba(255,255,255,0.65); }
        .ft-region {
          font-family: var(--font-dm-mono);
          font-size: 8px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.12);
        }

        .ft-micro {
          font-family: var(--font-dm-sans);
          font-weight: 300;
          font-size: 11px;
          color: rgba(255,255,255,0.1);
          text-align: center;
          letter-spacing: 0.06em;
        }
      `}</style>
    </footer>
  )
}
