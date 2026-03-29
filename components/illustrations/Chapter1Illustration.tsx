export default function Chapter1Illustration() {
  return (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: '380px', height: 'auto' }}>
      {/* Monitor */}
      <rect x="80" y="40" width="240" height="160" rx="8" stroke="rgba(200,169,110,0.2)" strokeWidth="1.5" fill="rgba(255,255,255,0.02)" />
      <line x1="200" y1="200" x2="200" y2="230" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
      <rect x="160" y="228" width="80" height="6" rx="3" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none" />
      {/* Screen */}
      <rect x="90" y="50" width="220" height="140" rx="4" fill="rgba(255,255,255,0.03)" />
      {/* Ad overlay */}
      <rect x="95" y="55" width="210" height="130" rx="4" fill="rgba(200,169,110,0.03)" stroke="rgba(200,169,110,0.2)" strokeWidth="1" />
      {/* AD badge */}
      <rect x="100" y="60" width="36" height="18" rx="4" fill="rgba(200,169,110,0.08)" stroke="rgba(200,169,110,0.3)" strokeWidth="1" />
      <text x="118" y="73" textAnchor="middle" fill="rgba(200,169,110,0.6)" fontSize="9" fontFamily="sans-serif" fontWeight="600">AD</text>
      {/* X button */}
      <circle cx="290" cy="69" r="9" stroke="rgba(200,169,110,0.25)" strokeWidth="1" fill="none" />
      <line x1="286" y1="65" x2="294" y2="73" stroke="rgba(200,169,110,0.5)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="294" y1="65" x2="286" y2="73" stroke="rgba(200,169,110,0.5)" strokeWidth="1.5" strokeLinecap="round" />
      {/* Skip text */}
      <text x="200" y="160" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="11" fontFamily="sans-serif">Skip in 5...</text>
      {/* Person */}
      <circle cx="200" cy="268" r="14" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
      <line x1="200" y1="282" x2="200" y2="308" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="200" y1="290" x2="178" y2="282" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="200" y1="290" x2="222" y2="276" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="200" y1="308" x2="188" y2="318" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="200" y1="308" x2="212" y2="318" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
