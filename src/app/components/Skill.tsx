import ComponentWrapper from '@components/common/ComponentWrapper'
import Tooltip from '@components/Tooltip'
import type { Skill as SkillType } from '@types'
import { getDevIcon } from '@utils/getDevIcon'

interface SkillProps {
  skill: SkillType
}

/**
 * Renders a skill icon wrapped in a tooltip component.
 * Displays the developer's programming language or technology skill with its corresponding icon.
 * Support Simple Icons with Si prefix (example: SiReact) in iconName property from react-icons module.
 * Shows the skill name (language) on hover via Tooltip component.
 *
 * @param props - Component props containing skill data object
 * @param props.skill - SkillType object with id, language, level, type, and iconName properties
 *
 * @example
 * ```tsx
 * const skills: Skill[] = [
 *   {
 *     id: '1',
 *     language: 'JavaScript',
 *     level: 'excellent',
 *     type: 'frontend/backend',
 *     iconName: 'SiJavascript'
 *   },
 *   {
 *     id: '2',
 *     language: 'TypeScript',
 *     level: 'veryGood',
 *     type: 'backend',
 *     iconName: 'SiTypescript'
 *   }
 * ]
 *
 * <div className='flex gap-4'>
 *   {skills.map(skill => (
 *     <Skill key={skill.id} skill={skill} />
 *   ))}
 * </div>
 * ```
 */
const Skill = ({ skill }: SkillProps) => {
  const Icon = getDevIcon(skill.iconName)

  return (
    <ComponentWrapper>
      <Tooltip testid='skill' content={<span>{skill.language}</span>}>
        <Icon className='w-8' />
      </Tooltip>
    </ComponentWrapper>
  )
}

export default Skill
