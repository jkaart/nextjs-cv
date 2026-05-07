import { getIcon } from '@utils/getIcon'
import '@testing-library/jest-dom'
import {
  FaGithub as GithubIcon,
  FaLinkedin as LinkedInIcon
} from 'react-icons/fa6'
import { IoMdHome as HomepageIcon } from 'react-icons/io'
import { MdAlternateEmail as EmailIcon } from 'react-icons/md'

describe('getIcon', () => {
  it('get homePage param right HomepageIcon component', () => {
    const Icon = getIcon('homePage')
    expect(Icon).toBe(HomepageIcon)
  })

  it('get eMail param right EmailIcon component', () => {
    const Icon = getIcon('eMail')
    expect(Icon).toBe(EmailIcon)
  })

  it('get gitHub param right GithubIcon component', () => {
    const Icon = getIcon('gitHub')
    expect(Icon).toBe(GithubIcon)
  })

  it('get linkedIn param right LinkedInIcon component', () => {
    const Icon = getIcon('linkedIn')
    expect(Icon).toBe(LinkedInIcon)
  })
})
