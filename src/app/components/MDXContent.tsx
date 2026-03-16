import { MDXRemote } from 'next-mdx-remote/rsc'
import ProjectImages from './ProjectImages'

interface MDXContentProps {
  source: string
  slug: string
}

const MDXContent = ({ source, slug }: MDXContentProps) => {
  const components = {
    ProjectImages: () => <ProjectImages slug={slug} />
  }
  return (
    <MDXRemote
      source={source}
      components={components}
    />
  )
}

export default MDXContent
