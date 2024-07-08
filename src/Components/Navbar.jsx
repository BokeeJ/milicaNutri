import React from 'react'

function Navbar() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <h1 className='text-4xl m-10 font-medium  p-5 text-gray-600 font-baskervville'>Nutricija za trijumf</h1>
            </div>
            <div>
                <ul className='lg:text-xl flex lg:gap-10 gap-2 font-semibold cursor-pointer text-gray-600 lg:flex-row flex-col'>
                    <li>POCETNA</li>
                    <li>O NAMA</li>
                    <li>USLUGE</li>
                    <li>TRANSFORMACIJA</li>
                    <li>UTISCI</li>
                    <li>KONTAKT</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar