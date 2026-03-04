import type { WorkExperience as WorkExperienceType } from "@/data/data"
import { dateToString } from "@/utils/dateToString"

interface WorkExperienceProps {
  workExperience: WorkExperienceType
}

const WorkExperience = ({ workExperience }: WorkExperienceProps) => {
  return (
    <div className="mb-2">
      <ul>
        <li className="font-semibold">{workExperience.title}</li>
        <li>{workExperience.workplaceName}</li>
        <li>{`${dateToString(workExperience.startDate)} - ${dateToString(workExperience.endDate)}`}</li>
        <li>{workExperience.job}</li>
      </ul>
    </div>
  )
}

export default WorkExperience
