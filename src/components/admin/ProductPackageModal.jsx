import React from 'react';
import { X, DollarSign, Package, Zap } from 'lucide-react';

// Format mata uang sederhana (kita asumsikan Anda memiliki formatCurrency di utils)
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(amount);
};

export default function ProductPackageModal({ product, onClose }) {
    if (!product) return null;

    const packages = product.packages || [];

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={onClose} // Menutup jika klik di luar modal
        >
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100"
                onClick={(e) => e.stopPropagation()} // Mencegah penutupan saat klik di dalam modal
            >
                {/* Header Modal */}
                <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center z-10">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center">
                        <Package className="w-6 h-6 mr-3 text-blue-600" />
                        Detail Paket: {product.name}
                    </h3>
                    <button 
                        onClick={onClose}
                        className="p-2 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition"
                        title="Tutup"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Konten Modal */}
                <div className="p-6">
                    {packages.length === 0 ? (
                        <div className="text-center py-10 text-gray-500 border border-dashed rounded-lg bg-gray-50">
                            <Zap className="w-8 h-8 mx-auto mb-3 text-red-500" />
                            <p className="font-semibold">Tidak ada paket terdaftar untuk produk ini.</p>
                            <p className="text-sm">Gunakan tombol Edit di tabel untuk menambahkan paket baru.</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-bold text-blue-800 uppercase tracking-wider">Nama Paket / Detail</th>
                                        <th className="px-6 py-3 text-right text-xs font-bold text-blue-800 uppercase tracking-wider">Harga Beli (Modal)</th>
                                        <th className="px-6 py-3 text-right text-xs font-bold text-blue-800 uppercase tracking-wider">Harga Jual</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-100">
                                    {packages.map((pkg, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {pkg.name || `Paket #${index + 1}`}
                                                <p className="text-xs text-gray-500 mt-1">{pkg.description || `(Tipe: ${product.type})`}</p>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-700">
                                                <span className="text-red-500">{formatCurrency(pkg.cost || 0)}</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-semibold text-green-600">
                                                {formatCurrency(pkg.price || 0)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Footer Modal (Opsional) */}
                <div className="sticky bottom-0 bg-gray-50 p-4 border-t flex justify-end gap-3">
                    <button 
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                    >
                        Tutup
                    </button>
                    <button 
                        onClick={() => alert(`Simulasi: Navigasi ke Halaman Edit Produk untuk ${product.name}`)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center"
                    >
                        <Edit className="w-4 h-4 mr-2" /> Edit Semua Paket
                    </button>
                </div>
            </div>
        </div>
    );
}