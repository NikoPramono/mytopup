import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { formatDateISO } from "../utils/format";

export default function Success() {
  const location = useLocation();
  const order = location.state;
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!order) return;

    // === PROGRESS BAR ANIMATION ===
    let p = 0;
    const interval = setInterval(() => {
      p += 2; // Kecepatan progress bar
      setProgress(Math.min(p, 100));
      if (p >= 100) clearInterval(interval);
    }, 100);

    // === SIMULASI STATUS UPDATE ===
    const t1 = setTimeout(() => {
      updateOrderStatus(order.id, "Processing");
      setStatus("Processing");
    }, 3000);

    const t2 = setTimeout(() => {
      updateOrderStatus(order.id, "Success");
      setStatus("Success");
      setProgress(100);
    }, 7000);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [order]);

  function updateOrderStatus(id, newStatus) {
    const stored = JSON.parse(localStorage.getItem("orders") || "[]");
    const upd = stored.map((o) =>
      o.id === id ? { ...o, status: newStatus } : o
    );
    localStorage.setItem("orders", JSON.stringify(upd));
  }

  if (!order) {
    return (
      <div className="max-w-lg mx-auto px-6 py-40 text-center font-primary">
        <div className="bg-white border-4 border-[#191A23] p-10 rounded-3xl shadow-[8px_8px_0_0_#191A23]">
          <h1 className="text-3xl font-black mb-4 uppercase">Data Kosong</h1>
          <p className="text-gray-500 font-bold mb-8">Tidak ada transaksi yang baru saja dilakukan.</p>
          <Link to="/" className="bg-[#B9FF66] border-2 border-[#191A23] px-6 py-2 rounded-xl font-bold shadow-[4px_4px_0_0_#191A23]">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  const isPremium = order.isPremium || false;

  return (
    <div className="max-w-xl mx-auto px-6 pt-32 pb-20 font-primary">
      <div className="bg-white border-4 border-[#191A23] rounded-3xl p-8 shadow-[12px_12px_0_0_#191A23] text-center">
        
        {/* ICON STATUS */}
        <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full border-4 border-[#191A23] bg-[#B9FF66] shadow-[4px_4px_0_0_#191A23]">
           <span className="text-3xl">🚀</span>
        </div>

        <h1 className="text-3xl font-black text-[#191A23] uppercase italic mb-2">
          {status === "Success" ? "Transaksi Berhasil!" : "Sedang Diproses"}
        </h1>
        <p className="text-gray-500 font-bold mb-8">
          Pesanan <span className="text-[#191A23] underline">#{order.id}</span> sedang kami validasi secara otomatis.
        </p>

        {/* NEO-BRUTALISM PROGRESS BAR */}
        <div className="relative w-full h-8 bg-gray-100 border-4 border-[#191A23] rounded-full overflow-hidden mb-8">
          <div 
            className="h-full bg-[#B9FF66] transition-all duration-500 ease-out border-r-4 border-[#191A23]" 
            style={{ width: `${progress}%` }} 
          />
          <span className="absolute inset-0 flex items-center justify-center text-xs font-black uppercase italic">
            {progress}% COMPLETED
          </span>
        </div>

        {/* STATUS & TIME CHIPS */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-white border-2 border-[#191A23] px-4 py-2 rounded-xl shadow-[4px_4px_0_0_#191A23]">
            <p className="text-[10px] font-black uppercase text-gray-400 leading-none">Status</p>
            <p className={`font-black uppercase ${
              status === "Pending" ? "text-orange-500" :
              status === "Processing" ? "text-blue-600" : "text-green-600"
            }`}>{status}</p>
          </div>
          <div className="bg-white border-2 border-[#191A23] px-4 py-2 rounded-xl shadow-[4px_4px_0_0_#191A23]">
            <p className="text-[10px] font-black uppercase text-gray-400 leading-none">Waktu</p>
            <p className="font-black text-[#191A23] uppercase">{formatDateISO(order.createdAt)}</p>
          </div>
        </div>

        {/* TRANSACTION CARD */}
        <div className="text-left bg-[#191A23] text-white p-6 rounded-2xl border-4 border-[#191A23] shadow-[8px_8px_0_0_#B9FF66] mb-8">
          <h2 className="text-lg font-black text-[#B9FF66] uppercase mb-4 border-b border-[#B9FF66]/30 pb-2">
            Ringkasan Transaksi
          </h2>
          
          <div className="space-y-2 font-bold text-sm">
            <div className="flex justify-between border-b border-white/10 pb-1">
              <span className="text-gray-400">Produk</span>
              <span>{order.game}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-1">
              <span className="text-gray-400">Item</span>
              <span>{order.package}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-1">
              <span className="text-gray-400">Target</span>
              <span className="text-[#B9FF66]">{order.userId} {order.zoneId ? `(${order.zoneId})` : ""}</span>
            </div>
            
            <div className="pt-4 flex justify-between items-end">
              <span className="text-gray-400 uppercase text-xs">Total Pembayaran</span>
              <span className="text-2xl font-black text-[#B9FF66]">
                Rp {order.total?.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/orders"
            className="bg-white border-4 border-[#191A23] text-[#191A23] px-6 py-4 rounded-2xl font-black uppercase shadow-[4px_4px_0_0_#191A23] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            Riwayat
          </Link>
          <Link
            to="/"
            className="bg-[#B9FF66] border-4 border-[#191A23] text-[#191A23] px-6 py-4 rounded-2xl font-black uppercase shadow-[4px_4px_0_0_#191A23] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}