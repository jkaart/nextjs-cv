const Description = async () => {
  const { default: DescriptionContent } = await import(`@/data/mdx/me/description.mdx`)
  return (<DescriptionContent />)
}

export default Description