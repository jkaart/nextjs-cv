'use client'

import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View
} from '@react-pdf/renderer'
import { useEffect, useState } from 'react'
import { data } from '@/data/data'
import { loadMdx } from '@/utils/loadMdx'
import { validateUrl } from '@/utils/validators'
import PDFDescription from './PDFDescription'
import Icon from './PDFIcon'

const styles = StyleSheet.create({
  page: {
    margin: '0.75cm'
  },
  header: {
    textAlign: 'center'
  },
  h1: {
    fontSize: '24px'
  },
  info: {
    fontSize: '16px',
    fontWeight: 'bold'
  },
  skill: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '10px'
  },
  container: {
    flexDirection: 'row',
    fontSize: '12px',
    gap: '0.5cm'
  },
  sectionHeader: {
    fontSize: '12px',
    fontWeight: 'bold'
  }
})

interface PDFLinkProps {
  title: string
  src: string
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

const PDFSkillList = () => {
  const sortedSkills = data.skill.sort((a, b) => {
    const skillA = a.language.toLowerCase()
    const skillB = b.language.toLowerCase()

    if (skillA < skillB) {
      return -1
    }

    if (skillA < skillB) {
      return 1
    }

    return 0
  })
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2.5mm 2.5mm',
        width: '7cm'
      }}
    >
      {sortedSkills.map(skill => (
        <View style={{ alignItems: 'center' }} key={skill.id}>
          <Icon iconName={skill.iconName} />
        </View>
      ))}
    </View>
  )
}

const PDFResume = () => {
  const [mdx, setMdx] = useState<string>('')

  useEffect(() => {
    loadMdx('src/data/mdx/me/', 'description.mdx').then(setMdx)
  }, [])

  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.header}>
          <Text
            style={styles.h1}
          >{`${data.me.firstName} ${data.me.lastName}`}</Text>
          <Text>{data.me.jobTitle}</Text>
        </View>
        <View style={styles.container}>
          <View
            style={{
              border: '1px black solid',
              width: '7cm'
            }}
          >
            <Text style={styles.info}>Tiedot</Text>
            <PDFLink src={data.contact.homepage} title='Kotisivu' />
            <PDFLink src={data.contact.email} title='Sähköposti' />
            <PDFLink src={data.contact.gitHub} title='GitHub' />
            <PDFLink src={data.contact.linkedIn} title='LinkedIn' />
            <Text style={styles.skill}>Taidot</Text>
            <PDFSkillList />
          </View>
          <View
            style={{
              border: '1px black solid',
              width: '12cm'
            }}
          >
            <View>
              <Text style={styles.sectionHeader}>Kuvaus</Text>
              <PDFDescription mdx={mdx} />
            </View>
            <View>
              <Text style={styles.sectionHeader}>Työkokemus</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default PDFResume
