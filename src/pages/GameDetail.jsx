// src/pages/GameDetail.jsx

import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import gamesData from "../utils/gameData";
// Import fungsi format currency
import { formatCurrency } from "../utils/format"; 


export default function GameDetail() {
  // Menggunakan 'slug' karena Anda mendefinisikannya seperti itu di sini. 
  // Pastikan rute Anda di App.jsx adalah <Route path="/game/:slug" element={<GameDetail />} />
  const { slug: id } = useParams(); 
  const navigate = useNavigate();

  // --- CARI DATA GAME DARI ARRAY TERPUSAT ---
  const game = useMemo(() => {
    // Cek apakah gamesData ada dan ID tidak kosong sebelum mencari
    if (!id || id === "") return null;
    return gamesData.find(g => g.id === id);
  }, [id]); 

  const [userId, setUserId] = useState("");
  const [zoneId, setZoneId] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const options = game?.currencies || []; 
  const requiresZoneId = game?.requiresZoneId ?? false; 

  // Data Pembayaran Tetap
  const payments = [
    // Menggunakan ID yang unik (meskipun opsional, ini adalah praktik terbaik)
    { id: 'dana', name: "DANA", fee: 1000 },
    { id: 'ovo', name: "OVO", fee: 1500 },
    { id: 'gopay', name: "GoPay", fee: 1000 },
    { id: 'qris', name: "QRIS", fee: 1000 },
    { id: 'bca', name: "Bank BCA", fee: 2000 },
    { id: 'mandiri', name: "Bank Mandiri", fee: 2000 },
  ];

  // LOGIKA VALIDASI FORM
  const isFormComplete =
    userId && selectedAmount !== null && selectedPayment !== null &&
    (!requiresZoneId || zoneId);

  // Tangani Game Not Found (Penanganan error yang Anda buat)
  if (!game) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center border rounded-xl shadow-lg bg-gray-50">
        <h1 className="text-3xl font-bold mb-4 text-red-600">⚠️ Game Tidak Ditemukan</h1>
        {/* Menampilkan ID yang bermasalah */}
        <p className="text-gray-600">
             ID game **"{id}"** tidak ada dalam daftar data Top-Up yang tersedia.
        </p> 
        <Link to="/" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Kembali ke Home
        </Link>
      </div>
    );
  }

  const handleCheckout = () => {
    if (!isFormComplete) return;

    navigate("/checkout", {
      state: {
        game: game.name,
        userId,
        zoneId: requiresZoneId ? zoneId : undefined, 
        package: options[selectedAmount].label,
        price: options[selectedAmount].price,
        payment: payments[selectedPayment].name,
        fee: payments[selectedPayment].fee,
        isPremium: false, 
      },
    });
  };
  
  const totalHargaDenganFee = selectedAmount !== null 
    ? options[selectedAmount].price + (selectedPayment !== null ? payments[selectedPayment].fee : 0)
    : 0;

  // --- JSX COMPONENT RENDER ---
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Game Image */}
        <div className="w-full md:w-1/3">
          <img
            src={game.image}
            alt={game.name}
            className="rounded-xl shadow-lg border"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-bold">{game.name}</h1>
          <p className="text-gray-500 mt-2 mb-6">Top up cepat & aman.</p>

          {/* User ID */}
          <div className="mb-4 p-4 border rounded-xl bg-blue-50/50">
            <label className="font-bold mb-1 block text-blue-700">1. Masukkan User ID</label>
            <p className="text-sm text-gray-500 mb-3">Game: {game.name}</p>
            <input
              type="text"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 mb-2"
              placeholder="Masukkan User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          
          {/* Zone ID (Conditional Render) */}
          {requiresZoneId && (
            <input
              type="text"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Masukkan Zone/Server ID"
              value={zoneId}
              onChange={(e) => setZoneId(e.target.value)}
            />
          )}
          {!requiresZoneId && (
            <p className="text-xs text-gray-400 mt-2">Zone/Server ID tidak diperlukan untuk game ini.</p>
          )}
          </div>

          {/* Package Options */}
          <div className="mb-6 p-4 border rounded-xl bg-green-50/50">
            <label className="font-bold block mb-2 text-green-700">2. Pilih Nominal</label>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {options.map((opt, i) => (
                <div
                  key={opt.id || i} 
                  onClick={() => setSelectedAmount(i)}
                  className={`border rounded-lg p-4 cursor-pointer transition shadow-sm hover:shadow-md
                    ${
                      selectedAmount === i
                        ? "border-green-600 bg-green-100 ring-2 ring-green-400"
                        : "bg-white"
                    }`}
                >
                  <div className="font-bold">{opt.label}</div> 
                  <div className="text-gray-700 font-semibold">
                    {formatCurrency(opt.price)} {/* MENGGUNAKAN formatCurrency */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-8 p-4 border rounded-xl bg-yellow-50/50">
            <label className="font-bold block mb-3 text-yellow-700">
              3. Pilih Metode Pembayaran
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {payments.map((pay, i) => (
                <div
                  key={pay.id || i} // Menggunakan ID yang ditambahkan di atas
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
                    Fee: {formatCurrency(pay.fee)} {/* MENGGUNAKAN formatCurrency */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Checkout Button */}
          <button
            disabled={!isFormComplete}
            onClick={handleCheckout}
            className={`w-full py-3 rounded-lg font-semibold text-lg transition 
              ${
                isFormComplete
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            Lanjut Pembayaran (Total: {formatCurrency(totalHargaDenganFee)}) {/* MENGGUNAKAN formatCurrency */}
          </button>
        </div>
      </div>
    </div>
  );
}