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
                    <img src="/4.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/5.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/6.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/a.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/b.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/c.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/d.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/e.webp" />
                </SwiperSlide>

            </Swiper>
        </>
    );
}
