'use client'

import CVDownload from '@components/CVDownload'
import HamburgerMenu from '@components/HamburgerMenu'
import Link from 'next/link'
import { useState } from 'react'

interface NavBarProps {
  className?: string
}

const NavBar = ({ className }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className={className}>
      <div className='hidden lg:flex flex-row gap-2 text-xl font-bold'>
        <Link className='hover:text-blue-600' href='/'>
          Etusivu
        </Link>
        <div className='flex align-middle gap-1'>
          <div>PDF:</div>
          <Link className='hover:text-blue-600' href='/pdf-cv'>
            Näytä
          </Link>
          <span>/</span>
          <CVDownload className='hover:text-blue-600' label='Lataa' />
        </div>
      </div>
      <HamburgerMenu state={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className='text-xl font-bold absolute right-0 left-0 pt-2 pb-5 px-2 flex-col bg-background border-b space-y-2 flex'>
          <Link className='hover:text-blue-600' href='/'>
            Etusivu
          </Link>
          <div>
            PDF: <Link href='/pdf-cv'>Näytä</Link>/<CVDownload label='Lataa' />
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
