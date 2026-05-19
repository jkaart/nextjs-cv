interface HeadingH2Props {
  text: string
}

/**
 * Renders a section heading with H2 semantic HTML tag.
 * Displays the provided text as an accessible, styled level-2 heading using Tailwind CSS classes for consistent typography and spacing across the application.
 * Ideal for creating section headers in CV/resume layouts, developer profiles, or any content-rich pages requiring clear visual hierarchy.
 *
 * @interface HeadingH2Props - Props interface for HeadingH2 component
 * @param {string} props.text - The heading content to display (e.g., 'About', 'Experience'). Supports any string value including Finnish text like 'Tietoa' or 'Kokemus'. Empty strings will render an empty H2 element with styling but no visible text.
 *
 * @example Basic usage for section headers in English
 * ```tsx
 * <HeadingH2 text='About Me' />
 * // Renders: <h2 class="text-3xl font-bold mb-4">About Me</h2>
 * ```
 *
 * @example Usage with Finnish content (common in CV/resume context)
 * ```tsx
 * <HeadingH2 text='Tietoa minusta' />
 * // Renders: <h2 class="text-3xl font-bold mb-4">Tietoa minusta</h2>
 * ```
 *
 * @example Multiple section headers with different styling contexts
 * ```tsx
 * const ProfileSection = () => (
 *   <div className="space-y-8">
 *     <HeadingH2 text='Professional Summary' />
 *     <p>Your professional summary goes here...</p>
 *
 *     <HeadingH2 text='Skills & Expertise' />
 *     <ul className="list-disc pl-5">
 *       <li>React Development</li>
 *       <li>TypeScript</li>
 *       <li>Node.js</li>
 *     </ul>
 *   </div>
 * )
 * ```
 *
 * @example Usage in a developer CV with Finnish headings
 * ```tsx
 * const CvSection = () => (
 *   <section className="mb-8">
 *     <HeadingH2 text='Koulutus' />
 *     <EducationList educations={data.educations} />
 *   </section>
 *
 *   <section className="mb-8">
 *     <HeadingH2 text='Työkokemus' />
 *     <WorkHistory workExperiences={data.workExperiences} />
 *   </section>
 * )
 * ```
 */
const HeadingH2 = ({ text }: HeadingH2Props) => (
  <h2 className='inline-block mb-2 text-2xl font-bold border-b-4'>{text}</h2>
)

export default HeadingH2
