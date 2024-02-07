import Image from 'next/image';
import { useState, useEffect } from 'react';
import React from 'react'

const Hero = () => {
    let colors = [
        {
            background: ' linear-gradient(46deg, #010001 0% 0%, #333333 100% 100%)'
        },
        {
            background: 'linear-gradient(45deg, #163261 0% 0%, #2956A5 91.01% 91.01%)'
        },
        {
            background: 'linear-gradient(298deg, #951314 0%, #EB2022 100%)'
        }
    ]
    const contents = ['Innovate', 'Build', 'Grow']; // Define your contents
    const images = ['/assets/heroCircle1.png', '/assets/heroCircle2.png', '/assets/heroCircle2.png']; // Define your contents

    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const [contentIndex, setContentIndex] = useState(0);
    const [rotatee, setRotate] = useState(0);

    const [rotation, setRotation] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundIndex((prevIndex) => (prevIndex + 1) % colors.length);
            setContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    const handleMouseMove = (event) => {
      const { clientX, target } = event;
      const { left, width } = target.getBoundingClientRect();
      const centerX = left + width / 2;
      const distanceFromCenter = clientX - centerX;
  
      // Adjust rotation based on mouse position relative to the center
      const rotationSpeed = 0.1; // You can adjust this value to control rotation speed
      setRotation(distanceFromCenter * rotationSpeed);
    };
  
    // console.log(rotate

    return (
        <div style={colors[backgroundIndex]} onMouseMove={handleMouseMove} className='w-full h-full rounded-[10px] xsm:rounded-[48px]'>
            <div className='flex items-center w-full overflow-hidden h-full px-0 mdd:px-[5rem] justify-between'>
                <h5 className='flex-1 text-[40px] ssm:text-[50px] xsm:text-[70px] sm:text-[100px] text-center mdd:text-[100px] lg:text-[120px] font-Montserrat font-normal text-white'>{contents[contentIndex]}s<span className={`${contentIndex === 2 ? 'text-[#2957A7]' : 'text-[#EB2022]'}  `}>.</span></h5>
                <div className='flex-1 hidden lg:block relative'>
                <Image style={{ transform: `rotate(${rotation}deg)`,}} src={images[contentIndex]} width={1000} height={1000} className=' absolute left-0 top-[-100px] w-[700px] h-auto' />
                </div>
            </div>
        </div>
    )
}

export default Hero

