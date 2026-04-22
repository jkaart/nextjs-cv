'use server'

import MdxLayout from '@components/MDXLayout'

const Description = async () => {
  const { default: DescriptionContent } = await import(
    '@data/mdx/me/description.mdx'
  )
  return (
    <MdxLayout className='prose dark:prose-invert'>
      <DescriptionContent />
    </MdxLayout>
  )
}

export default Description
