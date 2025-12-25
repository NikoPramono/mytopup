import React, { useState } from 'react';
import { X, Save, Package } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ProductEditFormModal({ product, onClose, onSave }) {
    // State lokal untuk simulasi data yang akan diedit
    const [name, setName] = useState(product ? product.name : 'Produk Baru');
    const [packagesCount, setPackagesCount] = useState(product ? (product.packages?.length || 0) : 0);
    
    // Asumsi: Kita hanya mengedit nama dan jumlah paket untuk simulasi
    
    const handleSave = () => {
        // Logika simulasi penyimpanan
        const updatedProduct = {
            ...product,
            name: name,
            // Simulasi: paket tidak benar-benar diubah, hanya jumlahnya
            packages: Array.from({ length: packagesCount }, (_, i) => ({ 
                id: i + 1, 
                name: `Paket Edit ${i + 1}`, 
                cost: 1000 * (i + 1), 
                price: 2000 * (i + 1)
            }))
        };
        
        // Panggil fungsi onSave yang diteruskan dari AdminProducts.jsx
        // Ini akan menutup modal dan menampilkan toast sukses di induk
        onSave(updatedProduct); 
    };

    if (!product) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto transform transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header Modal */}
                <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center z-10">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center">
                        <Package className="w-6 h-6 mr-3 text-red-600" />
                        Edit Produk: {product.name}
                    </h3>
                    <button onClick={onClose} className="p-2 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Konten Form */}
                <div className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nama Produk</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Simulasi Jumlah Paket</label>
                        <input
                            type="number"
                            value={packagesCount}
                            onChange={(e) => setPackagesCount(parseInt(e.target.value) || 0)}
                            min="0"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">Mengubah nilai ini akan memperbarui jumlah paket di modal detail.</p>
                    </div>

                    <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 rounded-lg">
                        <p className="font-semibold">Simulasi Data</p>
                        <p className="text-sm">Dalam aplikasi nyata, ini adalah tempat form lengkap (termasuk editor tabel untuk setiap paket) berada.</p>
                    </div>
                </div>

                {/* Footer Modal */}
                <div className="p-4 border-t bg-gray-50 flex justify-end">
                    <button 
                        onClick={handleSave}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center"
                    >
                        <Save className="w-4 h-4 mr-2" /> Simpan Perubahan
                    </button>
                </div>
            </div>
        </div>
    );
}