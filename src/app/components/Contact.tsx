import { data } from "@/data/data"
import TableRow from "./common/TableRow"

const Contact = () => {
  return (
    <div>
      <div>
        <table>
          <tbody>
            <TableRow label='Sähköposti' value={data.contact.email} />
            <TableRow label='LinkedIn' value={data.contact.linkedIn} />
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Contact