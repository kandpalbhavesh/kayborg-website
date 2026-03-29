export default function Chapter2Illustration() {
  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: '380px', height: 'auto' }}
    >
      {/* Creator figure - centre */}
      <circle cx="200" cy="100" r="22" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
      <line x1="200" y1="122" x2="200" y2="170" stroke="#DDDDDD" strokeWidth="1.5" strokeLinecap="round" />
      {/* Arm holding product */}
      <line x1="200" y1="138" x2="232" y2="128" stroke="#DDDDDD" strokeWidth="1.5" strokeLinecap="round" />
      {/* Other arm */}
      <line x1="200" y1="138" x2="168" y2="148" stroke="#DDDDDD" strokeWidth="1.5" strokeLinecap="round" />

      {/* Camera */}
      <rect x="145" y="56" width="40" height="28" rx="4" stroke="#DDDDDD" strokeWidth="1.5" fill="none" />
      <circle cx="165" cy="70" r="8" stroke="#DDDDDD" strokeWidth="1" fill="none" />
      <rect x="180" y="60" width="8" height="10" rx="2" stroke="#DDDDDD" strokeWidth="1" fill="none" />

      {/* Product bottle in creator's hand */}
      <rect x="234" y="118" width="14" height="28" rx="4" stroke="#BBBBBB" strokeWidth="1.5" fill="none" />
      <rect x="236" y="124" width="10" height="8" rx="1" fill="rgba(215,38,56,0.25)" stroke="rgba(215,38,56,0.4)" strokeWidth="0.5" />

      {/* Three viewer figures */}
      {/* Viewer 1 - left */}
      <circle cx="80" cy="240" r="14" stroke="#DDDDDD" strokeWidth="1.5" fill="none" />
      <line x1="80" y1="254" x2="80" y2="278" stroke="#DDDDDD" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="80" y1="262" x2="64" y2="270" stroke="#DDDDDD" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="80" y1="262" x2="96" y2="270" stroke="#DDDDDD" strokeWidth="1.5" strokeLinecap="round" />
      {/* Smile */}
      <path d="M75 242 Q80 248 85 242" stroke="#DDDDDD" strokeWidth="1" fill="none" />

      {/* Viewer 2 - centre */}
      <circle cx="200" cy="240" r="14" stroke="#DDDDDD" strokeWidth="1.5" fill="none" />
      <line x1="200" y1="254" x2="200" y2="278" stroke="#DDDDDD" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="200" y1="262" x2="184" y2="270" stroke="#DDDDDD" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="200" y1="262" x2="216" y2="270" stroke="#DDDDDD" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M195 242 Q200 248 205 242" stroke="#DDDDDD" strokeWidth="1" fill="none" />

      {/* Viewer 3 - right */}
      <circle cx="320" cy="240" r="14" stroke="#DDDDDD" strokeWidth="1.5" fill="none" />
      <line x1="320" y1="254" x2="320" y2="278" stroke="#DDDDDD" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="320" y1="262" x2="304" y2="270" stroke="#DDDDDD" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="320" y1="262" x2="336" y2="270" stroke="#DDDDDD" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M315 242 Q320 248 325 242" stroke="#DDDDDD" strokeWidth="1" fill="none" />

      {/* No-ad-blocker icon above viewers */}
      <circle cx="200" cy="195" r="18" stroke="#EEEEEE" strokeWidth="1.5" fill="none" />
      <text x="200" y="199" textAnchor="middle" fill="#E0E0E0" fontSize="9" fontFamily="sans-serif">AD</text>
      <line x1="187" y1="182" x2="213" y2="208" stroke="#DDDDDD" strokeWidth="1.5" strokeLinecap="round" />

      {/* Connecting lines from creator to viewers */}
      <line x1="185" y1="160" x2="90" y2="226" stroke="#F0F0F0" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="200" y1="170" x2="200" y2="213" stroke="#F0F0F0" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="215" y1="160" x2="310" y2="226" stroke="#F0F0F0" strokeWidth="1" strokeDasharray="4 4" />
    </svg>
  )
}
