import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head'
import OpImg from './opengrap.jpg'







export default function RootLayout({ children }) {

  return (
    <html lang="en" className='scroll-smooth'>
      <Head>

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:url" content="https://jd-2x24.vercel.app"/>
          <meta property="og:type" content="website" />
            <meta property="og:title" content="Innovative Digital Solutions | Joyn Digital - Your IT Partner"/>
              <meta property="og:description" content="Discover innovative digital solutions tailored to meet your business needs at Joyn Digital. Partner with us to transform your online presence and achieve your goals." />
                <meta property="og:image" content="/opengrap.jpg"/>

                  <meta name="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:domain" content="jd-2x24.vercel.app"/>
                      <meta property="twitter:url" content="https://jd-2x24.vercel.app"/>
                        <meta name="twitter:title" content="Innovative Digital Solutions | Joyn Digital - Your IT Partner"/>
                          <meta name="twitter:description" content="Discover innovative digital solutions tailored to meet your business needs at Joyn Digital. Partner with us to transform your online presence and achieve your goals."/>
                            <meta name="twitter:image" content="/opengrap.jpg"/>


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
