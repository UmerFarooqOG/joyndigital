'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation';





   
const ContactCom = () => {

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
        <>
            {/* ---- --- text-section  */}
            <section className='w-full mt-[80px] px-[20px] sm:px-[60px] lg:px-[90px] xlb:px-[120px]  py-[2rem] mx-auto'>

                <motion.h2 initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: 'tween' }} className='  text-[45px] xsm:text-[85px] mt-[-10px] lg:mt-[-20px]  xll:text-[102px] leading-normal xsm:leading-[73px] w-full text-[#2E2E2E] font-Montserrat font-semibold'>Let’s talk</motion.h2>
            </section>



            <main className='w-full my-[20px] sm:my-[20px] h-full flex items-center justify-center flex-col gap-[60px] px-[20px] sm:px-[60px] lg:px-[90px] xlb:px-[120px] mx-auto'>

                <motion.div initial={{ opacity: 0, x: -180 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: 'tween' }} className='w-full flex flex-col sm:flex-row  gap-[10px] mdd:gap-[30px] justify-center sm:items-start'>
                    <div className='flex flex-1 items-center justify-start'>


                    </div>
                    <h5 className='text-[#2e2e2e] text-[20px] ssm:text-[25px] xsm:text-[35px] mdd:text-[45px] mdd:leading-[72px] xll:text-[50px] font-[600] w-full sm:text-left sm:w-[65%]  lg:w-[60%] xll:w-[65%] font-Montserrat'>We&apos;d love to learn more about your project. Just fill out the form below and youll hear from us.</h5>
                </motion.div>

                <motion.form onSubmit={handle} initial={{ opacity: 0, x: -180 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: 'tween' }} action="" className='bg-[#FFFAFA] rounded-[30px] px-[10px] xsm:px-[30px] py-[70px] flex-col  flex items-center justify-center w-[100%] sm:w-[85%]'>
                    <h2 className='text-[#2E2E2E] mt-[20px] text-[20px] ssm:text-[25px] xsm:text-[40px] font-Montserrat font-[600]'>Project Enquiry</h2>

                    <div className='mt-[50px] flex flex-col gap-[10px] w-[100%] sm:w-[55%]'>


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


                <motion.div initial={{ opacity: 0, x: -300 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: 'tween' }} className='w-full flex flex-col sm:flex-row  gap-[10px] mdd:gap-[30px] items-center justify-center my-[98px] sm:items-start'>
                    <h5 className='text-[#2E2E2E] font-Montserrat font-[500] flex-1 text-[35px] xsm:text-[45px] mt-[-10px] lg:mt-[-20px]  xll:text-[54px] leading-normal xsm:leading-[73px]'>
                        Get in <span className='font-bold'>touch</span>
                    </h5>

                    <div className='w-full  sm:w-[65%] flex-wrap  lg:w-[70%] xll:w-[80%] flex items-start justify-between'>
                        <div className=' w-full xsm:w-[50%]'>
                            <h5 className=' text-[20px] md:text-[26px] xll:text-[32px] text-[#2E2E2E] capitalize font-Montserrat font-medium'>Address</h5>
                            <p className='font-normal text-[#656B70] text-[16px] md:text-[18px] md:leading-normal xll:text-[20px] leading-[26px] mt-[16px]'>5117 Joseph St Lewisville, TX 75056,
                                Texas, USA</p>
                        </div>
                        <div className=' w-full xsm:w-[30%]'>
                            <h5 className='text-[20px] md:text-[26px] xll:text-[32px] text-[#2E2E2E] capitalize font-Montserrat font-medium'>Email</h5>
                            <p className='font-normal text-[#656B70] text-[16px] md:text-[18px] md:leading-normal xll:text-[20px] leading-[26px] mt-[16px]'>info@joyn.com</p>
                        </div>
                        <div className='mt-[56px] w-full xsm:w-[50%]'>
                            <h5 className='text-[20px] md:text-[26px] xll:text-[32px] text-[#2E2E2E] capitalize font-Montserrat font-medium'>Offshore Address</h5>
                            <p className='font-normal text-[#656B70] text-[16px] md:text-[18px] md:leading-normal xll:text-[20px] leading-[26px] mt-[16px]'>3rd Floor, GIGA Mall, office # 3002B, DHA Phase 2, Islamabad, Pakistan</p>
                        </div>
                        <div className='mt-[56px] w-full xsm:w-[30%]'>
                            <h5 className='text-[20px] md:text-[26px] xll:text-[32px] text-[#2E2E2E] capitalize font-Montserrat font-medium'>Phone</h5>
                            <p className='font-normal text-[#656B70] text-[16px] md:text-[18px] md:leading-normal xll:text-[20px] leading-[26px] mt-[16px]'>00 92 518446205</p>
                        </div>

                    </div>
                </motion.div>







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
        </>
    )
}

export default ContactCom
