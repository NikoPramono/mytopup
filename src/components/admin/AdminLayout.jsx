// src/components/admin/AdminLayout.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, List, Box, LogOut } from 'lucide-react'; // Asumsi menggunakan lucide-react untuk ikon

const sidebarNav = [
  { name: "Dashboard", href: "/admin", icon: Home },
  { name: "Pesanan", href: "/admin/orders", icon: List },
  { name: "Produk", href: "/admin/products", icon: Box },
];

const AdminSidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4 flex flex-col">
      <div className="text-2xl font-bold mb-8 text-blue-400">Admin Panel</div>
      <nav className="flex-1">
        {sidebarNav.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center p-3 rounded-lg transition duration-150 mb-2
                ${isActive ? 'bg-blue-600 font-semibold' : 'hover:bg-gray-700'}`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <button className="flex items-center p-3 mt-4 text-red-400 hover:bg-gray-700 rounded-lg transition duration-150">
        <LogOut className="w-5 h-5 mr-3" />
        Logout
      </button>
    </div>
  );
};

export default function AdminLayout({ children, title }) {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b p-4">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        </header>
        
        {/* Content */}
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}