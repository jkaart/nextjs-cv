import Image from "next/image"
import { getProjectImages } from "@/utils/projects"

interface ProjectImagesProps {
  slug: string
}

const ProjectImages = async ({ slug }: ProjectImagesProps) => {

  console.log('slug in ProjectImages', slug)
  const images = await getProjectImages(slug)

  if (!images) {
    return null
  }

  return (
    <div className="mx-2">
      {images.map((src, index) => (
        <Image alt={`${slug} project image ${index + 1}`} src={src} key={src} width={1280} height={720} />
      ))}
    </div>
  )
}

export default ProjectImages
