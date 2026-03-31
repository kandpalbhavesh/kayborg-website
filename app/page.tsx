'use client'

import dynamic from 'next/dynamic'

// No SSR — all client components
const Nav       = dynamic(() => import('@/components/Nav'),       { ssr: false })
const Hero      = dynamic(() => import('@/components/Hero'),      { ssr: false })
const VideoGrid = dynamic(() => import('@/components/VideoGrid'), { ssr: false, loading: () => null })
const Vision    = dynamic(() => import('@/components/Vision'),    { ssr: false, loading: () => null })
const Stats     = dynamic(() => import('@/components/Stats'),     { ssr: false, loading: () => null })
const Waitlist  = dynamic(() => import('@/components/Waitlist'),  { ssr: false, loading: () => null })
const Footer    = dynamic(() => import('@/components/Footer'),    { ssr: false, loading: () => null })

// Cosmos-style layout:
// Nav → Hero (manifesto) → VideoGrid (image grid) → Vision (manifesto text) → Stats → Waitlist → Footer

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <VideoGrid />
      <Vision />
      <Stats />
      <Waitlist />
      <Footer />
    </>
  )
}
