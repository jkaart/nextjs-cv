import ImageGallery from '@components/ImageGallery'
import { getProjectImages } from '@utils/projects'

interface ProjectImagesProps {
  slug: string
  subdirPath?: string
}

const ProjectImages = async ({ slug, subdirPath }: ProjectImagesProps) => {
  const images = await getProjectImages(
    !subdirPath ? slug : `${slug}/${subdirPath}`
  )

  if (!images) {
    return null
  }

  return <ImageGallery slug={slug} images={images} />
}

export default ProjectImages
