import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { data } from '@data/data'
import { ThemeProvider } from 'next-themes'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  preload: false
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  preload: false
})

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang='fi' suppressHydrationWarning>
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider enableSystem={true} defaultTheme='system'>
          <Header />
          {children}
          <Footer me={data.me} sourceCodeUrl={data.sourceCodeUrl} />
        </ThemeProvider>
      </body>
    </html>
  )
}

export { metadata } from '@data/metaData'
export default RootLayout
