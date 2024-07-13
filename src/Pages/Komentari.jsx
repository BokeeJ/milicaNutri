import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Komentari() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}

                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='text-white flex flex-col justify-center items-center h-full gap-5'>
                        <p className='text-xl font-baskervville'>Zahvaljujući Milici, uspela sam da smršam i zadržim željenu težinu. Njeni saveti su jednostavni za praćenje i zaista funkcionišu<br />bravo!</p>
                        <hr className='text-white w-[60%]' />
                        <h2 className='text-3xl font-baskervville'>Dragana</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-white flex flex-col justify-center items-center h-full gap-5'>
                        <p className='text-xl font-baskervville'>Milica je pravi profesionalac! Njeni saveti su mi pomogli da postignem ciljeve i osećam se bolje nego ikad. Toplo je preporučujem svima!</p>
                        <hr className='text-white w-[60%]' />
                        <h2 className='text-3xl font-baskervville'>Nevena</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-white flex flex-col justify-center items-center h-full gap-5'>
                        <p className='text-xl font-baskervville'>Izuzetno sam zadovoljan saradnjom sa Milicom.Uz njenu pomoć, naučio sam kako se pravilno hraniti, i odrzavati kilazu.</p>
                        <hr className='text-white w-[60%]' />
                        <h2 className='text-3xl font-baskervville'>Marko</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-white flex flex-col justify-center items-center h-full gap-5'>
                        <p className='text-xl font-baskervville'>Milica mi je pomogla da korigujem ishranu i poboljšam svoje zdravlje. Njeni programi su prilagođeni individualnim potrebama i veoma su efikasni.</p>
                        <hr className='text-white w-[60%]' />
                        <h2 className='text-3xl font-baskervville'>Ivana</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-white flex flex-col justify-center items-center h-full gap-5'>
                        <p className='text-xl font-baskervville'>Milica je sjajan nutricionista! Uvek je dostupna za pitanja i pruža podršku. Njeni planovi ishrane su detaljni i lako se prate..</p>
                        <hr className='text-white w-[60%]' />
                        <h2 className='text-3xl font-baskervville'>Jelena</h2>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
