import { data } from "@/data/data"

const Skills = () => {
  const frontendExcellent = data.skills.filter(skill => skill.level === 'excellent' && skill.type === 'frontend')
  return (
    <div>
      <h2>Taidot</h2>
      <ul>
        {frontendExcellent.map((skill) => (<li key={skill.language}>{skill.language}</li>))}
      </ul>
    </div>

  )
}

export default Skills
