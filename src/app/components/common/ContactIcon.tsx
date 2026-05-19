import type { ContactIconType } from '@types'
import { getContactIconName } from '@utils/getContactIconName'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

interface ContactIconProps {
  type: ContactIconType
  className?: string
}

const ContactIcon = ({ type, className }: ContactIconProps) => {
  const mergedClassNames = twMerge(className, ['dark:invert'])
  return (
    <Image
      src={`/assets/icons/svg/other/${getContactIconName(type)}.svg`}
      width={40}
      height={40}
      alt=''
      className={mergedClassNames}
    />
  )
}

export default ContactIcon
