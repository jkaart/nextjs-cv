import Icon from '@components/PDFIcon'
import { Text, View } from '@react-pdf/renderer'
import type { Skill } from '@types'
import { sortSkills } from '@utils/sortSkills'

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
