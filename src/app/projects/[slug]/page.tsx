import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getProject } from "@/utils/projects"

interface ProjectProps {
  params: {
    slug: string
  }
}

const Project = async ({ params }: ProjectProps) => {
  const { slug } = await params
  console.log(slug)
  const project = await getProject(slug)

  if (!project) {
    return notFound()
  }

  const { metadata, content } = project
  const { title } = metadata

  return (
    <>
      <h2>{title}</h2>
      <MDXRemote source={content} />
    </>

  )
}

export default Project
