import type { Skill as SkillType } from '@/data/data'
import { sortSkills } from '@/utils/sortSkills'
import Skill from './Skill'

interface SkillsProps {
  skills: SkillType[]
}

const Skills = ({ skills }: SkillsProps) => {
  const sortedSkills = sortSkills(skills)
  return (
    <div className='p-2'>
      <h2 className='text-xl font-semibold'>Taidot</h2>
      <div className='flex flex-wrap text-5xl gap-2'>
        {sortedSkills.map(skill => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default Skills
