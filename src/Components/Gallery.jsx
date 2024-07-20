
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../swiper.style.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


function Gallery() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='m-5 p-5'>
                <h1 className='text-6xl font-pisano'>Galerija</h1>
                <hr className='border-green-600 border w-[300px] mt-4' />
            </div>
            <div className='lg:w-[50%] flex justify-center p-5 '>
                <>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={false}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper rounded-2xl"
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
            </div>

        </div>
    )
}

export default Gallery