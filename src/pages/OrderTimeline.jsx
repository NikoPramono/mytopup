import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import OrderStepper from "../components/OrderStepper";

const OrderTimelinePage = () => {
  const [orders, setOrdersState] = useState([]);

  const getOrders = () => JSON.parse(localStorage.getItem("orders") || "[]");
  const setOrders = (orders) => localStorage.setItem("orders", JSON.stringify(orders));

  // 1. Inisialisasi pesanan awal (Hanya jalan sekali saat mount)
  useEffect(() => {
    const savedOrders = getOrders();
    if (savedOrders.length === 0) {
      const initialOrders = [
        {
          id: 1,
          status: "Pending",
          createdAt: Date.now(),
          timestamp: Date.now(),
          statusHistory: { Pending: Date.now() },
        },
      ];
      setOrders(initialOrders);
      setOrdersState(initialOrders);
    } else {
        setOrdersState(savedOrders); // Memuat pesanan yang sudah ada
    }
  }, []);

  // 2. Auto-update status setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      let updated = false;

      const newOrders = getOrders().map((o) => {
        if (o.status === "Success") return o;

        // Pending → Processing (1 menit)
        // Mengganti o.timestamp || now menjadi o.timestamp karena sudah dijamin ada
        if (o.status === "Pending" && now - o.timestamp >= 60 * 1000) { 
          updated = true;
          return {
            ...o,
            status: "Processing",
            timestamp: now,
            statusHistory: { ...o.statusHistory, Processing: now },
          };
        }

        // Processing → Success (3 menit)
        if (o.status === "Processing" && now - o.timestamp >= 3 * 60 * 1000) {
          updated = true;
          toast.success(`Pesanan #${o.id} selesai!`);
          return {
            ...o,
            status: "Success",
            timestamp: now,
            statusHistory: { ...o.statusHistory, Success: now },
          };
        }

        return o;
      });

      if (updated) {
        setOrders(newOrders); // Tulis ke localStorage
        setOrdersState(newOrders); // Update state React
        // Tidak perlu setOrders(newOrders) lagi
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Tambah pesanan baru
  const addOrder = () => {
    // Menggunakan orders state untuk ID (sudah benar jika lifecycle terkelola)
    const newId = orders.length > 0 ? orders[orders.length - 1].id + 1 : 1; 

    const newOrder = {
      id: newId,
      status: "Pending",
      createdAt: Date.now(),
      timestamp: Date.now(),
      statusHistory: { Pending: Date.now() },
    };
    
    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    setOrdersState(updatedOrders);
    toast.success(`Pesanan #${newOrder.id} ditambahkan!`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Toaster position="top-right" />
      <h2 className="text-3xl font-bold mb-6 text-center">Dashboard Pesanan</h2>

      <div className="flex justify-center mb-6">
        <button
          onClick={addOrder}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Tambah Pesanan Baru
        </button>
      </div>

      {orders.map((order) => (
        <div key={order.id} className="mb-10 border rounded p-6 shadow">
          <h3 className="text-xl font-semibold mb-4">Pesanan #{order.id}</h3>
          <OrderStepper order={order} />
        </div>
      ))}
    </div>
  );
};

export default OrderTimelinePage;