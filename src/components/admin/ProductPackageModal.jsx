import React, { useState, useEffect } from 'react';
import { X, Save, Plus, Trash2, Image as ImageIcon, Type } from 'lucide-react';

export default function ProductEditFormModal({ product, onClose, onSave }) {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        type: '',
        image: '',
        packages: []
    });

    // Sinkronisasi data saat modal dibuka
    useEffect(() => {
        if (product) {
            setFormData({
                ...product,
                packages: product.packages || product.currencies || []
            });
        } else {
            // Jika tambah produk baru (handleEdit(null))
            setFormData({
                id: Date.now().toString(),
                name: '',
                type: 'Games',
                image: '',
                packages: []
            });
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePackageChange = (index, field, value) => {
        const updatedPackages = [...formData.packages];
        updatedPackages[index][field] = value;
        setFormData(prev => ({ ...prev, packages: updatedPackages }));
    };

    const addPackage = () => {
        setFormData(prev => ({
            ...prev,
            packages: [...prev.packages, { label: '', price: 0, cost: 0 }]
        }));
    };

    const removePackage = (index) => {
        const updated = formData.packages.filter((_, i) => i !== index);
        setFormData(prev => ({ ...prev, packages: updated }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 font-primary" onClick={onClose}>
            <div className="relative w-full max-w-3xl transform transition-all" onClick={e => e.stopPropagation()}>
                {/* Layer Shadow Belakang */}
                <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 rounded-2xl"></div>

                {/* Kontainer Utama */}
                <form onSubmit={handleSubmit} className="relative bg-white border-4 border-black rounded-2xl flex flex-col max-h-[90vh] overflow-hidden">
                    
                    {/* Header */}
                    <div className="bg-blue-400 border-b-4 border-black p-6 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="bg-white border-2 border-black p-2 shadow-[2px_2px_0_0_#000]">
                                <Type className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-xl font-black uppercase italic tracking-tighter">
                                {product ? 'Edit Produk' : 'Tambah Produk Baru'}
                            </h3>
                        </div>
                        <button type="button" onClick={onClose} className="bg-white border-2 border-black p-1 hover:bg-red-400 shadow-[2px_2px_0_0_#000]">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Konten Form */}
                    <div className="p-6 overflow-y-auto space-y-6 bg-gray-50">
                        {/* Informasi Dasar */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase">Nama Produk</label>
                                <input 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border-4 border-black p-3 font-bold focus:bg-blue-50 outline-none"
                                    placeholder="Contoh: Mobile Legends"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase">URL Gambar</label>
                                <div className="flex gap-2">
                                    <input 
                                        name="image"
                                        value={formData.image}
                                        onChange={handleChange}
                                        className="flex-1 border-4 border-black p-3 font-bold focus:bg-blue-50 outline-none text-xs"
                                        placeholder="/assets/GamePopuler/ml.jpeg"
                                    />
                                    <div className="w-12 h-12 border-4 border-black bg-white flex items-center justify-center shrink-0">
                                        {formData.image ? <img src={formData.image} alt="prev" className="w-full h-full object-cover" /> : <ImageIcon size={20} />}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pengaturan Paket */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b-4 border-black pb-2">
                                <h4 className="font-black uppercase italic tracking-tight">Daftar Paket / Harga</h4>
                                <button 
                                    type="button"
                                    onClick={addPackage}
                                    className="bg-[#B9FF66] border-2 border-black px-3 py-1 text-xs font-black uppercase shadow-[2px_2px_0_0_#000] active:translate-y-0.5 active:shadow-none"
                                >
                                    + Tambah Baris
                                </button>
                            </div>

                            <div className="space-y-3">
                                {formData.packages.map((pkg, index) => (
                                    <div key={index} className="flex flex-col md:flex-row gap-3 bg-white border-2 border-black p-3 shadow-[4px_4px_0_0_#000]">
                                        <input 
                                            placeholder="Nama Paket (ex: 86 Diamonds)"
                                            className="flex-1 border-2 border-black p-2 text-sm font-bold outline-none"
                                            value={pkg.label || pkg.name || ''}
                                            onChange={(e) => handlePackageChange(index, 'label', e.target.value)}
                                        />
                                        <input 
                                            type="number"
                                            placeholder="Modal"
                                            className="w-full md:w-32 border-2 border-black p-2 text-sm outline-none"
                                            value={pkg.cost || 0}
                                            onChange={(e) => handlePackageChange(index, 'cost', e.target.value)}
                                        />
                                        <input 
                                            type="number"
                                            placeholder="Harga Jual"
                                            className="w-full md:w-32 border-2 border-black p-2 text-sm font-black bg-green-50 outline-none"
                                            value={pkg.price || 0}
                                            onChange={(e) => handlePackageChange(index, 'price', e.target.value)}
                                        />
                                        <button 
                                            type="button"
                                            onClick={() => removePackage(index)}
                                            className="bg-red-500 text-white p-2 border-2 border-black hover:bg-red-600"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer Tombol */}
                    <div className="p-6 border-t-4 border-black bg-white flex gap-4">
                        <button 
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-3 border-4 border-black font-black uppercase text-sm shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                        >
                            Batal
                        </button>
                        <button 
                            type="submit"
                            className="flex-1 py-3 bg-[#B9FF66] border-4 border-black font-black uppercase text-sm shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2"
                        >
                            <Save size={20} /> Simpan Produk
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}