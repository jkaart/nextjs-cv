'use client'

import HamburgerMenu from '@components/HamburgerMenu'
import Link from 'next/link'
import { type HTMLProps, useState } from 'react'

interface NavBarProps {
  className?: HTMLProps<HTMLElement>['className']
}

/**
 * Navigation bar component with responsive design and mobile hamburger menu.
 * Provides desktop navigation links and a collapsible mobile menu with theme toggle.
 *
 * @param {NavBarProps} props - Component props for custom styling
 * @param {string} [props.className] - Optional CSS class name for additional styling
 *
 * @example
 * ```tsx
 * // Basic usage in layout
 * <NavBar />
 *
 * // Usage with custom className for spacing
 * <NavBar className="border-b border-gray-200">
 *  { Navigation content }
 * </NavBar>
 *
 * // Integration in page component
 * export default function Home() {
 *   return (
 *     <>
 *       <NavBar />
 *       <main className="container mx-auto px-4 py-8">
 *         <h1>Welcome</h1>
 *       </main>
 *     </>
 *   )
 * }
 * ```
 */
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
        <div className='text-xl font-bold absolute right-0 left-0 flex-col bg-background border-b py-2 space-y-2 flex'>
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
