import NavBar from '@components/NavBar'
import ThemeChange from './ThemeChange'

/**
 * Component that renders the main header of the CV/resume page.
 * Displays a sticky top navigation bar containing:
 * - A centered title "Ansioluettelo/CV" (Job Application/CV in Finnish)
 * - Navigation links via NavBar component (visible on all screen sizes)
 * - Theme toggle button (hidden on mobile, visible on lg screens and up)
 * The header uses Tailwind CSS for responsive styling with dark mode support.
 *
 * @example
 * ```tsx
 * // Header is used as a default export in the main layout
 * import Header from '@components/Header'
 * <Header />
 * ```
 */
const Header = () => (
  <header className='sticky top-0 w-full border-b mb-1 bg-slate-300 dark:bg-neutral-800 z-50'>
    <h1 className='text-center text-3xl lg:text-4xl font-semibold'>
      Ansioluettelo ja portfolio
    </h1>
    <div className='flex justify-between items-center lg:ms-1 lg:me-2 mb-3'>
      <NavBar className='lg:m-1' />
      <ThemeChange />
    </div>
  </header>
)

export default Header
