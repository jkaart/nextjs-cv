import ProjectImages from '@components/ProjectImages'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface MDXContentProps {
  source: string
  slug: string
  subdirPath?: string
}

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
