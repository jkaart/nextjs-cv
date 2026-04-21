import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  webpack: (config: {
    resolve: { alias: { canvas: boolean; encoding: boolean } }
  }) => {
    // Handle PDF renderer
    config.resolve.alias.canvas = false
    config.resolve.alias.encoding = false

    return config
  },
  transpilePackages: ['@react-pdf/renderer']
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      // Without options
      'remark-gfm'
    ],
    rehypePlugins: []
  },
  extension: /\.(md|mdx)$/
})

export default withMDX(nextConfig)
