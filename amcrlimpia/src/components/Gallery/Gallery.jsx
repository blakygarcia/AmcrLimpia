import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './Gallery.css'

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Gallery() {
  return (
    <>
    <div className="row featurette"  data-aos-easing="ease-in-sine" id="Gallery">
            <div class="col-md-6 order-md-4">
                <h1 class="featurette-heading secondTitle">Galeria</h1>
              
            </div>
            <div class="col-md-6 order-md-1">
               

            </div>
            </div>
      <Swiper
      
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="../src/images/1.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/images/2.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/images/3.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/images/4.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/images/5.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/images/6.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/images/7.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/images/8.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/images/9.jpeg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}