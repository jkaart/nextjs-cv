import { data } from "@/data/data"
import "devicon/devicon.min.css"

const Skills = () => {
  return (
    <div className="p-2">
      <h2 className="text-xl font-semibold">Taidot</h2>
      <div className="text-4xl grid gap-1 grid-cols-5">
        {data.skill.map(skill => <span key={skill.id} className={skill.iconClass} />)}
      </div>
    </div>
  )
}

export default Skills
