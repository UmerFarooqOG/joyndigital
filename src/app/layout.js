
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Innovative Digital Solutions | Joyn Digital - Your IT Partner',
  description: 'Discover innovative digital solutions tailored to meet your business needs at Joyn Digital. Partner with us to transform your online presence and achieve your goals.',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en" className='scroll-smooth'>
      <Head>

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      </Head>

      <body className={inter.className} >
        <Navbar />

        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
