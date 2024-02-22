import { protData } from '@/app/constant/NavLink';
import HomeText from '@/components/HomeText';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic'

const ProtfolioCardReverse = dynamic(() => import('@/components/ProtCardReverse'), { ssr: false });
const ProtfolioCard = dynamic(() => import('@/components/ProtfolioCard'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero.jsx'), { ssr: false });



// next-seo.config.js

export const metadata = {
  title: 'Innovative Digital Solutions | Joyn Digital - Your IT Partner',
  description: 'Discover innovative digital solutions tailored to meet your business needs at Joyn Digital. Partner with us to transform your online presence and achieve your goals.',
  openGraph: {
    type: 'website',
    url: 'https://www.yourwebsite.com', // Add your website URL here
    title: 'Innovative Digital Solutions | Joyn Digital - Your IT Partner',
    description: 'Discover innovative digital solutions tailored to meet your business needs at Joyn Digital. Partner with us to transform your online presence and achieve your goals.',
    images: [
      {
        url: 'http://joyndigital.com/img/qualityassurance.3d34d203.jpeg', // Add your Open Graph image URL here
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

const Page = () => {




  return (
    <div className='overflow-hidden h-full'>
      {/* Hero Section */}
      <section className='h-[70vh] xsm:h-[87vh] mx-auto'>
        <Hero />
      </section>

      {/* Text Section */}
      
<HomeText />
      {/* Work Section */}
      <section className='w-full max-w-[1440px] min-h-[100vh] px-[20px] sm:px-[60px] lg:px-[90px] xlb:px-[120px] py-[2rem] mx-auto'>
        <h2 className='font-Montserrat text-[60px] font-[500] text-[#2e2e2e]'>Here’s our <span className='font-bold'>work</span> </h2>
        <div className='w-full flex mb-[10px] ssm:mb-[40px] flex-col items-center justify-center gap-[40px] h-full'>
          {protData.map((item, index) => (
            index % 2 === 0 ? (
              <ProtfolioCard key={index} logo={item.logo} spanTitle={item.spanTitle} title={item.title} desc={item.desc} image={item.image} id={index + 1} />
            ) : (
              <ProtfolioCardReverse key={index} logo={item.logo} spanTitle={item.spanTitle} title={item.title} desc={item.desc} image={item.image} id={index + 1} />
            )
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
