import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="/2.webp" alt='Slika1' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/3.webp" alt='Slika2' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/4.webp" alt='Slika3' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/5.webp" alt='Slika5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/6.webp" alt='Slika5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/profil.webp" alt='Slika6' />
                </SwiperSlide>
            </Swiper>
        </>
    );
}


{/* <SwiperSlide>
                            <img src="/2.webp" alt='Slika1' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/3.webp" alt='Slika2' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/4.webp" alt='Slika3' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/5.webp" alt='Slika5' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/6.webp" alt='Slika5' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/profil.webp" alt='Slika6' />
                        </SwiperSlide> */}

