import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head'
import OpImg from './opengrap.jpg'




export const metadata = {
  title: 'Innovative Digital Solutions | Joyn Digital - Your IT Partner',
  description: 'Discover innovative digital solutions tailored to meet your business needs at Joyn Digital. Partner with us to transform your online presence and achieve your goals.',
  openGraph: {
    type: 'website',
    url: 'https://jd-2x24.vercel.app/', // Add your website URL here
    title: 'Innovative Digital Solutions | Joyn Digital - Your IT Partner',
    description: 'Discover innovative digital solutions tailored to meet your business needs at Joyn Digital. Partner with us to transform your online presence and achieve your goals.',
    images: [
      {
        url: 'https://media.istockphoto.com/id/1432604833/photo/ballpoint-pen-resting-on-top-of-stack-of-documents.webp?s=1024x1024&w=is&k=20&c=9Wgs_DVxYdZeSsngohDR-r-IiysLlNOnFqbMfU1T6mk=', // Add your Open Graph image URL here
        width: 1200,
        height: 630,
        alt: 'Joyn Digital Open Graph Image'
      }
    ],
    'theme-color': '#f2eeee',
    "color-scheme": 'white gray only',
  },
  twitter: {
    cardType: 'summary_large_image'
  }
};


export default function RootLayout({ children }) {

  return (
    <html lang="en" className='scroll-smooth'>
      <Head>

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <body  >
        <Navbar />

        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
