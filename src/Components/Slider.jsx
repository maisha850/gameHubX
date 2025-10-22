import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
    return (
         <div className="w-full max-w-5xl mx-auto my-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className=" md:h-143 w-full rounded-2xl overflow-hidden shadow-lg"
      >
        <SwiperSlide>
            <img className='' src="https://wallpapers.com/images/featured/pubg-go20ghrcj4ybxhvq.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://www.dexerto.com/cdn-image/wp-content/uploads/2022/05/10/mobile-legends-benedetta-cover-art.jpg?width=1200&quality=60&format=auto" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://wallpapers.com/images/featured/free-fire-gi0jpopdq4b0q5aj.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Slider;