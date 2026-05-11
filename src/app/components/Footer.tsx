import type { Me } from '@types'
import { dateToString } from '@utils/dateToString'
import { getLastContentUpdate } from '@utils/projects'

interface FooterProps {
  me: Me
}

const Footer = async ({ me }: FooterProps) => {
  const lastUpdated = await getLastContentUpdate()

  return (
    <footer className='w-full py-5 text-center flex flex-col bg-slate-300 dark:bg-neutral-800'>
      <span>
        &#169; 2026 {me.firstName} {me.lastName}
      </span>
      <span>Sisältö päivitetty: {dateToString(lastUpdated, 'date')}</span>
      <span>
        <a
          className='text-xs'
          href='https://www.flaticon.com/free-icons/resume-and-cv'
          title='resume and cv icons'
        >
          Resume and cv icons created by feen - Flaticon
        </a>
      </span>
    </footer>
  )
}

export default Footer
