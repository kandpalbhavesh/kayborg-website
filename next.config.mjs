/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const securityHeaders = [
  // Force HTTPS for 2 years, include subdomains
  { key: 'Strict-Transport-Security',    value: 'max-age=63072000; includeSubDomains; preload' },

  // Prevent clickjacking — no iframing from external origins
  { key: 'X-Frame-Options',             value: 'DENY' },

  // Block MIME-type sniffing
  { key: 'X-Content-Type-Options',      value: 'nosniff' },

  // Minimal referrer info sent cross-origin
  { key: 'Referrer-Policy',             value: 'strict-origin-when-cross-origin' },

  // Disable access to sensitive browser APIs
  {
    key: 'Permissions-Policy',
    value: [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'payment=()',
      'usb=()',
      'bluetooth=()',
      'browsing-topics=()',
      'interest-cohort=()',
    ].join(', '),
  },

  // Cross-origin isolation (enables SharedArrayBuffer if ever needed)
  { key: 'Cross-Origin-Opener-Policy',   value: 'same-origin' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },

  // No loading this site in an <object> or <embed> from cross origins
  { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },

  // DNS prefetch for faster font loads
  { key: 'X-DNS-Prefetch-Control',       value: 'on' },

  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // Production: drop unsafe-eval. Dev keeps it for Next.js HMR.
      isProd
        ? "script-src 'self' 'unsafe-inline'"
        : "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
      // Inline styles needed for styled-jsx + next/font
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Google Fonts glyphs
      "font-src 'self' https://fonts.gstatic.com data:",
      // Data URIs for inline SVG/images
      "img-src 'self' data: blob:",
      // Only fetch from self (no external APIs from this site)
      "connect-src 'self'",
      // No iframes at all
      "frame-ancestors 'none'",
      // Forms submit only to self (mailto: links are not form actions)
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
      "block-all-mixed-content",
    ].join('; '),
  },
]

const nextConfig = {
  async headers() {
    return [
      // ── 1 year immutable cache for fingerprinted static assets ──
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // ── 1 year for fonts ──
      {
        source: '/fonts/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // ── 30 days for static images / icons ──
      {
        source: '/(.*)\\.(svg|png|jpg|jpeg|webp|avif|ico)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
        ],
      },
      // ── Security headers on every route ──
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },

  // Remove "X-Powered-By: Next.js" fingerprint header
  poweredByHeader: false,

  // Enable React strict mode (catches stale-closure bugs, double-renders in dev)
  reactStrictMode: true,

  // Brotli / gzip compression on server responses
  compress: true,

  // Image optimisation
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000, // 30 days
    deviceSizes: [375, 480, 640, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 64, 128, 256],
  },

  // Strip console.log/debug in production builds; keep error + warn
  compiler: {
    removeConsole: isProd ? { exclude: ['error', 'warn'] } : false,
  },

  webpack: (config, { dev, isServer }) => {
    config.resolve.fallback = { fs: false }

    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 240000,
          cacheGroups: {
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

  experimental: {
    optimizeCss: true,
    // Tree-shake specific large packages
    optimizePackageImports: ['framer-motion'],
  },
}

export default nextConfig
