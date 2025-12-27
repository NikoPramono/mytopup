import React, { useState, useEffect } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { formatCurrency } from "../../utils/format";
import { kpiData, generateChartData } from "../../utils/adminMetrics";
import { ShoppingCart, DollarSign, Clock, Users, Package, TrendingUp, Calendar } from 'lucide-react';
import { 
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';

// --- HELPER FUNCTIONS ---

const getLatestOrders = () => {
    let allOrders = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (key.startsWith('orders_') || key === 'orders')) {
            try {
                const data = JSON.parse(localStorage.getItem(key));
                if (Array.isArray(data)) allOrders = [...allOrders, ...data];
            } catch (e) { /* ignore */ }
        }
    }
    return allOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

// --- COMPONENTS ---

const KpiCard = ({ icon: Icon, title, value, colorClass, bgColor }) => (
    <div className="relative group">
        <div className="absolute inset-0 bg-black translate-x-1.5 translate-y-1.5 rounded-2xl"></div>
        <div className="relative bg-white border-4 border-black p-6 rounded-2xl flex items-center justify-between overflow-hidden">
            <div className="flex flex-col z-10">
                <span className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">{title}</span>
                <span className="text-2xl font-black text-black">{value}</span>
            </div>
            <div className={`p-4 border-4 border-black rounded-xl shadow-[4px_4px_0_0_#000] ${bgColor}`}>
                <Icon className="w-6 h-6 text-black stroke-[3px]" />
            </div>
        </div>
    </div>
);

export default function AdminDashboard() {
    const [latestOrders, setLatestOrders] = useState([]);
    const [filterPeriod, setFilterPeriod] = useState(7);
    const [chartData, setChartData] = useState([]);
    const [metrics, setMetrics] = useState({
        totalSales: 0,
        revenue: 0,
        pending: 0
    });

    useEffect(() => {
        const orders = getLatestOrders();
        setLatestOrders(orders.slice(0, 5));

        // Kalkulasi real-time dari localStorage
        const totalRev = orders.reduce((acc, curr) => acc + (Number(curr.total) || 0), 0);
        const pendingCount = orders.filter(o => o.status === 'Pending').length;

        setMetrics({
            totalSales: orders.length,
            revenue: totalRev,
            pending: pendingCount
        });

        setChartData(generateChartData(filterPeriod));
    }, [filterPeriod]);

    return (
        <AdminLayout title="System Overview">
            
            {/* 1. STATS GRID (KPI) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <KpiCard
                    icon={ShoppingCart}
                    title="Total Orders"
                    value={metrics.totalSales}
                    bgColor="bg-blue-400"
                />
                <KpiCard
                    icon={DollarSign}
                    title="Total Revenue"
                    value={formatCurrency(metrics.revenue)}
                    bgColor="bg-[#B9FF66]"
                />
                <KpiCard
                    icon={Clock}
                    title="Pending Task"
                    value={metrics.pending}
                    bgColor="bg-yellow-400"
                />
                <KpiCard
                    icon={Users}
                    title="Active Clients"
                    value={kpiData.registeredUsers.toLocaleString()}
                    bgColor="bg-purple-400"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                {/* 2. MAIN CHART */}
                <div className="lg:col-span-2 relative">
                    <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 rounded-3xl"></div>
                    <div className="relative bg-white border-4 border-black p-6 rounded-3xl h-full">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                            <div>
                                <h3 className="text-xl font-black uppercase italic flex items-center gap-2">
                                    <TrendingUp className="text-blue-600" /> Sales Analytics
                                </h3>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Performance tracking over time</p>
                            </div>

                            <div className="flex bg-gray-100 border-2 border-black p-1 rounded-xl shadow-[2px_2px_0_0_#000]">
                                {[7, 30, 90].map((period) => (
                                    <button
                                        key={period}
                                        onClick={() => setFilterPeriod(period)}
                                        className={`px-4 py-1.5 text-[10px] font-black uppercase rounded-lg transition-all ${
                                            filterPeriod === period 
                                            ? 'bg-black text-white' 
                                            : 'text-black hover:bg-gray-200'
                                        }`}
                                    >
                                        {period}D
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="h-72 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={chartData}>
                                    <defs>
                                        <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                                    <XAxis dataKey="name" hide />
                                    <YAxis hide />
                                    <Tooltip 
                                        contentStyle={{ 
                                            backgroundColor: '#000', 
                                            border: 'none', 
                                            borderRadius: '8px',
                                            color: '#fff',
                                            fontWeight: 'bold'
                                        }}
                                        itemStyle={{ color: '#B9FF66' }}
                                    />
                                    <Area 
                                        type="monotone" 
                                        dataKey="sales" 
                                        stroke="#000" 
                                        strokeWidth={4}
                                        fillOpacity={1} 
                                        fill="url(#colorSales)" 
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* 3. RECENT ORDERS MINI TABLE */}
                <div className="relative">
                    <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 rounded-3xl"></div>
                    <div className="relative bg-white border-4 border-black p-6 rounded-3xl h-full overflow-hidden">
                        <h3 className="text-lg font-black uppercase italic mb-6 flex items-center gap-2">
                            <Calendar className="text-red-500" /> Recent Activity
                        </h3>

                        <div className="space-y-4">
                            {latestOrders.length === 0 ? (
                                <div className="text-center py-10 text-gray-400 font-bold uppercase text-xs italic">No orders found</div>
                            ) : (
                                latestOrders.map((order) => (
                                    <div key={order.id} className="flex items-center justify-between p-3 border-2 border-black rounded-xl hover:bg-gray-50 transition-colors">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black text-blue-600 leading-none mb-1">#{String(order.id).substring(0,6)}</span>
                                            <span className="text-xs font-bold truncate max-w-[100px]">{order.product}</span>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs font-black">{formatCurrency(order.total)}</div>
                                            <div className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-full border border-black inline-block mt-1 ${
                                                order.status === 'Success' ? 'bg-[#B9FF66]' : 'bg-yellow-300'
                                            }`}>
                                                {order.status}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <button className="w-full mt-6 py-3 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-gray-800 transition-all">
                            View All Logs
                        </button>
                    </div>
                </div>
            </div>

            {/* 4. SYSTEM FOOTER */}
            <footer className="mt-12 mb-6">
                <div className="relative">
                    <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 rounded-2xl"></div>
                    <div className="relative bg-white border-2 border-black p-4 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse border border-black"></div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">System Live Status</span>
                        </div>
                        <div className="text-[10px] font-black uppercase text-gray-400">
                            &copy; {new Date().getFullYear()} Nexcent Platform • Build 1.0.4-Stable
                        </div>
                    </div>
                </div>
            </footer>

        </AdminLayout>
    );
}