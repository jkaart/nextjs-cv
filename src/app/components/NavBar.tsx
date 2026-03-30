import Link from 'next/link'
import CVDownload from './CVDownload'

interface NavBarProps {
  className?: string
}

const NavBar = ({ className }: NavBarProps) => {
  return (
    <nav className={className}>
      <ul className='hidden flex-wrap lg:flex gap-2 text-xl'>
        <li>
          <Link href='/'>Etusivu</Link>
        </li>
        <li>
          PDF: <Link href='/pdf-cv'>Näytä</Link>/<CVDownload label='Lataa' />
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
