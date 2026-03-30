import MdxLayout from './MDXLayout'

const Description = async () => {
  const { default: DescriptionContent } = await import(
    `@/data/mdx/me/description.mdx`
  )
  return (
    <MdxLayout>
      <DescriptionContent />
    </MdxLayout>
  )
}

export default Description
