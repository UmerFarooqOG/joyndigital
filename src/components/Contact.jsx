'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation';


const tranitiom = { duration: 2, type: 'spring' }

const linbg = {
    background: 'linear-gradient(63deg, #163160 0%, #2957A7 98.38%)'
}

const Contact = () => {


    const router = useRouter();
    const [regValue, setRegValue] = useState({
        name: "",
        email: "",
        companyName: "",
        jobTitle: "",
        message: "",
    })
    const [errors, setError] = useState({
        nameEr: "",
        emailEr: "",
        companyNameEr: "",
        jobTitleEr: "",
        messageEr: "",
    })


    const handle = (e) => {
        e.preventDefault();
        const { name, email, companyName, jobTitle, message } = regValue;
        if (name.length <= 4) {
            setError((pev) => ({ ...pev, nameEr: "Please Enter a Correct Name" }))
            setError((pev) => ({ ...pev, emailEr: "" }))
            setError((pev) => ({ ...pev, companyNameEr: "" }))
            setError((pev) => ({ ...pev, jobTitleEr: "" }))
            setError((pev) => ({ ...pev, messageEr: "" }))
            toast.error('Please Enter a Correct Name', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(regValue.email)) {
            setError((pev) => ({ ...pev, nameEr: "Please Enter a Valid Email" }))
            setError((pev) => ({ ...pev, nameEr: "" }))

            setError((pev) => ({ ...pev, companyNameEr: "" }))
            setError((pev) => ({ ...pev, jobTitleEr: "" }))
            setError((pev) => ({ ...pev, messageEr: "" }))
            toast.error('Please Enter a Correct Email', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else if (companyName.length <= 2) {
            setError((pev) => ({ ...pev, companyNameEr: "Please Enter a Correct Company Name" }))
            setError((pev) => ({ ...pev, nameEr: "" }))
            setError((pev) => ({ ...pev, emailEr: "" }))

            setError((pev) => ({ ...pev, jobTitleEr: "" }))
            setError((pev) => ({ ...pev, messageEr: "" }))
            toast.error('Please Enter a Correct Company Name', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else if (jobTitle.length <= 2) {
            setError((pev) => ({ ...pev, jobTitleEr: "Please Enter a Correct Job Title" }))
            setError((pev) => ({ ...pev, nameEr: "" }))
            setError((pev) => ({ ...pev, emailEr: "" }))
            setError((pev) => ({ ...pev, companyNameEr: "" }))

            setError((pev) => ({ ...pev, messageEr: "" }))
            toast.error('Please Enter a Correct Job Title', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else if (message.length <= 8) {
            setError((pev) => ({ ...pev, messageEr: "Please Enter a Message Greater Than 7 characters" }))
            setError((pev) => ({ ...pev, nameEr: "" }))
            setError((pev) => ({ ...pev, emailEr: "" }))
            setError((pev) => ({ ...pev, companyNameEr: "" }))
            setError((pev) => ({ ...pev, jobTitleEr: "" }))
            toast.error('Please Enter a Message Greater Than 7 characters', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }
        else {
            const subData = async () => {
                const response = await fetch('https://formspree.io/f/xgegolyv', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(regValue),
                });

                if (response.ok) {

                    toast.success('Form data sent successfully!', {
                        position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    router.push('/contact');

                } else {

                    toast.error('Error sending form data', {
                        position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });


                }
                setError((pev) => ({ ...pev, nameEr: "" }))
                setError((pev) => ({ ...pev, emailEr: "" }))
                setError((pev) => ({ ...pev, companyNameEr: "" }))
                setError((pev) => ({ ...pev, jobTitleEr: "" }))
                setError((pev) => ({ ...pev, messageEr: "" }))
            }
            subData();
            setRegValue({
                name: "",
                email: "",
                companyName: "",
                jobTitle: "",
                message: "",
            })


        }
    }

    return (
        <div className='max-w-[1500px] overflow-hidden w-full mx-auto'>
            {/* ---- --- text-section  */}
            <section className='w-full mt-[80px]  px-[20px] xsm:px-[40px] py-[2rem] mx-auto'>

                <motion.h2 initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: 'tween' }} className=' text-[14px] ssm:text-[24px] xsm:text-[35px] md:text-[40px] mdd:text-[70px] w-full text-[#2E2E2E] font-Montserrat font-semibold'>Let’s talk</motion.h2>
            </section>



            <main className='w-full my-[20px] sm:my-[20px] h-full flex items-center justify-center flex-col gap-[60px] px-[5px] ssm:px-[20px] xsm:px-[40px] py-[2rem] mx-auto'>

                <motion.div initial={{ opacity: 0, x: -180 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: 'tween' }} className='w-full flex flex-col sm:flex-row  gap-[10px] mdd:gap-[30px] justify-center sm:items-start'>
                    <div className='flex flex-1 items-center justify-start'>
                        <Image
                            src="/assets/services/services1.png"
                            className='w-[50px] xsm:w-[80px] sm:w-[100px] text-center h-auto mb-[20px] sm:mb-0'
                            width={100}
                            height={100}
                            alt='img'
                            priority // Add the priority property
                        />

                    </div>
                    <h5 className='text-[#2e2e2e] text-[16px] ssm:text-[20px] mdd:text-[30px] xll:text-[40px] font-[600] w-full sm:text-left sm:w-[65%]  lg:w-[60%] xll:w-[65%] font-Montserrat'>We’d love to learn more about your project. Just fill out the form below and you'll hear from us.</h5>
                </motion.div>

                <motion.form onSubmit={handle} initial={{ opacity: 0, x: -180 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: 'tween' }} action="" className='bg-[#FFFAFA] rounded-[30px] px-[10px] xsm:px-[30px] py-[70px] flex-col  flex items-center justify-center w-[100%] sm:w-[75%]'>
                    <h2 className='text-[#2E2E2E] mt-[20px] text-[20px] ssm:text-[25px] xsm:text-[30px] font-Montserrat font-medium'>Project Enquiry</h2>

                    <div className='mt-[50px] flex flex-col gap-[10px] w-[100%] sm:w-[65%]'>


                        <motion.div initial={{ opacity: 0, x: -180 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, type: 'tween' }} className='w-full h-[80px]'>
                            <label className='font-Montserrat font-semibold'>Full name *</label>
                            <input type="text" className='w-full border-b-2 border-[#7F7F7F] font-Montserrat text-[#2E2E2E] mt-[10px] outline-none bg-transparent focus:border-[#2957A7]' name='full name' value={regValue.name} onChange={(e) => setRegValue((prev) => ({ ...prev, name: e.target.value }))} required />
                            {errors.nameEr && <span style={{ color: 'red' }}>{errors.nameEr}</span>}
                        </motion.div>
                        {/* ---- email  */}
                        <motion.div initial={{ opacity: 0, x: 180 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, type: 'tween' }} className='w-full h-[80px]'>
                            <label className='font-Montserrat font-semibold'>Email *</label>
                            <input type="email" className='w-full border-b-2 border-[#7F7F7F] font-Montserrat text-[#2E2E2E] mt-[10px] outline-none bg-transparent focus:border-[#2957A7]' name='Email' value={regValue.email} onChange={(e) => setRegValue((prev) => ({ ...prev, email: e.target.value }))} required />
                            {errors.emailEr && <span style={{ color: 'red' }}>{errors.emailEr}</span>}
                        </motion.div>

                        {/* ---- Company name  */}
                        <motion.div initial={{ opacity: 0, x: -180 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, type: 'tween' }} className='w-full h-[80px]'>
                            <label className='font-Montserrat font-semibold'>Company name *</label>
                            <input type="text" className='w-full border-b-2 border-[#7F7F7F] font-Montserrat text-[#2E2E2E] mt-[10px] outline-none bg-transparent focus:border-[#2957A7]' name='Company name' value={regValue.companyName} onChange={(e) => setRegValue((prev) => ({ ...prev, companyName: e.target.value }))} required />
                            {errors.companyNameEr && <span style={{ color: 'red' }}>{errors.companyNameEr}</span>}
                        </motion.div>

                        {/* ---- Job Title */}
                        <motion.div initial={{ opacity: 0, x: 180 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, type: 'tween' }} className='w-full h-[80px]'>
                            <label className='font-Montserrat font-semibold'>Job Title *</label>
                            <input type="text" className='w-full border-b-2 border-[#7F7F7F] font-Montserrat text-[#2E2E2E] mt-[10px] outline-none bg-transparent focus:border-[#2957A7]' name='Job Title' value={regValue.jobTitle} onChange={(e) => setRegValue((prev) => ({ ...prev, jobTitle: e.target.value }))} required />
                            {errors.jobTitleEr && <span style={{ color: 'red' }}>{errors.jobTitleEr}</span>}
                        </motion.div>


                        {/* ---- Message */}

                        <motion.div initial={{ opacity: 0, x: -180 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, type: 'tween' }} className='w-full '>
                            <label className='font-Montserrat font-semibold'>Message *</label>
                            <textarea className='w-full resize-none border-b-2 border-[#7F7F7F] font-Montserrat text-[#2E2E2E] mt-[10px] min-h-[140px] outline-none bg-transparent focus:border-[#2957A7]' name="Message" value={regValue.message} onChange={(e) => setRegValue((prev) => ({ ...prev, message: e.target.value }))} required></textarea>
                            {errors.messageEr && <span style={{ color: 'red' }}>{errors.messageEr}</span>}

                        </motion.div>




                    </div>
                    <button type='submit' className='bg-[#E52325] hover:bg-blue-800 hover:border-[2px] duration-[0.6s] text-[13px] xsm:text-[16px] my-[40px] md:text-[20px] text-[#fff] font-Montserrat rounded-[40px] md:rounded-[60px] px-[20px] md:px-[25px] h-[45px] md:h-[50px] flex items-center justify-center font-medium' >
                        Let’s get started
                    </button>
                </motion.form>







            </main>








            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

export default Contact