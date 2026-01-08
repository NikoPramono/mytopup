import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatCurrency } from "../utils/format";

export default function Checkout() {
  const { state: order } = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!order || (!order.price && !order.total)) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-40 text-center font-primary">
        <h1 className="text-4xl font-black text-[#191A23] mb-4">PESANAN KOSONG 😅</h1>
        <p className="text-gray-500 font-bold mb-8">Silakan pilih produk kembali dari halaman utama.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-[#B9FF66] border-4 border-[#191A23] px-8 py-3 rounded-2xl font-black shadow-[8px_8px_0_0_#191A23]"
        >
          KEMBALI KE HOME
        </button>
      </div>
    );
  }

  const itemPrice = order.total || order.price || 0;
  const adminFee = order.fee || 0;
  const grandTotal = itemPrice + adminFee;

  // --- FUNGSI UTAMA INTEGRASI MIDTRANS ---
  const handleCreateOrder = async () => {
    setIsLoading(true);
    const orderId = `INV-${Date.now()}`;

    try {
      // 1. Panggil API Serverless Vercel (/api/pembayaran.js)
      const response = await fetch("/api/pembayaran", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: orderId,
          grossAmount: grandTotal,
          customerName: order.userId || order.input,
        }),
      });

      const data = await response.json();

      if (data.token) {
        // 2. Munculkan Snap Pop-up
        window.snap.pay(data.token, {
          onSuccess: function (result) {
            const orderObj = {
              id: orderId,
              game: order.game || order.name,
              package: order.package || order.denomination,
              price: itemPrice,
              total: grandTotal,
              status: "Success",
              createdAt: new Date().toISOString(),
            };
            
            // Simpan ke LocalStorage sebagai history
            const existing = JSON.parse(localStorage.getItem("orders") || "[]");
            existing.push(orderObj);
            localStorage.setItem("orders", JSON.stringify(existing));

            navigate("/success", { state: orderObj });
          },
          onPending: function (result) {
            console.log("Waiting for payment...", result);
            alert("Silakan selesaikan pembayaran Anda di aplikasi pilihan.");
          },
          onError: function (result) {
            console.error("Payment Error:", result);
            alert("Pembayaran gagal, silakan coba lagi.");
          },
          onClose: function () {
            alert("Anda menutup jendela pembayaran sebelum selesai.");
          }
        });
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      alert("Gagal memproses pesanan. Pastikan koneksi internet stabil.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-20 font-primary">
      <h1 className="text-4xl font-black mb-8 uppercase italic">Checkout</h1>

      <div className="grid gap-6">
        {/* Detail Pesanan Card */}
        <div className="bg-white border-4 border-[#191A23] p-6 rounded-3xl shadow-[8px_8px_0_0_#191A23]">
          <h2 className="text-xl font-black mb-4 uppercase border-b-4 border-[#191A23] pb-2 w-fit">Detail Pesanan</h2>
          <div className="space-y-3 font-bold">
            <div className="flex justify-between text-sm md:text-base">
              <span className="text-gray-500">Produk</span>
              <span className="text-right uppercase">{order.game || order.name}</span>
            </div>
            <div className="flex justify-between text-sm md:text-base">
              <span className="text-gray-500">Paket</span>
              <span className="text-right uppercase">{order.package || order.denomination}</span>
            </div>
            <div className="flex justify-between text-sm md:text-base">
              <span className="text-gray-500">User ID</span>
              <span className="bg-[#B9FF66] px-2 border-2 border-[#191A23] rounded-lg">
                {order.userId || order.input}
              </span>
            </div>
          </div>
        </div>

        {/* Ringkasan Harga Card */}
        <div className="bg-white border-4 border-[#191A23] p-6 rounded-3xl shadow-[8px_8px_0_0_#B9FF66]">
          <h2 className="text-xl font-black mb-4 uppercase">Rincian Harga</h2>
          <div className="space-y-3 font-bold">
            <div className="flex justify-between">
              <span>Harga Produk</span>
              <span>{formatCurrency(itemPrice)}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Biaya Admin</span>
              <span>{formatCurrency(adminFee)}</span>
            </div>
            <hr className="border-2 border-[#191A23] border-dashed" />
            <div className="flex justify-between text-2xl font-black">
              <span>TOTAL</span>
              <span className="text-blue-600">{formatCurrency(grandTotal)}</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleCreateOrder}
          disabled={isLoading}
          className={`w-full py-6 rounded-3xl text-2xl font-black uppercase tracking-widest border-4 border-[#191A23] transition-all active:scale-95 shadow-[8px_8px_0_0_#B9FF66] 
            ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-[#191A23] text-white hover:bg-white hover:text-[#191A23]"}`}
        >
          {isLoading ? "Memproses..." : "Bayar Sekarang"}
        </button>
      </div>
    </div>
  );
}