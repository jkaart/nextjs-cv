import type { Education as EducationType } from '@types'

interface EducationProps {
  education: EducationType
}

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
