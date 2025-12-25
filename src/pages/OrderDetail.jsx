// src/pages/OrderDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import OrderStepper from "../components/OrderStepper";
import toast from "react-hot-toast";
import { formatCurrency, deleteOrder } from "../utils/format";
import { useLanguage } from "../context/LanguageContext"; // Import Hook Bahasa

const PENDING_DURATION = 60 * 1000; // 1 menit
const PROCESSING_DURATION = 3 * 60 * 1000; // 3 menit

export default function OrderDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { lang } = useLanguage();
    const [order, setOrder] = useState(null);

    // --- KAMUS TEKS ---
    const t = {
        ID: {
            title: "Detail Pesanan",
            backToHistory: "Kembali ke Riwayat",
            notFound: "Pesanan Tidak Ditemukan",
            autoUpdate: "Status pesanan akan diperbarui secara otomatis dalam beberapa saat...",
            created: "Dibuat",
            pkg: "Paket",
            price: "Harga Paket",
            fee: "Biaya",
            total: "Total Bayar",
            btnDelete: "Hapus Pesanan",
            btnHistory: "Riwayat Pesanan",
            btnCopy: "Salin ID Pesanan",
            copySuccess: "Nomor pesanan disalin!",
            finishToast: "Pesanan selesai!",
            confirmDelete: "Apakah Anda yakin ingin menghapus pesanan ini dari riwayat?",
            delSuccess: "Pesanan berhasil dihapus.",
            delError: "Gagal menghapus pesanan."
        },
        EN: {
            title: "Order Detail",
            backToHistory: "Back to History",
            notFound: "Order Not Found",
            autoUpdate: "Order status will be updated automatically in a moment...",
            created: "Created",
            pkg: "Package",
            price: "Package Price",
            fee: "Fee",
            total: "Total Amount",
            btnDelete: "Delete Order",
            btnHistory: "Order History",
            btnCopy: "Copy Order ID",
            copySuccess: "Order ID copied!",
            finishToast: "Order completed!",
            confirmDelete: "Are you sure you want to delete this order from history?",
            delSuccess: "Order deleted successfully.",
            delError: "Failed to delete order."
        }
    };

    const currentT = t[lang];

    const getOrderFromStorage = (orderId) => {
        const stored = JSON.parse(localStorage.getItem("orders") || "[]");
        const found = stored.find((o) => String(o.id) === String(orderId));
        
        if (found) {
            return {
                ...found,
                statusHistory: found.statusHistory || { Pending: found.createdAt },
                statusAt: found.statusAt || found.createdAt,
                total: found.total || (found.price || 0) + (found.fee || 0) 
            };
        }
        return null;
    };
    
    const handleDelete = () => {
        if (window.confirm(currentT.confirmDelete)) {
            const success = deleteOrder(id);
            if (success) {
                toast.success(currentT.delSuccess);
                navigate("/orders");
            } else {
                toast.error(currentT.delError);
            }
        }
    };

    useEffect(() => {
        setOrder(getOrderFromStorage(id));

        const iv = setInterval(() => {
            setOrder((prev) => {
                if (!prev || prev.status === "Success") return prev;

                const now = Date.now();
                let newStatus = prev.status;
                let updated = false;
                const statusHistory = { ...prev.statusHistory };

                if (prev.status === "Pending") {
                    const pendingTime = new Date(prev.statusAt).getTime();
                    if (now - pendingTime >= PENDING_DURATION) {
                        newStatus = "Processing";
                        statusHistory[newStatus] = new Date().toISOString(); 
                        updated = true;
                    }
                }

                if (prev.status === "Processing") {
                    const processingTime = new Date(prev.statusAt).getTime();
                    if (now - processingTime >= PROCESSING_DURATION) {
                        newStatus = "Success";
                        statusHistory[newStatus] = new Date().toISOString(); 
                        updated = true;
                        toast.success(`#${prev.id} ${currentT.finishToast}`);
                    }
                }

                if (updated) {
                    const updatedOrder = {
                        ...prev,
                        status: newStatus,
                        statusAt: new Date().toISOString(), 
                        statusHistory,
                    };

                    const stored = JSON.parse(localStorage.getItem("orders") || "[]");
                    const newStored = stored.map((o) => o.id === updatedOrder.id ? updatedOrder : o);
                    localStorage.setItem("orders", JSON.stringify(newStored));
                    return updatedOrder;
                }
                return prev;
            });
        }, 2000);

        return () => clearInterval(iv);
    }, [id, lang]); // Re-run effect jika bahasa berubah untuk update toast

    if (!order) {
         return (
             <div className="max-w-3xl mx-auto px-6 py-20 text-center font-primary">
                 <h1 className="text-3xl font-bold text-gray-800">{currentT.notFound}</h1>
                 <button
                     onClick={() => navigate("/orders")}
                     className="mt-6 bg-[#191A23] text-[#B9FF66] px-6 py-3 rounded-xl shadow-[4px_4px_0_0_#B9FF66] font-bold"
                 >
                     {currentT.backToHistory}
                 </button>
             </div>
         );
    }

    const badgeCls =
        order.status === "Pending" ? "bg-yellow-100 text-yellow-800 border-yellow-200" :
        order.status === "Processing" ? "bg-blue-100 text-blue-800 border-blue-200" :
        "bg-green-100 text-green-800 border-green-200";

    return (
        <div className="max-w-3xl mx-auto px-6 py-10 font-primary">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">{currentT.title} #{order.id}</h1>
            
            <OrderStepper order={order} />

            {order.status !== "Success" && (
                <div className="flex items-center justify-center gap-2 mb-8 p-3 bg-blue-50 text-blue-700 rounded-xl border border-blue-100 animate-pulse">
                    <p className="text-sm font-medium">{currentT.autoUpdate}</p>
                </div>
            )}

            <div className="bg-white shadow-[8px_8px_0_0_#191A23] rounded-2xl p-8 border-2 border-[#191A23]">
                {/* Info Game */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-6 border-b border-gray-100 gap-4">
                    <div>
                        <h2 className="text-2xl font-black text-[#191A23]">{order.game}</h2>
                        <p className="text-sm text-gray-500 font-medium">
                            {order.package} • {currentT.created}: {new Date(order.createdAt).toLocaleString(lang === 'ID' ? 'id-ID' : 'en-US')}
                        </p>
                    </div>
                    <div className={`px-4 py-2 rounded-full text-xs font-black uppercase border-2 ${badgeCls}`}>
                        {order.status}
                    </div>
                </div>

                {/* Grid ID */}
                <div className={`grid gap-4 mb-8 ${order.zoneId ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                    <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">User ID</p>
                        <div className="font-bold text-xl text-[#191A23] break-all">{order.userId}</div>
                    </div>
                    {order.zoneId && order.zoneId !== "N/A" && (
                        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Zone/Server ID</p>
                            <div className="font-bold text-xl text-[#191A23] break-all">{order.zoneId}</div>
                        </div>
                    )}
                </div>

                {/* Price Table */}
                <div className="space-y-3 mb-8 bg-[#191A23] text-white p-6 rounded-2xl">
                    <div className="flex justify-between text-sm opacity-70">
                        <span>{currentT.price}</span>
                        <span>{formatCurrency(order.price)}</span>
                    </div>
                    <div className="flex justify-between text-sm opacity-70">
                        <span>{currentT.fee} ({order.payment})</span>
                        <span>{formatCurrency(order.fee)}</span>
                    </div>
                    <div className="pt-3 border-t border-white/10 flex justify-between font-black text-2xl text-[#B9FF66]">
                        <span>{currentT.total}</span>
                        <span>{formatCurrency(order.total)}</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={handleDelete}
                        className="flex-1 px-6 py-4 bg-red-50 text-red-600 hover:bg-red-100 transition rounded-xl font-bold border-2 border-transparent hover:border-red-200"
                    >
                        {currentT.btnDelete}
                    </button>
                    
                    <button
                        onClick={() => navigate("/orders")}
                        className="flex-1 px-6 py-4 bg-gray-100 text-gray-700 hover:bg-gray-200 transition rounded-xl font-bold"
                    >
                        {currentT.btnHistory}
                    </button>

                    <button
                        onClick={() => {
                            navigator.clipboard?.writeText(String(order.id));
                            toast.success(currentT.copySuccess);
                        }}
                        className="flex-1 px-6 py-4 bg-[#191A23] text-[#B9FF66] hover:bg-black transition rounded-xl font-bold shadow-[4px_4px_0_0_#B9FF66] active:translate-y-1 active:shadow-none"
                    >
                        {currentT.btnCopy}
                    </button>
                </div>
            </div>
        </div>
    );
}