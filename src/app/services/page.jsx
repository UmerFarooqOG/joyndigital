'use client'
import React from 'react'
import Image from 'next/image'
import { FaPython, FaAws } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiGoogleanalytics, SiReact } from "react-icons/si";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import Link from 'next/link';

const tranitiom = { duration: 2, type: 'spring' }

const linbg = {
  background: 'linear-gradient(63deg, #163160 0%, #2957A7 98.38%)'
}

const page = () => {
  return (
    <div className='max-w-[1400px] overflow-hidden w-full mx-auto'>
      {/* ---- --- text-section  */}
      <section className='w-full mt-[80px]  px-[20px] xsm:px-[40px] py-[2rem] mx-auto'>
        <motion.h2 initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: 'tween' }} className=' text-[44px] xsm:text-[55px] md:text-[50px] mdd:text-[80px] xlb:text-[102px] w-full text-[#2E2E2E] font-Montserrat font-semibold'>The services <br /> we offer</motion.h2>
      </section>



      <section className='w-full my-[20px] sm:my-[80px] h-full flex items-center justify-center flex-col gap-[60px] px-[20px] xsm:px-[40px] py-[2rem] mx-auto'>

        <motion.div initial={{ opacity: 0, x: -180 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: 'tween' }} className='w-full flex flex-col sm:flex-row  gap-[10px] mdd:gap-[30px] justify-center sm:items-start'>
          <div className='flex flex-1 items-center justify-start'>
            <Image src="/assets/services/services1.png" className=' w-[50px] xsm:w-[80px] sm:w-[100px] text-center h-auto mb-[20px] sm:mb-0' width={1000} height={1000} alt='img' />

          </div>
          <h5 className='text-[#2e2e2e] text-[30px] leading-normal mdd:leading-[80px] ssm:text-[40px] mdd:text-[50px] xlb:text-[60px] font-[600] w-full sm:text-left sm:w-[65%]  lg:w-[60%] xll:w-[65%] font-Montserrat'>We create custom web & mobile digital products that inspire and engage your customers</h5>
        </motion.div>


        <motion.div initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: 'tween' }} className='w-full flex flex-col sm:flex-row  gap-[10px] mdd:gap-[30px] justify-center sm:items-start'>
          <h5 className='text-[#2E2E2E] font-Montserrat font-[500] flex-1   sm:text-start text-[45px] mt-[-10px] lg:mt-[-20px]  xlb:text-[60px]'>
            Product <span className='font-bold'> <br />Design</span>
          </h5>

          <div className='flex flex-col sm:w-[65%]  lg:w-[60%] xll:w-[65%]'>
            <p className='text-[#7F7F7F] text-[18px] leading-[60px] xlb:leading-[73px] xsm:text-[20px] mdd:text-[24px] xlb:text-[28px] font-normal w-full sm:text-left font-Noto'>
              Product branding and design guidelines <br />
              User research <br />
              Customer journey mapping <br />
              Product Positioning <br />
              Web and Mobile Visual Design <br />
              Data and analytics
            </p>
            <Image src="/assets/services/services2.png" className=' w-[80%]  text-center h-auto mt-[20px] sm:mb-0' width={1000} height={1000} alt='img' />
          </div>
        </motion.div>


        <div className='w-full flex items-end justify-end'>

          <div className='flex flex-col w-full sm:w-[70%] mt-[40px] py-[30px] gap-[20px]'>
            <motion.div initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: 'tween' }} className='flex flex-wrap  items-center justify-center gap-[50px] lg:gap-[80px] w-full'>
              <Image src="/assets/logos/pythonlogo.png" className='  w-[60px] text-center h-auto mt-[20px] sm:mb-0' width={1000} height={1000} alt='img' />
              <Image src="/assets/logos/awslogo.png" className='  w-[60px] text-center h-auto mt-[20px] sm:mb-0' width={1000} height={1000} alt='img' />
              <Image src="/assets/logos/postgrlogo.png" className='  w-[60px] text-center h-auto mt-[20px] sm:mb-0' width={1000} height={1000} alt='img' />
              <Image src="/assets/logos/googleAnallogo.png" className='  w-[60px] text-center h-auto mt-[20px] sm:mb-0' width={1000} height={1000} alt='img' />
              <Image src="/assets/logos/reactlogo.png" className='  w-[60px] text-center h-auto mt-[20px] sm:mb-0' width={1000} height={1000} alt='img' />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: 'tween' }} className='flex flex-wrap items-center justify-center gap-[40px] lg:gap-[60px] w-full'>
              <Image src="/assets/logos/azurelogo.png" className='  w-[80px] text-center h-auto mt-[20px] sm:mb-0' width={1000} height={1000} alt='img' />
              <Image src="/assets/logos/javalogo.png" className='  w-[80px] text-center h-auto mt-[20px] sm:mb-0' width={1000} height={1000} alt='img' />
              <Image src="/assets/logos/nodelogo.png" className='  w-[80px] text-center h-auto mt-[20px] sm:mb-0' width={1000} height={1000} alt='img' />
              <Image src="/assets/logos/mongodblogo.png" className='  w-[80px] text-center h-auto mt-[20px] sm:mb-0' width={1000} height={1000} alt='img' />
              <Image src="/assets/logos/mysql.png" className='  w-[80px] text-center h-auto mt-[20px] sm:mb-0' width={1000} height={1000} alt='img' />
            </motion.div>
          </div>
        </div>


      </section>




      <motion.div initial={{ opacity: 0, y: 220 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'tween' }} style={linbg} className='w-full h-auto sm:max-h-[300px] px-[10px] sm:px-[30px] md:px-[50px] py-[60px]'>

        <div className='w-full flex-wrap gap-[20px] h-full flex justify-between items-center'>
          <div >
            <h2 className='font-Montserrat font-bold text-[25px] xsm:text-[30px] md:text-[50px] xlb:text-[60px]  text-[#fff]'>Partner with us</h2>
            <p className='font-Noto text-[12px] xsm:text-[14px] leading-normal xlb:leading-[50px] mdd:text-[24px] xlb:md:text-[28px] text-[#F2EEEE]'>We’d love to learn more about your digital project and see <br /> how we can help you</p>
          </div>
          <div className=''>
            <Link href={'/contact'} className='bg-[#E52325] hover:bg-transparent hover:border-[2px] duration-[0.6s] text-[13px] xsm:text-[16px] md:text-[20px] text-[#fff] font-Montserrat rounded-[40px] md:rounded-[60px] px-[20px] md:px-[25px] h-[45px] md:h-[50px] flex items-center justify-center font-medium' >
              Get in touch
            </Link>
          </div>
        </div>

      </motion.div>




    </div>
  )
}

export default page