'use client'
import { RestaurantEvent } from "@prisma/client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
interface BannerSliderProps {
    banners: RestaurantEvent[]
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
            className="mySwiper">
            {banners.map(banner => (
                <SwiperSlide key={banner.id}>
                    <div className="relative w-full h-[180px] sm:h-[250px] md:h-[320px] lg:h-[400px] mt-2">
                        <Image
                            fill
                            src={banner.bannerUrl}
                            alt={banner.eventName}
                            className="rounded-lg "
                            style={{
                                "objectFit": "cover",
                            }}
                            sizes="(max-width: 768) 100vw, 700px"
                        />
                    </div>
                </SwiperSlide>
            ))}


        </Swiper>
    )
}

export default BannerSlider