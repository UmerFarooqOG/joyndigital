
'use client'
import Link from 'next/link';
import { protData } from '@/app/constant/NavLink';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic function from next/dynamic


const ProtfolioCardReverse = dynamic(() => );
const ProtfolioCard = dynamic(() => import('@/components/ProtfolioCard'));
const Hero = dynamic(() => import('@/components/Hero.jsx'));
const Page = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const htini = !isMobile ? { x: 200, scale: 1 } : { x: 0, scale: 1 };
  const htwhilein = !isMobile ? { x: 0, scale: 1 } : { x: 0, scale: 1 };
  const transition = { duration: 2, type: 'spring' };

  return (
    <div className='overflow-hidden h-full'>
      {/* Hero Section */}
      <section className='h-[70vh] xsm:h-[87vh] mx-auto'>
        <Hero />
      </section>

      {/* Text Section */}
      <section className='w-full max-w-[1440px] h-full px-[20px] sm:px-[60px] lg:px-[90px] xlb:px-[120px] py-[56px] mx-auto'>
        <motion.h2 initial={htini} whileInView={htwhilein} transition={transition} className='text-[24px] ssm:text-[28px] xsm:text-[30px] sm:text-[35px] mdd:text-[50px] lg:text-[60px] xll:text-[72px] leading-normal lg:leading-[100px] w-full text-[#2E2E2E] font-Montserrat font-bold'>
          We let you build relations <b></b> through our tailored digital products.
        </motion.h2>
        <div className='w-full flex-col my-[30px] flex items-end justify-start sm:justify-end'>
          <div className='w-full mdd:w-[60%]'>
            <motion.p initial={htini} whileInView={htwhilein} transition={transition} className='text-[#7F7F7F] font-Noto text-[18px] md:text-[22px] xll:text-[24px] leading-normal sm:leading-[38px]'>
              We create digital products and platforms that drive user engagement and redefine industries by developing an intimate knowledge of our clients and their audiences.
            </motion.p>
            <Link href={'/contact'}>
              <motion.p className='my-[30px] inline-block bg-[#2957A7] hover:bg-transparent border-[#2957a7] hover:shadow-sm hover:text-black duration-[0.2s] border-[1px] font-Montserrat text-left font-semibold text-white rounded-[40px] xlb:rounded-[40px] text-[16px] mdd:text-[18px] xlb:text-[22px] leading-[50px] px-[25px]'>
                Get in touch
              </motion.p>
            </Link>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className='w-full max-w-[1440px] min-h-[100vh] px-[20px] sm:px-[60px] lg:px-[90px] xlb:px-[120px] py-[2rem] mx-auto'>
        <motion.h2 className='font-Montserrat text-[60px] font-[500] text-[#2e2e2e]'>Here’s our <span className='font-bold'>work</span> </motion.h2>
        <div className='w-full flex mb-[10px] ssm:mb-[40px] flex-col items-center justify-center gap-[40px] h-full'>
          {protData.map((item, index) => (
            index % 2 === 0 ? (
              <ProtfolioCard key={index} logo={item.logo} spanTitle={item.spanTitle} title={item.title} desc={item.desc} image={item.image} id={index + 1} isMobile={isMobile} />
            ) : (
              <ProtfolioCardReverse key={index} logo={item.logo} spanTitle={item.spanTitle} title={item.title} desc={item.desc} image={item.image} id={index + 1} isMobile={isMobile} />
            )
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
