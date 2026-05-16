import type { IconType as ReactIconsType } from 'react-icons'
import {
  FaGithub as GithubIcon,
  FaLinkedin as LinkedInIcon
} from 'react-icons/fa6'
import { IoMdHome as HomepageIcon } from 'react-icons/io'
import { MdAlternateEmail as EmailIcon } from 'react-icons/md'

export type IconType = 'homePage' | 'eMail' | 'gitHub' | 'linkedIn'

/**
 * Retrieves the appropriate React icon component based on the icon type.
 * Returns the corresponding icon from react-icons libraries (Fa, IoMd, Md).
 * Throws an error for unknown icon types.
 *
 * @param type - The type of icon to retrieve ('homePage', 'eMail', 'gitHub', or 'linkedIn')
 * @returns The React icon component or Error object if type is invalid
 */
export const getIcon = (type: IconType): ReactIconsType | Error => {
  switch (type) {
    case 'homePage':
      return HomepageIcon
    case 'eMail':
      return EmailIcon
    case 'gitHub':
      return GithubIcon
    case 'linkedIn':
      return LinkedInIcon
    default:
      return new Error('unknown iconType')
  }
}
