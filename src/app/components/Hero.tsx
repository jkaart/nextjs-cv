import type { Data } from '@/data/data'
import Contact from './Contact'
import Section from './common/Section'
import Description from './Description'
import Educations from './Educations'
import HeroHeader from './HeroHeader'
import Projects from './Projects'
import Skills from './Skills'
import WorkExperiences from './WorkExperiences'

interface HeroProps {
  data: Data
}

const Hero = async ({ data }: HeroProps) => (
  <>
    <HeroHeader me={data.me} />
    <div className='mx-auto w-5/6'>
      <div className='grid gap-2 lg:grid-cols-8 lg:grid-rows-1'>
        <div className='lg:col-span-2'>
          <div className='bg-gray-100 dark:bg-gray-800 border rounded-md p-2 mb-3 grid'>
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
  </>
)

export default Hero
