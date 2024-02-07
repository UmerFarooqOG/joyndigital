
'use client'
import Link from 'next/link'
import { protData } from '@/app/constant/NavLink'
import ProtfolioCardReverse from '@/components/ProtCardReverse'
import ProtfolioCard from '@/components/ProtfolioCard'
import {motion} from 'framer-motion'
import Hero from '@/components/Hero.jsx'


const page = () => {

  const tranitiom = {duration:1,type:'spring'}
  return (
    <div className='max-w-[1400px] overflow-hidden mt-[60px]   h-full mx-auto'>
    {/* ------- hero --------  */}
    <section className='w-full h-[70vh] xsm:h-[100vh] px-[10px] xsm:px-[20px] py-[1rem] xsm:py-[2rem] mx-auto'>
   <Hero />

    </section>

    {/* ---- --- text-section  */}
    <section className='w-full h-full  px-[20px] xsm:px-[40px] py-[2rem] mx-auto'>
      <motion.h2  initial={{opacity : 0 , x:-200 ,  }}
              whileInView={{opacity : 1,x:0 ,   }}
              transition={{ duration: 1 ,type:'tween'}} className=' text-[24px] ssm:text-[28px] xsm:text-[50px] sm:text-[60px] mdd:text-[82px] leading-normal sm:leading-[100px] w-full text-[#2E2E2E] font-Montserrat font-bold'>We let you build relations <b></b> through our tailored digital <br /> products.</motion.h2>
      <div className='w-full flex-col my-[30px] flex items-end justify-start sm:justify-end'>
      <div className=' w-full mdd:w-[60%]'>
      <motion.p initial={{opacity : 0 , x:200 ,scale:0.7  }}
              whileInView={{opacity : 1,x:0,   scale:1    }}
              transition={tranitiom} className='text-[#7F7F7F] font-Noto text-[17px] xsm:text-[20px] sm:text-[28px] leading-normal sm:leading-[50px] '>We create digital products and platforms that drive user engagement and redefine industries by developing an intimate knowledge of our clients and their audiences.</motion.p>
      <Link href={'/contact'} ><motion.p className='my-[30px] inline-block bg-[#2957A7] hover:bg-transparent border-[#2957a7] hover:shadow-sm hover:text-black duration-[0.5s] border-[1px] font-Montserrat text-left font-semibold text-white py-[4px] xlb:py-[5px] rounded-[40px] xlb:rounded-[40px] text-[16px] mdd:text-[18px] xlb:text-[22px] leading-[50px] px-[20px]' initial={{opacity:0 , y:100}} whileInView={{opacity:1, y:0}} transition={tranitiom}>Get in touch</motion.p></Link>
      </div>
      </div>
    </section>

    {/* work-section  */}
    <section className='w-full min-h-[100vh] px-[10px] ssm:px-[20px] xsm:px-[40px] py-[2rem] mx-auto'>
      <motion.h2 initial={{opacity : 0 , x:-200   }}
              whileInView={{opacity : 1,x:0     }}
              transition={{ duration: 1 ,type:'tween'}} className='font-Montserrat text-[60px] font-[500] text-[#2e2e2e]'>Here’s our <span className='font-bold'>work</span> </motion.h2>
      <div className='w-full flex mb-[10px] ssm:mb-[40px] flex-col items-center justify-center gap-[40px] h-full'>
        <ProtfolioCard logo={protData[0].logo} spanTitle={protData[0].spanTitle} title={protData[0].title} desc={protData[0].desc} image={protData[0].image} id={1} />
        <ProtfolioCardReverse logo={protData[1].logo} spanTitle={protData[1].spanTitle} title={protData[1].title} desc={protData[1].desc} image={protData[1].image} id={2} />
        <ProtfolioCard logo={protData[2].logo} spanTitle={protData[2].spanTitle} title={protData[2].title} desc={protData[2].desc} image={protData[2].image} id={3} />


        <motion.button  initial={{opacity : 0 , y:80 ,scale:0.6  }}
              whileInView={{opacity : 1,y:0 ,scale:1   }}
              transition={{ duration: 0 ,type:'tween'}} className='px-[30px] btn font-Montserrat bg-transparent font-semibold text-[#2957A7] hover:text-[#fff] py-[10px] text-[20px] rounded-[40px] border-[#2957A7] border-[1px]'>
          see more work
        </motion.button>
      </div>

    </section>

  </div>
  )
}

export default page