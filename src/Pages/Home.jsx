import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Home() {
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
            <div className='flex lg:flex-row flex-col'>
                <div className=' flex flex-col items-center p-5'>
                    <h1 className='text-4xl font-bold text-gray-800 font-pisano'>O NAMA</h1>
                    <p className='text-xl text-gray-600 font-serif text-center mt-5'>Zdravo, moje ime je Milica Dzelebdžić i diplomirani sam nutricionista-dijetetičar posvećen unapređenju vašeg zdravlja kroz pravilnu ishranu. Već godinama radim sa pojedincima svih uzrasta, pomažući im da dostignu ciljeve poput gubitka težine i poboljšanja zdravstvenog stanja. Kroz personalizovane planove ishrane i edukaciju o hrani, pružam alate za trajne promene. Moj pristup je zasnovan na naučnim principima i prilagođen vašim specifičnim potrebama. Dozvolite mi da budem vaš vodič ka zdravijem i srećnijem životu.</p>
                    <Link className='border-2 border-green-600 p-2 rounded-full mt-2 font-serif font-semibold' to={'onama'}>Više o nama</Link>
                </div>
                <div>
                    <img className='w-[300px] h-[300px]' src="/dijete.jpg" alt="Dijete" />
                </div>
            </div>
        </div>
    );
}

export default Home;
