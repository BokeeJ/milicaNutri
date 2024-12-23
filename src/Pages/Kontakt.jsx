import React from 'react'
import { motion } from 'framer-motion'
// icons
import { MdOutlineMailOutline } from "react-icons/md";
import { LuFacebook } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { IoLogoTiktok } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
//component

import Mail2 from '../Components/Mail2.jsx'


function Kontakt() {
    const emailAdresa = 'milica.nutricionista@yahoo.com'
    return (
        <motion.div

            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            className='flex flex-col box'>

            <div className='flex lg:flex-row flex-col justify-center items-center'>

                <div className='flex flex-col  gap-3 p-5'>
                    <h1 className='text-6xl font-pisano'>Kontakt</h1>
                    <hr className='border-green-600 border w-[300px]' />
                    <a href="tel:+38162287330" className='text-black text-l font-serif flex items-center font-semibold gap-4'><FaPhone size={35} color='green' />Telefon</a>

                    <a href={`mailto:${emailAdresa}`} className='text-black text-l gap-4 font-serif flex items-center font-semibold'>
                        <MdOutlineMailOutline size={35} color='green' /> Mail</a>
                    <a href='https://www.instagram.com/dijeteticarka_/' className='text-black text-l gap-4 font-serif flex items-center font-semibold' target='_blank' rel='noopener noreferrer'>
                        <LuInstagram size={35} color='green' /> Instagram
                    </a>
                    <a href='https://sr-rs.facebook.com/milica.dzelebdzic.5' className='text-black text-l font-serif flex items-center font-semibold gap-4' target='_blank' rel='noopener noreferrer'>
                        <LuFacebook size={35} color='green' />Facebook
                    </a>

                    <a href='https://www.tiktok.com/@dijeteticarka_' className='text-black text-l font-serif flex items-center font-semibold gap-4'><IoLogoTiktok size={35} color='green' />TikTok</a>

                </div>

                <div className='flex justify-center items-center'>
                    <Mail2 />
                </div>
            </div>
            {/* <div className='flex justify-center items-center flex-col p-5' >
                <h2 className='text-6xl font-pisano p-5'>Adresa</h2>
                <hr className='border border-green-600 w-[80%] ' />
            </div >

            <div className='flex justify-center p-5 flex-col items-center'>
                <div className='border-2 border-green-600 p-5 m-2 shadow-md shadow-transparent'>
                    <h2 className='text-l font-serif font-semibold'>Hercegovačka 15</h2>
                    <h2 className='text-l font-serif font-semibold'>Sprat: 11</h2>
                    <h2 className='text-l font-serif font-semibold'>Stan: 1111, Beograd</h2>
                </div>


                <iframe
                    className='w-[80%] '
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481.26449539475027!2d20.450361889337664!3d44.81018128686185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6554b6014b87%3A0xd81fef2b79381b04!2z0KXQtdGA0YbQtdCz0L7QstCw0YfQutCwIDE1LCDQkdC10L7Qs9GA0LDQtCAxMTAwMA!5e0!3m2!1ssr!2srs!4v1720908797191!5m2!1ssr!2srs"
                    width="800"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div> */}
        </motion.div >
    )
}

export default Kontakt
