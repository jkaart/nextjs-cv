import type { Education as EducationType } from '@types'

interface EducationProps {
  education: EducationType
}

/**
 * Renders an education entry component displaying professional title, institution, degree, and graduation year.
 *
 * @param {EducationProps} props - Component props containing education data
 * @param {EducationType} props.education - The education object with fields:
 *   - `professionalTitle`: The job or role obtained during education (e.g., "Software Developer")
 *   - `education`: Name of the educational program (e.g., "Computer Science")
 *   - `academy`: Institution name (e.g., "University of Helsinki")
 *   - `degree`: Type of degree earned (e.g., "Ylioppilastutkinto", "Ammattikorkeakoulututkinto")
 *   - `dateOfGraduation`: Date object representing graduation date
 *
 * @example
 * ```tsx
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
