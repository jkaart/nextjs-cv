import IconLink from '@components/common/IconLink'
import type { Contact as ContactType } from '@types'
import { validateUrl } from '@utils/validators'

interface ContactProps {
  contact: ContactType
}

const Contact = ({ contact }: ContactProps) => {
  return (
    <div>
      <h2 className='inline-block mb-2 text-2xl font-bold border-b-4'>
        Tiedot
      </h2>
      <div className='text-4xl flex flex-wrap gap-1'>
        <IconLink href={validateUrl(contact.homepage)} iconType='homePage' />
        <IconLink href={validateUrl(contact.email)} iconType='eMail' />
        <IconLink href={validateUrl(contact.gitHub)} iconType='gitHub' />
        <IconLink href={validateUrl(contact.linkedIn)} iconType='linkedIn' />
      </div>
    </div>
  )
}

export default Contact
