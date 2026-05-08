import Hero from '@components/Hero'
import { data } from '@data/data'
import { dateToString } from '@utils/dateToString'
import { meDescriptionRaw } from '@utils/meDescriptionRaw'
import { getLastContentUpdate } from '@utils/projects'

const Home = async () => {
  const lastContentUpdate = dateToString(await getLastContentUpdate(), 'date')
  return (
    <main className='mx-3 lg:mx-auto mb-2 lg:w-3/5'>
      <Hero
        data={data}
        meDescriptionRaw={meDescriptionRaw}
        lastContentUpdate={lastContentUpdate}
      />
    </main>
  )
}

export default Home
