import createMDX from '@next/mdx'
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      // Without options
      'remark-gfm',
    ],
    rehypePlugins: [],
  },
  extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig)
