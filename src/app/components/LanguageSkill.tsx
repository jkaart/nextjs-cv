import type { LanguageSkill as LanguageSkillType } from '@types'
import { translateLevel } from '@utils/translateLevel'

interface LanguageSkillProps {
  languageSkill: LanguageSkillType
}

/**
 * Renders a single language skill with proficiency levels.
 * Displays the language name, native language indicator (if applicable),
 * and separate spoken/written proficiency levels.
 *
 * @param {LanguageSkillProps} props - Component props containing language skill data
 * @param {LanguageSkillType} props.languageSkill - The language skill object to render
 *
 * @example
 * ```tsx
 * // Basic usage with Finnish as mother tongue
 * <LanguageSkill languageSkill={{
 *   id: '1',
 *   language: 'Finnish',
 *   motherLanguage: true,
 * }} />
 *
 * // Usage with proficiency levels
 * <LanguageSkill languageSkill={{
 *   id: '2',
 *   language: 'English',
 *   levels: {
 *     spoken: 'veryGood',
 *     written: 'good'
 *   }
 * }} />
 *
 * // Multiple languages in a list
 * <div className="space-y-4">
 *   {data.languageSkill.map(skill => (
 *     <LanguageSkill key={skill.id} languageSkill={skill} />
 *   ))}
 * </div>
 * ```
 */
const LanguageSkill = ({ languageSkill }: LanguageSkillProps) => (
  <>
    <div className='font-bold'>{languageSkill.language}</div>
    {languageSkill.motherLanguage === true && <div>Äidinkieli</div>}
    {languageSkill.levels && (
      <div className='ms-2'>
        <div>
          <span className='font-bold'>Puhuttu: </span>
          {translateLevel(languageSkill.levels?.spoken)}
        </div>
        <div>
          <span className='font-bold'>Kirjallinen: </span>
          {translateLevel(languageSkill.levels?.written)}
        </div>
      </div>
    )}
  </>
)

export default LanguageSkill
