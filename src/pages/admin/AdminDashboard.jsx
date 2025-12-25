// src/pages/admin/AdminDashboard.jsx
import React, { useState, useEffect } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { formatCurrency } from "../../utils/format"; 
// Import hanya generateChartData, yang kini menjadi sebuah fungsi
import { kpiData, generateChartData } from "../../utils/adminMetrics"; 
import { ShoppingCart, DollarSign, Clock, Users, Package } from 'lucide-react';
import { 
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

// Fungsi helper sederhana untuk mengambil pesanan terbaru dari Local Storage
const getLatestOrders = () => {
    let allOrders = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('orders_')) {
            try {
                const userOrders = JSON.parse(localStorage.getItem(key));
                if (Array.isArray(userOrders)) {
                    allOrders = allOrders.concat(userOrders);
                }
            } catch (e) {
                // error parsing, lewati
            }
        }
    }
    allOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return allOrders.slice(0, 5);
};

// Komponen Kartu KPI
const KpiCard = ({ icon: Icon, title, value, colorClass }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg flex items-center justify-between">
        <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">{title}</span>
            <span className="text-3xl font-bold text-gray-800 mt-1">{value}</span>
        </div>
        <div className="p-3 rounded-full flex items-center justify-center" style={{ backgroundColor: colorClass }}>
            <Icon className="w-6 h-6 text-white" />
        </div>
    </div>
);


export default function AdminDashboard() {
    const [latestOrders, setLatestOrders] = useState([]);
    
    // State baru untuk periode filter: default 7 hari
    const [filterPeriod, setFilterPeriod] = useState(7); 
    const [chartData, setChartData] = useState([]);

    const periodOptions = [7, 30, 90]; // Pilihan hari yang tersedia

    useEffect(() => {
        // 1. Ambil data pesanan terbaru
        setLatestOrders(getLatestOrders());

        // 2. Generate data chart berdasarkan filterPeriod
        const generatedData = generateChartData(filterPeriod);
        setChartData(generatedData);
        
    }, [filterPeriod]); // Dependency array: ulangi effect jika filterPeriod berubah

    const formattedRevenue = formatCurrency(kpiData.totalRevenue, { minimumFractionDigits: 0 });

    return (
        <AdminLayout title="Dashboard Utama">
            
            {/* Bagian 1: Kartu KPI */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <KpiCard
                    icon={ShoppingCart}
                    title="Total Penjualan Hari Ini"
                    value={kpiData.totalSales}
                    colorClass="#3b82f6" // blue-500
                />
                <KpiCard
                    icon={DollarSign}
                    title="Total Pendapatan"
                    value={formattedRevenue}
                    colorClass="#10b981" // green-500
                />
                <KpiCard
                    icon={Clock}
                    title="Pesanan Menunggu Proses"
                    value={kpiData.pendingOrders}
                    colorClass="#f59e0b" // yellow-500
                />
                <KpiCard
                    icon={Users}
                    title="Pengguna Terdaftar"
                    value={kpiData.registeredUsers.toLocaleString()}
                    colorClass="#9333ea" // purple-500
                />
            </div>
            
            {/* Bagian 2: Grafik Penjualan */}
            <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">
                        Grafik Penjualan {filterPeriod} Hari Terakhir (Jumlah Transaksi)
                    </h3>
                    
                    {/* Tombol Filter Periode */}
                    <div className="flex space-x-2 p-1 bg-gray-100 rounded-lg">
                        {periodOptions.map((period) => (
                            <button
                                key={period}
                                onClick={() => setFilterPeriod(period)}
                                className={`px-4 py-1 text-sm font-medium rounded-md transition duration-150 ease-in-out ${
                                    filterPeriod === period
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {period} Hari
                            </button>
                        ))}
                    </div>
                    {/* Akhir Tombol Filter Periode */}

                </div>

                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis 
                                dataKey="name" 
                                stroke="#888" 
                            />
                            <YAxis 
                                stroke="#888" 
                                domain={['auto', 'auto']} 
                                allowDecimals={false}
                            />
                            <Tooltip 
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
                                labelFormatter={(label) => `Tanggal: ${label}`}
                                formatter={(value) => [`${value} Transaksi`, 'Penjualan']}
                            />
                            <Line 
                                type="monotone" 
                                dataKey="sales" 
                                stroke="#3b82f6" 
                                strokeWidth={3} 
                                dot={{ r: 5 }} 
                                activeDot={{ r: 8 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Bagian 3: Pesanan Terbaru */}
            <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center text-gray-800">
                    <Package className="w-5 h-5 mr-2 text-red-500" />
                    Pesanan Terbaru (5 Transaksi Terakhir)
                </h3>
                
                {latestOrders.length === 0 ? (
                    <p className="text-gray-500 text-center py-4">Belum ada pesanan terbaru tercatat di Local Storage.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produk</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                {latestOrders.map((order) => (
                                    <tr key={order.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                                            #{String(order.id).substring(0, 8)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {order.product} ({order.package})
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {formatCurrency(order.total)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span 
                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                                ${order.status === 'Success' ? 'bg-green-100 text-green-800' : 
                                                    order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                                                    'bg-blue-100 text-blue-800'}`}
                                            >
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            
            {/* 4. FOOTER BARU */}
            <footer className="w-full mt-10 p-4 border-t border-gray-200 bg-white rounded-xl shadow-lg">
                <div className="text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} **Nexcent**. Hak Cipta Dilindungi. 
                    <span className="block mt-1 text-xs">Admin Panel Versi 1.0.0</span>
                </div>
            </footer>
            {/* Akhir FOOTER */}

        </AdminLayout>
    );
}