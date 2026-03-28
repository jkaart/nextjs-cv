'use client'

import { Path, Svg } from '@react-pdf/renderer'
import { useEffect, useState } from 'react'
import { getDevIconPath } from '@/utils/getDevIcon'

interface IconProps {
  iconName: string
}

const Icon = ({ iconName }: IconProps) => {
  const [path, setPath] = useState<string>('')

  useEffect(() => {
    let isMounted = true
    getDevIconPath(iconName).then(result => {
      if (isMounted) setPath(result)
    })
    return () => {
      isMounted = false
    }
  }, [iconName])

  if (path === '') return null
  console.log(iconName, ':', path)

  return (
    <Svg style={{ width: '1cm', height: '1cm' }}>
      <Path fill='black' d={path} />
    </Svg>
  )
}

export default Icon
