/** @type {import('next').NextConfig} */

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join('; '),
  },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
]

const nextConfig = {
  async headers() {
    return [
      // Aggressive cache for static assets — 1 year
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Cache fonts — 1 year
      {
        source: '/fonts/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Cache public assets — 30 days
      {
        source: '/(.*)\\.(svg|png|jpg|jpeg|webp|ico)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
        ],
      },
      // Security headers on all routes
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },

  // Remove X-Powered-By fingerprint
  poweredByHeader: false,

  // Strict mode
  reactStrictMode: true,

  // Compress output
  compress: true,

  // Optimise images
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000, // 30 days
    deviceSizes: [375, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 64, 128, 256],
  },

  // Compiler optimisations
  compiler: {
    // Remove console.* in production
    removeConsole: process.env.NODE_ENV === 'production'
      ? { exclude: ['error', 'warn'] }
      : false,
  },

  webpack: (config, { dev, isServer }) => {
    // Tree-shake unused lodash etc
    config.resolve.fallback = { fs: false }

    // Production bundle optimisation
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          cacheGroups: {
            // Separate GSAP into its own chunk — only loaded when needed
            gsap: {
              test: /[\\/]node_modules[\\/]gsap[\\/]/,
              name: 'gsap',
              chunks: 'async',
              priority: 20,
            },
            // Vendor chunk
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
            },
          },
        },
      }
    }

    return config
  },

  // Experimental: faster builds + smaller output
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['gsap'],
  },
}

export default nextConfig
