import type { LanguageSkill as LanguageSkillType } from '@types'
import { translateLevel } from '@utils/translateLevel'

interface LanguageSkillProps {
  languageSkill: LanguageSkillType
}

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
