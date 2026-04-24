import NavBar from '@components/NavBar'
import { dateToString } from '@utils/dateToString'
import { meDescriptionRaw } from '@utils/meDescriptionRaw'
import { getLastContentUpdate } from '@utils/projects'

const Header = async () => {
  const lastContentUpdate = dateToString(await getLastContentUpdate(), 'date')
  return (
    <header className='sticky top-0 w-full border-b bg-slate-300 dark:bg-neutral-800 z-50'>
      <h1 className='text-center text-3xl font-semibold'>Ansioluettelo/CV</h1>
      <NavBar
        lastContentUpdate={lastContentUpdate}
        meDescriptionRaw={meDescriptionRaw}
        className='lg:m-1'
      />
    </header>
  )
}

export default Header
