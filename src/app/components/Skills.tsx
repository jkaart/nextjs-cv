import 'devicon/devicon.min.css'
import type { Skill as SkillType } from '@/data/data'
import Skill from './Skill'

interface SkillsProps {
  skills: SkillType[]
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
    <div className='p-2'>
      <h2 className='text-xl font-semibold'>Taidot</h2>
      <div className='flex flex-wrap text-5xl'>
        {sortedSkills.map(skill => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default Skills
