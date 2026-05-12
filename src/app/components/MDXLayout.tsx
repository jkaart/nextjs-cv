import type { HTMLProps } from 'react'

interface MdxLayoutProps {
  children: React.ReactNode
  className?: HTMLProps<HTMLElement>['className']
}

/**
 * Wrapper component for MDX content with optional custom class names.
 * Provides a simple div container that wraps MDX content and allows
 * customization through the className prop.
 *
 * @param {MdxLayoutProps} props - Component props containing layout configuration
 * @param {React.ReactNode} props.children - The MDX content to wrap in the layout
 * @param {string} [props.className] - Optional CSS class name for styling the container
 *
 * @example
 * ```tsx
 * // Basic usage with default styling
 * <MdxLayout>
 *   <MDXContent source={source} slug="page" />
 * </MdxLayout>
 *
 * // Usage with custom className
 * <MdxLayout className="prose max-w-4xl mx-auto">
 *   <MDXContent source={source} slug="page" />
 * </MdxLayout>
 *
 * // Nested usage in a page component
 * export default function Page() {
 *   return (
 *     <main>
 *       <MdxLayout className="container mx-auto px-4">
 *         <MDXContent source={mdxSource} slug="about" />
 *       </MdxLayout>
 *     </main>
 *   )
 * }
 * ```
 */
const MdxLayout = ({ children, className }: MdxLayoutProps) => (
  <div className={className}>{children}</div>
)

export default MdxLayout
