import GameCard from "./GameCard";
import { Link } from "react-router-dom";
import PremiumPriceSection from "./PremiumPriceSection";
import { useState } from "react";

// --- IMPORT DATA ---
import gamesData from "../utils/gameData"; 
import premiumGamesData from "../utils/premiumData"; 
import emoneyData from "../utils/emoneyData";
import streamingData from "../utils/streamingData";
import perdanaData from "../utils/perdanaData";
import dataData from "../utils/dataData";
import voucherData from "../utils/voucherData";
import plnData from "../utils/plnData";
import smsteleponData from "../utils/smsteleponData";
import masaaktifData from "../utils/masaaktifData";
import pulsaData from "../utils/pulsaData";
import tvData from "../utils/tvData";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

export default function GameGrid() {
  const [activeCategory, setActiveCategory] = useState("Games");

  const games = gamesData?.slice(0, 6) || []; 
  const premiumGames = premiumGamesData || [];

  const categories = [
    "Games", "E-Money", "Aktivasi Perdana", "Streaming", "Data",
    "Voucher", "PLN", "Paket SMS & Telepon", "Masa Aktif", "Pulsa", "TV"
  ];

  const categoryIcons = {
    "Games": gamesData, 
    "E-Money": emoneyData,
    "Aktivasi Perdana": perdanaData,
    "Streaming": streamingData,
    "Data": dataData,
    "Voucher": voucherData,
    "PLN": plnData,
    "Paket SMS & Telepon": smsteleponData,
    "Masa Aktif": masaaktifData,
    "Pulsa": pulsaData,
    "TV": tvData,
  };

  const displayedIcons = categoryIcons[activeCategory] || [];

  // --- PERBAIKAN LOGIKA DISINI ---
  // Jika kategori Games, arahkan ke /game/:id. Selain itu ke /product/:id
  const getProductLink = (id) => {
    return activeCategory === "Games" ? `/game/${id}` : `/product/${id}`;
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 pt-0"> 
      
      {/* Hot Items */}
      <div className="flex justify-between items-start mb-6"> 
        <div>
          <h2 className="bg-brand-green text-brand-dark font-primary font-semibold text-h2 px-4 py-1 rounded-lg w-fit">
            Hot Items
          </h2>
          <p className="font-primary text-p text-brand-dark/70 mt-1">
            Produk terpopuler yang paling banyak dicari saat ini
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {games.map((game) => ( 
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      <PremiumPriceSection promoList={premiumGames} />

      {/* Category Tabs */}
      <div className="mt-16">
        <div className="mb-8 border-b border-gray-200"> 
          <Swiper slidesPerView="auto" spaceBetween={6} freeMode={true} modules={[FreeMode]} className="pb-4">
            {categories.map((cat) => (
              <SwiperSlide key={cat} className="!w-auto">
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition ${
                    cat === activeCategory
                      ? "bg-[#B9FF66] text-[#191A23] shadow-md"
                      : "bg-transparent text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-items-center">
          {displayedIcons.map((item, index) => (
            <Link 
              key={item.id || index} 
              to={item.id ? getProductLink(item.id) : '#'} 
              className="flex flex-col items-center w-full group"
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden shadow group-hover:scale-[1.03] transition-transform duration-300 border border-gray-200 bg-white">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="mt-2 w-full flex justify-center">
                <span className="text-[10px] md:text-xs text-center text-gray-700 font-semibold truncate px-2 py-0.5 rounded-full border border-gray-300 bg-gray-50/50 max-w-full">
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}