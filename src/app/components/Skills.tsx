import type { Skill } from "@/data/data"
import "devicon/devicon.min.css"
import Tooltip from "./Tooltip"

interface SkillsProps {
  skills: Skill[]
}

const Skills = ({ skills }: SkillsProps) => {
  const sortedSkills = skills.sort((a, b) => {
    const skillA = a.language.toLowerCase()
    const skillB = b.language.toLowerCase()

    if (skillA < skillB) {
      return -1
    }

    if (skillA < skillB) {
      return 1
    }

    return 0
  })

  return (
    <div className="p-2">
      <h2 className="text-xl font-semibold">Taidot</h2>
      <div className="flex flex-wrap text-5xl">
        {sortedSkills.map(skill => <Tooltip key={skill.id} content={<span>{skill.language}</span>}>
          <span className={`${skill.iconClass} me-1 mb-1`} />
        </Tooltip>
        )}
      </div>
    </div>
  )
}

export default Skills
