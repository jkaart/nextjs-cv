import NavBar from '@components/NavBar'
import { meDescriptionRaw } from '@utils/meDescriptionRaw'

const Header = () => (
  <header className='sticky top-0 w-full border-b bg-slate-300 dark:bg-neutral-800 z-50'>
    <h1 className='text-center text-3xl font-semibold'>Ansioluettelo/CV</h1>
    <NavBar meDescriptionRaw={meDescriptionRaw} className='lg:m-1' />
  </header>
)

export default Header
