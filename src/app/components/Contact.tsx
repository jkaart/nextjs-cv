import type { Contact as ContactType } from "@/data/data"
import { validateUrl } from "@/utils/validators"
import IconLink from "./common/IconLink"

interface ContactProps {
  contact: ContactType
}

const Contact = ({ contact }: ContactProps) => {
  return (
    <div className="p-2">
      <h2 className="text-xl font-semibold">Tiedot</h2>
      <ul className="text-3xl flex flex-wrap">
        <li className="me-2"><IconLink href={validateUrl(contact.homepage)} iconType='homePage' /></li>
        <li className="me-2"><IconLink href={validateUrl(contact.email)} iconType='eMail' /></li>
        <li className="me-2"><IconLink href={validateUrl(contact.gitHub)} iconType='gitHub' /></li>
        <li><IconLink href={validateUrl(contact.linkedIn)} iconType='linkedIn' /></li>
      </ul>
    </div>
  )
}

export default Contact