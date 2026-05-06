import { StyleSheet, Text, View } from '@react-pdf/renderer'
import type { LanguageSkill, Level } from '@types'
import { translateLevel } from '@utils/translateLevel'

interface PDFLanguageSkillProps {
  languageSkill: LanguageSkill
}

interface LanguageLevelRowProps {
  label: string
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

const LanguageLevelRow = ({ label, level }: LanguageLevelRowProps) => (
  <View style={styles.levelRow}>
    <Text style={styles.levelLabel}>{label}:</Text>
    <Text>{translateLevel(level)}</Text>
  </View>
)

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
