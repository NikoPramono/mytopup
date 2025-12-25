// src/pages/OrderHistory.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { timeAgo, formatCurrency } from "../utils/format"; 
import gamesData from "../utils/gameData"; 

const gameImagesMap = gamesData.reduce((acc, game) => {
    acc[game.name] = game.image; 
    return acc;
}, {});

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const raw = JSON.parse(localStorage.getItem("orders") || "[]");
    const normalized = raw.map(o => ({
      ...o,
      createdAt: o.createdAt || new Date().toISOString(),
      total: o.total || (o.price || 0) + (o.fee || 0), 
      image: o.image || gameImagesMap[o.game] || null, 
    }));

    normalized.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setOrders(normalized);
  }, []);

  const getStatusStyles = (s) => {
    if (s === "Pending") return "bg-yellow-400 border-yellow-600 text-black";
    if (s === "Processing") return "bg-blue-400 border-blue-600 text-white";
    if (s === "Success") return "bg-[#B9FF66] border-[#191A23] text-black";
    return "bg-gray-200 border-gray-400 text-gray-700";
  };

  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 font-primary">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <h1 className="text-4xl font-black uppercase italic leading-none text-[#191A23]">
            Riwayat <span className="text-blue-600">Pesanan</span>
          </h1>
          <p className="text-gray-500 font-bold mt-2 uppercase text-sm tracking-widest">
            Pantau status top-up kamu di sini
          </p>
        </div>
        <Link 
          to="/" 
          className="px-6 py-3 bg-[#B9FF66] border-4 border-[#191A23] font-black uppercase text-sm shadow-[4px_4px_0_0_#191A23] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all inline-block text-center"
        >
          Belanja Lagi
        </Link>
      </div>

      {orders.length === 0 ? (
        <div className="bg-white border-4 border-[#191A23] p-12 rounded-3xl shadow-[12px_12px_0_0_#191A23] text-center">
          <div className="text-6xl mb-4">📦</div>
          <p className="text-[#191A23] font-black text-xl uppercase">Belum ada transaksi</p>
          <p className="text-gray-500 font-bold mt-2">Mungkin ini saatnya kamu Top Up pertama kali!</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {orders.map(o => (
            <Link
              key={o.id}
              to={`/orders/${o.id}`}
              className="group relative bg-white border-4 border-[#191A23] rounded-2xl p-5 shadow-[8px_8px_0_0_#191A23] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col sm:flex-row items-center gap-6"
            >
              {/* Game Icon */}
              <div className="relative flex-shrink-0">
                <img
                  src={o.image || "https://via.placeholder.com/150"}
                  alt={o.game}
                  className="w-20 h-20 rounded-xl object-cover border-4 border-[#191A23] z-10 relative bg-white"
                />
                <div className="absolute -inset-1 bg-blue-600 rounded-xl rotate-6 group-hover:rotate-0 transition-transform"></div>
              </div>

              {/* Main Info */}
              <div className="flex-grow text-center sm:text-left min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                  <h3 className="font-black text-xl uppercase truncate text-[#191A23]">
                    {o.game}
                  </h3>
                  <span className={`text-[10px] font-black px-3 py-1 rounded-full border-2 border-[#191A23] uppercase w-fit mx-auto sm:mx-0 ${getStatusStyles(o.status)}`}>
                    {o.status}
                  </span>
                </div>
                <p className="text-gray-500 font-bold text-sm uppercase mb-2">
                  {o.package}
                </p>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">
                   ID: {o.userId} • {o.id}
                </div>
              </div>

              {/* Price & Time */}
              <div className="flex-shrink-0 text-center sm:text-right border-t-2 sm:border-t-0 sm:border-l-2 border-[#191A23] border-dashed pt-4 sm:pt-0 sm:pl-6 w-full sm:w-auto">
                <div className="text-2xl font-black text-blue-600">
                  {formatCurrency(o.total)}
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase mt-1">
                  {timeAgo(o.createdAt)}
                </div>
              </div>

              {/* Arrow Decoration */}
              <div className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}