"use client";
import { RestaurantEvent } from "@prisma/client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";
interface BannerSliderProps {
  banners: RestaurantEvent[];
}

const BannerSlider = ({ banners }: BannerSliderProps) => {
  return (
    <Swiper
      spaceBetween={20}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className='mySwiper'
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <div className='relative aspect-video w-full max-h-[320px] mt-2'>
            <Image
              fill
              src={banner.bannerUrl}
              alt={banner.eventName}
              className='md:rounded-lg md:px-5'
              style={{
                objectFit: "cover",
              }}
              sizes='(max-width: 768) 100vw, 700px'
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
