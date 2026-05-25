import mdx from '@next/mdx'

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        hostname: 'cdn-images-1.medium.com',
        protocol: 'https',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/jktgo',
        destination: '/jktgo.html',
      },
    ]
  },
}

export default withMDX(nextConfig)
