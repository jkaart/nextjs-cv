import dynamic from 'next/dynamic'

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

export const getDevIconPath = async (iconName: string): Promise<string> => {
  const icons = await import('react-icons/si')
  const Component = icons[iconName as keyof typeof icons]

  if (typeof Component === 'function') {
    const element = Component({})

    const el = element as { props?: { children?: React.ReactNode } }
    if (
      typeof el === 'object' &&
      el !== null &&
      'props' in el &&
      el.props &&
      el.props.children &&
      Array.isArray(el.props.children) &&
      el.props.children[0] &&
      el.props.children[0].props &&
      el.props.children[0].props.d
    ) {
      return el.props.children[0].props.d
    }
  }
  return ''
}
