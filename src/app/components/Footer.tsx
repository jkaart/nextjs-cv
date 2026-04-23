import { data } from '@data/data'
import { dateToString } from '@utils/dateToString'
import { getLastContentUpdate } from '@utils/projects'

const Footer = async () => {
  const lastUpdated = await getLastContentUpdate()

  return (
    <footer className='w-full py-5 text-center flex flex-col bg-slate-300 dark:bg-neutral-800'>
      <span>
        &#169; 2026 {data.me.firstName} {data.me.lastName}
      </span>
      <span>
        Sisältö päivitetty viimeksi: {dateToString(lastUpdated, 'date')}
      </span>
    </footer>
  )
}

export default Footer
