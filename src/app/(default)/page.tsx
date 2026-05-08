import Hero from '@components/Hero'
import { data } from '@data/data'
import { dateToString } from '@utils/dateToString'
import { meDescriptionRaw } from '@utils/meDescriptionRaw'
import { getLastContentUpdate } from '@utils/projects'

const Home = async () => {
  const lastContentUpdate = dateToString(await getLastContentUpdate(), 'date')
  return (
    <Hero
      data={data}
      meDescriptionRaw={meDescriptionRaw}
      lastContentUpdate={lastContentUpdate}
    />
  )
}

export default Home
