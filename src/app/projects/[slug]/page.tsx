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
    <main className='flex-1 lg:mx-auto lg:max-w-4xl mx-3 mb-2'>
      <MdxLayout className='prose dark:prose-invert p-2 border border-t-0 bg-gray-100 dark:bg-gray-800 h-auto'>
        <div>
          <h1>{title}</h1>
          <MDXContent source={content} slug={slug} />
        </div>
      </MdxLayout>
    </main>
  )
}

export default Project
