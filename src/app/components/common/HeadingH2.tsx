interface HeadingH2Props {
  text: string
}

/**
 * Renders an H2 heading with bold styling and a bottom border.
 *
 * @param {HeadingH2Props} props - Component props containing the heading text
 * @param {string} props.text - The content to display in the heading (e.g., "Work Experience", "Education")
 *
 * @example
 * ```tsx
 * <HeadingH2 text="Work Experience" />
 * <HeadingH2 text="Education" />
 * ```
 */
const HeadingH2 = ({ text }: HeadingH2Props) => (
  <h2 className='inline-block mb-2 text-2xl font-bold border-b-4'>{text}</h2>
)

export default HeadingH2
