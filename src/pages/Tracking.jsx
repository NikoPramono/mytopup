// src/pages/Tracking.jsx
import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import OrderStepper from "../components/OrderStepper";
import SkeletonCard from "../components/SkeletonCard";

const PENDING_DURATION = 60 * 1000; // 1 menit
const PROCESSING_DURATION = 3 * 60 * 1000; // 3 menit
const TOTAL_DURATION = PENDING_DURATION + PROCESSING_DURATION;

// Helper: update status
const updateOrderStatus = (order) => {
  if (!order || order.status === "Success") return order;
  const now = Date.now();

  if (order.status === "Pending") {
    if (now - new Date(order.statusAt).getTime() >= PENDING_DURATION) {
      return { ...order, status: "Processing", statusAt: now };
    }
  }

  if (order.status === "Processing") {
    if (now - new Date(order.statusAt).getTime() >= PROCESSING_DURATION) {
      return { ...order, status: "Success", statusAt: now };
    }
  }

  return order;
};

// Helper: hitung progress
const getProgress = (order) => {
  const now = Date.now();
  const elapsed = now - new Date(order.createdAt).getTime();
  return Math.min((elapsed / TOTAL_DURATION) * 100, 100);
};

export default function Tracking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(null);
  const lastStatusRef = useRef(null);

  const loadOrder = () => {
    const stored = JSON.parse(localStorage.getItem("orders") || "[]");
    const found = stored.find((o) => String(o.id) === String(id));
    if (found) {
      // normalize timestamps
      const normalized = {
        ...found,
        createdAt: found.createdAt || new Date().toISOString(),
        statusAt: found.statusAt || new Date().toISOString(),
      };
      setOrder(normalized);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadOrder();
    const iv = setInterval(() => {
      setOrder((prev) => {
        if (!prev) return prev;
        const updated = updateOrderStatus(prev);
        if (updated.status !== prev.status) {
          if (updated.status === "Success") {
            toast.success(`Pesanan #${updated.id} selesai 🎉`);
          } else {
            toast(`Status berubah → ${updated.status}`, { icon: "🔄" });
          }
        }

        // update localStorage
        const stored = JSON.parse(localStorage.getItem("orders") || "[]");
        const newStored = stored.map((o) =>
          o.id === updated.id ? updated : o
        );
        localStorage.setItem("orders", JSON.stringify(newStored));

        return updated;
      });
    }, 2000); // update tiap 2 detik agar progress lebih smooth

    return () => clearInterval(iv);
    // eslint-disable-next-line
  }, [id]);

  if (loading) {
    return (
      <>
        <Toaster position="top-right" />
        <SkeletonCard />
      </>
    );
  }

  if (!order) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Pesanan tidak ditemukan</h2>
        <p className="text-gray-600 mb-6">ID: {id}</p>
        <button
          onClick={() => navigate("/orders")}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Kembali
        </button>
      </div>
    );
  }

  // fallback image (bisa diganti sesuai order.game)
  const gameImageUrl =
    "/mnt/data/e8f6c194-b83a-4185-b9b3-9dedd59fcfb7.png";

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Toaster position="top-right" />

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white relative">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={gameImageUrl}
                alt={order.game}
                className="w-20 h-20 object-cover rounded-lg shadow-md"
              />
              <div>
                <h3 className="text-2xl font-bold leading-tight">
                  {order.game}
                </h3>
                <div className="text-sm opacity-90">
                  {order.package} •{" "}
                  {new Date(order.createdAt).toLocaleString()}
                </div>
              </div>
            </div>

            <div className="text-right">
              <div
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  order.status === "Pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : order.status === "Processing"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {order.status}
              </div>
              <div className="mt-2 text-2xl font-extrabold">
                Rp {order.total.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-200">
            <div
              className="h-2 rounded-full bg-green-400 transition-all duration-300"
              style={{ width: `${getProgress(order)}%` }}
            />
          </div>
        </div>

        {/* Body */}
        <div className="p-8">
          {/* Stepper */}
          <div className="bg-white rounded-xl p-6 shadow-sm border mb-6">
            <OrderStepper order={order} />
          </div>

          {/* Detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600">User ID</div>
              <div className="font-semibold mt-2">{order.userId}</div>

              <div className="text-sm text-gray-600 mt-4">Zone / Server</div>
              <div className="font-semibold mt-2">{order.zoneId || "-"}</div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600 flex justify-between">
                <span>Harga Paket</span>
                <span>Rp {order.price?.toLocaleString()}</span>
              </div>

              <div className="text-sm text-gray-600 mt-3 flex justify-between">
                <span>Biaya Admin ({order.payment || "—"})</span>
                <span>Rp {order.fee?.toLocaleString() ?? 0}</span>
              </div>

              <div className="border-t my-3" />

              <div className="text-lg font-bold flex justify-between">
                <span>Total Bayar</span>
                <span>Rp {order.total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => navigate(`/orders`)}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg"
            >
              Kembali
            </button>

            <button
              onClick={() => {
                navigator.clipboard?.writeText(String(order.id));
                toast.success("Nomor pesanan disalin!");
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Salin Nomor
            </button>

            <a
              className="px-4 py-2 bg-green-600 text-white rounded-lg ml-auto"
              href={`https://wa.me/?text=${encodeURIComponent(
                `Cek pesanan saya: ${order.id} - ${
                  process.env.REACT_APP_FRONTEND_URL || window.location.origin
                }/tracking/${order.id}`
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              Hubungi CS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
