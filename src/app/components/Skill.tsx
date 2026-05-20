import DevIcon from '@components/common/DevIcon'
import Tooltip from '@components/Tooltip'
import type { Skill as SkillType } from '@types'

interface SkillProps {
  skill: SkillType
}

/**
 * Renders a skill component for displaying technology proficiency levels.
 * Shows the technology name with Finnish translation (Tekniikka for technology).
 * Displays proficiency level when provided, using translateLevel utility.
 * Supports various proficiency levels: excellent, veryGood, good, fair, poor.
 *
 * @interface SkillProps - Props interface for Skill component
 * @param {SkillType} props.skill - The skill object containing: id (unique identifier), language/technology name (e.g., 'React', 'Node.js'), level of proficiency, type category (frontend/backend/other), and optional iconName. Technology names display Finnish translations below the main name; proficiency levels map to Finnish via translateLevel utility
 *
 * @example Basic usage with single skill (shows tech name + proficiency)
 * ```tsx
 * import Skill from './Skill'
 *
 * <Skill skill={{ id: '1', language: 'JavaScript', level: 'excellent' }} />
 * // Output: JavaScript (bold)
 * //         Tekniikka
 * //         Erinomainen
 * ```
 *
 * @example Rendering backend skills with different proficiency levels
 * ```tsx
 * import Skill from './Skill'
 *
 * const BackendSkills = () => (
 *   <div className="flex gap-3">
 *     <Skill skill={{ id: 'nodejs', language: 'Node.js', level: 'excellent', type: 'backend', iconName: 'nodejs' }} />
 *     <Skill skill={{ id: 'python', language: 'Python', level: 'veryGood', type: 'backend', iconName: 'python' }} />
 *     <Skill skill={{ id: 'docker', language: 'Docker', level: 'good', type: 'other', iconName: 'docker' }} />
 *   </div>
 * )
 * ```
 *
 * @example Full frontend skills section with React ecosystem
 * ```tsx
 * import Skill from './Skill'
 *
 * const FrontendSkills = () => (
 *   <div className="flex gap-3">
 *     <Skill skill={{ id: 'react', language: 'React', level: 'excellent', type: 'frontend', iconName: 'react' }} />
 *     <Skill skill={{ id: 'typescript', language: 'TypeScript', level: 'veryGood', type: 'frontend', iconName: 'typescript' }} />
 *     <Skill skill={{ id: 'tailwindcss', language: 'Tailwind CSS', level: 'excellent', type: 'frontend', iconName: 'tailwindcss' }} />
 *   </div>
 * )
 * ```
 */
const Skill = ({ skill }: SkillProps) => (
  <Tooltip testid='skill' content={<span>{skill.language}</span>}>
    <DevIcon name={skill.iconName} />
  </Tooltip>
)

export default Skill
