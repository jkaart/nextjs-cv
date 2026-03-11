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
    <div className="m-1">
      <h2 className="text-4xl text-center">{fullName}</h2>
      <h2 className="text-3xl text-center mb-2">{data.me.jobTitle}</h2>
      <div className="flex gap-2">
        <div className="block order-2">
          <Section title="Kuvaus">
            <Description />
          </Section>
          <Section title="Työkokemus"><WorkExperiences /></Section>
          <Section title="Koulutus"><Educations /></Section>
          <Section title="Projektit"><Projects /></Section>
        </div>
        <div className="block order-1 w-1/5">
          <Contact />
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default Hero