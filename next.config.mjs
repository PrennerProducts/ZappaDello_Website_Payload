import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Temporarily ignore TypeScript errors for build
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporarily ignore ESLint errors for build
  },
}

export default nextConfig
