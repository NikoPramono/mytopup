import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { formatCurrency } from "../utils/format";

export default function Checkout() {
  const { state: order } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // PROTEKSI UTAMA: Jika akses langsung tanpa data atau data tidak lengkap
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

  // Ambil nilai dengan fallback agar tidak undefined (penyebab layar putih)
  const itemPrice = order.total || order.price || 0;
  const adminFee = order.fee || 0;
  const grandTotal = itemPrice + adminFee;

  const handleCreateOrder = () => {
    const orderId = `INV-${Date.now()}`;
    const orderObj = {
      id: orderId,
      game: order.name || order.game || "Produk Digital",
      package: order.denomination || order.package || "Paket Standar",
      price: itemPrice,
      fee: adminFee,
      total: grandTotal,
      userId: order.input || order.userId,
      ...(order.zoneId && { zoneId: order.zoneId }), 
      status: "Pending",
      image: order.image,
      createdAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("orders") || "[]");
    existing.push(orderObj);
    localStorage.setItem("orders", JSON.stringify(existing));

    navigate("/success", { state: orderObj });
  };

  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-20 font-primary">
      <h1 className="text-4xl font-black mb-8 uppercase italic italic">Checkout</h1>

      <div className="grid gap-6">
        {/* Detail Pesanan Card */}
        <div className="bg-white border-4 border-[#191A23] p-6 rounded-3xl shadow-[8px_8px_0_0_#191A23]">
          <h2 className="text-xl font-black mb-4 uppercase border-b-4 border-[#191A23] pb-2 w-fit">Detail Pesanan</h2>
          <div className="space-y-3 font-bold">
            <div className="flex justify-between">
              <span className="text-gray-500">Produk</span>
              <span className="text-right uppercase">{order.name || order.game}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Paket</span>
              <span className="text-right uppercase">{order.denomination || order.package}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">ID / Nomor</span>
              <span className="bg-[#B9FF66] px-2 border-2 border-[#191A23] rounded-lg">
                {order.input || order.userId}
              </span>
            </div>
            {order.zoneId && (
              <div className="flex justify-between">
                <span className="text-gray-500">Zone ID</span>
                <span>{order.zoneId}</span>
              </div>
            )}
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
          className="w-full bg-[#191A23] text-white py-6 rounded-3xl text-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#191A23] border-4 border-[#191A23] transition-all active:scale-95 shadow-[8px_8px_0_0_#B9FF66]"
        >
          Buat Pesanan Sekarang
        </button>
      </div>
    </div>
  );
}