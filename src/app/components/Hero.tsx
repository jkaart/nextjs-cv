import Contact from '@components/Contact'
import PDFMenuButton from '@components/CVDownloadMenuButton'
import Section from '@components/common/Section'
import Description from '@components/Description'
import Educations from '@components/Educations'
import HeroHeader from '@components/HeroHeader'
import Hobbies from '@components/Hobbies'
import LanguageSkills from '@components/LanguageSkills'
import MePhoto from '@components/MePhoto'
import Projects from '@components/Projects'
import Skills from '@components/Skills'
import WorkExperiences from '@components/WorkExperiences'
import type { Data } from '@types'

interface HeroProps {
  data: Data
  lastContentUpdate: string
  meDescriptionRaw: string
}

const Hero = ({ data, lastContentUpdate, meDescriptionRaw }: HeroProps) => (
  <>
    <HeroHeader me={data.me} />
    <div className='grid gap-2 lg:grid-cols-8 lg:grid-rows-1'>
      <div className='lg:col-span-2'>
        <div className='bg-gray-100 dark:bg-gray-800 border rounded-md py-2 mb-3 grid gap-5 px-3'>
          <MePhoto image={data.me.image} />
          <Contact contact={data.contact}>
            <PDFMenuButton
              lastContentUpdate={lastContentUpdate}
              meDescriptionRaw={meDescriptionRaw}
            />
          </Contact>
          <Skills skills={data.skill} />
          <LanguageSkills languageSkills={data.languageSkill} />
          <Hobbies hobbies={data.hobby} />
        </div>
      </div>
      <div className='lg:col-span-6'>
        <Section title='Kuvaus'>
          <Description />
        </Section>
        <Section title='Työkokemus'>
          <WorkExperiences workExperiences={data.workExperience} />
        </Section>
        <Section title='Koulutus'>
          <Educations educations={data.education} />
        </Section>
        <Section title='Projektit'>
          <Projects />
        </Section>
      </div>
    </div>
  </>
)

export default Hero
