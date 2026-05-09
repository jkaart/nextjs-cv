'use client'

import { useTheme } from 'next-themes'
import { type HTMLProps, useEffect, useState } from 'react'
import { LuMoon as Moon, LuSun as Sun } from 'react-icons/lu'

interface ThemeChangeProps {
  className?: HTMLProps<HTMLElement>['className']
}

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
