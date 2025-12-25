import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { formatCurrency } from '../utils/format';

// --- IMPORT DATA ---
import gamesData from "../utils/gameData";
import emoneyData from '../utils/emoneyData';  
import perdanaData from '../utils/perdanaData'; 
import streamingData from '../utils/streamingData'; 
import tvData from '../utils/tvData'; 
import pulsaData from '../utils/pulsaData';          
import masaaktifData from '../utils/masaaktifData';  
import smsteleponData from '../utils/smsteleponData'; 
import plnData from '../utils/plnData';            
import voucherData from '../utils/voucherData';       
import dataData from '../utils/dataData';          

export default function ProductDetail() {
    const { slug: productId } = useParams(); 
    const navigate = useNavigate(); 

    // Gabungkan seluruh data dari berbagai kategori
    const allProductData = [
        ...(gamesData || []), ...(emoneyData || []), ...(perdanaData || []), 
        ...(streamingData || []), ...(tvData || []), ...(pulsaData || []), 
        ...(masaaktifData || []), ...(smsteleponData || []), ...(plnData || []), 
        ...(voucherData || []), ...(dataData || []),           
    ]; 

    // Cari produk berdasarkan ID/slug
    const product = allProductData.find(item => 
        item?.id?.toString().toLowerCase() === productId?.toLowerCase()
    );
    
    const [inputID, setInputID] = useState('');
    const [selectedPrice, setSelectedPrice] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Reset state jika pindah produk
        setSelectedPrice(null);
        setInputID('');
    }, [productId]);

    // PROTEKSI: Jika produk tidak ditemukan, jangan tampilkan halaman kosong (putih)
    if (!product) {
        return (
            <div className="max-w-6xl mx-auto px-6 py-40 text-center pt-40 font-primary">
                <h1 className="text-4xl font-black text-[#191A23] mb-4">404</h1>
                <p className="text-gray-500 font-bold mb-8">Maaf, produk "{productId}" tidak ditemukan atau belum tersedia.</p>
                <Link to="/" className="bg-[#B9FF66] border-2 border-[#191A23] px-6 py-3 rounded-2xl font-black shadow-[4px_4px_0_0_#191A23]">
                    KEMBALI KE BERANDA
                </Link>
            </div>
        );
    }

    return (
        <section className="max-w-6xl mx-auto px-6 pt-32 pb-12 font-primary">
            
            {/* Header Produk */}
            <div className="flex items-center gap-6 mb-12 p-6 bg-white border-4 border-[#191A23] rounded-3xl shadow-[8px_8px_0_0_#191A23]">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-20 h-20 rounded-2xl border-4 border-[#191A23] object-cover bg-gray-100 shadow-[4px_4px_0_0_#191A23]"
                />
                <div>
                    <h1 className="text-2xl md:text-4xl font-black text-[#191A23] uppercase">{product.name}</h1>
                    <span className="bg-[#B9FF66] border-2 border-[#191A23] px-3 py-1 rounded-full text-[10px] font-black uppercase">
                        Official Service
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* KOLOM KIRI: INPUT DETAIL */}
                <div className="lg:col-span-1">
                    <div className="bg-white border-4 border-[#191A23] p-6 rounded-3xl shadow-[8px_8px_0_0_#B9FF66]">
                        <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                            <span className="bg-[#191A23] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                            Masukkan Data
                        </h3>
                        
                        <div className="mb-4 p-4 bg-blue-50 border-2 border-blue-200 text-[11px] font-bold text-blue-800 rounded-2xl leading-relaxed">
                            {product.instructions || "Mohon teliti nomor tujuan Anda. Kesalahan input data bukan tanggung jawab kami."}
                        </div>

                        <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 ml-1">
                            {product.inputType || "ID Pelanggan / Nomor HP"}
                        </label>
                        <input
                            type="text"
                            placeholder={product.inputPlaceholder || "Contoh: 08123456789"}
                            value={inputID}
                            onChange={(e) => setInputID(e.target.value)}
                            className="w-full p-4 border-4 border-[#191A23] rounded-2xl outline-none font-bold focus:bg-[#B9FF66]/5 transition-all"
                        />
                    </div>
                </div>
                
                {/* KOLOM KANAN: NOMINAL */}
                <div className="lg:col-span-2">
                    <div className="bg-white border-4 border-[#191A23] p-6 rounded-3xl shadow-[8px_8px_0_0_#191A23]">
                        <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                            <span className="bg-[#B9FF66] text-[#191A23] border-2 border-[#191A23] w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                            Pilih Nominal
                        </h3>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {/* PROTEKSI: Pastikan prices ada sebelum mapping */}
                            {product.prices && product.prices.length > 0 ? (
                                product.prices.map((price) => (
                                    <button
                                        key={price.id}
                                        onClick={() => setSelectedPrice(price)}
                                        className={`p-4 rounded-2xl border-2 transition-all text-left relative group ${
                                            selectedPrice?.id === price.id 
                                                ? "bg-[#B9FF66] border-[#191A23] shadow-[4px_4px_0_0_#191A23] -translate-y-1" 
                                                : "bg-white border-gray-200 hover:border-[#191A23] hover:shadow-[4px_4px_0_0_#eeeeee]"
                                        }`}
                                    >
                                        <p className="text-[10px] font-black uppercase text-gray-400 group-hover:text-[#191A23]">
                                            {price.denomination}
                                        </p>
                                        <p className="text-lg font-black text-[#191A23]">
                                            {formatCurrency(price.price)}
                                        </p>
                                    </button>
                                ))
                            ) : (
                                <p className="col-span-full py-10 text-center font-bold text-gray-400">Pilihan nominal belum tersedia.</p>
                            )}
                        </div>
                    </div>

                    {/* Tombol Bayar */}
                    <div className="mt-8 bg-[#191A23] p-8 rounded-3xl shadow-[8px_8px_0_0_#B9FF66] flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center md:text-left text-white">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Total Harga</p>
                            <p className="text-4xl font-black text-[#B9FF66]">
                                {selectedPrice ? formatCurrency(selectedPrice.price) : 'Rp 0'}
                            </p>
                        </div>
                        
                        <button
                            onClick={() => navigate('/checkout', { 
                                state: { 
                                    name: product.name,
                                    denomination: selectedPrice?.denomination,
                                    input: inputID,
                                    total: selectedPrice?.price,
                                    image: product.image
                                } 
                            })}
                            disabled={!inputID || !selectedPrice}
                            className={`w-full md:w-auto px-12 py-5 rounded-2xl font-black text-xl transition-all border-4 ${
                                !inputID || !selectedPrice 
                                ? 'bg-gray-700 border-gray-600 text-gray-500 cursor-not-allowed' 
                                : 'bg-[#B9FF66] border-[#B9FF66] text-[#191A23] hover:bg-white hover:border-white hover:scale-105 active:scale-95 shadow-[4px_4px_0_0_rgba(185,255,102,0.3)]'
                            }`}
                        >
                            Bayar Sekarang
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}