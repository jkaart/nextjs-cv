import { data } from "@/data/data"
import Contact from "./Contact"
import Skills from "./Skills"

const Hero = async () => {
  const { default: Description } = await import(`@/data/mdx/me/description.mdx`)
  return (
    <div className="m-1">
      <h2 className="text-4xl text-center">{data.me.firstName} {data.me.lastName}</h2>
      <h2 className="text-3xl text-center">{data.me.jobTitle}</h2>
      <div className="flex gap-2">
        <div className="block order-2 border-2 rounded-md p-2">
          <h2>Kuvaus</h2>
          <Description />
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