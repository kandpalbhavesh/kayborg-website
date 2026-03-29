import { useRef } from 'react'

// Native scroll fallback — Locomotive Scroll causes overflow:hidden issues in Next.js production
export function useLocomotiveScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<any>(null)
  return { containerRef, scroll: scrollRef }
}
