import NavBar from './NavBar'

const Header = () => (
  <div className='w-screen flex justify-center relative h-20'>
    <NavBar className='absolute bottom-0 left-0 m-1' />
    <h1 className='text-center my-auto text-3xl semi-bold'>Ansioluettelo/CV</h1>
  </div>
)

export default Header
