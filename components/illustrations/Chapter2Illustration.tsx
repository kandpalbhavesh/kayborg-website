export default function Chapter2Illustration() {
  return (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: '380px', height: 'auto' }}>
      {/* Creator */}
      <circle cx="200" cy="100" r="22" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="none" />
      <line x1="200" y1="122" x2="200" y2="170" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="200" y1="138" x2="232" y2="128" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="200" y1="138" x2="168" y2="148" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeLinecap="round" />
      {/* Camera */}
      <rect x="145" y="56" width="40" height="28" rx="4" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" />
      <circle cx="165" cy="70" r="8" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
      <rect x="180" y="60" width="8" height="10" rx="2" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
      {/* Product with teal label — AI moment */}
      <rect x="234" y="118" width="14" height="28" rx="4" stroke="rgba(0,229,195,0.3)" strokeWidth="1.5" fill="none" />
      <rect x="236" y="124" width="10" height="8" rx="1" fill="rgba(0,229,195,0.12)" stroke="rgba(0,229,195,0.35)" strokeWidth="0.5" />
      {/* Viewers */}
      {[80, 200, 320].map((cx, idx) => (
        <g key={idx}>
          <circle cx={cx} cy="240" r="14" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" />
          <line x1={cx} y1="254" x2={cx} y2="278" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1={cx} y1="262" x2={cx - 16} y2="270" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1={cx} y1="262" x2={cx + 16} y2="270" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round" />
          <path d={`M${cx - 5} ${242} Q${cx} ${248} ${cx + 5} ${242}`} stroke="rgba(0,229,195,0.3)" strokeWidth="1" fill="none" />
        </g>
      ))}
      {/* No-ad icon */}
      <circle cx="200" cy="195" r="18" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" fill="none" />
      <text x="200" y="199" textAnchor="middle" fill="rgba(255,255,255,0.1)" fontSize="9" fontFamily="sans-serif">AD</text>
      <line x1="187" y1="182" x2="213" y2="208" stroke="rgba(200,169,110,0.25)" strokeWidth="1.5" strokeLinecap="round" />
      {/* Connecting lines */}
      <line x1="185" y1="160" x2="90" y2="226" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="200" y1="170" x2="200" y2="213" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="215" y1="160" x2="310" y2="226" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
    </svg>
  )
}
