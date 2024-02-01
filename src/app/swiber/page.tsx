"use client"
import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../globals.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { popular } from '../data';
import Image from 'next/image';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          1200: {
            // slidesPerGroup: 2,
            slidesPerView: 5,
            spaceBetween:1,
          } ,320: {
            slidesPerView: 1,
            spaceBetween:1,
          },
          // when window width is >= 480px
          400: {
            slidesPerView: 1.5,
            spaceBetween:1,
          },
          // when window width is >= 640px
          500: { slidesPerView: 2,
            spaceBetween:1,},
            600: { slidesPerView: 2.5,
              spaceBetween:1,},
              700: { slidesPerView: 3,
                spaceBetween:1,},
                925: { slidesPerView: 4,
                  spaceBetween:1,},
      

        }}
        scrollbar={true}
        navigation={true}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <div className="flex mb-2 justify-center absolute top-[70px] right-0   w-[90%] " >
  {
    popular&&popular.map((i,o)=>(
                      <SwiperSlide key={o}>

      <div className={`cursor-pointer h-[250px] overflow-hidden flex flex-col justify-center bg-[${i.color}]   hover:scale-105 transform transition duration-300 ease-out  w-[200px] h-[300px]`}>
                        <Image className="w-[200px] h-[200px] " src={i.img}  width={500} height={500} alt="Image"/> 

        <div className="pt-4 pb-4 text-center">
    <h1>{i.title}</h1>
    <p>{i.explan}</p>
    <p>{i.price}</p>
</div>
                    </div>
        </SwiperSlide>
                ))
              }       
              </div>
      </Swiper>
    </>
  );
}
