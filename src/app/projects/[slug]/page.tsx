import { notFound } from 'next/navigation'
import MDXContent from '@/app/components/MDXContent'
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
    <main className='prose dark:prose-invert'>
      <h1>{title}</h1>
      <MDXContent source={content} slug={slug} />
    </main>
  )
}

export default Project
