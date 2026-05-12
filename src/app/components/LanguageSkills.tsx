import LanguageSkill from '@components/LanguageSkill'
import type { LanguageSkill as LanguageSkillType } from '@types'
import HeadingH2 from './common/HeadingH2'

interface LanguageSkillsProps {
  languageSkills: LanguageSkillType[]
}

/**
 * Renders a list of language skills with proficiency levels.
 * Displays a section header "Kielitaito" followed by all language skills,
 * each rendered using the LanguageSkill component.
 *
 * @param {LanguageSkillsProps} props - Component props containing language skills array
 * @param {LanguageSkillType[]} props.languageSkills - Array of language skill objects to display
 *
 * @example
 * ```tsx
 * // Basic usage with sample data
 * <LanguageSkills languageSkills={[
 *   {
 *     id: '1',
 *     language: 'Finnish',
 *     motherLanguage: true,
 *   },
 *   {
 *     id: '2',
 *     language: 'English',
 *     levels: {
 *       spoken: 'veryGood',
 *       written: 'good'
 *     }
 *   },
 *   {
 *     id: '3',
 *     language: 'Swedish',
 *     levels: {
 *       spoken: 'poor',
 *       written: 'poor'
 *     }
 *   }
 * ]} />
 *
 * // Usage with full data object
 * <LanguageSkills languageSkills={data.languageSkill} />
 * ```
 */
const LanguageSkills = ({ languageSkills }: LanguageSkillsProps) => {
  return (
    <div>
      <HeadingH2 text='Kielitaito' />
      {languageSkills.map(languageSkill => (
        <LanguageSkill key={languageSkill.id} languageSkill={languageSkill} />
      ))}
    </div>
  )
}

export default LanguageSkills
