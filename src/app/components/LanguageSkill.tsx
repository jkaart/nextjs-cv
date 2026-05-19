import type { LanguageSkill as LanguageSkillType } from '@types'
import { translateLevel } from '@utils/translateLevel'

interface LanguageSkillProps {
  languageSkill: LanguageSkillType
}

/**
 * Renders a language skill component for displaying language proficiency levels.
 * Shows the language name with Finnish translation (Äidinkieli for mother tongue).
 * Displays spoken and written proficiency levels when provided, using translateLevel utility.
 * Supports various proficiency levels: excellent, veryGood, good, fair, poor.
 *
 * @interface LanguageSkillProps - Props interface for LanguageSkill component
 * @param {LanguageSkillType} props.languageSkill - The language skill object containing: id (unique identifier), language name, whether it's a mother tongue, and proficiency levels for spoken/written skills. Mother tongue languages display "Äidinkieli" below the name; other languages show Finnish translations of proficiency levels
 *
 * @example Basic usage with single language (shows language + mother tongue)
 * ```tsx
 * import LanguageSkill from './LanguageSkill'
 *
 * <LanguageSkill languageSkill={{ id: '1', language: 'Finnish', motherLanguage: true }} />
 * // Output: Finnish (bold)
 * //         Äidinkieli
 * ```
 *
 * @example Rendering in a CV profile section with Tailwind layout classes
 * ```tsx
 * import LanguageSkill from './LanguageSkill'
 *
 * const ProfileSection = () => (
 *   <section className="mb-8">
 *     <h2>Kielitaito</h2>
 *     <div className="space-y-4">
 *       <LanguageSkill languageSkill={{ id: '1', language: 'Finnish', motherLanguage: true }} />
 *       <LanguageSkill languageSkill={{
 *         id: '2',
 *         language: 'English',
 *         levels: { spoken: 'veryGood', written: 'good' }
 *       }} />
 *     </div>
 *   </section>
 * )
 * ```
 *
 * @example Multiple languages with mixed proficiency types (mother tongue + level-based)
 * ```tsx
 * import LanguageSkill from './LanguageSkill'
 *
 * const LanguagesSection = () => (
 *   <div className="space-y-4">
 *     {// Mother tongue }
 *     <LanguageSkill languageSkill={{ id: 'fi', language: 'Finnish', motherLanguage: true }} />
 *
 *     {// Spoken proficiency only }
 *     <LanguageSkill languageSkill={{
 *       id: 'en-spoken',
 *       language: 'English',
 *       levels: { spoken: 'excellent' }
 *     }} />
 *
 *     {// Written proficiency only }
 *     <LanguageSkill languageSkill={{
 *       id: 'de-written',
 *       language: 'German',
 *       levels: { written: 'good' }
 *     }} />
 *   </div>
 * )
 * ```
 *
 * @example Full language section with all proficiency combinations
 * ```tsx
 * import LanguageSkill from './LanguageSkill'
 *
 * const LanguagesSection = () => (
 *   <section className="mb-8">
 *     <h2>Kielitaito</h2>
 *     <div className="space-y-4">
 *       {// Finnish - mother tongue }
 *       <LanguageSkill languageSkill={{ id: '1', language: 'Finnish', motherLanguage: true }} />
 *
 *       {// English - both levels excellent }
 *       <LanguageSkill languageSkill={{
 *         id: '2',
 *         language: 'English',
 *         levels: { spoken: 'excellent', written: 'excellent' }
 *       }} />
 *
 *       {// Swedish - good at both }
 *       <LanguageSkill languageSkill={{
 *         id: '3',
 *         language: 'Swedish',
 *         levels: { spoken: 'good', written: 'good' }
 *       }} />
 *     </div>
 *   </section>
 * )
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
