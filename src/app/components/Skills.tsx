import { data, type Skill } from "@/data/data"
import "devicon/devicon.min.css"

const Skills = () => {
  const skillIconClass = data.skills.map(skill => skill.iconClass)

  return (
    <div className="p-2">
      <h2 className="text-xl font-semibold">Taidot</h2>
      <div className="text-4xl grid gap-1 grid-cols-5">
        {skillIconClass.map(iconClass => <span key={iconClass} className={iconClass} />)}
      </div>
    </div>
  )
}

export default Skills
