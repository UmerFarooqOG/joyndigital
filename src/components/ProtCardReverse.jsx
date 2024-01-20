'use client'
import Image from 'next/image'
import { motion } from 'framer-motion';

import { FaLongArrowAltRight } from "react-icons/fa";
import Link from 'next/link';
const ProtfolioCardReverse = ({ logo, spanTitle, title, desc, image,id }) => {
    const tranitiom = {duration:4,type:'spring'}
    const blueGradient = {
        background: 'linear-gradient(298deg, #951314 0%, #EB2022 100%)'
    }
    return (
        <motion.div initial={{opacity : 0 , x:400   }}
        whileInView={{opacity : 1,x:0     }}
        transition={tranitiom}   className='flex flex-col-reverse mdd:flex-row-reverse my-[20px] overflow-hidden rounded-[30px] min-h-[40vh] h-full mdd:h-[70vh] w-full relative place-content-center items-center justify-start'>


        <div className=' rounded-[20px] mdd:rounded-s-[0px] rounded-e-[20px] mdd:rounded-e-[30px] h-full w-full my-[40px]  mdd:w-[45%] lg:w-[60%]  flex flex-col gap-[20px] px-[20px] ssm:px-[30px] py-[20px] ssm:py-[30px]  bg-white '>
            <Image src={logo} width={100} height={100} className='w-[120px]' alt='Logo image' />
            <h3 className=' text-[15px] ssm:text-[18px] xsm:text-[22px] lg:text-[25px] font-Montserrat'><span className='text-[#EB2022] font-bold'>{spanTitle} <br /></span>{title} <br />Home</h3>

            <p className='text-[#656B70] text-[10px] xsm:w-full ssm:text-[12px] xsm:text-[14px] lg:text-[16px] font-Noto w-[90%]'>{desc}</p>

            <Link className="text-[#2957A7] hover:ml-[20px] hover:text-black  hover:scale-105 duration-[1s]  text-[14px] xsm:text-[16px] font-semibold flex w-[50%] items-center gap-[4px]" href={`\ ${id}`} > View case <Image src={'/assets/Arrow.svg'} width={100} height={100} alt='arrow' className=' w-[14px] xsm:w-[18px]' /> </Link>

            
        </div>
        <div style={blueGradient}  className='overflow-hidden flex items-center justify-center h-full rounded-[20px] rounded-e-[20px] mdd:rounded-e-[0px]  rounded-s-[30px]  px-[5px] ssm:px-[20px] py-[20px] ssm:py-[10px]   bg-l w-full  mdd:w-[55%] lg:w-[60%]'>
            <Image src={image} width={1000} height={1000} className=' w-full h-full ssm:w-[90%] ssm:h-[90%] object-contain' alt='product image' />
        </div>
    </motion.div>
    )
}

export default ProtfolioCardReverse