import HeadingH2 from '@components/common/HeadingH2'
import Skill from '@components/Skill'
import type { Skill as SkillType } from '@types'
import { sortSkills } from '@utils/sortSkills'

interface SkillsProps {
  skills: SkillType[]
}

/**
 * Renders a section displaying all developer skills with icons.
 * Sorts skills by proficiency level (excellent, veryGood, good, poor, veryPoor) and displays them in a flex container.
 * Each skill is rendered as an icon wrapped in a tooltip showing the language/technology name.
 * Section title "Taidot" (Skills) is displayed at the top.
 *
 * @param props - Component props containing array of skill objects
 * @param props.skills - Array of SkillType objects, each with id, language, level, type, and iconName properties
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
 *   },
 *   {
 *     id: '3',
 *     language: 'React',
 *     level: 'excellent',
 *     type: 'frontend',
 *     iconName: 'SiReact'
 *   }
 * ]
 *
 * <Skills skills={skills} />
 * ```
 */
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
