import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Swal from 'sweetalert2'; // Pastikan install: npm install sweetalert2

// --- IMPORT HELPER SCROLL ---
import ScrollToTop from "./components/ScrollToTop"; 

// Import Layout & Components
import PublicLayout from "./components/PublicLayout";
import GameGrid from "./components/GameGrid"; 

// Import Rute Publik
import ProductDetail from "./pages/ProductDetail"; 
import GameDetail from "./pages/GameDetail";
import PremiumDetail from "./pages/PremiumDetail";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import OrderHistory from "./pages/OrderHistory";
import OrderDetail from "./pages/OrderDetail";
import Tracking from "./pages/Tracking";
import TentangKami from "./pages/TentangKami";
import LayananKami from "./pages/LayananKami";
import SyaratKetentuan from "./pages/SyaratKetentuan";
import KebijakanPrivasi from "./pages/KebijakanPrivasi";
import Partnership from "./pages/Partnership";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserAccountSettings from "./pages/UserAccountSettings"; 
import NotFound from "./pages/NotFound"; 

// Import Rute Admin
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminRouteGuard from "./components/admin/AdminRouteGuard"; 

// Import Utils
import { startOrderAutoUpdate } from "./utils/updateStatus";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    // 1. Memulai pembaruan status pesanan otomatis
    startOrderAutoUpdate();

    // 2. LOGIKA NOTIFIKASI PEMBAYARAN MIDTRANS
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');

    if (status === 'success') {
      Swal.fire({
        title: 'Pembayaran Berhasil!',
        text: 'Saldo Anda akan segera ditambahkan secara otomatis.',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Oke, Terima Kasih'
      });
    } else if (status === 'pending') {
      Swal.fire({
        title: 'Menunggu Pembayaran',
        text: 'Silakan selesaikan pembayaran sesuai instruksi di aplikasi.',
        icon: 'info',
        confirmButtonText: 'Tutup'
      });
    } else if (status === 'error') {
      Swal.fire({
        title: 'Pembayaran Gagal',
        text: 'Terjadi kesalahan saat memproses pembayaran. Silakan coba lagi.',
        icon: 'error',
        confirmButtonText: 'Coba Lagi'
      });
    }

    // Menghapus parameter dari URL agar alert tidak muncul lagi saat di-refresh (F5)
    if (status) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
    
    // 3. Logika tombol Scroll To Top
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTopManual = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col relative">
      <ScrollToTop />

      <Routes>
        {/* RUTE PUBLIK */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<GameGrid />} />
          <Route path="/product/:slug" element={<ProductDetail />} /> 
          <Route path="/game/:slug" element={<GameDetail />} />
          <Route path="/premium/:slug" element={<PremiumDetail />} />
          <Route path="/profile" element={<UserAccountSettings />} /> 
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/orders" element={<OrderHistory />} />
          <Route path="/orders/:id" element={<OrderDetail />} />
          <Route path="/tracking/:id" element={<Tracking />} />
          <Route path="/layanan-kami" element={<LayananKami />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/syarat-ketentuan" element={<SyaratKetentuan />} />
          <Route path="/kebijakan-privasi" element={<KebijakanPrivasi />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
          
        {/* RUTE ADMIN */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route element={<AdminRouteGuard />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/products" element={<AdminProducts />} />
        </Route>

        {/* RUTE FALLBACK */}
        <Route path="*" element={<NotFound />} /> 
      </Routes>

      <button
        onClick={scrollToTopManual}
        className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg text-black 
                    bg-white/80 backdrop-blur-sm hover:bg-white transition-opacity 
                    duration-300 z-50 ${showScroll ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        ↑
      </button>
    </div>
  );
}

export default App;