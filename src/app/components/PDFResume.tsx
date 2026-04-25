'use client'

import PDFDescription from '@components/PDFDescription'
import PDFEducations from '@components/PDFEducations'
import PDFFooter from '@components/PDFFooter'
import PDFLink from '@components/PDFLink'
import MePhoto from '@components/PDFMePhoto'
import PDFProjects from '@components/PDFProjects'
import PDFSkillList from '@components/PDFSkills'
import PDFWorkExperiences from '@components/PDFWorkExperiences'
import { data } from '@data/data'
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import type { ProjectMetadata } from '@utils/projects'

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

interface PDFResumeProps {
  projects: ProjectMetadata[]
  meDescriptionRaw: string
  lastContentUpdate: string
}

const PDFResume = ({
  projects,
  meDescriptionRaw,
  lastContentUpdate
}: PDFResumeProps) => {
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
              <MePhoto image={data.me.image} />
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

export default PDFResume
