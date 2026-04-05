'use client'

import { Path, Svg } from '@react-pdf/renderer'
import { getDevIconPath } from '@utils/getDevIcon'
import { useEffect, useState } from 'react'

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

  return (
    <Svg
      style={{
        width: '24px',
        height: '24px',
        marginBottom: '2px'
      }}
    >
      <Path fill='black' d={path} />
    </Svg>
  )
}

export default Icon
