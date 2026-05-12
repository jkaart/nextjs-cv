import ProjectImages from '@components/ProjectImages'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface MDXContentProps {
  source: string
  slug: string
  subdirPath?: string
}

/**
 * Renders MDX content with custom component registration.
 * Wraps the MDXRemote component and provides a ProjectImages component
 * that automatically handles image rendering based on subdirPath.
 *
 * @param {MDXContentProps} props - Component props containing MDX source data
 * @param {string} props.source - The MDX source code to render
 * @param {string} props.slug - The slug identifier for the content (used by ProjectImages)
 * @param {string} [props.subdirPath] - Optional subdirectory path for images
 *
 * @example
 * ```tsx
 * // Basic usage with simple MDX source
 * <MDXContent source={mdxSource} slug="my-project" />
 *
 * // Usage with image subdir path
 * <MDXContent
 *   source={projectMdx}
 *   slug="construction-project"
 *   subdirPath="images/construction"
 * />
 *
 * // In a page component
 * const mdxSource = await getMdxData('my-page')
 * return (
 *   <article>
 *     <MDXContent source={mdxSource} slug="my-page" />
 *   </article>
 * )
 * ```
 */
const MDXContent = ({ source, slug }: MDXContentProps) => {
  const components = {
    ProjectImages: ({ subdirPath }: { subdirPath?: string }) =>
      subdirPath ? (
        <ProjectImages slug={slug} subdirPath={subdirPath} />
      ) : (
        <ProjectImages slug={slug} />
      )
  }
  return <MDXRemote source={source} components={components} />
}

export default MDXContent
