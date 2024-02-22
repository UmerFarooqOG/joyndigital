'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const linbg = {
  background: 'linear-gradient(63deg, #163160 0%, #2957A7 98.38%)'
}

const Page = () => {
  const images = ['/assets/services/services2.jpg', '/assets/services/services3.jpg', '/assets/services/services4.jpg'];
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % 2);

    }, 2000);

    return () => clearInterval(interval);
  }, [backgroundIndex]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const htini = !isMobile ? { x: -200, scale: 1 } : { x: 0, scale: 1 }
  const htwhilein = !isMobile ? { x: 0, scale: 1 } : { x: 0, scale: 1 };
  const abini = !isMobile ? { y: 200, scale: 1 } : { y: 0, scale: 1 }
  const abwhilein = !isMobile ? { y: 0, scale: 1 } : { y: 0, scale: 1 };

  const tranitiom = { duration: 2, type: 'spring' }

  return (
    <div className=' overflow-hidden w-full mx-auto'>
      {/* ---- --- text-section  */}
      <section className='max-w-[1440px] w-full mt-[80px] px-[20px] sm:px-[60px] lg:px-[90px] xlb:px-[120px] py-[2rem] mx-auto'>
        <motion.h2 initial={htini}
          whileInView={htwhilein}
          transition={tranitiom} className=' text-[35px] tracking-normal ssm:text-[40px] xsm:text-[45px] sm:text-[65px] mdd:text-[70px] lg:text-[90px] xll:text-[102px] leading-normal lg:leading-[120px] w-[70%] text-[#2E2E2E] font-Montserrat font-bold'>The services we offer</motion.h2>
      </section>



      <section className='max-w-[1440px] w-full my-[20px] sm:my-[10px] h-full flex items-center justify-center flex-col px-[20px] sm:px-[60px] lg:px-[90px] xlb:px-[120px] py-[2rem] mx-auto'>

        <motion.div initial={htini}
          whileInView={htwhilein}
          transition={tranitiom} className='w-full flex flex-col md:flex-row  gap-[10px] mdd:gap-[30px] justify-start sm:items-start'>
          <div className='flex flex-1 items-center justify-start'>


          </div>
          <h5 className='text-[#2e2e2e] text-[25px] leading-normal mdd:leading-[72px] ssm:text-[30px] mdd:text-[40px] xll:text-[50px] font-[600] w-full md:text-left md:w-[65%]  lg:w-[60%] xll:w-[65%] font-Montserrat'>We create custom web & mobile digital products that inspire and engage your customers</h5>
        </motion.div>


        <motion.div initial={htini}
          whileInView={htwhilein}
          transition={tranitiom} className='w-full mt-20 flex flex-col md:flex-row  gap-[10px] mdd:gap-[30px] justify-start items-start'>
          <h5 className='text-[#2E2E2E] leading-normal xlb:leading-[58px] font-Montserrat font-[500] flex-1   sm:text-start text-[40px] mt-[-10px] lg:mt-[-20px] xll:text-[48px]'>
            Product <span className='font-bold'> Design</span>
          </h5>

          <div className='flex flex-col items-center md:items-start w-full md:w-[65%]  lg:w-[60%] xll:w-[65%]'>
            <p className='text-[#7F7F7F] text-[18px] leading-[40px] xll:leading-[50px] xsm:text-[20px] mdd:text-[20px] xll:text-[28px] font-normal md:text-left font-Noto'>
              Product branding and design guidelines <br />
              User research <br />
              Customer journey mapping <br />
              Product Positioning <br />
              Web and Mobile Visual Design <br />
              Data and analytics
            </p>
            <Image src={images[backgroundIndex]} className=' w-[80%]  text-center h-auto mt-[20px] duration-1000 ease-in rounded-[24px] sm:mb-0' width={1000} height={1000} alt='img' />
          </div>
        </motion.div>



        <motion.div initial={htini}
          whileInView={htwhilein}
          transition={tranitiom} className='w-full mt-32 flex flex-col md:flex-row  gap-[10px] mdd:gap-[30px] justify-start items-start'>
          <h5 className='text-[#2E2E2E] leading-normal xlb:leading-[58px] font-Montserrat font-[500] flex-1   sm:text-start text-[40px] mt-[-10px] lg:mt-[-20px]  xll:text-[48px]'>
            Product <span className='font-bold'> Development</span>
          </h5>

          <div className='flex flex-col sm:w-[65%]  lg:w-[60%] xll:w-[65%]'>
            <p className='text-[#7F7F7F] text-[18px] leading-[40px] xll:leading-[50px] xsm:text-[20px] mdd:text-[20px] xll:text-[28px] font-normal w-full sm:text-left font-Noto'>
              Web Development<br />
              App Development<br />
              Dev Ops<br />
              Cyber Security<br />
              Quality Assurance<br />
              ML and AI
            </p>

          </div>
        </motion.div>



        <div className='w-full flex mt-20 flex-col md:flex-row  gap-[10px] mdd:gap-[30px] justify-center items-start'>
          <h5 className='text-[#2E2E2E] font-Montserrat font-[500] flex-1 sm:text-start text-[40px]  xll:text-[48px]'>
            Our Tech<span className='font-bold'> Capabilities</span>
          </h5>

          <div className='flex flex-col w-full md:w-[65%]  lg:w-[65%] xll:w-[70%] mt-[20px] gap-[20px]'>
            <motion.div initial={htini}
              whileInView={htwhilein}
              transition={tranitiom} className='flex flex-wrap  items-center justify-center gap-[50px] lg:gap-[80px] w-full'>
              <Image src="/assets/logos/pythonlogo.png" className='  w-[60px] text-center h-auto mt-[20px] sm:mb-0' width={1000} height={1000} alt='img' />
              <Image src="/assets/logos/awslogo.png" className='  w-[60px] text-center h-auto mt-[20px] sm:mb-0' width={1000} height={1000} alt='img' />
              <Image src="/assets/logos/postgrlogo.png" className='  w-[60px] text-center h-auto mt-[20px] sm:mb-0' width={1000} height={1000} alt='img' />
              <Image src="/assets/logos/googleAnallogo.png" className='  w-[60px] text-center h-auto mt-[20px] sm:mb-0' width={1000} height={1000} alt='img' />
              <Image src="/assets/logos/reactlogo.png" className='  w-[60px] text-center h-auto mt-[20px] sm:mb-0' width={1000} height={1000} alt='img' />
            </motion.div>
            <motion.div initial={htini}
              whileInView={htwhilein}
              transition={tranitiom} className='flex flex-wrap items-center justify-center gap-[40px] lg:gap-[60px] w-full'>
              <Image src="/assets/logos/azurelogo.png" className='  w-[80px] text-center h-auto mt-[20px] sm:mb-0' width={1000} height={1000} alt='img' />
              <Image src="/assets/logos/javalogo.png" className='  w-[80px] text-center h-auto mt-[20px] sm:mb-0' width={1000} height={1000} alt='img' />
              <Image src="/assets/logos/nodelogo.png" className='  w-[80px] text-center h-auto mt-[20px] sm:mb-0' width={1000} height={1000} alt='img' />
              <Image src="/assets/logos/mongodblogo.png" className='  w-[80px] text-center h-auto mt-[20px] sm:mb-0' width={1000} height={1000} alt='img' />
              <Image src="/assets/logos/mysql.png" className='  w-[80px] text-center h-auto mt-[20px] sm:mb-0' width={1000} height={1000} alt='img' />
            </motion.div>
          </div>
        </div>


      </section>




      <motion.div initial={abini}
        whileInView={abwhilein}
        transition={tranitiom} style={linbg} className='mx-auto'>



        <div className='w-full max-w-[1440px] mx-auto flex-wrap gap-[20px] h-full flex justify-between items-center sm:max-h-[300px] px-[20px] sm:px-[60px] lg:px-[90px] xlb:px-[120px] py-[80px]'>
          <div className='' >
            <h2 className='font-Montserrat font-bold text-[25px] xsm:text-[30px] md:text-[50px] xll:text-[57px]  text-[#fff]'>Partner with us</h2>
            <p className='font-Noto text-[12px] xsm:text-[14px] leading-normal xll:leading-[30px] mdd:text-[18px] xll:text-[20px] mt-[9px] text-[#F2EEEE]'>We’d love to learn more about your digital project and see how we can help you</p>

          </div>
          <div className='inline-block'>
            <Link href={'/contact'} className='bg-[#E52325] hover:bg-transparent hover:border-[2px] duration-[0.6s] text-[13px] xsm:text-[16px] md:text-[20px] xll:text-[24px] text-[#fff] font-Montserrat rounded-[40px] md:rounded-[60px] py-[10px] px-[20px] md:px-[30px] h-[45px] md:h-[50px] flex items-center justify-center font-medium' >
              Get in touch
            </Link>
          </div>
        </div>


      </motion.div>




    </div>
  )
}

export default Page