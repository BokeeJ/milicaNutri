import React from 'react'
import Gallery from '../Components/Gallery'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Onama() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            className='flex flex-col items-center'>
            <div className='m-5 p-5'>
                <h1 className='text-6xl font-pisano'>O meni</h1>
                <hr className='border-green-600 border w-[300px] mt-4' />
            </div>

            <div className='flex lg:flex-row flex-col justify-around p-5 items-center'>
                <div className='lg:w-[50%] flex flex-col items-center justify-center'>


                    <p className='lg:p-10 text-center lg:text-left p-5 font-baskervville text-xl font-bold'>
                        Šta ako vam kažem da možete da jedete ukusne namirnice, a da izgledate vitko, osećate se zdravo i budete zdravi?<br />
                        <br />

                        Posvećena sam  zdravom stilu života i sa velikim entuzijazmom ću i vama biti podrška na putu promene.
                        <br />
                        <br />

                        Na osnovu opšte i nutritivne anamneze radim izradu personalizovanog jelovnika, prilagodjenog pojedincu i njegovom zdravstvenom stanju. Uz moje praćenje i podršku, dolazimo do vaših željenih rezultata, trajnih promena prehrambenih navika.
                        <br />
                        <br />

                        <Link to={"/kontakt"}><span className='text-2xl text-green-600'>Kontaktirajte me</span></Link>  i vrlo brzo ćete osetiti poboljšanje, videćete razliku i čućete pozitivne komentare bliskih osoba.
                    </p>
                </div>
                <div className='lg:w-[50%] flex justify-center items-center flex-col'>
                    <img src="/gojaznost.webp" className='w-[400px] h-[400px]' alt="Milica Dzelebdzic" />
                    <h1 className='m-2 text-4xl font-baskervville'>Milica Dzelebdzić</h1>
                    <h2 className='font-baskervville text-2xl'>viši dijetetičar nutricionista</h2>
                </div>
            </div>
            <div className='p-5'>
                <Gallery />
            </div>
        </motion.div>
    )
}

export default Onama