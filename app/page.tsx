'use client'

import dynamic from 'next/dynamic'

const Cursor         = dynamic(() => import('@/components/Cursor'),        { ssr: false })
const ScrollProgress = dynamic(() => import('@/components/ScrollProgress'), { ssr: false })
const Hero           = dynamic(() => import('@/components/Hero'),           { ssr: false })
const Footer         = dynamic(() => import('@/components/Footer'),         { ssr: false, loading: () => null })

export default function Home() {
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <Hero />
      <Footer />
    </>
  )
}
