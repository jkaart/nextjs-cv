import dynamic from 'next/dynamic'
import type { IconType } from 'react-icons'

interface SvgPathChild {
  props?: {
    d?: string
    fill?: string
    [key: string]: unknown
  }
}

interface SvgElement {
  props?: {
    children?: SvgPathChild[]
    [key: string]: unknown
  }
}

interface IconPath {
  d: string
  fill: string | null
}

export interface IconPaths {
  paths: IconPath[]
  viewBox: string
}

export const getDevIcon = (iconName: string) => {
  const Icon = dynamic(
    () =>
      import('react-icons/si').then(icons => {
        const Component = icons[iconName as keyof typeof icons]

        return Component || (() => null)
      }) as Promise<React.ComponentType>
  )

  return Icon
}

export const extractIconPaths = (Component: IconType): IconPaths | null => {
  if (typeof Component === 'function') {
    const element = Component({}) as React.ReactElement as SvgElement

    if (Array.isArray(element.props?.children)) {
      const paths = element.props.children.map(children => ({
        d: children.props?.d ? children.props.d : '',
        fill: children.props?.fill ? children.props.fill : null
      }))

      // Extract svg viewBox
      if (
        element.props &&
        typeof element.props === 'object' &&
        'attr' in element.props
      ) {
        const attr = (element.props as { attr?: unknown }).attr
        if (
          attr &&
          typeof attr === 'object' &&
          attr !== null &&
          'viewBox' in attr
        ) {
          const viewBox = (attr as { viewBox?: string }).viewBox

          return { paths, viewBox: viewBox ? viewBox : '' }
        }
      }
    }
  }
  return null
}

export const getDevIconPath = async (iconName: string) => {
  const icons = await import('react-icons/si')
  const Component = icons[iconName as keyof typeof icons] as IconType

  if (typeof Component === 'function') {
    const result = extractIconPaths(Component)
    return result
  }
  return null
}
