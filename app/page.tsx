'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

const Cursor         = dynamic(() => import('@/components/Cursor'),           { ssr: false })
const ScrollProgress = dynamic(() => import('@/components/ScrollProgress'),   { ssr: false })
const NavBar         = dynamic(() => import('@/components/NavBar'),           { ssr: false })
const Hero           = dynamic(() => import('@/components/Hero'),             { ssr: false })
const ManifestoSection = dynamic(() => import('@/components/ManifestoSection'), { ssr: false, loading: () => null })
const ProductsSection  = dynamic(() => import('@/components/ProductsSection'),  { ssr: false, loading: () => null })
const ProductModal     = dynamic(() => import('@/components/ProductModal'),      { ssr: false })
const Footer           = dynamic(() => import('@/components/Footer'),            { ssr: false, loading: () => null })

export type ProductType = 'vaidyabot' | 'admind'

export default function Home() {
  const [activeProduct, setActiveProduct] = useState<ProductType | null>(null)

  return (
    <>
      <Cursor />
      <ScrollProgress />
      <NavBar />
      <Hero />
      <ManifestoSection />
      <ProductsSection onOpen={setActiveProduct} />
      <Footer />
      <AnimatePresence>
        {activeProduct && (
          <ProductModal
            key={activeProduct}
            product={activeProduct}
            onClose={() => setActiveProduct(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
