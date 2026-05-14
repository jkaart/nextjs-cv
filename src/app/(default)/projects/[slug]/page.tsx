import MDXContent from '@components/MDXContent'
import MdxLayout from '@components/MDXLayout'
import { getProject } from '@utils/projects'
import { notFound } from 'next/navigation'

interface ProjectProps {
  params: Promise<{ slug: string }>
}

export const generateMetadata = async ({ params }: ProjectProps) => {
  const { slug } = await params
  const project = await getProject(slug)

  if (project) {
    return project.metadata
  }
}

const Project = async ({ params }: ProjectProps) => {
  const { slug } = await params
  if (!slug) {
    return null
  }
  const project = await getProject(slug)

  if (!project) {
    return notFound()
  }

  const { metadata, content } = project
  const { title } = metadata

  return (
    <MdxLayout className='prose dark:prose-invert p-2 border border-t-0 bg-primary-background text-primary-foreground h-auto'>
      <div>
        <h1>{title}</h1>
        <MDXContent source={content} slug={slug} />
      </div>
    </MdxLayout>
  )
}

export default Project
