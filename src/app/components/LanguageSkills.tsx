import LanguageSkill from '@components/LanguageSkill'
import type { LanguageSkill as LanguageSkillType } from '@types'
import HeadingH2 from './common/HeadingH2'

interface LanguageSkillsProps {
  languageSkills: LanguageSkillType[]
}

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
