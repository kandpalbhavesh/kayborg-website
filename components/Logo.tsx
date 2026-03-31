'use client'

// KayBOrg AI logo mark
// Concept: a video frame (outer rect) with a brand product placed inside (solid square),
// connected to an AI targeting indicator (line + circle) — tells the whole story in one glyph.

interface LogoProps {
  size?: number   // height in px; width scales proportionally (3:2 ratio)
  color?: string
}

export default function Logo({ size = 24, color = '#FFFFFF' }: LogoProps) {
  const w = size * 1.5  // 3:2 aspect ratio (video frame)
  return (
    <svg
      width={w}
      height={size}
      viewBox="0 0 36 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Video frame */}
      <rect
        x="0.75" y="0.75"
        width="34.5" height="22.5"
        rx="3.5"
        stroke={color}
        strokeWidth="1.5"
      />
      {/* Brand product — placed inside the frame */}
      <rect
        x="6" y="8"
        width="9" height="8"
        rx="1.5"
        fill={color}
      />
      {/* AI targeting — line from product to indicator */}
      <path
        d="M 17 12 L 22.5 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.38"
      />
      {/* AI targeting dot */}
      <circle
        cx="26" cy="12" r="2.5"
        stroke={color}
        strokeWidth="1.5"
        strokeOpacity="0.38"
      />
    </svg>
  )
}
