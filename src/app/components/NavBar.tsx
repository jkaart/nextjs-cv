'use client'

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
        <Link className='hover:text-blue-600' href='/projects'>
          Kaikki projektit
        </Link>
      </div>
      <HamburgerMenu state={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className='text-xl font-bold absolute right-0 left-0 pt-2 pb-5 px-2 flex-col bg-background border-b space-y-2 flex'>
          <Link
            className='hover:text-blue-600'
            onClick={() => setIsOpen(false)}
            href='/'
          >
            Etusivu
          </Link>
          <Link onClick={() => setIsOpen(false)} href='/projects'>
            Kaikki projektit
          </Link>
        </div>
      )}
    </nav>
  )
}

export default NavBar
