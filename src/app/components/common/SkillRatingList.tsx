import type { Skill } from "@/data/data"
import SkillRating from "./SkillRating"

interface SkillRatingsListProps {
  label: string
  ratings: {
    excellent: Skill[]
    good: Skill[]
    poor: Skill[]
  }
}

const SkillRatingsList = ({ label, ratings }: SkillRatingsListProps) => {
  return (
    <>
      <p className="font-bold">{label}</p>
      <SkillRating rating="Erinomaisesti" skills={ratings.excellent} />
      <SkillRating rating="Hyvin" skills={ratings.good} />
      <SkillRating rating="Huonosti" skills={ratings.poor} />
    </>
  )
}

export default SkillRatingsList
