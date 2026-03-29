/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suppress locomotive-scroll peer dep warnings at build time
  webpack: (config) => {
    config.resolve.fallback = { fs: false }
    return config
  },
}

export default nextConfig
