import NavBar from '@components/NavBar'
import ThemeChange from './ThemeChange'

const Header = async () => {
  return (
    <header className='sticky top-0 w-full border-b bg-slate-300 dark:bg-neutral-800 z-50'>
      <h1 className='text-center text-3xl font-semibold'>Ansioluettelo/CV</h1>
      <div className='lg:flex lg:justify-between lg:ms-1 lg:me-2'>
        <NavBar className='lg:m-1' />
        <ThemeChange className='max-lg:hidden' />
      </div>
    </header>
  )
}

export default Header
