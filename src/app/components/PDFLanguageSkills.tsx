import PDFLanguageSkill from '@components/PDFLanguageSkill'
import { View } from '@react-pdf/renderer'
import type { LanguageSkill } from '@types'

/**
 * Props interface for the PDFLanguageSkills container component.
 *
 * @interface
 */
interface PDFLanguageSkillsProps {
  /** Array of language skill objects to render */
  languageSkills: LanguageSkill[]
}

/**
 * A container component that renders a list of language skills using PDFLanguageSkill sub-components.
 * Maps over the provided languageSkills array and creates a separate PDFLanguageSkill instance for each,
 * keyed by the skill's unique ID. Useful for displaying multiple languages in a CV or profile document.
 *
 * @component
 *
 * @example Rendering all language skills from a user profile
 * ```typescript
 * import PDFLanguageSkills from './PDFLanguageSkills'
 * import type { LanguageSkill } from '@types'
 *
 * const userProfile = {
 *   languages: [
 *     { id: 1, language: 'English', motherLanguage: false, levels: { spoken: 'C1', written: 'C2' } },
 *     { id: 2, language: 'German', motherLanguage: false, levels: { spoken: 'B2', written: 'B1' } }
 *   ]
 * }
 *
 * const App = () => (
 *   <PDFLanguageSkills languageSkills={userProfile.languages} />
 * )
 * ```
 */
const PDFLanguageSkills = ({ languageSkills }: PDFLanguageSkillsProps) => (
  <View>
    {languageSkills.map(languageSkill => (
      <PDFLanguageSkill key={languageSkill.id} languageSkill={languageSkill} />
    ))}
  </View>
)

export default PDFLanguageSkills
