export default function Chapter4Illustration() {
  return (
    <svg viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: '380px', height: 'auto' }}>
      {/* Creator */}
      <circle cx="120" cy="160" r="22" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="none" />
      <line x1="120" y1="182" x2="120" y2="230" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="120" y1="200" x2="96" y2="214" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="120" y1="200" x2="144" y2="214" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="120" y1="230" x2="108" y2="252" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="120" y1="230" x2="132" y2="252" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round" />
      {/* Offer card */}
      <rect x="200" y="80" width="172" height="100" rx="8" fill="rgba(200,169,110,0.04)" stroke="rgba(200,169,110,0.18)" strokeWidth="1" />
      {/* Amount — gold */}
      <text x="286" y="114" textAnchor="middle" fill="#C8A96E" fontSize="18" fontFamily="var(--font-syne, sans-serif)" fontWeight="800">₹4,00,000</text>
      <text x="286" y="134" textAnchor="middle" fill="rgba(240,237,232,0.3)" fontSize="9" fontFamily="sans-serif">Nike India · Air Max 95 · 30 days</text>
      {/* Accept button — teal (AI acts) */}
      <rect x="220" y="148" width="132" height="24" rx="6" fill="rgba(0,229,195,0.06)" stroke="rgba(0,229,195,0.3)" strokeWidth="1" />
      <text x="286" y="164" textAnchor="middle" fill="rgba(0,229,195,0.7)" fontSize="10" fontFamily="sans-serif" fontWeight="600">Accept Campaign</text>
      {/* Arrow */}
      <line x1="148" y1="180" x2="196" y2="140" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4" />
      {/* Pipeline progress */}
      <rect x="200" y="200" width="172" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <text x="286" y="218" textAnchor="middle" fill="rgba(0,229,195,0.35)" fontSize="9" fontFamily="monospace">CV Pipeline... 68%</text>
      <rect x="212" y="226" width="148" height="6" rx="3" fill="rgba(255,255,255,0.05)" />
      <rect x="212" y="226" width="100" height="6" rx="3" fill="rgba(0,229,195,0.35)" />
      {/* Earnings circle */}
      <circle cx="120" cy="80" r="52" stroke="rgba(200,169,110,0.12)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
      <text x="120" y="74" textAnchor="middle" fill="#C8A96E" fontSize="13" fontFamily="var(--font-syne, sans-serif)" fontWeight="800">₹4,00,000</text>
      <text x="120" y="90" textAnchor="middle" fill="rgba(240,237,232,0.3)" fontSize="9" fontFamily="sans-serif">earned</text>
    </svg>
  )
}
