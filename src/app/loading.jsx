"use client"
import React from 'react'
import { Vortex } from 'react-loader-spinner';
import Image from 'next/image';
const Loading = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-[999] h-[100vh] flex items-center justify-center bg-white'>


  <Image src="/assets/joynanimation.gif" alt='Loader' width={2000} height={1000} className=' w-[80px] xsm:w-[140px] h-auto' />

  </div>
  )
}

export default Loading