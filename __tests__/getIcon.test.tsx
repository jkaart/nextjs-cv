import { getIcon } from '@/utils/getIcon'
import '@testing-library/jest-dom'
import { FaGithub as GithubIcon, FaLinkedin as LinkedInIcon, } from "react-icons/fa6"
import { IoMdHome as HomepageIcon } from "react-icons/io"
import { MdOutlineAlternateEmail as EmailIcon } from "react-icons/md"

describe('getIcon', () => {
  it('get homePage param right HomepageIcon component', () => {
    const Icon = getIcon('homePage')
    expect(Icon).toStrictEqual(<HomepageIcon data-testid='react-icon-homepage' />)
  })

  it('get eMail param right EmailIcon component', () => {
    const Icon = getIcon('eMail')
    expect(Icon).toStrictEqual(<EmailIcon data-testid='react-icon-email' />)
  })

  it('get gitHub param right GithubIcon component', () => {
    const Icon = getIcon('gitHub')
    expect(Icon).toStrictEqual(<GithubIcon data-testid='react-icon-github' />)
  })

  it('get linkedIn param right LinkedInIcon component', () => {
    const Icon = getIcon('linkedIn')
    expect(Icon).toStrictEqual(<LinkedInIcon data-testid='react-icon-linkedin' />)
  })
})
