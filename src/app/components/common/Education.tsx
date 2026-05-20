import type { Education as EducationType } from '@types'

interface EducationProps {
  education: EducationType
}

/**
 * Renders an individual education entry component displaying professional title, educational program name, institution, degree type, and graduation year.
 * Used within the Educations container to display each education item in a list format with styled typography (mb-2 margin).
 * Shows unformatted raw data values directly without any translation or formatting utilities.
 *
 * @interface EducationProps - Props interface for Education component
 * @param {EducationType} props.education - The education object containing:
 *   - `professionalTitle` (string): Job or role obtained during education (e.g., "Software Developer", "Research Assistant") displayed as bold text in first list item
 *   - `education` (string): Name of the educational program studied (e.g., "Computer Science", "Mathematics", "Business Administration") displayed as second list item
 *   - `academy` (string): Full name of the educational institution (e.g., "University of Helsinki", "Aalto University", "Helsinki Metropolia University of Applied Sciences") displayed as third list item
 *   - `degree` (string): Type or level of degree earned in Finnish (e.g., "Ylioppilastutkinto" for high school diploma, "Ammattikorkeakoulututkinto" for vocational degree) displayed as fourth list item
 *   - `dateOfGraduation` (Date | null): Date object representing graduation date; displays only the year using getFullYear() method. Use new Date('YYYY-MM-DD') format or null if not applicable, shown as fifth list item
 *
 * @example Basic usage with single education entry containing complete data
 * ```tsx
 * import Education from './common/Education'
 *
 * const educationData = {
 *   professionalTitle: 'Junior Developer',
 *   education: 'Software Development',
 *   academy: 'Aalto University',
 *   degree: 'Yliopistotutkinto',
 *   dateOfGraduation: new Date('2023-06-15')
 * }
 *
 * <Education education={educationData} />
 * ```
 *
 * @example Rendering ongoing studies with null graduation date
 * ```tsx
 * import Education from './common/Education'
 *
 * const currentStudies = {
 *   professionalTitle: 'Master Student',
 *   education: 'Artificial Intelligence',
 *   academy: 'University of Helsinki',
 *   degree: 'Maisterin tutkinto',
 *   dateOfGraduation: null
 * }
 *
 * <Education education={currentStudies} />
 * ```
 *
 * @example Usage within Educations container with multiple entries (rendered as list)
 * ```tsx
 * import Education from './common/Education'
 * import Educations from '../Educations'
 *
 * const educations = [
 *   { id: '1', professionalTitle: 'Senior Developer', education: 'Computer Science', academy: 'University of Helsinki', degree: 'Yliopistotutkinto', dateOfGraduation: new Date('2023-06-15') },
 *   { id: '2', professionalTitle: 'Research Assistant', education: 'Data Analytics', academy: 'Aalto University', degree: 'Ammattikorkeakoulututkinto', dateOfGraduation: new Date('2021-09-30') }
 * ]
 *
 * <Educations educations={educations} />
 * ```
 *
 * @example Rendering in a CV profile section with Tailwind styling and space-y spacing
 * ```tsx
 * import Education from './common/Education'
 *
 * const ProfileSection = () => (
 *   <section className="mb-8">
 *     <h2>Koulutus</h2>
 *     <div className="space-y-4">
 *       <Education education={{
 *         professionalTitle: 'Software Engineer',
 *         education: 'Computer Science',
 *         academy: 'Aalto University',
 *         degree: 'Yliopistotutkinto',
 *         dateOfGraduation: new Date('2023-06-15')
 *       }} />
 *     </div>
 *   </section>
 * )
 * ```
 */
const Education = ({ education }: EducationProps) => {
  return (
    <div data-testid='education' className='mb-2'>
      <ul>
        <li className='font-semibold'>{education.professionalTitle}</li>
        <li>{education.education}</li>
        <li>{education.academy}</li>
        <li>{education.degree}</li>
        <li>{education.dateOfGraduation.getFullYear()}</li>
      </ul>
    </div>
  )
}

export default Education
