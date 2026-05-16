import type { DevIconName } from '@types'
import dynamic from 'next/dynamic'
import type { IconType as ReactIconsType } from 'react-icons'

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

/**
 * Dynamically imports and returns a React icon component from react-icons/si package.
 * Uses Next.js dynamic import to avoid bundle size issues with unused icons.
 *
 * @param iconName - The name of the icon component (e.g., 'siReact', 'siGithub')
 * @returns A dynamically imported React component or null if icon not found
 */
export const getDevIcon = (iconName: DevIconName) => {
  return dynamic(() =>
    import('react-icons/si').then(icons => {
      return (
        (icons[iconName as keyof typeof icons] as ReactIconsType) ||
        (() => null)
      )
    })
  )
}

/**
 * Extracts SVG path data and viewBox from a React icon component.
 * Analyzes the rendered component to get the path definitions for rendering icons as pure SVG.
 *
 * @param Component - The React icon component to analyze
 * @returns IconPaths object containing paths array and viewBox, or null if extraction fails
 */
export const extractIconPaths = (
  Component: ReactIconsType
): IconPaths | null => {
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

/**
 * Asynchronously retrieves SVG path data for a specific icon.
 * Dynamically imports the icon, extracts its paths and viewBox using extractIconPaths.
 *
 * @param iconName - The name of the icon component (e.g., 'siReact', 'siGithub')
 * @returns Promise resolving to IconPaths object or null if icon not found
 */
export const getDevIconPath = async (iconName: string) => {
  const icons = await import('react-icons/si')
  const Component = icons[
    iconName as keyof typeof icons
  ] as unknown as ReactIconsType

  return extractIconPaths(Component)
}
