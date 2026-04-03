import NavBar from './NavBar'

const Header = () => (
  <div className='fixed w-full border-b bg-slate-300 dark:bg-neutral-800 z-50'>
    <h1 className='text-center text-3xl font-semibold'>Ansioluettelo/CV</h1>
    <NavBar className='lg:m-1' />
  </div>
)

export default Header
