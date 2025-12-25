// src/pages/admin/AdminOrders.jsx
import React, { useState, useEffect } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { formatCurrency } from "../../utils/format";
import { Link } from "react-router-dom"; // Tambahkan Link untuk melihat detail

// Fungsi helper sederhana untuk menghitung waktu berlalu
const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " tahun lalu";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " bulan lalu";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " hari lalu";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " jam lalu";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " menit lalu";
    return Math.floor(seconds) + " detik lalu";
};

const statusColors = {
  "Pending": "bg-yellow-100 text-yellow-800",
  "Processing": "bg-blue-100 text-blue-800",
  "Success": "bg-green-100 text-green-800",
  "Failed": "bg-red-100 text-red-800",
};

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  
  const fetchAllOrders = () => {
        let allOrders = [];
        
        // Iterasi melalui semua key di Local Storage
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            
            // Cari key yang mengandung 'orders_' (contoh: orders_user-12345)
            if (key && key.startsWith('orders_')) {
                try {
                    const userOrders = JSON.parse(localStorage.getItem(key));
                    if (Array.isArray(userOrders)) {
                        allOrders = allOrders.concat(userOrders);
                    }
                } catch (e) {
                    console.error(`Error parsing orders from key ${key}:`, e);
                }
            }
            
            // Tambahkan juga key 'orders' lama (jika ada) untuk kompatibilitas
            if (key === 'orders') {
                try {
                    const legacyOrders = JSON.parse(localStorage.getItem(key));
                    if (Array.isArray(legacyOrders)) {
                        allOrders = allOrders.concat(legacyOrders);
                    }
                } catch (e) {
                    // Abaikan error jika format lama bermasalah
                }
            }
        }

        // Mengurutkan dari terbaru
        allOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setOrders(allOrders);
        return allOrders;
  };
    
  useEffect(() => {
        fetchAllOrders();
  }, []);


  const handleStatusChange = (orderId, newStatus) => {
    // 1. Perbarui state lokal
    const updatedOrders = orders.map(o => 
      o.id === orderId 
        ? { 
            ...o, 
            status: newStatus,
            // Tambahkan/perbarui waktu status
            statusAt: new Date().toISOString(), 
            // Anda mungkin ingin memperbarui statusHistory di sini juga
          } 
        : o
    );
    setOrders(updatedOrders);
    
    // 2. Perbarui Local Storage (Ini harus lebih cerdas: cari key aslinya!)
    
    const orderToUpdate = updatedOrders.find(o => o.id === orderId);
    if (!orderToUpdate) return;
    
    // Tentukan key Local Storage yang benar (berdasarkan ID user akun yang tersimpan di objek order)
    const storageKey = orderToUpdate.userId ? `orders_${orderToUpdate.userId}` : 'orders';
    
    let storedList = JSON.parse(localStorage.getItem(storageKey) || "[]");
    
    // Cari index pesanan di list yang tersimpan
    const orderIndex = storedList.findIndex(o => o.id === orderId);
    
    if (orderIndex !== -1) {
        // Ganti objek pesanan lama dengan yang baru (yang sudah diperbarui statusnya)
        storedList[orderIndex] = orderToUpdate;
        localStorage.setItem(storageKey, JSON.stringify(storedList));
    } else {
        // Jika tidak ditemukan di key spesifik, cari di key 'orders' lama
        let legacyList = JSON.parse(localStorage.getItem('orders') || "[]");
        const legacyIndex = legacyList.findIndex(o => o.id === orderId);
        if (legacyIndex !== -1) {
            legacyList[legacyIndex] = orderToUpdate;
            localStorage.setItem('orders', JSON.stringify(legacyList));
        } else {
            console.error("Gagal menemukan pesanan di Local Storage untuk diperbarui!");
        }
    }
    
    // Di dunia nyata, ini adalah tempat Anda memanggil API update status.
  };


  return (
    <AdminLayout title="Kelola Pesanan">
        {orders.length === 0 && (
            <div className="text-center py-10 bg-white rounded-xl shadow-lg text-gray-500">
                <p>Belum ada pesanan yang tercatat.</p>
            </div>
        )}

      {orders.length > 0 && (
            <div className="bg-white p-6 rounded-xl shadow-lg overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Pesanan</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produk & ID Tujuan</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Akun Pelanggan</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total & Bayar</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {orders.map((o) => (
                            <tr key={o.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    <Link to={`/orders/${o.id}`} className="text-blue-600 hover:text-blue-800 font-semibold">
                                        #{String(o.id).substring(0, 8)}
                                    </Link>
                                    <div className="text-xs text-gray-400 mt-1">{timeAgo(o.createdAt)}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-semibold">{o.product} - {o.package}</div>
                                    <div className="text-xs text-gray-500">Tujuan: {o.accountId || o.userId} {o.zoneId ? `(${o.zoneId})` : ''}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                    {o.userId || 'Guest'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                    {formatCurrency(o.total)}
                                    <div className="text-xs text-gray-500">Bayar: {o.payment}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[o.status] || 'bg-gray-200 text-gray-800'}`}>
                                      {o.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <select
                                      value={o.status}
                                      onChange={(e) => handleStatusChange(o.id, e.target.value)}
                                      className="p-2 border border-gray-300 rounded-md text-gray-700 bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    >
                                      {Object.keys(statusColors).map(status => (
                                        <option key={status} value={status}>{status}</option>
                                      ))}
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )}
    </AdminLayout>
  );
}