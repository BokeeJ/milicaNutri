import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'
import Komentari from './Komentari';

function Home() {
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 50

        },
        animate: {
            opacity: 3,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 3
            }
        }
    }
    return (
        <div className='flex justify-center flex-col items-center'>
            {/* slika */}
            <div className='relative lg:w-[600px] md:w-[500px] w-[360px] h-[600px]'>
                <img className='w-full h-full rounded-md' src="/profil.webp" alt="Voce" />
                <div className='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent rounded-md'></div>
                <div className='absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent rounded-md'></div>
                <div className='absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent rounded-md'></div>
                <div className='absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent rounded-md'></div>
            </div>
            {/* o nama */}
            <div className='flex lg:flex-row flex-col items-center'>
                <div className=' flex flex-col items-center p-5 w-[50%] shadow-md shadow-slate-500 m-5'>
                    <h1 className='text-4xl font-bold text-gray-800 font-pisano'>O NAMA</h1>
                    <p className='text-xl text-gray-600 font-serif text-center mt-5 '>Već godinama radim sa pojedincima svih uzrasta, pomažući im da dostignu ciljeve poput gubitka težine i poboljšanja zdravstvenog stanja. Kroz personalizovane planove ishrane i edukaciju o hrani, pružam alate za trajne promene. Moj pristup je zasnovan na naučnim principima i prilagođen vašim specifičnim potrebama. Dozvolite mi da budem vaš vodič ka zdravijem i srećnijem životu.</p>
                    <Link className='border-2 border-green-600 p-2 rounded-full mt-2 font-serif font-semibold lg:w-[30%] w-[200px] justify-center flex' to={'onama'}>Više o nama</Link>
                </div>
                <motion.div
                    variants={fadeInAnimationVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }} className='lg:w-[50%]'>
                    <img className='h-full w-[800px] lg:w-full ' src="/slika2.webp" alt="Dijete" />
                </motion.div>
            </div>
            {/* citat */}
            <div className='h-[250px] bg-emerald-50 w-full flex justify-center items-center m-5'>
                <blockquote className='text-xl text-gray-800 font-serif text-center mt-5'>
                    "Hrana može biti najmoćniji oblik medicine ili najsporiji oblik otrova. Birajte mudro šta stavljate na tanjir, jer ima potencijal da izleči ili naškodi vašem telu i umu."
                    <footer className='text-gray-600 font-serif text-center mt-2'>- Ann Wigmore</footer>
                </blockquote>
            </div>
            {/* Komentari */}
            <Komentari />
        </div>
    );
}

export default Home;
