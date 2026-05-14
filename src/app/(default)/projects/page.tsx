import AllProjects from '@components/AllProjects'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kaikki projektit'
}

const AllProjectsPage = () => (
  <div>
    <h2 className='font-bold text-3xl text-center mb-3'>
      {typeof metadata.title === 'string' ? metadata.title : 'Kaikki projektit'}
    </h2>
    <AllProjects />
  </div>
)

export default AllProjectsPage
