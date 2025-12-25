// src/components/PremiumPriceSection.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation, Pagination } from "swiper/modules";
import PremiumPriceCard from "./PremiumPriceCard";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PremiumPriceSection({ promoList }) {
  if (!promoList || promoList.length === 0) return null;

  return (
    <div className="mb-12 mt-8 font-primary relative"> {/* Jarak diperkecil */}
      
      {/* HEADER */}
      <div className="flex justify-between items-start mb-6"> {/* diperkecil lagi */}
        <div>
          <h2 className="bg-brand-green text-brand-dark font-primary font-semibold text-h2 px-4 py-1 rounded-lg w-fit">
            Premium Price
          </h2>
          <p className="font-primary text-p text-brand-dark/70 mt-1">
            Special prices from our partner just for you in this platform
          </p>
        </div>
      </div>

      {/* SWIPER WRAPPER */}
      <div className="relative">

        <Swiper
          modules={[FreeMode, Autoplay, Navigation, Pagination]}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={6}      // diperkecil dari 8 → 6
          slidesPerView={"auto"}
          className="premium-price-swiper pb-5"
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            el: ".premium-pagination",
            clickable: true,
            dynamicBullets: true,
          }}
        >
          {promoList.map((premium) => (
            <SwiperSlide
              key={premium.id}
              className="!w-[210px] sm:!w-[230px] lg:!w-[250px]" // diperkecil 10px
            >
              <PremiumPriceCard premium={premium} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* PAGINATION SLIDER BAWAH */}
      <div className="premium-pagination flex justify-center mt-3"></div>

      {/* NAV BUTTONS */}
      <div className="absolute top-1/2 -translate-y-[10%] left-0 right-0 pointer-events-none z-10 hidden md:block">
        
        <button className="swiper-button-prev-custom absolute left-[-16px] w-9 h-9 rounded-full bg-white shadow-md pointer-events-auto flex items-center justify-center text-lg text-gray-800 transition hover:bg-gray-100">
          &#10094;
        </button>

        <button className="swiper-button-next-custom absolute right-[-16px] w-9 h-9 rounded-full bg-white shadow-md pointer-events-auto flex items-center justify-center text-lg text-gray-800 transition hover:bg-gray-100">
          &#10095;
        </button>

      </div>
    </div>
  );
}
