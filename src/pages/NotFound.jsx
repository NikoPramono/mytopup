// src/pages/NotFound.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Gamepad, Home, ArrowLeft } from 'lucide-react';
import { useLanguage } from "../context/LanguageContext"; // 1. Import Hook Bahasa

export default function NotFound() {
    const navigate = useNavigate();
    const { lang } = useLanguage(); // 2. Ambil bahasa aktif

    // --- KAMUS TEKS (Dictionary) ---
    const t = {
        ID: {
            title: "Misi Gagal!",
            subtitle: "Produk atau Halaman Tidak Ditemukan.",
            desc: "Halaman yang Anda cari mungkin telah dihapus, namanya diubah, atau ID-nya salah. Cek kembali URL Anda atau gunakan tombol di bawah.",
            btnHome: "Kembali ke Beranda",
            btnBack: "Halaman Sebelumnya",
            footer: "Jika Anda yakin ini adalah kesalahan sistem, hubungi dukungan pelanggan."
        },
        EN: {
            title: "Mission Failed!",
            subtitle: "Product or Page Not Found.",
            desc: "The page you are looking for might have been removed, renamed, or the ID is incorrect. Please check the URL or use the buttons below.",
            btnHome: "Back to Home",
            btnBack: "Previous Page",
            footer: "If you believe this is a system error, please contact customer support."
        }
    };

    const currentT = t[lang];

    return (
        <div className="min-h-screen bg-[#F3F4F6] flex flex-col items-center justify-center p-6 font-primary">
            <div className="bg-white rounded-3xl shadow-[8px_8px_0_0_#191A23] p-8 sm:p-12 text-center max-w-2xl w-full border-2 border-[#191A23]">
                
                {/* Ikon Besar Bertema Gaming */}
                <div className="flex justify-center mb-6">
                    <div className="p-6 rounded-full bg-[#B9FF66] border-4 border-[#191A23] shadow-[4px_4px_0_0_#191A23]">
                        <Gamepad className="w-16 h-16 text-[#191A23] animate-bounce" />
                    </div>
                </div>

                <h1 className="text-7xl font-black text-[#191A23] mb-2">404</h1>
                <h2 className="text-3xl font-bold text-[#191A23] mb-6 uppercase tracking-tight">
                    {currentT.title} <br/>
                    <span className="text-lg font-medium text-gray-500 normal-case italic">
                        {currentT.subtitle}
                    </span>
                </h2>
                
                <p className="text-gray-600 mb-10 leading-relaxed">
                    {currentT.desc}
                </p>

                {/* Tombol Navigasi Cepat */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center justify-center px-8 py-4 font-bold rounded-xl2 text-[#191A23] bg-[#B9FF66] border-2 border-[#191A23] shadow-[4px_4px_0_0_#191A23] hover:-translate-y-1 active:translate-y-0 transition-all"
                    >
                        <Home className="w-5 h-5 mr-2" />
                        {currentT.btnHome}
                    </button>
                    
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center justify-center px-8 py-4 font-bold rounded-xl2 text-[#191A23] bg-white border-2 border-[#191A23] shadow-[4px_4px_0_0_#191A23] hover:-translate-y-1 active:translate-y-0 transition-all"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        {currentT.btnBack}
                    </button>
                </div>
            </div>
            
            {/* Informasi Tambahan */}
            <div className="mt-10 text-sm text-gray-500 max-w-md text-center">
                <p>{currentT.footer}</p>
            </div>
        </div>
    );
}