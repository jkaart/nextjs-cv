import type { Skill } from '@data/data'
import { Text, View } from '@react-pdf/renderer'
import { sortSkills } from '@utils/sortSkills'
import Icon from './PDFIcon'

interface PDFSkillListProps {
  skills: Skill[]
}

const PDFSkillList = ({ skills }: PDFSkillListProps) => {
  const sortedSkills = sortSkills(skills)
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '2.5mm 2.5mm'
      }}
    >
      {sortedSkills.map(skill => (
        <View
          style={{
            alignItems: 'center'
          }}
          key={skill.id}
        >
          <Icon iconName={skill.iconName} />
          <Text style={{ fontSize: '8px' }}>{skill.language}</Text>
        </View>
      ))}
    </View>
  )
}

export default PDFSkillList
