import type { Me } from '@types'

interface HeroHeaderProps {
  me: Me
}

const HeroHeader = ({ me }: HeroHeaderProps) => {
  const fullName = `${me.firstName} ${me.lastName}`
  return (
    <div data-testid='hero-header-container'>
      <h2 data-testid='me-full-name' className='text-4xl text-center'>
        {fullName}
      </h2>
      <h2 data-testid='me-job-title' className='text-3xl text-center mb-2'>
        {me.jobTitle}
      </h2>
    </div>
  )
}

export default HeroHeader
