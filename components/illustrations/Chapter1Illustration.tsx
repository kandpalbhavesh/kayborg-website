export default function Chapter1Illustration() {
  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: '380px', height: 'auto' }}
    >
      {/* Monitor */}
      <rect x="80" y="40" width="240" height="160" rx="8" stroke="#E0E0E0" strokeWidth="1.5" fill="white" />
      {/* Monitor stand */}
      <line x1="200" y1="200" x2="200" y2="230" stroke="#E0E0E0" strokeWidth="2" />
      <rect x="160" y="228" width="80" height="6" rx="3" stroke="#E0E0E0" strokeWidth="1.5" fill="none" />

      {/* Screen content - website */}
      <rect x="90" y="50" width="220" height="140" rx="4" fill="#F7F7F7" />

      {/* Red ad overlay */}
      <rect x="95" y="55" width="210" height="130" rx="4" fill="rgba(215,38,56,0.04)" stroke="rgba(215,38,56,0.25)" strokeWidth="1" />

      {/* AD badge */}
      <rect x="100" y="60" width="36" height="18" rx="4" fill="rgba(215,38,56,0.1)" stroke="rgba(215,38,56,0.4)" strokeWidth="1" />
      <text x="118" y="73" textAnchor="middle" fill="rgba(215,38,56,0.7)" fontSize="9" fontFamily="sans-serif" fontWeight="600">AD</text>

      {/* X button */}
      <circle cx="290" cy="69" r="9" stroke="rgba(215,38,56,0.35)" strokeWidth="1" fill="none" />
      <line x1="286" y1="65" x2="294" y2="73" stroke="rgba(215,38,56,0.6)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="294" y1="65" x2="286" y2="73" stroke="rgba(215,38,56,0.6)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Skip text */}
      <text x="200" y="160" textAnchor="middle" fill="#CCCCCC" fontSize="11" fontFamily="sans-serif">Skip in 5...</text>

      {/* Person below monitor */}
      {/* Head */}
      <circle cx="200" cy="268" r="14" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
      {/* Body */}
      <line x1="200" y1="282" x2="200" y2="308" stroke="#DDDDDD" strokeWidth="1.5" strokeLinecap="round" />
      {/* Arms */}
      <line x1="200" y1="290" x2="178" y2="282" stroke="#DDDDDD" strokeWidth="1.5" strokeLinecap="round" />
      {/* Raised arm gesture */}
      <line x1="200" y1="290" x2="222" y2="276" stroke="#DDDDDD" strokeWidth="1.5" strokeLinecap="round" />
      {/* Legs */}
      <line x1="200" y1="308" x2="188" y2="318" stroke="#DDDDDD" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="200" y1="308" x2="212" y2="318" stroke="#DDDDDD" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
