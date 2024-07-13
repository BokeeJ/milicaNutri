import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { Link, NavLink } from 'react-router-dom';
//react icons
import { LuFacebook } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { IoLogoTiktok } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar() {
    const [menu, Setmenu] = useState(false);
    const handleMenu = () => {
        Setmenu(!menu);
    }
    const handleClose = () => {
        Setmenu(false);
    }
    const handleResize = () => {
        if (window.innerWidth < 768) {
            handleClose();
        }
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col items-center w-full'>
                <div className='flex items-center'>
                    <Link to={'/'}>
                        <motion.div animate={{
                            scale: [1, 1.3, 1.3, 1, 1],
                            rotate: [0, 0, 180, 180, 0],
                            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                        }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: Infinity,
                                repeatDelay: 1
                            }} >

                            <img className='w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] mt-5' src="/1.webp" alt="logo" />
                        </motion.div>
                    </Link>
                    <div className='flex gap-1 right-10 absolute'>
                        <div className='lg:visible invisible flex cursor-pointer'>
                            <a href='https://www.instagram.com/dijeteticarka_/' target='_blank' rel='noopener noreferrer'>
                                <LuInstagram size={35} color='green' />
                            </a>
                            <a href='https://sr-rs.facebook.com/milica.dzelebdzic.5' target='_blank' rel='noopener noreferrer'>
                                <LuFacebook size={35} color='green' />
                            </a>

                            <IoLogoTiktok size={35} color='green' />
                        </div>

                        <div className='lg:invisible cursor-pointer'>
                            <GiHamburgerMenu onClick={handleMenu} size={30} color='green' />
                        </div>
                    </div>

                </div>
                <h1 className='lg:text-3xl text-xl p-10 font-medium  text-gray-800 font-baskervville'>NU<span className='text-green-600 font-extrabold text-4xl m-1'>T</span>RICIJA ZA <span className='text-green-600 font-extrabold text-4xl'>T</span>RIJUMF</h1>
            </div>
            <nav className="relative">
                {/* Burger button */}


                {/* Meni za mobilni uređaj */}
                <div className={`fixed top-0 left-0 w-full h-full z-50 bg-green-600 shadow-xl p-2 transition-transform duration-1000 ease-in-out text-center opacity-90 ${menu ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
                    <button className='text-black text-3xl absolute right-10' onClick={handleClose}>X</button>
                    <ul className='text-l flex flex-col gap-2 font-bold cursor-pointer text-gray-800 p-10 h-full'>
                        <Link to={'/'} onClick={handleClose}>POCETNA</Link>
                        <Link to={'onama'} onClick={handleClose} >O MENI</Link>
                        <Link to={'usluge'} onClick={handleClose} >USLUGE</Link>

                        <Link to={'utisci'} onClick={handleClose} >UTISCI</Link>
                        <Link to={'kontakt'} onClick={handleClose}>KONTAKT</Link>
                    </ul>
                </div>

                {/* Meni za desktop */}
                <ul className='hidden lg:flex lg:flex-row lg:gap-10 text-l font-medium cursor-pointer text-gray-800 p-5'>
                    <NavLink to={'/'} className='transition-all duration-500 ease-in-out hover:font-extrabold'>POCETNA</NavLink>
                    <NavLink to={'onama'} className='transition-all duration-500 ease-in-out  hover:font-extrabold'>O MENI</NavLink>
                    <NavLink to={'usluge'} className='transition-all duration-500 ease-in-out  hover:font-extrabold'>USLUGE</NavLink>
                    <NavLink to={'utisci'} className='transition-all duration-500 ease-in-out  hover:font-extrabold'>UTISCI</NavLink>
                    <NavLink to={'kontakt'} className='transition-all duration-500 ease-in-out hover:font-extrabold'>KONTAKT</NavLink>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar