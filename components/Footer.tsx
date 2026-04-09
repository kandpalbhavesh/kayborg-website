'use client'

export default function Footer() {
  return (
    <footer className="ft-footer">
      <div className="ft-row">
        <div className="ft-col ft-col--left">
          <span className="ft-brand">KayBOrg AI</span>
          <span className="ft-copy">&copy; 2026 &middot; All rights reserved</span>
        </div>

        <div className="ft-col ft-col--center">
          <span className="ft-name">Bhavesh Kandpal</span>
          <span className="ft-role">Founder &amp; CEO</span>
        </div>

        <div className="ft-col ft-col--right">
          <a href="mailto:hello@kayborg.ai" className="ft-email">
            hello@kayborg.ai
          </a>
          <span className="ft-region">India</span>
        </div>
      </div>

      <p className="ft-micro">Building the intelligence of tomorrow.</p>

      <style>{`
        .ft-footer {
          background: #0A0A0A;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding:
            clamp(40px, 7vh, 72px)
            clamp(20px, 5vw, 64px)
            clamp(24px, 4vh, 40px);
        }

        .ft-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: start;
          gap: 24px;
          padding-bottom: clamp(24px, 4vh, 44px);
          border-bottom: 1px solid rgba(255,255,255,0.04);
          margin-bottom: clamp(18px, 3vh, 30px);
        }

        .ft-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .ft-col--center {
          text-align: center;
          align-items: center;
        }
        .ft-col--right {
          text-align: right;
          align-items: flex-end;
        }

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
          /* 44px touch target */
          min-height: 44px;
          display: flex;
          align-items: center;
          transition: color 0.2s;
        }
        .ft-email:hover { color: rgba(255,255,255,0.65); }
        .ft-email:focus-visible {
          outline: 1.5px solid rgba(255,255,255,0.3);
          outline-offset: 3px;
          border-radius: 2px;
        }
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

        /* ── Mobile: stack all three cols ── */
        @media (max-width: 540px) {
          .ft-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .ft-col--center,
          .ft-col--right {
            text-align: left;
            align-items: flex-start;
          }
          .ft-email { min-height: unset; }
        }

        /* ── Tablet: tighten gap ── */
        @media (min-width: 541px) and (max-width: 767px) {
          .ft-row { gap: 12px; }
        }
      `}</style>
    </footer>
  )
}
