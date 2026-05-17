'use client'

import { useEffect, useState } from 'react'

interface ComponentWrapperProps {
  children: React.ReactNode
}

const ComponentWrapper = ({ children }: ComponentWrapperProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return <>{children}</>
}

export default ComponentWrapper
