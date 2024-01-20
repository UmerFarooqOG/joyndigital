"use client"
import React from 'react'
import { Vortex } from 'react-loader-spinner';
const Loading = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-[999] h-[100vh] flex items-center justify-center bg-white'>
<Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
  />


  </div>
  )
}

export default Loading