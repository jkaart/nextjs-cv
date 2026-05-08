interface DefaultLayoutProps {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <main className='flex-1 lg:mx-auto lg:max-w-5xl mx-3 mb-2 w-full'>{children}</main>
)

export default DefaultLayout
