// src/pages/UserAccountSettings.jsx
import React, { useState } from 'react';
import { User, Mail, Smartphone, Edit, Lock } from 'lucide-react';
import toast, { Toaster } from "react-hot-toast";

// Data Pengguna Simulasi (Ganti dengan pengambilan data dari API nyata)
const initialUserData = {
    name: "ThinkPad User",
    email: "user@example.com",
    phone: "081234567890",
    joinDate: "2025-01-15",
    saldo: 150000.00
};

export default function UserAccountSettings() {
    const [userData, setUserData] = useState(initialUserData);
    const [isEditing, setIsEditing] = useState(false);
    const [nameInput, setNameInput] = useState(initialUserData.name);

    const handleSave = (e) => {
        e.preventDefault();
        
        // 1. Validasi
        if (nameInput.trim() === "") {
            toast.error("Nama tidak boleh kosong.");
            return;
        }
        
        // 2. Simulasi Update State (Di aplikasi nyata: Panggil API PUT/PATCH)
        setUserData(prev => ({ ...prev, name: nameInput.trim() }));
        setIsEditing(false);
        
        // 3. Notifikasi Sukses
        toast.success("Informasi akun berhasil diperbarui!");
    };
    
    // Simulasi fungsi untuk mengubah password
    const handleChangePassword = () => {
        toast.info("Arahkan ke form Ganti Password yang terpisah.");
    };

    // Fungsi utilitas untuk format mata uang IDR
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('id-ID', { 
            style: 'currency', 
            currency: 'IDR', 
            minimumFractionDigits: 0 
        }).format(amount);
    };

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8 pt-24 min-h-screen">
            <Toaster position="top-center" />
            
            <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-2">
                Pengaturan Akun Saya
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Kolom Kiri: Ringkasan Akun & Saldo */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="p-3 bg-blue-100 rounded-full">
                                <User className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">{userData.name}</h3>
                        </div>
                        <div className="space-y-3 text-sm text-gray-600">
                            <p className="flex items-center"><Mail className="w-4 h-4 mr-2 text-gray-400" /> {userData.email}</p>
                            <p className="flex items-center"><Smartphone className="w-4 h-4 mr-2 text-gray-400" /> {userData.phone}</p>
                            <p>Bergabung Sejak: {new Date(userData.joinDate).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>
                        
                        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                            <p className="text-sm font-semibold text-green-700">Saldo Akun:</p>
                            <p className="text-2xl font-extrabold text-green-800">{formatCurrency(userData.saldo)}</p>
                        </div>
                        
                        <button
                            onClick={handleChangePassword}
                            className="mt-6 w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition"
                        >
                            <Lock className="w-4 h-4 mr-2" />
                            Ubah Kata Sandi
                        </button>
                    </div>
                </div>

                {/* Kolom Kanan: Form Pengaturan */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex justify-between items-center">
                            Detail Pribadi
                            <button 
                                onClick={() => setIsEditing(!isEditing)} 
                                className={`text-sm py-1 px-3 rounded-full transition ${isEditing ? 'bg-red-500 text-white' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}
                            >
                                <Edit className="w-4 h-4 inline mr-1" />
                                {isEditing ? 'Batal' : 'Edit'}
                            </button>
                        </h3>

                        <form onSubmit={handleSave} className="space-y-4 mt-4">
                            
                            {/* Input Nama */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                                <input
                                    type="text"
                                    value={nameInput}
                                    onChange={(e) => setNameInput(e.target.value)}
                                    disabled={!isEditing}
                                    className={`mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                                        isEditing ? 'bg-white border-gray-300' : 'bg-gray-50 border-gray-200 cursor-default'
                                    }`}
                                />
                            </div>

                            {/* Input Email (ReadOnly) */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email (Tidak dapat diubah)</label>
                                <input
                                    type="email"
                                    value={userData.email}
                                    disabled
                                    className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-lg shadow-sm bg-gray-50 cursor-default sm:text-sm"
                                />
                            </div>

                            {/* Input Telepon (ReadOnly) */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nomor Telepon</label>
                                <input
                                    type="text"
                                    value={userData.phone}
                                    disabled
                                    className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-lg shadow-sm bg-gray-50 cursor-default sm:text-sm"
                                />
                            </div>
                            
                            {isEditing && (
                                <button
                                    type="submit"
                                    className="w-full mt-6 flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
                                >
                                    Simpan Perubahan
                                </button>
                            )}
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}