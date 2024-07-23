import React from 'react'
import { motion } from 'framer-motion'
function Utisci() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }} className='m-2 relative'>
            <div className='absolute inset-0 bg-[url(/e.webp)] bg-center bg-cover opacity-60 bg-blur'></div>
            <div className='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent rounded-md'></div>
            <div className='absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent rounded-md'></div>
            <div className='absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent rounded-md'></div>
            <div className='absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent rounded-md'></div>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='text-black m-5 text-6xl font-pisano relative'>Utisci</h1>
                <hr className='border border-green-600 w-[80%] relative' />
            </div>
            <div className='p-10 z-10 relative text-black lg:text-xl font-baskervville font-bold'>
                <div className='flex flex-col '>
                    <h1 className='text-black m-5 text-3xl'>Ivana Jovanović</h1>
                    <p className=''>Milice, hvala ti što si mi pomogla da promenim svoj način ishrane i poboljšam zdravlje. Tvoj pristup je uvek bio profesionalan i pun razumevanja, a tvoji saveti su mi zaista koristili. Zahvaljujući tebi, sada se osećam energičnije i zdravije nego ikada pre. Preporučujem te svim svojim prijateljima koji žele da poboljšaju svoju ishranu.</p>

                </div>
                <div>
                    <h1 className='text-black m-5 text-3xl'>Dejan Fogl</h1>
                    <p className=''>Milice, tvoji saveti su mi pomogli da se bolje organizujem i izbalansiram ishranu. Tvoj pristup je uvek bio temeljan i pažljiv, a tvoje smernice su mi donele pozitivne promene. Hvala ti na tvojoj stručnosti i podršci.</p>
                </div>
                <div>
                    <h1 className='text-black m-5 text-3xl'>Marija Božić</h1>
                    <p className=''>Tvoje znanje i strpljenje su mi pomogli da napravim promene u svojoj ishrani koje su mi značajno poboljšale kvalitet života. Tvoj pristup je uvek personalizovan i osećam se podržano na svakom koraku. Hvala ti na svemu što si učinila za mene.</p>
                </div>
                <div>
                    <h1 className='text-black m-5 text-3xl'>Đorđe Antonijević</h1>
                    <p className=''>Ne znam kako bih bez tebe! Pre nego što sam te upoznao, moj obrok dana su bile grickalice ispred televizora. Sada, zahvaljujući tvojim savetima, jedem kao pravi nutricionistički šampion! Hvala ti što si me naučila da povrće može biti ukusno i što si me spasila od večitog života na brzinskoj hrani.</p>
                </div>

            </div>

        </motion.div>
    )
}

export default Utisci