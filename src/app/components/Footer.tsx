import { data } from '@data/data'

const Footer = () => (
  <footer className='w-full py-5 text-center bg-slate-300 dark:bg-neutral-800'>
    <span>
      &#169; 2026 {data.me.firstName} {data.me.lastName}
    </span>
  </footer>
)

export default Footer
