import Tooltip from '@components/Tooltip'
import type { Skill as SkillType } from '@data/data'
import { getDevIcon } from '@utils/getDevIcon'

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
