import { useEffect, useRef } from 'react'

export function useLocomotiveScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<any>(null)

  useEffect(() => {
    if (!containerRef.current) return

    let LocomotiveScroll: any
    let instance: any

    const init = async () => {
      const module = await import('locomotive-scroll')
      LocomotiveScroll = module.default

      instance = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        multiplier: 0.85,
        lerp: 0.08,
        smartphone: { smooth: false },
        tablet: { smooth: false },
      })

      scrollRef.current = instance
    }

    init()

    return () => {
      instance?.destroy()
      scrollRef.current = null
    }
  }, [])

  return { containerRef, scroll: scrollRef }
}
