import type { Skill as SkillType } from '@/data/data'
import Tooltip from './Tooltip'

interface SkillProps {
  skill: SkillType
}

const Skill = ({ skill }: SkillProps) => (
  <Tooltip testid='skill' content={<span>{skill.language}</span>}>
    <span className={`${skill.iconClass} me-1 mb-1`} />
  </Tooltip>
)

export default Skill
