import React, { useState } from "react"; 
import AdminLayout from "../../components/admin/AdminLayout";
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast'; 

// Import Modal
import ProductPackageModal from "../../components/admin/ProductPackageModal"; 
import ProductEditFormModal from "../../components/admin/ProductEditFormModal";

// --- IMPOR SEMUA DATA PRODUK ---
import gamesData from "../../utils/gameData"; 
import emoneyData from "../../utils/emoneyData";
import perdanaData from "../../utils/perdanaData"; 
import streamingData from "../../utils/streamingData"; 
import dataData from "../../utils/dataData"; 
import voucherData from "../../utils/voucherData";     
import plnData from "../../utils/plnData";           
import smsteleponData from "../../utils/smsteleponData"; 
import masaAktifData from "../../utils/masaaktifData";  
import pulsaData from "../../utils/pulsaData";       
import tvData from "../../utils/tvData";             

// =======================================================
// FUNGSI SINKRONISASI: Mengubah 'currencies' menjadi 'packages' agar terbaca modal
const categorizeProducts = (data, type) => {
    return data.map(p => ({ 
        ...p, 
        type, 
        packages: p.packages || p.currencies || [] 
    }));
};

const CATEGORY_MAP = [
    { type: 'Games', data: gamesData, color: 'bg-red-100 text-red-800 border-red-200' },
    { type: 'E-Money', data: emoneyData, color: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
    { type: 'Aktivasi Perdana', data: perdanaData, color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
    { type: 'Streaming', data: streamingData, color: 'bg-purple-100 text-purple-800 border-purple-200' },
    { type: 'Data', data: dataData, color: 'bg-blue-100 text-blue-800 border-blue-200' },
    { type: 'Voucher', data: voucherData, color: 'bg-lime-100 text-lime-800 border-lime-200' },
    { type: 'PLN', data: plnData, color: 'bg-gray-200 text-gray-800 border-gray-300' },
    { type: 'Paket SMS & Telepon', data: smsteleponData, color: 'bg-teal-100 text-teal-800 border-teal-200' },
    { type: 'Masa Aktif', data: masaAktifData, color: 'bg-orange-100 text-orange-800 border-orange-200' },
    { type: 'Pulsa', data: pulsaData, color: 'bg-green-100 text-green-800 border-green-200' },
    { type: 'TV', data: tvData, color: 'bg-cyan-100 text-cyan-800 border-cyan-200' },
];

const initialProducts = CATEGORY_MAP.flatMap(cat => 
    categorizeProducts(cat.data, cat.type)
);

const availableCategories = ['All', ...CATEGORY_MAP.map(cat => cat.type)];
// =======================================================

export default function AdminProducts() {
    const [products, setProducts] = useState(initialProducts);
    const [filterCategory, setFilterCategory] = useState('All');
    
    // State Modal
    const [selectedProduct, setSelectedProduct] = useState(null); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productToEdit, setProductToEdit] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const filteredProducts = products.filter(p => 
        filterCategory === 'All' || p.type === filterCategory
    );

    // --- Handlers ---
    const handleViewDetails = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };
    
    const handleEdit = (product = null) => {
        setProductToEdit(product);
        setIsEditModalOpen(true);
    };
    
    const handleSaveProduct = (updatedProduct) => {
        setProducts(prev => prev.map(p => 
            p.id === updatedProduct.id ? { ...updatedProduct, packages: updatedProduct.packages || [] } : p
        ));
        
        // Update selectedProduct jika sedang dilihat di modal detail
        if (selectedProduct && selectedProduct.id === updatedProduct.id) {
            setSelectedProduct(updatedProduct);
        }

        toast.success(`Berhasil memperbarui ${updatedProduct.name}`);
        setIsEditModalOpen(false);
    };

    const handleDelete = (id, name) => {
        if (window.confirm(`Hapus produk ${name}?`)) {
            setProducts(products.filter(p => p.id !== id));
            toast.success(`Produk "${name}" dihapus.`);
        }
    };

    return (
        <AdminLayout title="Kelola Data Produk">
            <Toaster position="top-right" />
            
            {/* Bagian Atas: Filter & Tombol Tambah (Fixed Layout) */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
                
                {/* Scrollable Categories */}
                <div className="flex space-x-3 overflow-x-auto pb-4 w-full lg:max-w-[75%] custom-scrollbar">
                    {availableCategories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilterCategory(cat)}
                            className={`flex-shrink-0 px-5 py-2 rounded-xl text-sm font-black border-4 border-black transition-all active:translate-x-1 active:translate-y-1 active:shadow-none ${
                                filterCategory === cat 
                                ? 'bg-[#B9FF66] shadow-none translate-x-1 translate-y-1' 
                                : 'bg-white shadow-[4px_4px_0_0_#000] hover:bg-gray-50'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                
                {/* Tombol Tambah Produk Neo-Brutalism */}
                <button
                    onClick={() => handleEdit(null)}
                    className="group relative inline-flex items-center self-end lg:self-center shrink-0"
                >
                    <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 rounded-xl"></div>
                    <div className="relative flex items-center px-6 py-3 bg-[#00D1FF] text-black border-4 border-black rounded-xl font-black uppercase tracking-tight hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all">
                        <Plus className="w-6 h-6 mr-2 stroke-[4px]" />
                        Tambah Produk
                    </div>
                </button>
            </div>
            
            {/* Container Tabel Utama */}
            <div className="relative">
                <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 rounded-3xl"></div>
                <div className="relative bg-white border-4 border-black rounded-3xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b-4 border-black">
                                    <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest text-black">ID & Nama Produk</th>
                                    <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest text-black">Kategori</th>
                                    <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest text-black text-center">Isi Paket</th>
                                    <th className="px-6 py-4 text-center text-xs font-black uppercase tracking-widest text-black">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-gray-200">
                                {filteredProducts.map((p) => (
                                    <tr key={p.id} className="hover:bg-[#F3F3F3] transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 border-2 border-black rounded-lg overflow-hidden bg-white shrink-0">
                                                    <img src={p.image || 'https://via.placeholder.com/100'} alt={p.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <div className="font-black uppercase text-sm leading-tight text-black">{p.name}</div>
                                                    <div className="text-[10px] font-bold text-gray-400">ID: {p.id}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 border-2 border-black rounded-full text-[10px] font-black uppercase bg-white">
                                                {p.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <div className="inline-block px-4 py-1 bg-yellow-300 border-2 border-black rounded-lg font-black text-xs">
                                                {p.packages?.length || 0} ITEM
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex justify-center items-center gap-2">
                                                <button onClick={() => handleViewDetails(p)} className="p-2 border-2 border-black bg-[#B9FF66] shadow-[2px_2px_0_0_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                                                    <Eye size={18} className="text-black" />
                                                </button>
                                                <button onClick={() => handleEdit(p)} className="p-2 border-2 border-black bg-blue-400 shadow-[2px_2px_0_0_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                                                    <Edit size={18} className="text-white" />
                                                </button>
                                                <button onClick={() => handleDelete(p.id, p.name)} className="p-2 border-2 border-black bg-red-500 shadow-[2px_2px_0_0_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-white">
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modals */}
            {isModalOpen && (
                <ProductPackageModal 
                    product={selectedProduct} 
                    onClose={() => setIsModalOpen(false)} 
                    onEdit={handleEdit} 
                />
            )}
            
            {isEditModalOpen && (
                <ProductEditFormModal
                    product={productToEdit}
                    onClose={() => setIsEditModalOpen(false)}
                    onSave={handleSaveProduct}
                />
            )}
        </AdminLayout>
    );
}