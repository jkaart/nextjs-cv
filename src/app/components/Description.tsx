import MdxLayout from '@components/MDXLayout'
import DescriptionContent from '@data/mdx/me/description.mdx'

const Description = () => {
  return (
    <MdxLayout className='prose dark:prose-invert'>
      <DescriptionContent />
    </MdxLayout>
  )
}

export default Description
