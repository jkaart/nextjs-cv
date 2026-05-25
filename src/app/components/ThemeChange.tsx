'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { type HTMLProps, useEffect, useState } from 'react'

interface ThemeChangeProps {
  className?: HTMLProps<HTMLElement>['className']
}

/**
 * Renders a theme toggle button that switches between light and dark themes.
 * Displays sun icon for dark mode (switch to light) and moon icon for light mode (switch to dark).
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

  const icon = resolvedTheme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type='button'
      onClick={toggleTheme}
      className={className}
      aria-label={
        resolvedTheme === 'dark'
          ? 'Vaihda vaaleaan teemaan'
          : 'Vaihda tummaan teemaan'
      }
      title={
        resolvedTheme === 'dark'
          ? 'Vaihda vaaleaan teemaan'
          : 'Vaihda tummaan teemaan'
      }
    >
      <div className='flex gap-1'>
        <Image
          className='dark:invert hover:scale-125'
          alt={`Switch to: ${icon}`}
          width={40}
          height={40}
          src={`/assets/icons/svg/other/${icon}.svg`}
        />
      </div>
      <span className='sr-only'>Teeman vaihto nappi</span>
    </button>
  )
}

export default ThemeChange
