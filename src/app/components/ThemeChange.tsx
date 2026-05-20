'use client'

import { useTheme } from 'next-themes'
import { type HTMLProps, useEffect, useState } from 'react'
import { LuMoon as Moon, LuSun as Sun } from 'react-icons/lu'

interface ThemeChangeProps {
  className?: HTMLProps<HTMLElement>['className']
}

/**
 * Renders a theme toggle button that switches between light and dark themes.
 * Displays sun icon for dark mode (switch to light) and moon icon for light mode (switch to dark).
 * Shows "Vaihda teemaa" text on large screens, hidden on mobile devices.
 * Uses aria-label and title attributes for accessibility with dynamic theme state.
 *
 * @interface ThemeChangeProps - Props interface for ThemeChange component
 * @param {string} [props.className] - Optional CSS class name to apply additional styles to the button (e.g., 'text-white', 'bg-blue-500')
 *
 * @example
 * ```tsx
 * // Default usage in navigation bar
 * <nav>
 *   <ThemeChange />
 * </nav>
 *
 * // With custom styling for primary action
 * <button className='bg-blue-500 hover:bg-blue-600'>
 *   <ThemeChange className='text-white' />
 * </button>
 *
 * // Usage in a header component with responsive design
 * function Header() {
 *   return (
 *     <header className="flex justify-between items-center p-4">
 *       <h1 className="text-xl font-bold">My CV</h1>
 *       <ThemeChange />
 *     </header>
 *   )
 * }
 * ```
 */
const ThemeChange = ({ className }: ThemeChangeProps) => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) return null

  const currentIcon =
    resolvedTheme === 'dark' ? (
      <Sun className='w-8 h-8' />
    ) : (
      <Moon className='w-8 h-8' />
    )

  return (
    <button
      type='button'
      onClick={toggleTheme}
      className={className}
      aria-label={
        resolvedTheme === 'dark'
          ? 'Switch to light theme'
          : 'Switch to dark theme'
      }
      title={
        resolvedTheme === 'dark'
          ? 'Switch to light theme'
          : 'Switch to dark theme'
      }
    >
      <div className='flex gap-1'>
        <span className='lg:hidden'>Vaihda teemaa</span>
        {currentIcon}
      </div>
      <span className='sr-only'>Theme switcher button</span>
    </button>
  )
}

export default ThemeChange
