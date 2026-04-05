import Contact from '@components/Contact'
import Section from '@components/common/Section'
import Description from '@components/Description'
import Educations from '@components/Educations'
import HeroHeader from '@components/HeroHeader'
import Projects from '@components/Projects'
import Skills from '@components/Skills'
import WorkExperiences from '@components/WorkExperiences'
import type { Data } from '@data/data'

interface HeroProps {
  data: Data
}

const Hero = async ({ data }: HeroProps) => (
  <div className='mt-10 lg:mt-20'>
    <HeroHeader me={data.me} />
    <div className='mx-auto w-5/6'>
      <div className='grid gap-2 lg:grid-cols-8 lg:grid-rows-1'>
        <div className='lg:col-span-2'>
          <div className='bg-gray-100 dark:bg-gray-800 border rounded-md p-2 mb-3 grid gap-5'>
            <Contact contact={data.contact} />
            <Skills skills={data.skill} />
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
    </div>
  </div>
)

export default Hero
