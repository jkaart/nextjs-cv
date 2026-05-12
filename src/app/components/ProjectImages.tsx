import ImageGallery from '@components/ImageGallery'
import { getProjectImages } from '@utils/projects'

interface ProjectImagesProps {
  slug: string
  subdirPath?: string
}

/**
 * Asynchronously fetches and renders project images in an ImageGallery component.
 * Uses getProjectImages utility to retrieve images for a given slug, optionally with a subdirectory path.
 * Returns null if no images are found.
 *
 * @param props - Component props containing the project identifier and optional subdirectory
 * @param props.slug - Project slug used to fetch associated images from storage
 * @param props.subdirPath - Optional subdirectory path appended to the slug for organized image retrieval
 * @returns React element representing an ImageGallery with fetched images, or null if no images exist
 *
 * @example
 * ```tsx
 * // Usage for a project's main images
 * <ProjectImages slug="my-project" />
 * ```
 *
 * @example
 * ```tsx
 * // Usage for images in a specific subdirectory (e.g., screenshots folder)
 * <ProjectImages slug="my-project" subdirPath="screenshots" />
 * ```
 */
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
