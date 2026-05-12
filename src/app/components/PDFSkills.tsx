import Icon from '@components/PDFIcon'
import { Text, View } from '@react-pdf/renderer'
import type { Skill } from '@types'
import { sortSkills } from '@utils/sortSkills'

interface PDFSkillListProps {
  skills: Skill[]
}

/**
 * Renders a horizontal list of skill icons with language names in PDF format.
 * Displays skills sorted by category (frontend, backend, other) using flexbox layout.
 * Each skill shows an icon and the language name at 8px font size.
 *
 * @param props - Component props containing the skills array
 * @param props.skills - Array of Skill objects with language, level, type, and iconName properties
 * @returns React element representing a flexbox container with skill icons and labels
 *
 * @example
 * ```tsx
 * // Usage for frontend/backend skills section
 * <PDFSkillList skills={[
 *   { id: '1', language: 'React', level: 'excellent', type: 'frontend', iconName: 'react' },
 *   { id: '2', language: 'TypeScript', level: 'veryGood', type: 'frontend/backend', iconName: 'typescript' }
 * ]} />
 * ```
 *
 * @example
 * ```tsx
 * // Usage for all skills section
 * <PDFSkillList skills={data.skill} />
 * ```
 */
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
