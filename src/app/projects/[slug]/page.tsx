import { notFound } from 'next/navigation'
import MDXContent from '@/app/components/MDXContent'
import MdxLayout from '@/app/components/MDXLayout'
import { getProject } from '@/utils/projects'

interface ProjectProps {
  params: {
    slug: string
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
    <main>
      <MdxLayout>
        <h1>{title}</h1>
        <MDXContent source={content} slug={slug} />
      </MdxLayout>
    </main>
  )
}

export default Project
