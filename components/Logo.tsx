'use client'

interface LogoProps {
  size?: number
  color?: string
}

export default function Logo({ size = 24, color = '#0A0A0A' }: LogoProps) {
  const w = size * 1.5
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
      <rect x="0.75" y="0.75" width="34.5" height="22.5" rx="3.5" stroke={color} strokeWidth="1.5" />
      {/* Brand product placed inside */}
      <rect x="6" y="8" width="9" height="8" rx="1.5" fill={color} />
      {/* AI targeting line */}
      <path d="M 17 12 L 22.5 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.35" />
      {/* AI targeting dot */}
      <circle cx="26" cy="12" r="2.5" stroke={color} strokeWidth="1.5" strokeOpacity="0.35" />
    </svg>
  )
}
