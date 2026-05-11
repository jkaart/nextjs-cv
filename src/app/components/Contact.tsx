import HeadingH2 from '@components/common/HeadingH2'
import IconLink from '@components/common/IconLink'
import type { Contact as ContactType } from '@types'
import { normalizeUrl } from '@utils/normalizeUrl'

interface ContactProps {
  contact: ContactType
  children?: React.JSX.Element
}

/**
 * Renders contact information with social media links.
 * Displays a section heading "Tiedot" followed by clickable icons for homepage, email, GitHub, and LinkedIn.
 *
 * @param {ContactProps} props - Component props containing contact data and children
 * @param {ContactType} props.contact - Contact information object with email, social media URLs
 * @param {React.JSX.Element} [props.children] - Additional child elements to render after the links
 *
 * @example
 * ```tsx
 * <Contact contact={{ email: 'john@example.com', linkedIn: 'https://linkedin.com/in/john', homepage: 'https://john.dev', gitHub: 'https://github.com/john' }}>
 *   <IconLink href={normalizeUrl(data.workExperience[0].workplaceName)} iconType='company' />
 * </Contact>
 * ```
 */
const Contact = ({ contact, children }: ContactProps) => (
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

export default Contact
