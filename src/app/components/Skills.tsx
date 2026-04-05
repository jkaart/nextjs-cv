import Skill from '@components/Skill'
import type { Skill as SkillType } from '@data/data'
import { sortSkills } from '@utils/sortSkills'

interface SkillsProps {
  skills: SkillType[]
}

const Skills = ({ skills }: SkillsProps) => {
  const sortedSkills = sortSkills(skills)
  return (
    <div>
      <h2 className='inline-block mb-2 text-2xl font-bold border-b-4'>
        Taidot
      </h2>
      <div className='flex flex-wrap text-5xl gap-2'>
        {sortedSkills.map(skill => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default Skills
