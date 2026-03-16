import { data } from "@/data/data"
import Contact from "./Contact"
import Section from "./common/Section"
import Educations from "./Educations"
import Projects from "./Projects"
import Skills from "./Skills"
import WorkExperiences from "./WorkExperiences"

const Hero = async () => {
  const { default: Description } = await import(`@/data/mdx/me/description.mdx`)
  const fullName = `${data.me.firstName} ${data.me.lastName}`
  return (
    <>
      <h2 className="text-4xl text-center">{fullName}</h2>
      <h2 className="text-3xl text-center mb-2">{data.me.jobTitle}</h2>
      <div className="grid gap-2 lg:grid-cols-6 lg:grid-rows-1">
        <div>
          <div className="grid">
            <Contact />
            <Skills />
          </div>
        </div>
        <div className="lg:col-span-5">
          <Section title="Kuvaus">
            <Description />
          </Section>
          <Section title="Työkokemus"><WorkExperiences /></Section>
          <Section title="Koulutus"><Educations /></Section>
          <Section title="Projektit"><Projects /></Section>
        </div>
      </div>
    </>
  )
}

export default Hero