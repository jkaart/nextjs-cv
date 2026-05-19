import type { OtherIconName } from '@otherIconTypes'
import type { ContactIconType } from '@types'

type Icons = Record<ContactIconType, OtherIconName>

const icons = {
  homePage: 'home',
  eMail: 'alternate-email',
  gitHub: 'github',
  linkedIn: 'linkedin'
} as const satisfies Icons

export const getContactIconName = (type: ContactIconType) => {
  return icons[type]
}
