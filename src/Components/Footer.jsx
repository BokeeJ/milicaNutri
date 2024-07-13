import React from 'react'
import { NavLink } from 'react-router-dom'
//react icons 
import { LuFacebook } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { IoLogoTiktok } from "react-icons/io5";


function Footer() {
    return (
        <div className='w-full h-full justify-between flex p-5 items-center lg:flex-row flex-col'>
            {/* Logo */}
            <div className='flex flex-col items-center'>
                <h1 className='lg:text-xl  font-medium  text-gray-800 font-baskervville'>NU<span className='text-green-600 font-extrabold text-4xl  m-1'>T</span>RICIJA ZA <span className='text-green-600 font-extrabold text-4xl '>T</span>RIJUMF</h1>
                <img src="/1.webp" alt="logo" className='w-[100px] h-[100px]' />
            </div>
            {/* Mini meni */}
            <div className='p-5'>
                <ul className='flex gap-3 lg:flex-row flex-col text-center shadow-lg p-5'>
                    <NavLink to={'/'} className='transition-all duration-500 ease-in-out hover:font-extrabold'>POCETNA</NavLink>
                    <NavLink to={'onama'} className='transition-all duration-500 ease-in-out  hover:font-extrabold'>O MENI</NavLink>
                    <NavLink to={'usluge'} className='transition-all duration-500 ease-in-out  hover:font-extrabold'>USLUGE</NavLink>
                    <NavLink to={'utisci'} className='transition-all duration-500 ease-in-out  hover:font-extrabold'>UTISCI</NavLink>
                    <NavLink to={'kontakt'} className='transition-all duration-500 ease-in-out hover:font-extrabold'>KONTAKT</NavLink>
                </ul>
                <hr className='border-green-400 w-full border' />
            </div>
            {/* drustvene mreze */}
            <div className='flex'>
                <a href='https://www.instagram.com/dijeteticarka_/' target='_blank' rel='noopener noreferrer'>
                    <LuInstagram size={35} color='green' />
                </a>
                <a href='https://sr-rs.facebook.com/milica.dzelebdzic.5' target='_blank' rel='noopener noreferrer'>
                    <LuFacebook size={35} color='green' />
                </a>

                <IoLogoTiktok size={35} color='green' />
            </div>
        </div>
    )
}

export default Footer