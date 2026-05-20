import HeadingH2 from '@components/common/HeadingH2'
import Skill from '@components/Skill'
import type { Skill as SkillType } from '@types'
import { sortSkills } from '@utils/sortSkills'

interface SkillsProps {
  skills: SkillType[]
}

/**
 * Renders a comprehensive list of technical and programming skills with proficiency levels.
 * Displays a section header "Taidot" followed by all skills, each rendered using the Skill component.
 * Skills are displayed as icons wrapped in tooltips showing the skill name on hover.
 * Supports Inconify DevIcons for technology recognition and automatic sorting by type.
 * Automatically sorts skills into frontend/backend/other categories for organized display.
 *
 * @interface SkillsProps - Props interface for Skills component
 * @param {SkillType[]} props.skills - Array of skill objects containing: id (unique identifier), language/technology name (e.g., 'JavaScript', 'React'), proficiency level (excellent/veryGood/good/fair/poor), type classification (frontend/backend/fullstack), and iconName from Iconify library DevIcons collection. The array should contain all skills to be displayed, sorted by the sortSkills utility function which organizes them into frontend, backend, and other categories.
 * @param {string[]} props.skills[].id - Unique identifier for each skill item, used as React key when mapping the skills array. Must be unique per skill instance to enable proper list rendering and state management in parent components.
 * @param {string} props.skills[].language - The name of the programming language or technology displayed in tooltip on hover (e.g., 'JavaScript', 'TypeScript', 'React', 'Node.js'). This text appears when user hovers over the skill icon.
 * @param {'veryPoor' | 'poor' | 'good' | 'veryGood' | 'excellent'} props.skills[].level - Proficiency level indicating skill mastery, mapped to Finnish translations for display in parent components (e.g., 'hyvä', 'erinomainen'). Used by Skill component and other UI elements to render proficiency indicators.
 * @param {string} props.skills[].type - Classification of the technology: 'frontend' (client-side UI), 'backend' (server-side logic), 'frontend/backend' (fullstack technologies like React/Node.js), or 'other' (devops/tools). Used by sortSkills utility to organize skills into logical categories.
 * @param {SelectedDevIconName} props.skills[].iconName - The Iconify icon name from Iconify's DevIcon collection (e.g., 'javascript', 'react', 'typescript'). Icon names are listed in the DevIconNames named typescript union
 *
 * @example Basic usage with sample skills data
 * ```tsx
 * import Skills from './Skills'
 * import type { SkillType } from '@types'
 *
 * const skills: SkillType[] = [
 *   {
 *     id: '1',
 *     language: 'JavaScript',
 *     level: 'excellent',
 *     type: 'frontend/backend',
 *     iconName: 'javascript'
 *   },
 *   {
 *     id: '2',
 *     language: 'TypeScript',
 *     level: 'veryGood',
 *     type: 'backend',
 *     iconName: 'typescript'
 *   },
 *   {
 *     id: '3',
 *     language: 'React',
 *     level: 'excellent',
 *     type: 'frontend',
 *     iconName: 'react'
 *   }
 * ]
 *
 * <Skills skills={skills} />
 * // Renders "Taidot" header followed by JavaScript, TypeScript, and React icons in flex layout
 * ```
 *
 * @example Usage with full data object from context (skills will be sorted automatically)
 * ```tsx
 * import Skills from './Skills'
 *
 * const App = () => {
 *   const data = useData() // hypothetical data context
 *
 *   return <Skills skills={data.skills} />
 * }
 * // Automatically sorts skills into frontend, backend, and other categories before rendering
 * ```
 *
 * @example Rendering in a developer profile section with Tailwind styling
 * ```tsx
 * import Skills from './Skills'
 *
 * const DeveloperProfile = () => (
 *   <section className="mb-8">
 *     <h2>Taidot</h2>
 *     <Skills skills={developerData.skills} />
 *   </section>
 * )
 * // Displays all developer skills with Finnish proficiency labels and organized categorization
 * ```
 *
 * @example Complete Finnish developer profile with comprehensive skill set
 * ```tsx
 * import Skills from './Skills'
 * import type { SkillType } from '@types'
 *
 * const developerData = {
 *   name: 'Jani',
 *   skills: [
 *     { id: 'react', language: 'React', level: 'excellent', type: 'frontend', iconName: 'react' },
 *     { id: 'typescript', language: 'TypeScript', level: 'veryGood', type: 'backend', iconName: 'typescript' },
 *     { id: 'nodejs', language: 'Node.js', level: 'veryGood', type: 'backend', iconName: 'nodejs' },
 *     { id: 'tailwindcss', language: 'Tailwind CSS', level: 'excellent', type: 'frontend', iconName: 'tailwindcss' },
 *     { id: 'docker', language: 'Docker', level: 'veryGood', type: 'other', iconName: 'docker' },
 *     { id: 'git', language: 'Git', level: 'excellent', type: 'other', iconName: 'git' }
 *   ]
 * }
 *
 * const Profile = () => (
 *   <div className="mb-8">
 *     <h2>Taidot</h2>
 *     <Skills skills={developerData.skills} />
 *   </div>
 * )
 * // Renders organized skills: frontend (React, Tailwind), backend (TypeScript, Node.js), other (Docker, Git)
 * ```
 *
 * @example Rendering with proficiency level mapping to Finnish translations
 * ```tsx
 * import Skills from './Skills'
 * import type { SkillType } from '@types'
 *
 * const skills: SkillType[] = [
 *   { id: '1', language: 'JavaScript', level: 'excellent', type: 'frontend/backend', iconName: 'javascript' }, // erinomainen
 *   { id: '2', language: 'React', level: 'veryGood', type: 'frontend', iconName: 'react' },           // hyvä
 *   { id: '3', language: 'Node.js', level: 'good', type: 'backend', iconName: 'nodejs' }              // kohtalainen
 * ]
 *
 * <Skills skills={skills} />
 * // Displays Finnish proficiency indicators: erinomainen, hyvä, kohtalainen
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
