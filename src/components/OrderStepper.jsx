import React, { useEffect, useState } from "react";

const PENDING_DURATION = 60 * 1000; 
const PROCESSING_DURATION = 3 * 60 * 1000; 
const STEPS = ["Pending", "Processing", "Success"];

const COLORS = {
  Pending: "bg-yellow-500",
  Processing: "bg-blue-600",
  Success: "bg-green-600",
};

const getStepProgress = (order) => {
  if (!order) return 0;
  if (order.status === "Success") return 2;
    
  const now = Date.now();
  // Pastikan ada fallback jika statusHistory belum terbentuk
  const history = order.statusHistory || {};
  const pendingStartTime = new Date(history.Pending || order.createdAt).getTime(); 
  
  const processingStartTime = pendingStartTime + PENDING_DURATION;

  if (order.status === "Pending") {
    const p = (now - pendingStartTime) / PENDING_DURATION;
    return Math.max(0, Math.min(p, 1));
  } 
  
  if (order.status === "Processing") {
    const p = (now - processingStartTime) / PROCESSING_DURATION;
    return 1 + Math.max(0, Math.min(p, 1));
  }

  return 0;
};

export default function OrderStepper({ order }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!order) return;
    if (order.status === "Success") {
        setProgress(2); 
        return;
    }
    
    // Set awal agar tidak lompat dari 0
    setProgress(getStepProgress(order));

    const iv = setInterval(() => {
      setProgress(getStepProgress(order));
    }, 100);

    return () => clearInterval(iv);
  }, [order]);

  // Fallback jika order undefined saat loading
  if (!order) return null;

  const currentIdx = STEPS.indexOf(order.status);
  const progressWidth = (progress / (STEPS.length - 1)) * 100;
  
  const formatTime = (iso) => {
    try {
        return new Date(iso).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    } catch (e) {
        return "---";
    }
  };

  return (
    <div className="w-full mb-10">
      <div className="relative mb-12 py-4">
        {/* Progress Line Background */}
        <div className="absolute top-1/2 left-0 w-full h-1.5 bg-gray-200 rounded-full -translate-y-1/2" />

        {/* Dynamic Progress Line */}
        <div
          className="absolute top-1/2 left-0 h-1.5 bg-green-500 rounded-full transition-all duration-300 ease-linear -translate-y-1/2 shadow-[0_0_8px_rgba(34,197,94,0.5)]"
          style={{ width: `${progressWidth}%` }}
        />

        {/* Steps Bubbles */}
        <div className="flex justify-between relative z-10">
          {STEPS.map((s, idx) => {
            const isCompleted = idx < currentIdx || order.status === "Success" && idx === 2;
            const isActive = idx === currentIdx;

            return (
              <div key={s} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-black border-4 border-white shadow-md transition-all duration-500 ${
                    isCompleted || isActive ? COLORS[s] : "bg-gray-300"
                  } ${isActive ? "scale-125 ring-4 ring-opacity-30 ring-black" : ""}`}
                >
                  {isCompleted ? "✓" : idx + 1}
                </div>
                <div className={`absolute -bottom-8 text-[10px] font-black uppercase tracking-tighter whitespace-nowrap ${
                  isActive ? "text-black" : "text-gray-400"
                }`}>
                  {s}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Riwayat Waktu */}
      <div className="grid grid-cols-1 gap-2 bg-gray-50 p-4 rounded-2xl border-2 border-dashed border-gray-200">
        {STEPS.map((s) => (
          <div key={s} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${order.statusHistory?.[s] ? COLORS[s] : "bg-gray-300"}`} />
              <span className="font-bold uppercase text-gray-600">{s}</span>
            </div>
            <span className="font-mono text-gray-400">
              {order.statusHistory?.[s] ? formatTime(order.statusHistory[s]) : "Pending..."}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}