import type { Data } from "@/data/data"
import Contact from "./Contact"
import Section from "./common/Section"
import Educations from "./Educations"
import HeroHeader from "./HeroHeader"
import Projects from "./Projects"
import Skills from "./Skills"
import WorkExperiences from "./WorkExperiences"

interface HeroProps {
  data: Data
}

const Hero = async ({ data }: HeroProps) => {
  const { default: Description } = await import(`@/data/mdx/me/description.mdx`)
  return (
    <>
      <HeroHeader me={data.me} />
      <div className="grid gap-2 lg:grid-cols-6 lg:grid-rows-1">
        <div>
          <div className="grid">
            <Contact contact={data.contact} />
            <Skills skills={data.skill} />
          </div>
        </div>
        <div className="lg:col-span-5">
          <Section title="Kuvaus">
            <Description />
          </Section>
          <Section title="Työkokemus"><WorkExperiences workExperiences={data.workExperience} /></Section>
          <Section title="Koulutus"><Educations educations={data.education} /></Section>
          <Section title="Projektit"><Projects /></Section>
        </div>
      </div>
    </>
  )
}

export default Hero