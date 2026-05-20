'use client'

import PDFDescription from '@components/PDFDescription'
import PDFEducations from '@components/PDFEducations'
import PDFFooter from '@components/PDFFooter'
import PDFHobbies from '@components/PDFHobbies'
import PDFLanguageSkills from '@components/PDFLanguageSkills'
import PDFLink from '@components/PDFLink'
import MePhoto from '@components/PDFMePhoto'
import PDFProjects from '@components/PDFProjects'
import PDFSkillList from '@components/PDFSkills'
import PDFWorkExperiences from '@components/PDFWorkExperiences'
import { data } from '@data/data'
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View
} from '@react-pdf/renderer'
import type { ProjectMetadata } from '@types'
import { hyphenateSync as hyphenateFI } from 'hyphen/fi'

export const styles = StyleSheet.create({
  page: {
    padding: '0.50cm'
  },
  header: {
    textAlign: 'center',
    marginBottom: '5px'
  },
  h1: {
    fontWeight: 'bold',
    fontSize: '20px'
  },
  h2: {
    fontWeight: 'bold',
    fontSize: '18px'
  },
  h3: {
    fontWeight: 'bold',
    fontSize: '16px'
  },
  h4: {
    fontWeight: 'bold',
    fontSize: '14px'
  },
  h5: {
    fontWeight: 'bold',
    fontSize: '12px'
  },
  h6: {
    fontWeight: 'bold',
    fontSize: '10px'
  },
  title: {
    marginTop: '10px'
  },
  container: {
    flexDirection: 'row',
    fontSize: '8px',
    gap: '0.5cm'
  },
  sectionContainer: {
    padding: '5px',
    border: '1px black solid',
    borderRadius: '3px',
    width: '13cm',
    backgroundColor: '#f9fafb'
  },
  infoAndSkillsContainer: {
    backgroundColor: '#f9fafb',
    border: '1px black solid',
    borderRadius: '3px',
    width: '7cm',
    padding: '5px',
    height: 'auto'
  }
})

interface PDFResumeProps {
  projects: ProjectMetadata[]
  meDescriptionRaw: string
  lastContentUpdate: string
}

interface TitleProps {
  title: string
}

/**
 * Renders a section header with h4 styling and top margin.
 * Used consistently across the resume to separate different content sections.
 *
 * @param props - Component props containing the title text
 * @param props.title - The section header text to display (e.g., 'Taidot', 'Kielitaito')
 * @returns React element representing a styled section header in PDF format
 *
 * @example
 * ```tsx
 * // Usage for skills section
 * <Title title='Taidot' />
 * ```
 *
 * @example
 * ```tsx
 * // Usage for hobbies section
 * <Title title='Harrastukset' />
 * ```
 */
const Title = ({ title }: TitleProps) => (
  <Text style={[styles.h4, styles.title]}>{title}</Text>
)

/**
 * Main component that renders the complete CV/resume as a PDF document.
 * Organizes personal information, skills, work experience, education, and projects
 * into a two-column layout with proper styling and formatting.
 *
 * @param props - Component props containing resume data
 * @param props.projects - Array of project metadata to display in the Projects section
 * @param props.meDescriptionRaw - Raw MDX content for the personal description section
 * @param props.lastContentUpdate - Date string indicating when the content was last updated (shown in footer)
 * @returns React element representing a complete A4 PDF resume document
 *
 * @example
 * ```tsx
 * // Basic usage with data from the data directory
 * const projects = await getProjects();
 * return <PDFResume projects={projects} meDescriptionRaw={description} lastContentUpdate="2024-01-15" />;
 * ```
 *
 * @example
 * ```tsx
 * // Usage in a PDF viewer component
 * export default function CVViewer() {
 *   const [resumeData, setResumeData] = useState<PDFResumeProps>({
 *     projects: [],
 *     meDescriptionRaw: '',
 *     lastContentUpdate: ''
 *   });
 *
 *   useEffect(() => {
 *     fetchCVData().then(setResumeData);
 *   }, []);
 *
 *   return <PDFResume {...resumeData} />;
 * }
 * ```
 */
const PDFResume = ({
  projects,
  meDescriptionRaw,
  lastContentUpdate
}: PDFResumeProps) => {
  return (
    <Document language='finnish'>
      <Page size='A4' style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.h1}>Ansioluettelo ja portfolio</Text>
          <Text
            style={styles.h3}
          >{`${data.me.firstName} ${data.me.lastName}`}</Text>
          <Text>{data.me.jobTitle}</Text>
        </View>
        <View style={styles.container}>
          <View>
            <View style={styles.infoAndSkillsContainer}>
              <MePhoto image={data.me.image} />
              <Text style={styles.h4}>Tiedot</Text>
              <PDFLink src={data.contact.homepage} iconType='homePage' />
              <PDFLink src={data.contact.email} iconType='eMail' />
              <PDFLink src={data.contact.gitHub} iconType='gitHub' />
              <PDFLink src={data.contact.linkedIn} iconType='linkedIn' />
              <Title title='Taidot' />
              <PDFSkillList skills={data.skill} />
              <Title title='Kielitaito' />
              <PDFLanguageSkills languageSkills={data.languageSkill} />
              <Title title='Harrastukset' />
              <PDFHobbies hobbies={data.hobby} />
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <View>
              <Text style={styles.h4}>Kuvaus</Text>
              <View style={{ marginLeft: '5px' }}>
                <PDFDescription mdx={meDescriptionRaw} />
              </View>
            </View>
            <View>
              <Text style={styles.h4}>Työkokemus</Text>
              <PDFWorkExperiences workExperiences={data.workExperience} />
            </View>
            <View>
              <Text style={styles.h4}>Koulutus</Text>
              <PDFEducations educations={data.education} />
            </View>
            <View>
              <Text style={styles.h4}>Projektit</Text>
              <PDFProjects projects={projects} />
            </View>
          </View>
        </View>
        <PDFFooter lastContentUpdate={lastContentUpdate} />
      </Page>
    </Document>
  )
}

const hyphenationCallback = (word: string) => {
  // Return word syllables in an array
  return hyphenateFI(word).split('\u00AD')
}

Font.registerHyphenationCallback(hyphenationCallback)

export default PDFResume
