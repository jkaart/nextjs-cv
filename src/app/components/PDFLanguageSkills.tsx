import PDFLanguageSkill from '@components/PDFLanguageSkill'
import { View } from '@react-pdf/renderer'
import type { LanguageSkill } from '@types'

interface PDFLanguageSkillsProps {
  languageSkills: LanguageSkill[]
}

const PDFLanguageSkills = ({ languageSkills }: PDFLanguageSkillsProps) => (
  <View>
    {languageSkills.map(languageSkill => (
      <PDFLanguageSkill key={languageSkill.id} languageSkill={languageSkill} />
    ))}
  </View>
)

export default PDFLanguageSkills
