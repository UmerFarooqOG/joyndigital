'use client'
import Image from 'next/image'
import { motion } from 'framer-motion';

import { FaLongArrowAltRight } from "react-icons/fa";
import Link from 'next/link';
const ProtfolioCard = ({ logo, spanTitle, title, desc, image,id }) => {

    const tranitiom = {duration:4,type:'spring'}
    const blueGradient = {
        background: 'linear-gradient(63deg, #163160 0%, #2957A7 98.38%)'
    }
    return (
        <motion.div initial={{opacity : 0 , x:-200   }}
        whileInView={{opacity : 1,x:0     }}
        transition={tranitiom}  className='flex flex-col mdd:flex-row my-[20px] rounded-[30px] h-auto mdd:h-[550px] lg:h-[600px] xlb:h-[520px] w-full relative items-center justify-center'>


            <div className='rounded-[20px] mdd:rounded-e-[0px] rounded-s-[20px] mdd:rounded-s-[30px] h-full w-full my-[40px] mdd:w-[45%] flex flex-col gap-[20px] px-[20px] ssm:px-[55px] py-[20px] items-start justify-center ssm:py-[60px]  bg-white '>
                <Image src={logo} width={100} height={100} className='w-[120px] lg:w-[228px] h-[70px]' alt='Logo image' />
                <h3 className=' text-[15px] leading-[38px] ssm:text-[18px] xsm:text-[22px] lg:text-[28px] font-normal font-Montserrat'><span className='text-[#2957A7] font-bold'>{spanTitle} <br /></span>{title} <br /></h3>

                <p className='text-[#656B70] xsm:w-full font-normal lg:text-[16px] font-Noto w-[90%] leading-[28px]'>{desc}</p>

                <Link className="text-[#2957A7] hover:ml-[20px] hover:text-black  hover:scale-105 duration-[1s]  text-[14px] xsm:text-[16px] font-semibold flex w-[50%] items-center gap-[4px]" href={`/${id}`} > View case <Image src={'/assets/Arrow.svg'} width={100} height={100} alt='arrow' className=' w-[14px] xsm:w-[18px]' /> </Link>

                
            </div>
            <div style={blueGradient}  className='overflow-hidden flex items-center justify-center h-full rounded-[20px] rounded-s-[20px] mdd:rounded-s-[0px]  rounded-e-[30px]  px-[5px] ssm:px-[20px] py-[20px] ssm:py-[10px]   bg-l w-full mdd:w-[55%] lg:w-[60%] '>
                <Image src={image} width={1000} height={1000} className=' w-full h-full ssm:w-[90%] ssm:h-auto lg:w-[700px] lg:h-[366px] object-contain' alt='product image' />
            </div>
        </motion.div>
    )
}

export default ProtfolioCard