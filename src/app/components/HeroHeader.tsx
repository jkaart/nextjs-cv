import type { Me } from "@/data/data"

interface HeroHeaderProps {
  me: Me
}

const HeroHeader = ({ me }: HeroHeaderProps) => {
  const fullName = `${me.firstName} ${me.lastName}`
  return (
    <>
      <h2 className="text-4xl text-center">{fullName}</h2>
      <h2 className="text-3xl text-center mb-2">{me.jobTitle}</h2>
    </>
  )
}

export default HeroHeader
