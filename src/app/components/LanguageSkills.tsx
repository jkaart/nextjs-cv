import LanguageSkill from '@components/LanguageSkill'
import type { LanguageSkill as LanguageSkillType } from '@types'
import HeadingH2 from './common/HeadingH2'

interface LanguageSkillsProps {
  languageSkills: LanguageSkillType[]
}

/**
 * Renders a comprehensive list of language skills with proficiency levels and native language indicators.
 * Displays a section header "Kielitaito" followed by all language skills, each rendered using the LanguageSkill component.
 * Shows "Äidinkieli" (native language) label for mother tongues, and displays spoken/written proficiency levels for foreign languages.
 *
 * @interface LanguageSkillsProps - Props interface for LanguageSkills component
 * @param {LanguageSkillType[]} props.languageSkills - Array of language skill objects containing: id (unique identifier), language name (e.g., 'Finnish', 'English'), motherLanguage flag (boolean indicating native tongue), and optional levels object with spoken/written proficiency values. Proficiency levels are translated to Finnish labels for display using translateLevel utility
 *
 * @example Basic usage with sample language skills data
 * ```tsx
 * import LanguageSkills from './LanguageSkills'
 * import type { LanguageSkillType } from '@types'
 *
 * const languages: LanguageSkillType[] = [
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
 * ]
 *
 * <LanguageSkills languageSkills={languages} />
 * ```
 *
 * @example Usage with full data object from context (languages will be rendered in order)
 * ```tsx
 * import LanguageSkills from './LanguageSkills'
 *
 * const App = () => {
 *   const data = useData() // hypothetical data context
 *
 *   return <LanguageSkills languageSkills={data.languageSkill} />
 * }
 * ```
 *
 * @example Rendering in a CV profile section with Tailwind styling and space-y spacing
 * ```tsx
 * import LanguageSkills from './LanguageSkills'
 *
 * const ProfileSection = () => (
 *   <section className="mb-8">
 *     <h2>Kielitaito</h2>
 *     <div className="space-y-4">
 *       <LanguageSkills languageSkills={profileData.languages} />
 *     </div>
 *   </section>
 * )
 * ```
 *
 * @example Multiple languages with mixed proficiency levels (some only spoken, some both)
 * ```tsx
 * import LanguageSkills from './LanguageSkills'
 *
 * const diverseLanguages = [
 *   { id: '1', language: 'Finnish', motherLanguage: true },
 *   { id: '2', language: 'English', levels: { spoken: 'veryGood', written: 'good' } },
 *   { id: '3', language: 'German', levels: { spoken: 'fair' } }, // only spoken level
 *   { id: '4', language: 'Swedish', motherLanguage: true }
 * ]
 *
 * <LanguageSkills languageSkills={diverseLanguages} />
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
