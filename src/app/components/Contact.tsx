import HeadingH2 from '@components/common/HeadingH2'
import IconLink from '@components/common/IconLink'
import type { Contact as ContactType } from '@types'
import { validateUrl } from '@utils/validators'

interface ContactProps {
  contact: ContactType
  children: React.JSX.Element
}

const Contact = ({ contact, children }: ContactProps) => {
  return (
    <div>
      <HeadingH2 text='Tiedot' />
      <div className='text-4xl flex flex-wrap gap-1'>
        <IconLink href={validateUrl(contact.homepage)} iconType='homePage' />
        <IconLink href={validateUrl(contact.email)} iconType='eMail' />
        <IconLink href={validateUrl(contact.gitHub)} iconType='gitHub' />
        <IconLink href={validateUrl(contact.linkedIn)} iconType='linkedIn' />
        {children}
      </div>
    </div>
  )
}

export default Contact
