"use client"
import React from 'react'
import { Vortex } from 'react-loader-spinner';
import Image from 'next/image';
const Loading = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-[999] h-[100vh] flex items-center justify-center bg-white'>


  <Image src="/assets/joynanimation.gif" priority={true} alt='Loader' width={400} height={300} className=' w-[80px] xsm:w-[140px] h-auto' />

  </div>
  )
}

export default Loading