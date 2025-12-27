import React, { useState, useEffect } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { formatCurrency } from "../../utils/format";
import { Search, Filter, Clock, Package, Trash2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const timeAgo = (dateString) => {
    if (!dateString) return "Waktu tidak diketahui";
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return "Format waktu salah";
        const seconds = Math.floor((new Date() - date) / 1000);
        let interval = seconds / 31536000;
        if (interval > 1) return Math.floor(interval) + " tahun lalu";
        interval = seconds / 2592000;
        if (interval > 1) return Math.floor(interval) + " hari lalu";
        interval = seconds / 86400;
        if (interval > 1) return Math.floor(interval) + " hari lalu";
        interval = seconds / 3600;
        if (interval > 1) return Math.floor(interval) + " jam lalu";
        interval = seconds / 60;
        if (interval > 1) return Math.floor(interval) + " menit lalu";
        return Math.floor(seconds) + " detik lalu";
    } catch (e) { return "Error waktu"; }
};

const statusColors = {
    "Pending": "bg-yellow-300 text-black border-yellow-500",
    "Processing": "bg-blue-400 text-white border-blue-600",
    "Success": "bg-[#B9FF66] text-black border-green-600",
    "Failed": "bg-red-500 text-white border-red-700",
};

export default function AdminOrders() {
    const [orders, setOrders] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterStatus, setFilterStatus] = useState("All");

    const fetchAllOrders = () => {
        let allOrders = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && (key.startsWith('orders_') || key === 'orders')) {
                try {
                    const userOrders = JSON.parse(localStorage.getItem(key));
                    if (Array.isArray(userOrders)) {
                        allOrders = [...allOrders, ...userOrders];
                    }
                } catch (e) { console.error("Error parsing data", e); }
            }
        }
        allOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setOrders(allOrders);
    };

    useEffect(() => { fetchAllOrders(); }, []);

    const handleStatusChange = (orderId, newStatus) => {
        const updatedOrders = orders.map(o => 
            String(o.id) === String(orderId) ? { ...o, status: newStatus, statusAt: new Date().toISOString() } : o
        );
        setOrders(updatedOrders);

        const order = updatedOrders.find(o => String(o.id) === String(orderId));
        if (!order) return;

        const storageKey = order.userId ? `orders_${order.userId}` : 'orders';
        let storedList = JSON.parse(localStorage.getItem(storageKey) || "[]");
        const idx = storedList.findIndex(o => String(o.id) === String(orderId));

        if (idx !== -1) {
            storedList[idx] = order;
            localStorage.setItem(storageKey, JSON.stringify(storedList));
            toast.success(`Order diperbarui!`);
        }
    };

    const handleDeleteOrder = (orderId) => {
        if (window.confirm("Hapus pesanan ini secara permanen?")) {
            const orderToDelete = orders.find(o => String(o.id) === String(orderId));
            const storageKey = orderToDelete?.userId ? `orders_${orderToDelete.userId}` : 'orders';
            
            setOrders(prev => prev.filter(o => String(o.id) !== String(orderId)));
            
            let storedList = JSON.parse(localStorage.getItem(storageKey) || "[]");
            const newList = storedList.filter(o => String(o.id) !== String(orderId));
            localStorage.setItem(storageKey, JSON.stringify(newList));
            
            toast.success("Pesanan dihapus");
        }
    };

    const filteredOrders = orders.filter(o => {
        if (!o) return false;
        const prodName = String(o.product || "").toLowerCase();
        const pkgName = String(o.package || "").toLowerCase();
        const orderId = String(o.id || "").toLowerCase();
        const search = searchQuery.toLowerCase();

        const matchSearch = prodName.includes(search) || pkgName.includes(search) || orderId.includes(search);
        const matchStatus = filterStatus === "All" || o.status === filterStatus;
        return matchSearch && matchStatus;
    });

    return (
        <AdminLayout title="Kelola Pesanan">
            <Toaster position="top-right" />
            
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1 group">
                    <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 rounded-xl"></div>
                    <div className="relative flex items-center bg-white border-4 border-black rounded-xl px-4 py-2">
                        <Search className="w-5 h-5 text-gray-400 mr-2" />
                        <input 
                            type="text" 
                            placeholder="Cari ID atau Produk..."
                            className="w-full outline-none font-bold text-sm py-1"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="relative group">
                    <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 rounded-xl"></div>
                    <div className="relative flex items-center bg-white border-4 border-black rounded-xl px-4 py-2">
                        <select 
                            className="bg-transparent outline-none font-black text-xs uppercase cursor-pointer"
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                        >
                            <option value="All">Semua Status</option>
                            {Object.keys(statusColors).map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 rounded-3xl"></div>
                <div className="relative bg-white border-4 border-black rounded-3xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-[#B9FF66] border-b-4 border-black font-black uppercase text-[10px] tracking-widest text-black">
                                <tr>
                                    <th className="px-6 py-4">ID Transaksi</th>
                                    <th className="px-6 py-4">Detail Layanan</th>
                                    <th className="px-6 py-4 text-center">Harga & Status</th>
                                    <th className="px-6 py-4 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-black/10">
                                {filteredOrders.length === 0 ? (
                                    <tr><td colSpan="4" className="py-20 text-center font-black italic text-gray-400">TIDAK ADA DATA</td></tr>
                                ) : (
                                    filteredOrders.map((o) => (
                                        <tr key={String(o.id)} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    {/* SOLUSI ERROR: Gunakan String() sebelum substring */}
                                                    <span className="font-black text-blue-600 text-sm">#{String(o.id || "").substring(0, 8)}</span>
                                                    <span className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase">
                                                        <Clock size={10} /> {timeAgo(o.createdAt)}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex gap-3 items-center">
                                                    <div className="bg-gray-100 border-2 border-black p-2 rounded-lg shrink-0">
                                                        <Package size={16} />
                                                    </div>
                                                    <div>
                                                        <div className="font-black text-xs uppercase leading-tight">{o.product}</div>
                                                        <div className="text-[10px] font-bold text-gray-500 uppercase">{o.package}</div>
                                                        <div className="mt-1 text-[10px] font-black bg-black text-white px-1.5 py-0.5 rounded inline-block uppercase">
                                                            ID: {o.accountId || o.userId}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <div className="font-black text-sm mb-2">{formatCurrency(o.total)}</div>
                                                <span className={`px-3 py-1 border-2 border-black rounded-full text-[9px] font-black uppercase shadow-[2px_2px_0_0_#000] ${statusColors[o.status]}`}>
                                                    {o.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col gap-2 items-center">
                                                    <select 
                                                        className="border-2 border-black rounded-lg p-1 text-[10px] font-black uppercase focus:bg-[#B9FF66] outline-none cursor-pointer"
                                                        value={o.status}
                                                        onChange={(e) => handleStatusChange(o.id, e.target.value)}
                                                    >
                                                        {Object.keys(statusColors).map(s => <option key={s} value={s}>{s}</option>)}
                                                    </select>
                                                    <button 
                                                        onClick={() => handleDeleteOrder(o.id)}
                                                        className="p-1.5 bg-red-500 text-white border-2 border-black rounded-lg hover:bg-red-600 shadow-[2px_2px_0_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                                                    >
                                                        <Trash2 size={14} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}