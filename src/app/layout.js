// layout.js
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function RootLayout({ children }) {
  const metadata = {
    title: 'Innovative Digital Solutions | Joyn Digital - Your IT Partner',
    description: 'Discover innovative digital solutions tailored to meet your business needs at Joyn Digital. Partner with us to transform your online presence and achieve your goals.',
    openGraph: {
      type: 'website',
      url: 'https://jd-2x24.vercel.app/', // Add your website URL here
      title: 'Innovative Digital Solutions | Joyn Digital - Your IT Partner',
      description: 'Discover innovative digital solutions tailored to meet your business needs at Joyn Digital. Partner with us to transform your online presence and achieve your goals.',
      images: [
        {
          url: '/opengraph.jpg', // Use the relative path to your image
          width: 1200,
          height: 630,
          alt: 'Joyn Digital Open Graph Image'
        }
      ],
      'theme-color': '#f2eeee',
      "color-scheme": 'white gray only',
    },
    twitter: {
      cardType: 'summary_large_image',
      image: '/opengraph.jpg' // Use the relative path to your Twitter card image
    }
  };

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Include metadata for SEO */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {metadata.openGraph && (
          <>
            <meta property="og:type" content={metadata.openGraph.type} />
            <meta property="og:url" content={metadata.openGraph.url} />
            <meta property="og:title" content={metadata.openGraph.title} />
            <meta property="og:description" content={metadata.openGraph.description} />
            {metadata.openGraph.images && metadata.openGraph.images.map((image, index) => (
              <meta key={index} property="og:image" content={image.url} />
            ))}
            <meta name="theme-color" content={metadata.openGraph['theme-color']} />
            <meta name="color-scheme" content={metadata.openGraph['color-scheme']} />
          </>
        )}
        {metadata.twitter && (
          <>
            <meta name="twitter:card" content={metadata.twitter.cardType} />
            <meta name="twitter:image" content={metadata.twitter.image} />
          </>
        )}
      </Head>

      <Navbar />
      {children}
      <Footer />
    </>
  );
}
