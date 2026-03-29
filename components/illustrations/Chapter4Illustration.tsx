export default function Chapter4Illustration() {
  return (
    <svg
      viewBox="0 0 400 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: '380px', height: 'auto' }}
    >
      {/* Creator figure */}
      <circle cx="120" cy="160" r="22" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
      <line x1="120" y1="182" x2="120" y2="230" stroke="#DDDDDD" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="120" y1="200" x2="96" y2="214" stroke="#DDDDDD" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="120" y1="200" x2="144" y2="214" stroke="#DDDDDD" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="120" y1="230" x2="108" y2="252" stroke="#DDDDDD" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="120" y1="230" x2="132" y2="252" stroke="#DDDDDD" strokeWidth="1.5" strokeLinecap="round" />

      {/* Offer card floating */}
      <rect x="200" y="80" width="172" height="100" rx="8" fill="white" stroke="#E0E0E0" strokeWidth="1" />

      {/* Card shadow line */}
      <rect x="204" y="84" width="172" height="100" rx="8" fill="none" stroke="#F0F0F0" strokeWidth="1" />

      {/* Campaign amount */}
      <text x="286" y="114" textAnchor="middle" fill="#111111" fontSize="18" fontFamily="var(--font-syne, sans-serif)" fontWeight="800">₹4,00,000</text>

      {/* Campaign details */}
      <text x="286" y="134" textAnchor="middle" fill="#AEAEB2" fontSize="9" fontFamily="sans-serif">Nike India · Air Max 95 · 30 days</text>

      {/* Accept button */}
      <rect x="220" y="148" width="132" height="24" rx="6" fill="rgba(40,167,69,0.1)" stroke="rgba(40,167,69,0.4)" strokeWidth="1" />
      <text x="286" y="164" textAnchor="middle" fill="rgba(40,167,69,0.8)" fontSize="10" fontFamily="sans-serif" fontWeight="600">Accept Campaign</text>

      {/* Arrow from creator to card */}
      <line x1="148" y1="180" x2="196" y2="140" stroke="#F0F0F0" strokeWidth="1" strokeDasharray="4 4" />

      {/* Progress bar section */}
      <rect x="200" y="200" width="172" height="54" rx="8" fill="white" stroke="#E8E8E8" strokeWidth="1" />
      <text x="286" y="218" textAnchor="middle" fill="#CCCCCC" fontSize="9" fontFamily="monospace">CV Pipeline... 68%</text>

      {/* Progress track */}
      <rect x="212" y="226" width="148" height="6" rx="3" fill="#F0F0F0" />
      {/* Progress fill */}
      <rect x="212" y="226" width="100" height="6" rx="3" fill="rgba(215,38,56,0.4)" />

      {/* Earnings circle */}
      <circle cx="120" cy="80" r="52" stroke="#E8E8E8" strokeWidth="1" strokeDasharray="4 4" fill="none" />
      <text x="120" y="74" textAnchor="middle" fill="#111111" fontSize="13" fontFamily="var(--font-syne, sans-serif)" fontWeight="800">₹4,00,000</text>
      <text x="120" y="90" textAnchor="middle" fill="#AEAEB2" fontSize="9" fontFamily="sans-serif">earned</text>
    </svg>
  )
}
