import { FaGithub as GithubIcon, FaLinkedin as LinkedInIcon, } from "react-icons/fa6"
import { IoMdHome as HomepageIcon } from "react-icons/io"
import { MdOutlineAlternateEmail as EmailIcon } from "react-icons/md"
export type IconType = 'homePage' | 'eMail' | 'gitHub' | 'linkedIn'

export const getIcon = (type: IconType) => {
  switch (type) {
    case 'homePage':
      return (<HomepageIcon />)
    case 'eMail':
      return (<EmailIcon />)
    case 'gitHub':
      return (<GithubIcon />)
    case 'linkedIn':
      return (<LinkedInIcon />)
    default:
      return new Error('unknown iconType')
  }
}
