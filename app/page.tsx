'use client'

import dynamic from 'next/dynamic'

const Cursor        = dynamic(() => import('@/components/Cursor'),        { ssr: false })
const ScrollProgress = dynamic(() => import('@/components/ScrollProgress'), { ssr: false })
const Nav           = dynamic(() => import('@/components/Nav'),           { ssr: false })
const Hero          = dynamic(() => import('@/components/Hero'),          { ssr: false })
const Marquee       = dynamic(() => import('@/components/Marquee'),       { ssr: false, loading: () => null })
const Problem       = dynamic(() => import('@/components/Problem'),       { ssr: false, loading: () => null })
const HowItWorks    = dynamic(() => import('@/components/HowItWorks'),    { ssr: false, loading: () => null })
const Stats         = dynamic(() => import('@/components/Stats'),         { ssr: false, loading: () => null })
const Testimonials  = dynamic(() => import('@/components/Testimonials'),  { ssr: false, loading: () => null })
const Audience      = dynamic(() => import('@/components/Audience'),      { ssr: false, loading: () => null })
const Waitlist      = dynamic(() => import('@/components/Waitlist'),      { ssr: false, loading: () => null })
const Footer        = dynamic(() => import('@/components/Footer'),        { ssr: false, loading: () => null })

export default function Home() {
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <Nav />
      <Hero />
      <Marquee />
      <Problem />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Audience />
      <Waitlist />
      <Footer />
    </>
  )
}
