import { StyleSheet, Text, View } from '@react-pdf/renderer'
import type { LanguageSkill, Level } from '@types'
import { capitalizeString } from '@utils/capitalizeString'
import { translateLevel } from '@utils/translateLevel'

/**
 * Props interface for the PDFLanguageSkill component.
 *
 * @interface
 */
interface PDFLanguageSkillProps {
  /** The language skill object containing language name, mother tongue status, and proficiency levels */
  languageSkill: LanguageSkill
}

/**
 * Props interface for the LanguageLevelRow sub-component.
 *
 * @interface
 */
interface LanguageLevelRowProps {
  /** The label to display (e.g., 'Suullinen' or 'Kirjallinen') */
  label: string
  /** The proficiency level to translate and display */
  level: Level
}

const styles = StyleSheet.create({
  language: {
    fontWeight: 'bold',
    fontSize: '12px'
  },
  details: {
    marginLeft: '5px'
  },
  levelRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2px'
  },
  levelLabel: {
    fontWeight: 'bold'
  }
})

/**
 * A sub-component that displays a language proficiency label and its translated level.
 * Renders a flex row with the label (e.g., "Suullinen" for spoken, "Kirjallinen" for written)
 * followed by the translated proficiency level using translateLevel utility.
 *
 * @component
 *
 * @example Usage within PDFLanguageSkill component
 * ```typescript
 * const LanguageLevelRow = ({ label, level }: LanguageLevelRowProps) => (
 *   <View style={styles.levelRow}>
 *     <Text style={styles.levelLabel}>{label}:</Text>
 *     <Text>{translateLevel(level)}</Text>
 *   </View>
 * )
 * ```
 */
const LanguageLevelRow = ({ label, level }: LanguageLevelRowProps) => (
  <View style={styles.levelRow}>
    <Text style={styles.levelLabel}>{label}:</Text>
    <Text>{capitalizeString(translateLevel(level))}</Text>
  </View>
)

/**
 * A React PDF component that displays a language skill with its proficiency levels.
 * Shows the language name in bold, optionally indicates if it's the mother tongue ("Äidinkieli"),
 * and lists spoken and written proficiency levels when available. Uses Finnish labels for level categories.
 *
 * @component
 *
 * @example Basic usage with a single language skill
 * ```typescript
 * import PDFLanguageSkill from './PDFLanguageSkill'
 * import type { LanguageSkill } from '@types'
 *
 * const App = () => (
 *   <PDFLanguageSkill languageSkill={{
 *     id: 1,
 *     language: 'English',
 *     motherLanguage: false,
 *     levels: { spoken: 'B2', written: 'C1' }
 *   }} />
 * )
 * ```
 *
 * @example Usage with multiple skills in a CV context
 * ```typescript
 * import PDFLanguageSkills from './PDFLanguageSkills'
 * import type { LanguageSkill } from '@types'
 *
 * const languageSkills: LanguageSkill[] = [
 *   { id: 1, language: 'English', motherLanguage: false, levels: { spoken: 'C1', written: 'C2' } },
 *   { id: 2, language: 'Swedish', motherLanguage: false, levels: { spoken: 'B1', written: 'B2' } },
 *   { id: 3, language: 'Finnish', motherLanguage: true, levels: undefined }
 * ]
 *
 * const App = () => (
 *   <PDFLanguageSkills languageSkills={languageSkills} />
 * )
 * ```
 */
const PDFLanguageSkill = ({ languageSkill }: PDFLanguageSkillProps) => (
  <View>
    <Text style={styles.language}>{languageSkill.language}</Text>
    <View style={styles.details}>
      {languageSkill.motherLanguage && <Text>Äidinkieli</Text>}
      {languageSkill.levels && (
        <View>
          <LanguageLevelRow
            label='Suullinen'
            level={languageSkill.levels.spoken}
          />
          <LanguageLevelRow
            label='Kirjallinen'
            level={languageSkill.levels.written}
          />
        </View>
      )}
      <Text></Text>
    </View>
  </View>
)

export default PDFLanguageSkill
