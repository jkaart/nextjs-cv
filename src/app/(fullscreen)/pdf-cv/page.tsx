import PDFClient from '@components/PDFClient'
import { dateToString } from '@utils/dateToString'
import { meDescriptionRaw } from '@utils/meDescriptionRaw'
import { getLastContentUpdate } from '@utils/projects'

const PDFPage = async () => {
  const lastContentUpdate = dateToString(await getLastContentUpdate(), 'date')
  return (
    <div className='lg:-mx-auto'>
      <PDFClient
        lastContentUpdate={lastContentUpdate}
        meDescriptionRaw={meDescriptionRaw}
      />
    </div>
  )
}

export default PDFPage
