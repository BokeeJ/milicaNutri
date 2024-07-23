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
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 3
            }
        }
    }
    return (
        <div className='flex flex-col'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }} className='flex box justify-center flex-col items-center'>
                {/* slika */}
                <motion.div
                    className='relative box lg:w-[900px] md:w-[500px] w-full h-[400px]'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <img className='w-full h-full rounded-md' src="/d.webp" alt="Voce" />
                    <div className='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent rounded-md'></div>
                    <div className='absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent rounded-md'></div>
                    <div className='absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent rounded-md'></div>
                    <div className='absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent rounded-md'></div>
                </motion.div>
                {/* o nama */}
                <div className='flex lg:flex-row flex-col items-center'>
                    <div className=' flex flex-col items-center p-5 lg:w-[50%] shadow-md shadow-slate-500 m-5 bg-green-100'>
                        <h1 className='text-4xl font-bold text-gray-800 font-pisano'>Vaš Uspeh, Moja Misija</h1>
                        <ol className='list-disc text-xl p-5 font-serif'>
                            <li>Sa velikom posvećenošću pristupam svakom pojedincu kako bismo zajedno ostvarili što bolje rezultate.</li>
                            <li>Vaš uspeh je i moj uspeh.</li>
                            <li>Individualni pristup, podrška i edukacija svakog pojedinca je moj put ka vašem zdravlju.</li>
                        </ol>
                        <Link className='border-2 border-green-600 p-2 rounded-full mt-2 font-serif font-semibold lg:w-[30%] w-[150px] justify-center flex' to={'onama'}>Više o meni</Link>
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
                <div className='h-[250px] bg-emerald-50 w-full flex justify-center items-center '>
                    <blockquote className='text-xl text-gray-800 font-serif text-center mt-5'>
                        "Hrana može biti najmoćniji oblik medicine ili najsporiji oblik otrova. Birajte mudro šta stavljate na tanjir, jer ima potencijal da izleči ili naškodi vašem telu i umu."
                        <footer className='text-gray-600 font-serif text-center mt-2'>- Ann Wigmore</footer>
                    </blockquote>
                </div>
                {/* Komentari */}
                <div className='relative flex justify-center flex-col items-center h-[400px] w-full'>
                    <div className='absolute inset-0 bg-[url("/profil.webp")] bg-cover bg-center opacity-90'></div>
                    <div className='absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent rounded-md'></div>
                    <div className='absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent rounded-md'></div>

                    <Komentari />
                </div>

                {/* zasto kontaktirati nutricionistu */}
                <div className='flex flex-col lg:flex-row justify-center items-center'>
                    <div className='flex flex-col items-center justify-center p-10'>
                        <h1 className='text-2xl font-bold text-green-600 font-baskervville m-5 text-center'>Zašto konsultovati nutricionistu?</h1>
                        <ul className='flex flex-col gap-5 text-center font-baskervville font-bold lg:text-xl md:text-xl'>
                            <li>Zato što dobijate plan ishrane koji je samo za vas i u skladu sa vašim potrebama i zdravstvenim stanjem.</li>
                            <li>Zato što dobijate jasne smernice koje su neophodne za uvodjenje zdravih životnih navika.</li>
                            <li>Zato što dobijate recepte za sve obroke iz jelovnika.</li>
                            <li>Zato što ćete imati konstantnu podršku i kontinuirano praćenje na putu ka cilju gde god da se nalazite.
                            </li>
                            <li>Pišite mi i krenimo na put promene.</li>
                        </ul>
                    </div>
                    <div className='p-5'>
                        <img className='w-[400px] h-[450px] p-5 shadow-md shadow-green-200 rounded-xl' src="/4.webp" alt="Milica Dzelebdzic" />
                    </div>
                </div>
                {/* Usluge */}
                <div className='flex flex-col lg:flex-row bg-green-50 w-full h-full p-10 justify-center gap-10 items-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-7xl font-pisano m-5'>Milica Dzelebdzić</h1>
                        <h3 className='text-3xl font-baskervville m-5'>viši dijetetičar nutricionista</h3>
                        <hr className='border border-green-600 w-[80%] m-5' />
                        <ol className='list-disc text-xl p-5'>
                            <li>Personalizovane preporuke</li>
                            <li>Personalizovan jelovnik</li>
                            <li>Recepte</li>
                            <li>Online kontrole i praćenje</li>
                            <li>Korekcije jelovnika</li>
                            <li>Preporuke za put</li>
                        </ol>
                        <Link className='border-2 border-green-600 p-2 rounded-full font-serif font-semibold w-[150px] justify-center flex' to={'usluge'}>Više...</Link>
                    </div>
                    <div className="p-10 lg:ml-[200px] flex justify-center  relative overflow-hidden w-[350px] h-[500px] rounded-md shadow-md shadow-slate-400 ">
                        <img
                            className="absolute top-0 left-0 w-full h-full transition-transform duration-[8000ms] transform-gpu hover:scale-150 object-cover"
                            src="/6.webp"
                            alt="UslugeNutri"
                        />
                    </div>
                </div>
            </motion.div >
        </div >
    );
}

export default Home;
