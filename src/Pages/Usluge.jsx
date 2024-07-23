import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


function Usluge() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            className='flex flex-col justify-center items-center m-5 box'>
            <h1 className='text-black m-5 text-6xl font-pisano'>Usluge</h1>
            <hr className='border border-green-600 w-[80%]' />
            <div>
                <div className='flex flex-col items-center p-5'>
                    <h2 className='text-green-600 text-3xl font-baskervville m-5'>šta podrazumeva nutricionistički pregled?</h2>
                    <ul className='text-xl font-baskervville list-disc'>
                        <li>merenje na specijalno nutricionistickoj vagi</li>
                        <li>trudnice i osobe sa bajpasom mere se na obicnoj vagi</li>
                        <li>merenje visine i debljine potkoznog masnog tkiva</li>
                        <li>anamneza koja se uzima kroz razgovor sa pacijentom o eventualnim oboljenjima i terapijama ukoliko postoji</li>
                        <li>pacijent sa sobom nosi svu medicinsku dokumentaciju i labaratoriju, ne stariju od 3 meseca</li>
                        <li>2-3 sata pre pregleda ne uzimati hranu, a tecnost svesti na minimum</li>
                        <li>izradu individualnog dijetetsko-higijenskog rezima ishrane, plana ishrane, koji dobijate na mail</li>
                        <li>predlog odgovarajuće suplementacije</li>
                        <li><span className='text-green-600 text-2xl font-bold'>podršku da istrajete</span></li>
                        <li className='mt-5 list-none'>
                            <Link to={'/kontakt'} className='text-xl transform ease-in-out transition-colors duration-300 font-baskervville font-bold border-2 hover:bg-green-200 border-green-600 p-2 rounded-lg' >zakažite pregled</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex lg:flex-row flex-col'>
                    <div className='flex flex-col items-center p-5'>
                        <h2 className='text-green-600 text-3xl font-baskervville m-5'>kome je potreban nutričionisticki pregled?</h2>
                        <ul className='text-xl font-baskervville list-disc'>
                            <li>zdravim osobama ili osobama koje zele da detoksikuju svoj organizam</li>
                            <li>osobama sa viškom kilograma</li>
                            <li>osobama sa povišenim krvnim pritiskom</li>
                            <li>osobama sa povišenim holesterolom i trigliceridima</li>
                            <li>osobama sa poremecajem rada štitne žlezde</li>
                            <li>osobama koje imaju insulinsku rezistenciju</li>
                            <li>dijabetičarima</li>
                            <li>osobama sa policisticnim jajnicima,PCOS sindrom</li>
                            <li>osobama koje imaju kandidu</li>
                            <li>trudnicama</li>
                            <li>deci</li>
                        </ul>
                    </div>
                    <img src="KomentarSlika.webp" className='lg:w-[50%] ' alt="Nutrition" />
                </div>
                <div>

                </div>
            </div>

        </motion.div >
    )
}

export default Usluge