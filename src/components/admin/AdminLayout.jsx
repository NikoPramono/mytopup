import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, List, Box, LogOut, LayoutDashboard } from 'lucide-react';
import toast from "react-hot-toast";

const sidebarNav = [
  { name: "Dashboard", href: "/admin", icon: Home },
  { name: "Pesanan", href: "/admin/orders", icon: List },
  { name: "Produk", href: "/admin/products", icon: Box },
];

const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // MENGHAPUS SESI (Sesuai dengan yang dicek oleh Guard)
    localStorage.removeItem("isAdminLoggedIn");
    localStorage.removeItem("adminUser");
    
    toast.success("Berhasil Keluar!");
    navigate("/admin/login");
  };

  return (
    <div className="w-64 bg-white border-r-4 border-black min-h-screen p-6 flex flex-col font-primary">
      {/* Brand Logo Admin */}
      <div className="flex items-center gap-2 mb-10">
        <div className="bg-[#B9FF66] border-2 border-black p-2 rotate-[-3deg] shadow-[3px_3px_0_0_#000]">
           <LayoutDashboard size={24} className="text-black" />
        </div>
        <span className="text-xl font-black uppercase italic tracking-tighter text-[#191A23]">
            Nexcent <span className="text-gray-400">ADM</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-3">
        {sidebarNav.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center p-3 rounded-xl border-2 transition-all duration-150
                ${isActive 
                  ? 'bg-[#B9FF66] border-black shadow-[4px_4px_0_0_#000] text-black font-black translate-x-1' 
                  : 'bg-white border-transparent hover:border-black hover:shadow-[2px_2px_0_0_#000] text-gray-600'}`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="uppercase text-sm tracking-tight">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <button 
        onClick={handleLogout}
        className="flex items-center p-3 mt-4 text-red-500 font-bold hover:bg-red-50 rounded-xl border-2 border-transparent hover:border-red-500 transition-all uppercase text-xs tracking-widest"
      >
        <LogOut className="w-5 h-5 mr-3" />
        Logout System
      </button>
    </div>
  );
};

export default function AdminLayout({ children, title }) {
  return (
    <div className="flex min-h-screen bg-[#F3F3F3] font-primary text-[#191A23]">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        {/* Header Dashboard */}
        <header className="bg-white border-b-4 border-black p-6 sticky top-0 z-10">
          <h2 className="text-2xl font-black uppercase italic tracking-tighter">
            {title || "Overview"}
          </h2>
        </header>
        
        {/* Area Konten Utama */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="relative">
            {/* Bayangan Kartu */}
            <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 rounded-2xl"></div>
            {/* Kartu Konten */}
            <div className="relative bg-white border-4 border-black rounded-2xl p-6 min-h-[80vh]">
                {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}