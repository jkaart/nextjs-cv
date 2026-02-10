import type { Skill } from "@/data/data"

interface SkillRatingProps {
  rating: string
  skills: Skill[]
}

const SkillRating = ({ rating, skills }: SkillRatingProps) => {
  return (
    <>
      <span className="font-semibold">{rating}</span>
      {skills.length
        ? <div className="flex">
          {skills.map(skill =>
            <div
              key={skill.language}
              className="text-4xl"
            >
              <span className={skill.iconClass} />
            </div>
          )}
        </div>
        : <div>-</div>
      }
    </>
  )
}

export default SkillRating
