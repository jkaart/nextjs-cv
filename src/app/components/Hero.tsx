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

/**
 * Main hero section component that displays the core content of a CV/resume.
 * Organizes personal information, work experience, education, and projects into
 * a responsive grid layout with two columns on large screens (lg breakpoint).
 * The left column contains photo, contact info, skills, languages, and hobbies.
 * The right column contains detailed sections for description, work experience,
 * education, and projects. Uses Tailwind CSS for responsive styling.
 *
 * @interface HeroProps - Props interface for Hero component
 * @param {Data} props.data - Object containing all CV data including personal info (me), contact details, skills, languages, hobbies, work experiences, education, and projects
 * @param {string} props.lastContentUpdate - Date string indicating when the content was last updated; used by PDF menu button to show update status
 * @param {string} props.meDescriptionRaw - Raw description text about the person; passed to PDFMenuButton for display in downloadable CV
 *
 * @example
 * ```tsx
 * // In a page that uses server-side data fetching
 * import Hero from '@components/Hero'
 * import { getCVData } from '@/lib/data-fetcher'
 *
 * const HeroSection = async () => {
 *   const data = await getCVData()
 *   return (
 *     <Hero
 *       data={data}
 *       lastContentUpdate="2024-01-15"
 *       meDescriptionRaw="Motivated software developer with 5 years of experience..."
 *     />
 *   )
 * }
 * ```
 */
const Hero = ({ data, lastContentUpdate, meDescriptionRaw }: HeroProps) => (
  <>
    <HeroHeader me={data.me} />
    <div className='grid gap-2 lg:grid-cols-8 lg:grid-rows-1'>
      <div className='lg:col-span-2'>
        <div className='bg-primary-background border rounded-md py-2 mb-3 grid gap-5 px-3'>
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
