import PDFClient from '@components/PDFClient'
import { meDescriptionRaw } from '@utils/meDescriptionRaw'

const PDFPage = () => {
  return <PDFClient meDescriptionRaw={meDescriptionRaw} />
}

export default PDFPage
