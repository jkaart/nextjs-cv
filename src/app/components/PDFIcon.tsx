'use client'

import PDFSvgIcon from '@components/PDFSvgIcon'
import { View } from '@react-pdf/renderer'
import { getDevIconPath, type IconPaths } from '@utils/getDevIcon'
import { useEffect, useState } from 'react'

interface IconProps {
  iconName: string
}

const Icon = ({ iconName }: IconProps) => {
  const [iconPaths, setIconPaths] = useState<IconPaths | null>(null)

  useEffect(() => {
    let isMounted = true
    getDevIconPath(iconName).then(result => {
      if (isMounted) setIconPaths(result)
    })
    return () => {
      isMounted = false
    }
  }, [iconName])

  if (!iconPaths) return null

  return (
    <View style={{ width: '24px', height: '24px' }}>
      <PDFSvgIcon paths={iconPaths.paths} viewBox={iconPaths.viewBox} />
    </View>
  )
}

export default Icon
