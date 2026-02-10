import { getIcon, type IconType } from "@/utils/getIcon"

interface IconLinkProps {
  href: string
  iconType: IconType
}

const IconLink = ({ href, iconType }: IconLinkProps) => {
  const Icon = getIcon(iconType)

  if (Icon instanceof Error) {
    return null
  }

  return (
    <a href={href}>{Icon}</a>
  )
}

export default IconLink
