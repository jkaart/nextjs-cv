import { Icon as IconifyIcon } from '@iconify/react'

export const icons = {
  homePage: 'mdi:home',
  eMail: 'mdi:email',
  gitHub: 'simple-icons:github',
  linkedIn: 'simple-icons:linkedin'
} as const

export type IconType = keyof typeof icons

interface ContactIconProps {
  type: IconType
  className?: string
}

const ContactIcon = ({ type, className }: ContactIconProps) => (
  <IconifyIcon icon={icons[type]} className={className} />
)

export default ContactIcon
