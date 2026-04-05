import { getIcon, type IconType } from '@/utils/getIcon'

interface IconLinkProps {
  href: string
  iconType: IconType
  className?: string
}

const IconLink = ({ href, iconType, className }: IconLinkProps) => {
  const Icon = getIcon(iconType)

  if (Icon instanceof Error) {
    return null
  }

  return (
    <a
      className={className}
      data-testid='icon-link'
      target='_blank'
      href={href}
    >
      {Icon}
    </a>
  )
}

export default IconLink
