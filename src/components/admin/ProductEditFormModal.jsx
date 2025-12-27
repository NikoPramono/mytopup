import React, { useState } from 'react';
import { X, Save, Package, Info } from 'lucide-react';

export default function ProductEditFormModal({ product, onClose, onSave }) {
    // State lokal untuk simulasi data
    const [name, setName] = useState(product ? product.name : 'Produk Baru');
    const [packagesCount, setPackagesCount] = useState(product ? (product.packages?.length || 0) : 0);
    
    if (!product) return null;

    const handleSave = () => {
        const updatedProduct = {
            ...product,
            name: name,
            // Simulasi paket
            packages: Array.from({ length: packagesCount }, (_, i) => ({ 
                id: i + 1, 
                name: `Paket Edit ${i + 1}`, 
                cost: 1000 * (i + 1), 
                price: 2000 * (i + 1)
            }))
        };
        onSave(updatedProduct); 
    };

    return (
        <div 
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 font-primary text-[#191A23]"
            onClick={onClose}
        >
            <div className="relative w-full max-w-lg transform">
                {/* Layer Bayangan Kaku (Neo-Brutalism) */}
                <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 rounded-2xl"></div>

                {/* Kontainer Modal */}
                <div 
                    className="relative bg-white border-4 border-black rounded-2xl overflow-hidden flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header Modal - Menggunakan warna Kuning/Merah Branding */}
                    <div className="bg-[#FF5C00] text-white border-b-4 border-black p-6 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="bg-white border-2 border-black p-2 rotate-[-3deg] shadow-[2px_2px_0_0_#000]">
                                <Package className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-xl font-black uppercase italic tracking-tighter">
                                Edit: {product.name}
                            </h3>
                        </div>
                        <button 
                            onClick={onClose} 
                            className="bg-white text-black border-2 border-black p-1 hover:bg-black hover:text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Konten Form */}
                    <div className="p-6 space-y-6 bg-[#F3F3F3]">
                        {/* Input Nama */}
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest italic">Nama Produk</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border-4 border-black rounded-xl p-3 font-bold focus:bg-[#B9FF66] transition-colors outline-none shadow-[2px_2px_0_0_#000]"
                            />
                        </div>

                        {/* Input Jumlah Paket */}
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest italic">Jumlah Paket (Simulasi)</label>
                            <input
                                type="number"
                                value={packagesCount}
                                onChange={(e) => setPackagesCount(parseInt(e.target.value) || 0)}
                                min="0"
                                className="w-full border-4 border-black rounded-xl p-3 font-bold focus:bg-[#B9FF66] transition-colors outline-none shadow-[2px_2px_0_0_#000]"
                            />
                            <p className="text-[10px] font-bold text-gray-500 uppercase italic">
                                *Mengubah ini akan meng-generate otomatis paket baru di detail.
                            </p>
                        </div>

                        {/* Box Info - Neo Brutalism Style */}
                        <div className="p-4 bg-white border-4 border-black rounded-xl shadow-[4px_4px_0_0_#000] flex gap-3 items-start">
                            <div className="bg-blue-400 border-2 border-black p-1">
                                <Info size={16} className="text-white" />
                            </div>
                            <div>
                                <p className="font-black text-[11px] uppercase underline decoration-blue-400">Mode Simulasi</p>
                                <p className="text-[10px] font-bold text-gray-600 leading-tight mt-1">
                                    Ini adalah form demo. Di sistem asli, Anda akan melihat editor tabel per item paket.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Modal */}
                    <div className="p-6 border-t-4 border-black bg-white flex gap-3">
                        <button 
                            onClick={onClose}
                            className="flex-1 py-3 border-4 border-black font-black uppercase text-sm shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                        >
                            Batal
                        </button>
                        <button 
                            onClick={handleSave}
                            className="flex-1 py-3 bg-[#B9FF66] border-4 border-black font-black uppercase text-sm shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2"
                        >
                            <Save className="w-4 h-4" /> Simpan Perubahan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}