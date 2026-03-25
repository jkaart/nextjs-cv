import { FaGithub as GithubIcon, FaLinkedin as LinkedInIcon, } from "react-icons/fa6"
import { IoMdHome as HomepageIcon } from "react-icons/io"
import { MdOutlineAlternateEmail as EmailIcon } from "react-icons/md"

export type IconType = 'homePage' | 'eMail' | 'gitHub' | 'linkedIn'

export const getIcon = (type: IconType) => {
  switch (type) {
    case 'homePage':
      return (<HomepageIcon data-testid='react-icon-homepage' />)
    case 'eMail':
      return (<EmailIcon data-testid='react-icon-email' />)
    case 'gitHub':
      return (<GithubIcon data-testid='react-icon-github' />)
    case 'linkedIn':
      return (<LinkedInIcon data-testid='react-icon-linkedin' />)
    default:
      return new Error('unknown iconType')
  }
}
