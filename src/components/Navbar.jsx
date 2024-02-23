"use client"
import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from '@/app/constant/NavLink'
import { CiMenuFries } from 'react-icons/ci'
import { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import './com.css'
const Navbar = () => {
  const [navOpen,setOpen] = useState(false);
  const [active,setActive] = useState("Home");


  const LinkClick =  (i) =>{
      setActive(i);
      setOpen(false);
  }



  return (
   
    <nav className=' sticky top-0 w-full bg-[#F2EEEE] opacity-[0.9]  z-[100] max mx-auto py-[1rem]  backdrop-blur-lg h-auto flex justify-between items-center'>
    <div className='h-full flex justify-between items-center w-full max-w-[1440px] px-[60px] lg:px-[90px] xlb:px-[120px] mx-auto '>
    <Link href={'/'} className='relative' >
        <Image
          src="/assets/logo.png"
          width={1000}
          height={1000}
          alt="Picture of the author" priority className='w-[60px] xsm:w-[110px] h-auto object-cover'
        />
    
      </Link>

      <ul className={`flex  items-center flex-col absolute top-0 left-0 transition-all duration-[0.6s] sm:static sm:flex-row w-full h-[100vh] bg-[#F2EEEE] sm:bg-transparent sm:h-auto 
       sm:w-auto justify-center gap-[40px] ${navOpen ? 'top-0' : 'top-[-9000px]'}`}>
    <div>
    <Link onClick={() => setOpen(false)} className='cursor-pointer  inline-block absolute top-[20px] left-[20px] sm:hidden' href={'/'} >
        <Image
          src="/assets/logo.png"
          width={1000}
          height={1000}
          alt="Picture of the author" className='w-[60px] xsm:w-[100px] h-auto object-cover'
        />
      </Link>
         <AiOutlineClose onClick={() => setOpen(false)} className="text-[30px] cursor-pointer inline-block absolute top-[20px] right-[20px] sm:hidden" />
    </div>
        {
          navLinks.map((i) => {
            return <li key={i.id}  onClick={() => LinkClick(i)}   className={`font-Noto text-[18px] lg:text-[16px] text-[#202020] link font-[400] ${active === i ? 'active' : ''}`}>
              <Link href={i.id} >{i.title}</Link>
            </li>

          })
        }
      
      </ul>
      <CiMenuFries onClick={() => setOpen(true)} className="text-[30px] cursor-pointer inline-block sm:hidden" />
    </div>
    </nav>
  )
}

export default Navbar