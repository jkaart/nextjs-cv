import HeadingH2 from '@components/common/HeadingH2'
import IconLink from '@components/common/IconLink'
import type { Contact as ContactType } from '@types'
import { normalizeUrl } from '@utils/normalizeUrl'

interface ContactProps {
  contact: ContactType
  children: React.JSX.Element
}

const Contact = ({ contact, children }: ContactProps) => {
  return (
    <div>
      <HeadingH2 text='Tiedot' />
      <div className='text-4xl flex flex-wrap gap-1'>
        <IconLink href={normalizeUrl(contact.homepage)} iconType='homePage' />
        <IconLink href={normalizeUrl(contact.email)} iconType='eMail' />
        <IconLink href={normalizeUrl(contact.gitHub)} iconType='gitHub' />
        <IconLink href={normalizeUrl(contact.linkedIn)} iconType='linkedIn' />
        {children}
      </div>
    </div>
  )
}

export default Contact
