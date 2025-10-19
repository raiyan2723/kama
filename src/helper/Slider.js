import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const ImageSlider = () => {

    return (
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
            <SwiperSlide><img style={{ width: 1680 }}
                src="/kamagra-free-delivery.png"
            /></SwiperSlide>
            <SwiperSlide><img style={{ width: 1680 }}
                src="/kamagra-free-delivery.png"
            /></SwiperSlide>
            <SwiperSlide><img style={{ width: 1680 }}
                src="/kamagra-free-delivery.png"
            /></SwiperSlide>
            <SwiperSlide><img style={{ width: 1680 }}
                src="/kamagra-free-delivery.png"
            /></SwiperSlide>
        </Swiper>
    );
};

export default ImageSlider;
