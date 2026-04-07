import MDXContent from '@components/MDXContent'
import MdxLayout from '@components/MDXLayout'
import { getProject } from '@utils/projects'
import { notFound } from 'next/navigation'

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
    <MdxLayout className='flex justify-center'>
      <div className='prose dark:prose-invert mt-10 lg:mt-20 lg:w-1/2 p-2 border bg-gray-100 dark:bg-gray-800'>
        <h1>{title}</h1>
        <MDXContent source={content} slug={slug} />
      </div>
    </MdxLayout>
  )
}

export default Project
