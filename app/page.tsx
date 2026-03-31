'use client'

import dynamic from 'next/dynamic'

// No SSR — all client components with Intersection Observer / animations
const Nav         = dynamic(() => import('@/components/Nav'),         { ssr: false })
const Hero        = dynamic(() => import('@/components/Hero'),        { ssr: false })
const Marquee     = dynamic(() => import('@/components/Marquee'),     { ssr: false, loading: () => null })
const Problem     = dynamic(() => import('@/components/Problem'),     { ssr: false, loading: () => null })
const HowItWorks  = dynamic(() => import('@/components/HowItWorks'),  { ssr: false, loading: () => null })
const VideoGrid   = dynamic(() => import('@/components/VideoGrid'),   { ssr: false, loading: () => null })
const Stats       = dynamic(() => import('@/components/Stats'),       { ssr: false, loading: () => null })
const Audience    = dynamic(() => import('@/components/Audience'),    { ssr: false, loading: () => null })
const Waitlist    = dynamic(() => import('@/components/Waitlist'),    { ssr: false, loading: () => null })
const Footer      = dynamic(() => import('@/components/Footer'),      { ssr: false, loading: () => null })

// Page flow (researched from Linear, Raycast, Vercel):
// Intrigue → Trust signal → Problem → Solution → Proof → Data → Audience → Convert

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Problem />
      <HowItWorks />
      <VideoGrid />
      <Stats />
      <Audience />
      <Waitlist />
      <Footer />
    </>
  )
}
