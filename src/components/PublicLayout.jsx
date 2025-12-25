// src/layouts/PublicLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 

export default function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F3F3F3] selection:bg-[#B9FF66] selection:text-[#191A23]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white"> {/* Tambah bg-white jika navbar transparan */}
        <Navbar />
      </header>

      {/* MAIN CONTENT */}
      {/* PERBAIKAN: Tambahkan padding-top (pt-20 sampai pt-28) 
          agar konten tidak tertutup oleh sticky navbar */}
      <main className="flex-grow pt-24 md:pt-28"> 
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="mt-auto border-t-4 border-[#191A23]">
        <Footer />
      </footer>

      {/* DEKORASI GLOBAL */}
      {/*<div className="fixed bottom-6 left-6 z-40 hidden md:block">
        <div className="bg-[#191A23] text-[#B9FF66] border-2 border-black px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] rotate-[-90deg] origin-left">
          NEXCENT DIGITAL © 2024
        </div>
      </div>*/}
    </div>
  );
}