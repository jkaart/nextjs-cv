import { data } from "@/data/data"
import Contact from "./Contact"
import Skills from "./Skills"

const Hero = async () => {
  const { default: Description } = await import(`@/data/mdx/me/description.mdx`)
  return (
    <div>
      <div>
        <div><h2>{data.me.firstName} {data.me.lastName}</h2></div>
        <div><h2>{data.me.jobTitle}</h2></div>
        <div><Description /></div>
        <Contact />
        <Skills />
      </div>
      <div>
      </div>
    </div>
  )
}

export default Hero