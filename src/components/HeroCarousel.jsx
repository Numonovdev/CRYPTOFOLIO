import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules"; 
import { Autoplay } from "swiper/modules"
import sampleImage from "../components/img.png";

function HeroCarousel() {
  
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,         disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="w-[80px] lg:w-[120px] h-[80px] sm:h-[110px] md:h-[137px] flex flex-col gap-3 items-center justify-between">
          <img src={sampleImage} loading="lazy" alt="ETH Icon" className="w-10 md:w-20" />
          <div className="text-white flex flex-col gap-1 items-center">
            <p className="text-[10px] sm:text-[16px]">
              ETH <span className="text-[#0ECB81] font-medium">+1.66%</span>
            </p>
            <p className="font-Roboto text-[16px] sm:text-[21px] font-medium">
              159,249.00
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[80px] lg:w-[120px] h-[80px] sm:h-[110px] md:h-[137px] flex flex-col gap-3 items-center justify-between">
          <img src={sampleImage} loading="lazy" alt="ETH Icon" className="w-10 md:w-20" />
          <div className="text-white flex flex-col gap-1 items-center">
            <p className="text-[10px] sm:text-[16px]">
              ETH <span className="text-[#0ECB81] font-medium">+1.66%</span>
            </p>
            <p className="font-Roboto text-[16px] sm:text-[21px] font-medium">
              159,249.00
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[80px] lg:w-[120px] h-[80px] sm:h-[110px] md:h-[137px] flex flex-col gap-3 items-center justify-between">
          <img src={sampleImage} loading="lazy" alt="ETH Icon" className="w-10 md:w-20" />
          <div className="text-white flex flex-col gap-1 items-center">
            <p className="text-[10px] sm:text-[16px]">
              ETH <span className="text-[#0ECB81] font-medium">+1.66%</span>
            </p>
            <p className="font-Roboto text-[16px] sm:text-[21px] font-medium">
              159,249.00
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[80px] lg:w-[120px] h-[80px] sm:h-[110px] md:h-[137px] flex flex-col gap-3 items-center justify-between">
          <img src={sampleImage} loading="lazy" alt="ETH Icon" className="w-10 md:w-20" />
          <div className="text-white flex flex-col gap-1 items-center">
            <p className="text-[10px] sm:text-[16px]">
              ETH <span className="text-[#0ECB81] font-medium">+1.66%</span>
            </p>
            <p className="font-Roboto text-[16px] sm:text-[21px] font-medium">
              159,249.00
            </p>
          </div>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div className="w-[80px] lg:w-[120px] h-[80px] sm:h-[110px] md:h-[137px] flex flex-col gap-3 items-center justify-between">
          <img src={sampleImage} loading="lazy" alt="ETH Icon" className="w-10 md:w-20" />
          <div className="text-white flex flex-col gap-1 items-center">
            <p className="text-[10px] sm:text-[16px]">
              ETH <span className="text-[#0ECB81] font-medium">+1.66%</span>
            </p>
            <p className="font-Roboto text-[16px] sm:text-[21px] font-medium">
              159,249.00
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroCarousel;