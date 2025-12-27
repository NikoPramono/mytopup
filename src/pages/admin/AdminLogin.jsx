import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn, ShieldCheck } from 'lucide-react';
import toast, { Toaster } from "react-hot-toast";

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Data Admin HARDCODED
    const ADMIN_USER = 'admin';
    const ADMIN_PASS = '12345'; 

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            if (username === ADMIN_USER && password === ADMIN_PASS) {
                toast.success('Login Berhasil!');
                localStorage.setItem('isAdminLoggedIn', 'true'); 
                navigate('/admin');
            } else {
                toast.error('Akses Ditolak: Kredensial Salah');
            }
            setLoading(false);
        }, 800);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F0F0F0] p-4 font-primary">
            <Toaster position="top-right" />
            
            <div className="relative w-full max-w-md">
                {/* Shadow Layer Dekoratif */}
                <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 rounded-2xl"></div>
                
                {/* Kontainer Utama Form */}
                <div className="relative bg-white border-4 border-black rounded-2xl p-8 sm:p-10">
                    
                    {/* Header dengan Icon */}
                    <div className="text-center mb-10">
                        <div className="inline-block bg-[#B9FF66] border-4 border-black p-4 mb-4 shadow-[4px_4px_0_0_#000]">
                            <ShieldCheck size={40} className="text-black" />
                        </div>
                        <h1 className="text-4xl font-black uppercase tracking-tighter italic">
                            Admin <span className="text-blue-600">Login</span>
                        </h1>
                        <p className="text-xs font-bold uppercase text-gray-400 mt-2 tracking-widest">
                            Restricted Area • Nexcent ADM
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Input Username */}
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest ml-1">Username</label>
                            <input
                                type="text"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Masukkan username..."
                                className="w-full border-4 border-black p-4 font-bold focus:bg-blue-50 outline-none transition-all placeholder:text-gray-300"
                                disabled={loading}
                            />
                        </div>

                        {/* Input Password */}
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest ml-1">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full border-4 border-black p-4 font-bold focus:bg-blue-50 outline-none transition-all placeholder:text-gray-300"
                                disabled={loading}
                            />
                        </div>

                        {/* Tombol Login */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`group relative w-full pt-1`}
                        >
                            {/* Shadow Button */}
                            <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 rounded-lg"></div>
                            
                            {/* Main Button Body */}
                            <div className={`relative flex items-center justify-center py-4 border-4 border-black rounded-lg font-black uppercase tracking-widest transition-all active:translate-x-1 active:translate-y-1 active:shadow-none ${
                                loading ? 'bg-gray-200' : 'bg-[#B9FF66] hover:-translate-y-1 hover:-translate-x-0.5'
                            }`}>
                                {loading ? (
                                    <div className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        <LogIn className="w-5 h-5 mr-3 stroke-[3px]" />
                                        Masuk Sekarang
                                    </>
                                )}
                            </div>
                        </button>
                    </form>

                    {/* Footer / Hint */}
                    <div className="mt-8 pt-6 border-t-2 border-dashed border-black text-center text-[10px] font-bold uppercase text-gray-400">
                        &copy; 2025 Nexcent Gaming Store Management
                    </div>
                </div>
            </div>
        </div>
    );
}