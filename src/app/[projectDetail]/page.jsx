'use client'
import { projectData } from '@/app/constant/ProjectDetails'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Loading from '@/app/loading';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion'

const Page = ({ params }) => {
  const id = params.projectDetail;
  const [projectContent, setProjectContent] = useState({})
  const [loader, setLoader] = useState(true);


  useEffect(() => {
    const data = projectData.find((project) => project.id === parseInt(id));
    setProjectContent(data)
    setLoader(false);
  }, [id])

  const { name, heading, heroP, sec2img1, sec2img2, sec3p1, sec3p2, sec3p3, sec4img, logo,  sec4headingB, sec4headingM, sec4headingM1, npid, bglg,useLogos,theR} = projectContent;

  


  const blueGradient = {
    background: 'linear-gradient(63deg, #163160 0%, #2957A7 98.38%)',
  }
  const redGradient = {
    background: 'linear-gradient(298deg, #951314 0%, #EB2022 100%)'
  }


  return (
    <>
      {loader ? <Loading /> :
        <div className='max-w-[1400px] overflow-hidden w-full mx-auto'>
          {/* ---- --- text-section  */}
          <section className='w-full mt-[80px]  px-[20px] xsm:px-[40px] py-[2rem] mx-auto'>
            <motion.h5 initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: 'tween' }} className='text-[#2958A5] text-[20px] xsm:text-[40px] font-[500] font-Noto'>{name}</motion.h5>
            <motion.h2 initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: 'tween' }} className='text-[24px] ssm:text-[28px] xsm:text-[50px] sm:text-[60px] mdd:text-[82px] leading-normal sm:leading-[100px] w-full text-[#2E2E2E] font-Montserrat font-bold'>{heading}</motion.h2>
            <div className='w-full flex-col my-[30px] flex items-end justify-start sm:justify-end'>
            <div className=' w-full mdd:w-[60%]'>
                <motion.p initial={{ opacity: 0, x: 300 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, type: 'tween' }} className='text-[#7F7F7F] font-Noto text-[17px] xsm:text-[20px] sm:text-[28px] leading-normal sm:leading-[50px]'>{heroP}</motion.p>
              </div>
            </div>
          </section>

          <section className='w-full my-[20px]  sm:my-[40px] h-auto md:h-full flex items-center justify-center px-[20px] xsm:px-[40px] py-[2rem] mx-auto'>

              <Carousel autoPlay={true} interval={2000} showArrows={false} showStatus={false} infiniteLoop={true}className='relative h-full w-full '>
                <div className='h-full' >
                  <Image className=' h-full sm:h-[90%]  rounded-[10px] md:rounded-[40px] object-cover w-[100%] sm:w-[85%]' width={1030} height={0} src={sec2img1} alt='imh' />
                </div>
                <div className='h-full' >
                  <Image className=' h-full sm:h-[90%]  rounded-[10px] md:rounded-[40px] object-cover w-[100%] sm:w-[85%]' width={1030} height={0} src={sec2img2} alt='img' />
                </div>
              </Carousel>
              {/* initial={{ opacity: 0, y: 300, scale: 0.7 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={tranitiom}  */}

          </section>



          <section className='w-full my-[20px] sm:my-[80px] h-full flex items-center justify-center flex-col gap-[40px] px-[20px] xsm:px-[40px] py-[2rem] mx-auto'>

            <motion.div initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: 'tween' }} className='w-full flex flex-col sm:flex-row  gap-[10px] mdd:gap-[30px] items-center justify-center sm:items-start'>
              <h5 className='text-[#2E2E2E] font-Montserrat font-[500] flex-1 text-[20px] xsm:text-[30px] sm:text-[25px] mdd:text-[30px] lg:text-[45px] mt-[-10px] lg:mt-[-20px]  xll:text-[54px]'>
                The <span className='font-bold'>challenge</span>
              </h5>

              <p className='text-[#7F7F7F] text-[10px] xsm:text-[14px] mdd:text-[18px] xlb:text-[20px] font-normal w-full text-center sm:text-left leading-[32px] sm:w-[65%]  lg:w-[60%] xll:w-[65%] font-Noto'>{sec3p1}</p>
            </motion.div>


            <motion.div initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: 'tween' }} className='w-full flex flex-col sm:flex-row  gap-[10px] mdd:gap-[30px] items-center justify-center sm:items-start'>
              <h5 className='text-[#2E2E2E] font-Montserrat font-[500] flex-1 text-[20px] xsm:text-[30px] sm:text-[25px] mdd:text-[30px] lg:text-[45px] mt-[-10px] lg:mt-[-20px]  xll:text-[54px]'>
                The <span className='font-bold'>solution</span>
              </h5>

              <p className='text-[#7F7F7F] text-[10px] xsm:text-[14px] mdd:text-[18px] xlb:text-[20px] font-normal w-full text-center leading-[32px] sm:text-left sm:w-[65%]  lg:w-[60%] xll:w-[65%] font-Noto'>{sec3p2}</p>
            </motion.div>



           {
            theR ?  <motion.div initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'tween' }} className='w-full flex flex-col sm:flex-row  gap-[10px] mdd:gap-[30px] items-center justify-center sm:items-start'>
            <h5 className='text-[#2E2E2E] font-Montserrat font-[500] flex-1 text-[20px] xsm:text-[30px] sm:text-[25px] mdd:text-[30px] lg:text-[45px] mt-[-10px] lg:mt-[-20px]  xll:text-[54px]'>
              The <span className='font-bold'>results</span>
            </h5>

            <p className='text-[#7F7F7F] text-[10px] xsm:text-[14px] mdd:text-[18px] xlb:text-[20px] leading-[32px] font-normal w-full text-center sm:text-left sm:w-[65%]  lg:w-[60%] xll:w-[65%] font-Noto'>{sec3p3}</p>
          </motion.div> : ""
           }

            <div className='w-full flex items-center justify-end'>

            <motion.div initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: 'tween' }} className='flex flex-wrap mt-[40px] py-[30px] items-center justify-between w-full text-center sm:text-left sm:w-[65%]  lg:w-[60%] xll:w-[65%]'>
                { useLogos.map((i) =>( <p className='projDetailLogo'>{i}</p>)) }
                
            </motion.div>
            
                </div>
          </section>




          <section className='w-full py-[80px] h-full flex items-center justify-center flex-col gap-[0px] px-[20px] bg-[#FFFAFA] xsm:px-[40px] mx-auto'>
            <motion.div initial={{ opacity: 0, y: -300 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: 'tween' }} className='w-full'>
              <h5 className='text-[#2E2E2E] text-[20px] xsm:text-[30px] my-[20px] font-[500] font-Noto'>Up Next</h5>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 300 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: 'tween' }} style={bglg === "bluelg" ? blueGradient : redGradient} className='flex flex-col mdd:flex-row  overflow-hidden rounded-[30px] min-h-[40vh] h-full mdd:h-[75vh] w-full relative place-content-center items-center justify-start'>


              <div className=' rounded-[20px] mdd:rounded-e-[0px] rounded-s-[20px] mdd:rounded-s-[30px] h-full w-full my-[40px] items-center mdd:items-start justify-center pl-0 mdd:pl-[3rem] mdd:w-[40%]  flex flex-col gap-[20px] px-[20px] ssm:px-[30px] py-[20px] ssm:py-[30px]  '>
                <Image src={logo} width={100} height={100} className='w-[240px] h-[70px]' alt='Logo image' />
                <h3 className=' text-[18px] ssm:text-[24px] xsm:text-[28px] text-center mdd:text-left lg:text-[32px] font-Montserrat font-[500] text-white'><span className='font-bold'>{sec4headingB}</span> <br /> {sec4headingM} <br /> {sec4headingM1}</h3>
                <hr className={`border-[1px] w-[90px] ${bglg === 'redlg' ? 'border-[#DB4C4D]' : 'border-[#2957A7] '} `}/>

                <Link className="text-[#ffffff]  text-[14px] xsm:text-[16px] font-semibold flex items-center gap-[4px]" href={`/${npid}`} > View case <Image src={`${bglg === 'redlg' ? '/assets/redarrow.png' : '/assets/Arrow.svg'}`} width={100} height={100} alt='arrow' className=' w-[14px] xsm:w-[33px] h-[14px]' /> </Link>


              </div>
              <div className='overflow-hidden flex items-center justify-center h-full rounded-[20px] rounded-s-[20px] mdd:rounded-s-[0px]  rounded-e-[30px]  px-[5px] ssm:px-[20px] py-[20px] ssm:py-[10px]   bg-l flex-1 '>
                <Image src={sec4img} width={1000} height={1000} className=' w-full h-full ssm:w-[90%] ssm:h-auto lg:w-[700px] lg:h-[400px]' alt='product image' />
              </div>
            </motion.div>

          </section>

        </div>
      }
    </>

  )
}

export default Page