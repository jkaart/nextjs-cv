import MdxLayout from '@components/MDXLayout'
import DescriptionContent from '@data/mdx/me/description.mdx'

/**
 * Component that renders the personal description section of the CV.
 * Displays MDX content from the description data file, wrapped in a layout
 * with Tailwind CSS prose styling for readable typography and dark mode support.
 *
 * @example
 * ```tsx
 * <Description />
 * ```
 */
const Description = () => {
  return (
    <MdxLayout className='prose dark:prose-invert'>
      <DescriptionContent />
    </MdxLayout>
  )
}

export default Description
