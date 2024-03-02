'use client'
import { motion } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { protIdData,protWebData } from '@/app/constant/PortfolioData';


const Page = () => {

  const blueGradient = {
    background: 'linear-gradient(63deg, #163160 0%, #2957A7 98.38%)'
  };

  const redGradient = {
    background: 'linear-gradient(298deg, #951314 0%, #EB2022 100%)'
  };

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
  const initialAnimation = !isMobile ? { x: -200, scale: 1 } : { x: 0, scale: 1 };
  const whileInViewAnimation = !isMobile ? { x: 0, scale: 1 } : { x: 0, scale: 1 };
  const transition = { duration: 2, type: 'spring' };

  return (
    <div className='overflow-hidden h-full'>
    




      <section className='w-full max-w-[1440px] min-h-[100vh] px-[20px] sm:px-[60px] lg:px-[90px] xlb:px-[120px] py-[2rem] mx-auto'>

      <motion.h2 initial={htini} whileInView={htwhilein} transition={transition} className='text-[24px] ssm:text-[28px] xsm:text-[30px] text-center sm:text-[35px] mdd:text-[50px] lg:text-[60px] xll:text-[72px] leading-normal lg:leading-[100px] w-full text-[#2E2E2E] font-Montserrat font-bold'>
          Our Work
        </motion.h2>

      {protIdData.map((item, index) => (
            index % 2 === 0 ? (
              <motion.div key={index} initial={initialAnimation} whileInView={whileInViewAnimation} transition={transition} className='flex flex-col mdd:flex-row my-[80px] rounded-[30px] h-auto  mdd:h-[420px] lg:h-[490px] xlg:h-[510px]  xll:h-[490px]  w-full relative items-center justify-center'>
              <div className='rounded-se-[20px] mdd:rounded-e-[0px] rounded-ss-[20px] mdd:rounded-s-[30px] h-full w-full mdd:w-[45%] flex flex-col gap-[16px] px-[20px] xsm:px-[20px] xlg:px-[30px] xll:px-[55px] py-[20px] items-start justify-center  ssm:py-[60px]  bg-white '>
                <Image src={item.logo} loading='lazy' width={100} height={100} className='w-[120px] lg:w-[228px] h-[70px]' alt='Logo' />
                <h3 className='text-[15px] leading-normal mdd:leading-[38px] ssm:text-[18px] xsm:text-[22px] lg:text-[28px] font-normal font-Montserrat'><span className='text-[#EB2022] font-bold'>{item.spanTitle} </span>{item.title}</h3>
                <p className='text-[#656B70] xsm:w-full font-normal text-[16px] mdd:text-[14px] xlg:text-[16px] font-Noto w-[90%] leading-[28px]'>{item.desc}</p>
                <Link className="text-[#2957A7] hover:ml-[20px] hover:text-black  hover:scale-105 duration-[1s]  text-[14px] xsm:text-[16px] font-semibold flex w-[50%] items-center gap-[4px]" href={`/${item.link}`} >{item.button}<Image src={'/assets/Arrow.svg'} loading='lazy' width={100} height={100} alt='arrow' className='w-[14px] xsm:w-[18px]' /> </Link>
              </div>
              <div style={blueGradient} className='overflow-hidden flex items-center justify-center h-full rounded-se-[0px] mdd:rounded-s-[0px] rounded-es-[20px] rounded-ee-[20px] mdd:rounded-e-[30px]  px-[20px] xsm:px-[30px] xll:px-[70px] py-[20px] xsm:py-[40px] xll:py-[80px] bg-l w-full mdd:w-[55%] lg:w-[60%] '>
                <Image src={item.image} loading='lazy' width={500} height={500} className='w-full h-full ssm:w-[90%] ssm:h-auto lg:w-[700px] lg:h-[366px] object-contain' alt='product image' />
              </div>
            </motion.div>
            ) : (
              <motion.div key={index} initial={initialAnimation} whileInView={whileInViewAnimation} transition={transition} className='flex flex-col mdd:flex-row-reverse my-[80px] rounded-[30px] h-auto  mdd:h-[420px] lg:h-[490px] xlg:h-[510px]  xll:h-[490px]  w-full relative items-center justify-center'>
              <div className='rounded-se-[20px] mdd:rounded-s-[0px] rounded-ss-[20px] mdd:rounded-e-[30px]   h-full w-full mdd:w-[45%] flex flex-col gap-[16px] px-[20px] xsm:px-[20px] xlg:px-[30px] xll:px-[55px] py-[20px] items-start justify-center ssm:py-[60px]  bg-white '>
                <Image src={item.logo} loading='lazy' width={100} height={100} className='w-[120px] lg:w-[228px] h-[70px]' alt='Logo' />
                <h3 className='text-[15px] leading-normal mdd:leading-[38px] ssm:text-[18px] xsm:text-[22px] lg:text-[28px] font-normal font-Montserrat'><span className='text-[#EB2022] font-bold'>{item.spanTitle} </span>{item.title}</h3>
                <p className='text-[#656B70] xsm:w-full font-normal text-[16px] mdd:text-[14px] xlg:text-[16px] font-Noto w-[90%] leading-[28px]'>{item.desc}</p>
                <Link className="text-[#2957A7] hover:ml-[20px] hover:text-black  hover:scale-105 duration-[1s]  text-[14px] xsm:text-[16px] font-semibold flex w-[50%] items-center gap-[4px]" href={` ${item.link}`} > {item.button} <Image src={'/assets/Arrow.svg'} loading='lazy' width={100} height={100} alt='arrow' className='w-[14px] xsm:w-[18px]' /> </Link>
              </div>
              <div style={redGradient} className='overflow-hidden flex items-center justify-center h-full rounded-se-[0px] mdd:rounded-e-[0px] rounded-es-[20px] rounded-ee-[20px] mdd:rounded-s-[30px]  px-[20px] xsm:px-[30px] xll:px-[70px] py-[20px] xsm:py-[40px] xll:py-[80px] bg-l w-full mdd:w-[55%] lg:w-[60%] '>
                <Image src={item.image} loading='lazy' width={500} height={500} className='w-full h-full ssm:h-auto lg:w-[700px] lg:h-[366px] object-contain' alt='product image' />
              </div>
            </motion.div>
            )
          ))}
      {protWebData.map((item, index) => (
            index % 2 === 0 ? (
              <motion.div key={index} initial={initialAnimation} whileInView={whileInViewAnimation} transition={transition} className='flex flex-col mdd:flex-row my-[80px] h-auto  mdd:h-[420px] lg:h-[490px] xlg:h-[510px]  xll:h-[490px]  w-full relative items-center justify-center'>
              <div className='rounded-se-[20px] mdd:rounded-e-[0px] rounded-ss-[20px] mdd:rounded-s-[30px]  h-full w-full mdd:w-[45%] flex flex-col gap-[16px] px-[20px] xsm:px-[20px] xlg:px-[30px] xll:px-[55px] py-[20px] items-start justify-center  ssm:py-[60px]  bg-white '>
                <Image src={item.logo} loading='lazy' width={100} height={100} className='w-[120px] lg:w-[228px] h-[70px]' alt='Logo' />
                <h3 className='text-[15px] leading-normal mdd:leading-[38px] ssm:text-[18px] xsm:text-[22px] lg:text-[28px] font-normal font-Montserrat'><span className='text-[#EB2022] font-bold'>{item.spanTitle} </span>{item.title}</h3>
               
                <Link className="text-[#2957A7] hover:ml-[20px] hover:text-black  hover:scale-105 duration-[1s]  text-[14px] xsm:text-[16px] font-semibold flex w-[50%] items-center gap-[4px]" target='_blank' href={item.link} > {item.button} <Image src={'/assets/Arrow.svg'} loading='lazy' width={100} height={100} alt='arrow' className='w-[14px] xsm:w-[18px]' /> </Link>
              </div>
              <div style={blueGradient} className='overflow-hidden flex items-center justify-center h-full rounded-se-[0px] mdd:rounded-s-[0px] rounded-es-[20px] rounded-ee-[20px] mdd:rounded-e-[30px]   px-[20px] xsm:px-[30px] xll:px-[70px] py-[20px] xsm:py-[40px] xll:py-[80px] bg-l w-full mdd:w-[55%] lg:w-[60%] '>
                <Image src={item.image} loading='lazy' width={500} height={500} className='w-full h-full ssm:w-[90%] ssm:h-auto lg:w-[700px] lg:h-[366px] object-contain' alt='product image' />
              </div>
            </motion.div>
            ) : (
              <motion.div key={index} initial={initialAnimation} whileInView={whileInViewAnimation} transition={transition} className='flex flex-col mdd:flex-row-reverse my-[80px] rounded-[30px] h-auto  mdd:h-[420px] lg:h-[490px] xlg:h-[510px]  xll:h-[490px]  w-full relative items-center justify-center'>
              <div className='rounded-se-[20px] mdd:rounded-s-[0px] rounded-ss-[20px] mdd:rounded-e-[30px]  h-full w-full mdd:w-[45%] flex flex-col gap-[16px] px-[20px] xsm:px-[20px] xlg:px-[30px] xll:px-[55px] py-[20px] items-start justify-center ssm:py-[60px]  bg-white '>
                <Image src={item.logo} loading='lazy' width={100} height={100} className='w-[120px] lg:w-[228px] h-[70px]' alt='Logo' />
                <h3 className='text-[15px] leading-normal mdd:leading-[38px] ssm:text-[18px] xsm:text-[22px] lg:text-[28px] font-normal font-Montserrat'><span className='text-[#EB2022] font-bold'>{item.spanTitle} </span>{item.title}</h3>
              
                <Link className="text-[#2957A7] hover:ml-[20px] hover:text-black  hover:scale-105 duration-[1s]  text-[14px] xsm:text-[16px] font-semibold flex w-[50%] items-center gap-[4px]" target='_blank' href={item.link} > {item.button} <Image src={'/assets/Arrow.svg'} loading='lazy' width={100} height={100} alt='arrow' className='w-[14px] xsm:w-[18px]' /> </Link>
              </div>
              <div style={redGradient} className='overflow-hidden flex items-center justify-center h-full  rounded-se-[0px] mdd:rounded-e-[0px] rounded-es-[20px] rounded-ee-[20px] mdd:rounded-s-[30px]  px-[20px] xsm:px-[30px] xll:px-[70px] py-[20px] xsm:py-[40px] xll:py-[80px] bg-l w-full mdd:w-[55%] lg:w-[60%] '>
                <Image src={item.image} loading='lazy' width={500} height={500} className='w-full h-full ssm:h-auto lg:w-[700px] lg:h-[366px] object-contain' alt='product image' />
              </div>
            </motion.div>
            )
          ))}
    

       
      </section>

    </div>
  )
}

export default Page