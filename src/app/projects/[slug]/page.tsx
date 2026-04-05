import MDXContent from '@components/MDXContent'
import { getProject } from '@utils/projects'
import { notFound } from 'next/navigation'
import MdxLayout from '../../components/MDXLayout'

interface ProjectProps {
  params: Promise<{ slug: string }>
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
    <main>
      <MdxLayout>
        <h1>{title}</h1>
        <MDXContent source={content} slug={slug} />
      </MdxLayout>
    </main>
  )
}

export default Project
