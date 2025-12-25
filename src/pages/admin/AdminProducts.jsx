import React, { useState } from "react"; 
import AdminLayout from "../../components/admin/AdminLayout";
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast'; 

// Import Modal yang baru
import ProductPackageModal from "../../components/admin/ProductPackageModal"; 
// Import Modal Edit baru
import ProductEditFormModal from "../../components/admin/ProductEditFormModal";

// --- IMPOR SEMUA DATA PRODUK LENGKAP DARI FOLDER UTILS ---
import gamesData from "../../utils/gameData"; 
// ... (impor data lainnya)
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

// (Kode CATEGORIZE_PRODUCTS, initialProducts, categoryColors, availableCategories tetap sama)
// =======================================================
const categorizeProducts = (data, type) => {
    return data.map(p => ({ ...p, type }));
};

const CATEGORY_MAP = [
    { type: 'Games', data: gamesData, color: 'bg-red-100 text-red-800' },
    { type: 'E-Money', data: emoneyData, color: 'bg-indigo-100 text-indigo-800' },
    { type: 'Aktivasi Perdana', data: perdanaData, color: 'bg-yellow-100 text-yellow-800' },
    { type: 'Streaming', data: streamingData, color: 'bg-purple-100 text-purple-800' },
    { type: 'Data', data: dataData, color: 'bg-blue-100 text-blue-800' },
    { type: 'Voucher', data: voucherData, color: 'bg-lime-100 text-lime-800' },
    { type: 'PLN', data: plnData, color: 'bg-gray-200 text-gray-800' },
    { type: 'Paket SMS & Telepon', data: smsteleponData, color: 'bg-teal-100 text-teal-800' },
    { type: 'Masa Aktif', data: masaAktifData, color: 'bg-orange-100 text-orange-800' },
    { type: 'Pulsa', data: pulsaData, color: 'bg-green-100 text-green-800' },
    { type: 'TV', data: tvData, color: 'bg-cyan-100 text-cyan-800' },
];

const initialProducts = CATEGORY_MAP.flatMap(cat => 
    categorizeProducts(cat.data, cat.type)
);

const categoryColors = CATEGORY_MAP.reduce((acc, cat) => {
    acc[cat.type] = cat.color;
    return acc;
}, {});

const availableCategories = ['All', ...CATEGORY_MAP.map(cat => cat.type)];
// =======================================================


export default function AdminProducts() {
    const [products, setProducts] = useState(initialProducts);
    const [filterCategory, setFilterCategory] = useState('All');
    
    // STATE untuk Modal Detail Paket
    const [selectedProduct, setSelectedProduct] = useState(null); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // BARU: STATE untuk Modal Edit Form
    const [productToEdit, setProductToEdit] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const filteredProducts = products.filter(p => 
        filterCategory === 'All' || p.type === filterCategory
    );

    // FUNGSI untuk menutup Modal Detail
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    // FUNGSI untuk menutup Modal Edit
    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
        setProductToEdit(null);
    };

    // FUNGSI 1: Melihat Detail Paket (Membuka Modal Detail)
    const handleViewDetails = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };
    
    // FUNGSI 2: Mengedit Produk (Membuka Modal Edit)
    const handleEdit = (product = null) => {
        setProductToEdit(product);
        setIsEditModalOpen(true);
        // Hapus toast simulasi lama, sekarang buka modal
    };
    
    // FUNGSI 3: Menyimpan/Memperbarui Produk (Dipanggil dari ProductEditFormModal)
    const handleSaveProduct = (updatedProduct) => {
        // Logika nyata: Update state lokal (simulasi data API)
        setProducts(prevProducts => prevProducts.map(p =>
            p.id === updatedProduct.id ? updatedProduct : p
        ));
        
        toast.success(`Produk "${updatedProduct.name}" berhasil diperbarui!`);
        handleCloseEditModal(); // Tutup modal edit setelah simpan
    };
    
    // FUNGSI 4: Menghapus Produk (Delete)
    const handleDelete = (id, name) => {
        if (window.confirm(`Yakin ingin menghapus produk ${name} (ID: ${id})?`)) {
            const newProducts = products.filter(p => p.id !== id);
            setProducts(newProducts);
            toast.success(`Produk "${name}" berhasil dihapus (Simulasi).`);
        }
    };

    return (
        <AdminLayout title="Kelola Data Produk">
            <Toaster position="top-right" />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                
                {/* Filter Kategori */}
                <div className="flex space-x-2 overflow-x-auto pb-2 w-full md:w-auto">
                    {availableCategories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilterCategory(cat)}
                            className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition ${
                                filterCategory === cat 
                                    ? 'bg-blue-600 text-white shadow-md' 
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                
                {/* Tombol Tambah Produk (Sekarang membuka modal edit kosong) */}
                <button
                    onClick={() => handleEdit(null)} // null untuk tambah produk baru
                    className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow-md flex-shrink-0 mt-4 md:mt-0"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    Tambah Produk
                </button>
            </div>
            
            {/* Tabel Produk (Tidak Berubah) */}
            <div className="bg-white p-6 rounded-xl shadow-lg overflow-x-auto">
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-10 text-gray-500">Tidak ada produk dalam kategori "{filterCategory}".</div>
                ) : (
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID & Nama</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah Paket</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredProducts.map((p) => (
                                <tr key={p.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <img 
                                                src={p.image || 'https://via.placeholder.com/40?text=Ikon'} 
                                                alt={p.name} 
                                                className="w-10 h-10 object-cover rounded-md mr-3 border" 
                                            />
                                            <div>
                                                <div className="text-sm font-semibold text-gray-900">{p.name}</div>
                                                <div className="text-xs text-gray-500">ID: {p.id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${categoryColors[p.type] || 'bg-gray-100 text-gray-800'}`}>
                                            {p.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {p.packages ? p.packages.length : 0} Paket
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                        
                                        {/* Aksi 1: DETAIL PAKET (View) */}
                                        <button 
                                            onClick={() => handleViewDetails(p)} 
                                            className="text-gray-600 hover:text-gray-900 p-1 rounded hover:bg-gray-100 transition"
                                            title="Lihat Detail Paket"
                                        >
                                            <Eye className="w-5 h-5 inline-block" />
                                        </button>

                                        {/* Aksi 2: EDIT PRODUK (Sekarang membuka modal Edit nyata) */}
                                        <button 
                                            onClick={() => handleEdit(p)} 
                                            className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition"
                                            title="Edit Produk"
                                        >
                                            <Edit className="w-5 h-5 inline-block" />
                                        </button>

                                        {/* Aksi 3: HAPUS PRODUK */}
                                        <button 
                                            onClick={() => handleDelete(p.id, p.name)} 
                                            className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50 transition"
                                            title="Hapus Produk"
                                        >
                                            <Trash2 className="w-5 h-5 inline-block" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Modal 1: Detail Paket (Dipanggil oleh handleViewDetails) */}
            {isModalOpen && (
                <ProductPackageModal 
                    product={selectedProduct} 
                    onClose={handleCloseModal} 
                    // Meneruskan handleEdit untuk tombol "Edit Semua Paket" di dalam modal
                    onEdit={handleEdit} 
                />
            )}
            
            {/* BARU: Modal 2: Edit Form (Dipanggil oleh handleEdit) */}
            {isEditModalOpen && (
                <ProductEditFormModal
                    product={productToEdit}
                    onClose={handleCloseEditModal}
                    onSave={handleSaveProduct} // Untuk menyimpan perubahan
                />
            )}
        </AdminLayout>
    );
}