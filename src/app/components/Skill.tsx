import type { Skill as SkillType } from '@/data/data'
import { getDevIcon } from '@/utils/getDevIcon'
import Tooltip from './Tooltip'

interface SkillProps {
  skill: SkillType
}

const Skill = ({ skill }: SkillProps) => {
  const Icon = getDevIcon(skill.iconName)

  return (
    <Tooltip testid='skill' content={<span>{skill.language}</span>}>
      <Icon />
    </Tooltip>
  )
}

export default Skill
