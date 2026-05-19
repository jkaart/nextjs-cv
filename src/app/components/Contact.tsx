import HeadingH2 from '@components/common/HeadingH2'
import IconLink from '@components/common/IconLink'
import type { Contact as ContactType } from '@types'
import { normalizeUrl } from '@utils/normalizeUrl'

interface ContactProps {
  contact: ContactType
  children?: React.JSX.Element
}

/**
 * Renders contact information with clickable social media and web links.
 * Displays a section header "Tiedot" followed by contact details including email, LinkedIn, GitHub, and homepage URLs.
 * Each link is rendered using the IconLink component with appropriate icon types (eMail, linkedIn, gitHub, homePage).
 * Supports additional child elements for custom content after the standard links.
 *
 * @interface ContactProps - Props interface for Contact component
 * @param {ContactType} props.contact - Contact information object containing: email address, LinkedIn profile URL, GitHub profile URL, and homepage/website URL
 * @param {React.JSX.Element} [props.children] - Optional additional child elements to render after the standard contact links (e.g., custom buttons or sections)
 *
 * @example
 * ```tsx
 * // Basic usage with sample contact data
 * <Contact contact={{
 *   email: 'john@example.com',
 *   linkedIn: 'https://linkedin.com/in/john',
 *   gitHub: 'https://github.com/john',
 *   homepage: 'https://john.dev'
 * }} />
 *
 * // Usage with full data object from context
 * <Contact contact={data.contact} />
 *
 * // With additional custom child elements
 * <Contact contact={{ email: 'john@example.com', linkedIn: 'https://linkedin.com/in/john', gitHub: 'https://github.com/john', homepage: 'https://john.dev' }}>
 *   <a href="mailto:john@example.com" className="text-blue-500 hover:text-blue-700">Email me directly</a>
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
