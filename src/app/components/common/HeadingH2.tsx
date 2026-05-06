interface HeadingH2Props {
  text: string
}

const HeadingH2 = ({ text }: HeadingH2Props) => (
  <h2 className='inline-block mb-2 text-2xl font-bold border-b-4'>{text}</h2>
)

export default HeadingH2
