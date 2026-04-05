'use client'

import PDFDescription from '@components/PDFDescription'
import PDFEducations from '@components/PDFEducations'
import Icon from '@components/PDFIcon'
import PDFProjects from '@components/PDFProjects'
import PDFWorkExperiences from '@components/PDFWorkExperiences'
import { data, type Skill } from '@data/data'
import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View
} from '@react-pdf/renderer'
import { loadMdx } from '@utils/loadMdx'
import type { ProjectMetadata } from '@utils/projects'
import { sortSkills } from '@utils/sortSkills'
import { validateUrl } from '@utils/validators'
import { useEffect, useState } from 'react'

export const styles = StyleSheet.create({
  page: {
    padding: '0.75cm'
  },
  header: {
    textAlign: 'center',
    marginBottom: '5px'
  },
  h1: {
    fontWeight: 'bold',
    fontSize: '22px'
  },
  h2: {
    fontWeight: 'bold',
    fontSize: '20px'
  },
  h3: {
    fontWeight: 'bold',
    fontSize: '18px'
  },
  h4: {
    fontWeight: 'bold',
    fontSize: '16px'
  },
  h5: {
    fontWeight: 'bold',
    fontSize: '14px'
  },
  h6: {
    fontWeight: 'bold',
    fontSize: '12px'
  },
  skill: {
    marginTop: '10px'
  },
  container: {
    flexDirection: 'row',
    fontSize: '10px',
    gap: '0.5cm'
  },
  sectionContainer: {
    padding: '5px',
    border: '1px black solid',
    borderRadius: '3px',
    width: '12cm',
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

interface PDFLinkProps {
  title: string
  src: string
}

interface PDFSkillListProps {
  skills: Skill[]
}

interface PDFResumeProps {
  projects: ProjectMetadata[]
}

const PDFLink = ({ title, src }: PDFLinkProps) => (
  <View style={{ flexDirection: 'row', gap: '2px' }}>
    <View>
      <Text>{title}:</Text>
    </View>
    <View>
      <Link src={validateUrl(src)}>{src}</Link>
    </View>
  </View>
)

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

const PDFResume = ({ projects }: PDFResumeProps) => {
  const [mdx, setMdx] = useState<string>('')

  useEffect(() => {
    loadMdx('src/data/mdx/me/', 'description.mdx').then(setMdx)
  }, [])

  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.header}>
          <Text
            style={styles.h3}
          >{`${data.me.firstName} ${data.me.lastName}`}</Text>
          <Text>{data.me.jobTitle}</Text>
        </View>
        <View style={styles.container}>
          <View>
            <View style={styles.infoAndSkillsContainer}>
              <Text style={styles.h4}>Tiedot</Text>
              <PDFLink src={data.contact.homepage} title='Kotisivu' />
              <PDFLink src={data.contact.email} title='Sähköposti' />
              <PDFLink src={data.contact.gitHub} title='GitHub' />
              <PDFLink src={data.contact.linkedIn} title='LinkedIn' />
              <Text style={[styles.h4, styles.skill]}>Taidot</Text>
              <PDFSkillList skills={data.skill} />
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <View>
              <Text style={styles.h4}>Kuvaus</Text>
              <View style={{ marginLeft: '5px' }}>
                <PDFDescription mdx={mdx} />
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
      </Page>
    </Document>
  )
}

export default PDFResume
