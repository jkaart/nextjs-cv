import { data } from "@/data/data"
import "devicon/devicon.min.css"

const Skills = () => {
  return (
    <div className="p-2">
      <h2 className="text-xl font-semibold">Taidot</h2>
      <div className="flex flex-wrap text-4xl">
        {data.skill.map(skill => <span key={skill.id} className={`${skill.iconClass} me-1 mb-1`} />)}
      </div>
    </div>
  )
}

export default Skills
