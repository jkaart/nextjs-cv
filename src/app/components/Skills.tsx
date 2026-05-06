import HeadingH2 from '@components/common/HeadingH2'
import Skill from '@components/Skill'
import type { Skill as SkillType } from '@types'
import { sortSkills } from '@utils/sortSkills'

interface SkillsProps {
  skills: SkillType[]
}

const Skills = ({ skills }: SkillsProps) => {
  const sortedSkills = sortSkills(skills)
  return (
    <div>
      <HeadingH2 text='Taidot' />
      <div className='flex flex-wrap text-5xl gap-2'>
        {sortedSkills.map(skill => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default Skills
