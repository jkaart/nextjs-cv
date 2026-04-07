import Hero from '@components/Hero'

import { data } from '@data/data'

const Home = () => (
  <main className='mx-3 lg:mx-auto mb-2 lg:w-3/5'>
    <Hero data={data} />
  </main>
)
export default Home
