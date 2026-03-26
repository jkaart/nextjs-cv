import type { Education as EducationType } from '@/data/data'

interface EducationProps {
  education: EducationType
}

const Education = ({ education }: EducationProps) => {
  return (
    <div className='mb-2'>
      <ul>
        <li className='font-semibold'>{education.professionalTitle}</li>
        <li>{education.education}</li>
        <li>{education.academy}</li>
        <li>{education.degree}</li>
        <li>{education.yearOfDecree}</li>
      </ul>
    </div>
  )
}

export default Education
