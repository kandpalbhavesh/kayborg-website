declare module 'locomotive-scroll' {
  interface LocomotiveScrollOptions {
    el: HTMLElement | null
    smooth?: boolean
    multiplier?: number
    lerp?: number
    smartphone?: { smooth?: boolean }
    tablet?: { smooth?: boolean }
    [key: string]: any
  }

  class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions)
    on(event: string, callback: (args: any) => void): void
    off(event: string, callback: (args: any) => void): void
    scrollTo(target: HTMLElement | string | number, options?: any): void
    update(): void
    destroy(): void
    scroll: { instance: { scroll: { x: number; y: number } } }
  }

  export default LocomotiveScroll
}
