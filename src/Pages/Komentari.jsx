import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='flex flex-col text-center font-baskervville'>
                    <h1 className='text-2xl'>Smoothie od Spanaca i Banana</h1>
                    <ul className='list-disc p-5'>
                        <li>1 šaka svežeg spanaća</li>
                        <li>1 banana</li>
                        <li>1 šolja bademovog mleka (ili bilo kog biljnog mleka)
                        </li>
                        <li>1 kašika chia semenki</li>
                        <li>1 kašika meda (po želji)</li>
                        <li>1/2 šolje kockica leda</li>
                    </ul>


                </SwiperSlide>
                <SwiperSlide className='flex flex-col text-center font-baskervville'>
                    <h1 className='text-2xl'>Grčki Jogurt sa Medom i Orašastim Plodovima</h1>
                    <ul className='list-disc p-5'>
                        <li>šolja grčkog jogurta</li>
                        <li>2 kašike meda</li>
                        <li>1/4 šolje iseckanih oraha (badema, oraha ili pistaća)
                        </li>
                        <li>Sveže voće (npr. jagode, borovnice)</li>
                    </ul>
                </SwiperSlide>

                <SwiperSlide className='flex flex-col text-center font-baskervville'>
                    <h1 className='text-2xl'>Piletina sa Mediteranskim Začinima</h1>
                    <ul className='list-disc p-5'>
                        <li>4 pileća fileta</li>
                        <li>2 kašike maslinovog ulja</li>
                        <li>1 kašika origana
                        </li>
                        <li>1 kašika majčine dušice</li>
                        <li>2 čena belog luka, mlevena</li>
                    </ul>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col text-center font-baskervville'>
                    <h1 className='text-2xl'> Ovsene Pogačice sa Suvim Voćem</h1>
                    <ul className='list-disc p-5'>
                        <li>1 šolja ovsene pahuljice</li>
                        <li>1/2 šolje brašna</li>
                        <li>1/4 šolje meda
                        </li>
                        <li>1/4 šolje kokosovog ulja</li>
                        <li>1/2 šolje sušenih brusnica ili grožđica</li>
                        <li>1/2 kašičice praška za pecivo</li>
                        <li>Prstohvat soli</li>
                    </ul>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
