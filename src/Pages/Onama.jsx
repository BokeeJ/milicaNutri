import React from 'react'
import Gallery from '../Components/Gallery'
import { Link } from 'react-router-dom'

function Onama() {
    return (
        <div className='flex flex-col items-center'>
            <div className='m-5 p-5'>
                <h1 className='text-6xl font-pisano'>O meni</h1>
                <hr className='border-green-600 border w-[300px] mt-4' />
            </div>

            <div className='flex lg:flex-row flex-col justify-around p-5 items-center'>
                <div className='lg:w-[50%] flex flex-col items-center justify-center'>


                    <p className='lg:p-10 text-center lg:text-left p-5 font-baskervville text-xl font-bold'>
                        Šta ako vam kažem da možete da jedete ukusne namirnice, a da izgledate vitko, osećate se zdravo i budete zdravi?<br />
                        <br />

                        Gajim veliku ljubav prema zdravoj ishrani i velika želja da zajedno stvaramo i delimo svoje znanje.
                        <br />
                        <br />

                        Na osnovu opšte i nutritivne anamneze radim izradu personalizovanog jelovnika, prilagodjenog pojedincu i njegovom zdravstvenom stanju. Uz moje praćenje i podršku, dolazimo do vaših željenih rezultata, trajnih promena navika, a što je najvažnije na potpuno zdrav način.
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
            <div>
                <Gallery />
            </div>
        </div>
    )
}

export default Onama