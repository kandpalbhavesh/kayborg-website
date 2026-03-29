export default function Chapter3Illustration() {
  return (
    <svg viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: '380px', height: 'auto' }}>
      {/* Source frame */}
      <rect x="40" y="20" width="140" height="100" rx="6" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" fill="rgba(255,255,255,0.02)" />
      <text x="110" y="14" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="sans-serif">Source Frame</text>
      {/* Person */}
      <circle cx="90" cy="50" r="10" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
      <line x1="90" y1="60" x2="90" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="90" y1="72" x2="76" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="90" y1="72" x2="108" y2="78" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round" />
      {/* Shoe */}
      <ellipse cx="140" cy="88" rx="16" ry="8" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" />
      <path d="M124 88 Q132 78 148 82 Q156 84 156 88" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
      {/* Detection box — teal (AI moment) */}
      <rect x="122" y="76" width="38" height="24" rx="2" stroke="rgba(0,229,195,0.5)" strokeWidth="1" strokeDasharray="3 2" fill="none" />
      <rect x="124" y="68" width="56" height="14" rx="2" fill="rgba(0,229,195,0.06)" />
      <text x="152" y="78" textAnchor="middle" fill="rgba(0,229,195,0.6)" fontSize="8" fontFamily="monospace">0.94 · shoe</text>
      {/* Arrow */}
      <line x1="110" y1="124" x2="110" y2="160" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 3" />
      <polygon points="106,158 114,158 110,165" fill="rgba(255,255,255,0.08)" />
      <text x="116" y="143" fill="rgba(0,229,195,0.35)" fontSize="8" fontFamily="monospace">YOLOv8 · OpenCV</text>
      {/* Output A */}
      <rect x="40" y="175" width="120" height="90" rx="6" stroke="rgba(200,169,110,0.15)" strokeWidth="1.5" fill="rgba(200,169,110,0.02)" />
      <text x="100" y="170" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="sans-serif">Viewer A</text>
      <circle cx="76" cy="200" r="10" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" />
      <line x1="76" y1="210" x2="76" y2="238" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="76" y1="220" x2="62" y2="228" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="76" y1="220" x2="92" y2="226" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="126" cy="238" rx="16" ry="8" stroke="rgba(200,169,110,0.4)" strokeWidth="1" fill="rgba(200,169,110,0.06)" />
      <path d="M110 238 Q118 228 134 232 Q142 234 142 238" stroke="rgba(200,169,110,0.4)" strokeWidth="1" fill="none" />
      <path d="M114 236 Q124 230 136 234" stroke="rgba(200,169,110,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <text x="100" y="272" textAnchor="middle" fill="rgba(200,169,110,0.5)" fontSize="9" fontFamily="sans-serif" fontWeight="600">Nike</text>
      {/* Divider */}
      <line x1="220" y1="175" x2="220" y2="265" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      {/* Output B */}
      <rect x="240" y="175" width="120" height="90" rx="6" stroke="rgba(0,229,195,0.15)" strokeWidth="1.5" fill="rgba(0,229,195,0.02)" />
      <text x="300" y="170" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="sans-serif">Viewer B</text>
      <circle cx="276" cy="200" r="10" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" />
      <line x1="276" y1="210" x2="276" y2="238" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="276" y1="220" x2="262" y2="228" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="276" y1="220" x2="292" y2="226" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="316" y="224" width="14" height="22" rx="3" stroke="rgba(0,229,195,0.35)" strokeWidth="1" fill="rgba(0,229,195,0.05)" />
      <rect x="317" y="228" width="12" height="7" rx="1" fill="rgba(0,229,195,0.1)" stroke="rgba(0,229,195,0.25)" strokeWidth="0.5" />
      <text x="300" y="272" textAnchor="middle" fill="rgba(0,229,195,0.4)" fontSize="9" fontFamily="sans-serif" fontWeight="600">BrewGood</text>
      {/* Caption */}
      <text x="200" y="310" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="10" fontFamily="sans-serif">Same video. No reshooting.</text>
    </svg>
  )
}
