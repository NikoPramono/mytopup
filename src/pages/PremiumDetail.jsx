// src/pages/PremiumDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
// --- 1. Import Data dari File Terpisah ---
import premiumGamesData from "../utils/premiumData.js"; 
// Import helper formatCurrency
import { formatCurrency } from "../utils/format";


const payments = [
    { name: "DANA", fee: 1000 },
    { name: "OVO", fee: 1500 },
    { name: "GoPay", fee: 1000 },
    { name: "QRIS", fee: 1000 },
    { name: "Bank BCA", fee: 2000 },
    { name: "Bank Mandiri", fee: 2000 },
];

export default function PremiumDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Cari data premium berdasarkan ID/slug
  const item = premiumGamesData.find(p => p.id === slug);

  const [userId, setUserId] = useState("");
  const [zoneId, setZoneId] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(null);

  // --- 2. Tentukan Persyaratan Zone ID ---
  const requiresZoneId = item?.requiresZoneId ?? true; // Default true jika properti tidak ada

  // --- 3. Perbaiki Logika Validasi Form ---
  const isFormComplete =
    userId && item && selectedPayment !== null &&
    (!requiresZoneId || zoneId); // Jika requiresZoneId true, maka zoneId harus ada

  const handleCheckout = () => {
    if (!isFormComplete) return;

    const selectedPrice = item.newPrice;

    navigate("/checkout", {
      state: {
        game: item.gameName,
        item: item.name, 
        userId,
        // Kirim Zone ID hanya jika diperlukan
        zoneId: requiresZoneId ? zoneId : undefined, 
        package: item.premiumItem, 
        price: selectedPrice,
        payment: payments[selectedPayment].name,
        fee: payments[selectedPayment].fee,
        // Tambahan info untuk checkout:
        isPremium: true,
        seller: item.seller,
      },
    });
  };

  if (!item) {
    // ... (JSX Not Found) ...
    return (
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-red-500">Produk Tidak Ditemukan</h1>
        <p className="text-gray-500 mt-2">ID produk premium yang Anda cari tidak valid.</p>
      </div>
    );
  }
  
  // Hitung total harga untuk tombol checkout
  const totalHargaDenganFee = item.newPrice + (selectedPayment !== null ? payments[selectedPayment].fee : 0);


  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Game Image & Product Info (Kiri) */}
        <div className="w-full md:w-1/3">
          {/* ... (Kode Image dan Card Detail Harga Premium tetap sama, ganti toLocaleString() dengan formatCurrency jika ingin konsisten, tetapi karena ini hanya detail harga, toLocaleString() Anda sudah baik) ... */}
           <img
            src={item.image}
            alt={item.name}
            className="rounded-xl shadow-lg border w-full object-cover"
          />

          <div className="mt-6 p-4 border rounded-xl bg-gray-50 shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-gray-700">Detail Penawaran</h3>
            <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-500">Penjual</span>
                <span className="text-sm font-semibold">{item.seller}</span>
            </div>
            <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-500">Rating</span>
                <span className="text-sm font-semibold text-yellow-500">★ {item.rating}</span>
            </div>
            
            {item.isSpecialOffer && (
                <>
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-500">Harga Normal</span>
                        <span className="text-sm font-semibold text-gray-400 line-through">
                            {formatCurrency(item.oldPrice)}
                        </span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-sm text-red-500 font-semibold">HARGA PROMO!</span>
                        <span className="text-sm text-red-500 font-bold">
                            Hemat {formatCurrency(item.oldPrice - item.newPrice)}
                        </span>
                </div>
                </>
            )}
            
            <hr className="my-2" />
            <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Harga Akhir</span>
                <span className="text-2xl font-extrabold bg-[#191A23] bg-opacity-70 text-[#B9FF66] px-3 py-1 rounded-lg">
                    {formatCurrency(item.newPrice)}
                </span>
            </div>
          </div>

        </div>

        {/* Right Content - Form (Kanan) */}
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold text-[#191A23]">{item.name}</h1>
          <p className="text-gray-500 mt-2 mb-6">Paket premium ini langsung masuk ke akun Anda.</p>

          {/* 1. Masukkan Detail Akun Game */}
          <div className="mb-4 p-4 border rounded-xl bg-blue-50/50">
            <label className="font-bold mb-1 block text-blue-700">1. Masukkan Detail Akun Game</label>
            <p className="text-sm text-gray-500 mb-3">Game: {item.gameName}</p>
            
            <input
              type="text"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 mb-2"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            {/* --- 4. Render Zone ID Kondisional --- */}
            {requiresZoneId && (
            <input
              type="text"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Zone/Server ID"
              value={zoneId}
              onChange={(e) => setZoneId(e.target.value)}
            />
            )}
            {!requiresZoneId && (
                <p className="text-xs text-gray-400 mt-2">Zone/Server ID tidak diperlukan untuk game ini.</p>
            )}
          </div>

          {/* 2. Nominal/Paket (FIXED) */}
          <div className="mb-6 p-4 border rounded-xl bg-[#B9FF66]/50">
            {/* ... (JSX untuk Nominal/Paket tetap sama) ... */}
            <label className="font-bold block mb-2 text-green-800">2. Nominal/Paket (Sudah Terpilih)</label>

            <div className="border border-[#B9FF66] rounded-lg p-3 bg-white flex justify-between items-center">
              <div>
                <span className="font-bold text-lg block">{item.premiumItem}</span>
                <span className="text-gray-500 text-sm">{item.gameName}</span>
              </div>
              <div className="text-[#191A23] font-bold text-xl">
                {formatCurrency(item.newPrice)}
              </div>
            </div>
          </div>

          {/* 3. Payment Methods (TETAP SAMA) */}
          <div className="mb-8 p-4 border rounded-xl bg-yellow-50/50">
            {/* ... (JSX untuk Payment Methods tetap sama) ... */}
            <label className="font-bold block mb-3 text-yellow-700">
              3. Pilih Metode Pembayaran
            </label>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {payments.map((pay, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedPayment(i)}
                  className={`border rounded-lg p-3 cursor-pointer transition shadow-sm hover:shadow-md text-center
                    ${
                      selectedPayment === i
                        ? "border-yellow-600 bg-yellow-100 ring-2 ring-yellow-400"
                        : "bg-white"
                    }`}
                >
                  <div className="font-bold">{pay.name}</div>
                  <div className="text-gray-500 text-xs">
                    Fee: {formatCurrency(pay.fee)}
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Checkout Button */}
          <button
            disabled={!isFormComplete}
            onClick={handleCheckout}
            className={`w-full py-4 rounded-xl font-bold text-xl transition shadow-lg
              ${
                isFormComplete
                  ? "bg-[#191A23] text-[#B9FF66] hover:bg-gray-800"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            Bayar {formatCurrency(totalHargaDenganFee)}
          </button>
        </div>
      </div>
    </div>
  );
}