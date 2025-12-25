// src/pages/admin/AdminLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn } from 'lucide-react';
import toast, { Toaster } from "react-hot-toast";

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Data Admin HARDCODED untuk Simulasi
    const ADMIN_USER = 'admin';
    const ADMIN_PASS = '12345'; 

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulasi penundaan jaringan/API
        setTimeout(() => {
            if (username === ADMIN_USER && password === ADMIN_PASS) {
                // Autentikasi Berhasil
                toast.success('Login Berhasil! Mengalihkan ke Dashboard...');
                
                // Di aplikasi nyata, Anda akan menyimpan token di localStorage/cookies
                localStorage.setItem('isAdminLoggedIn', 'true'); 

                // Arahkan ke Dashboard
                navigate('/admin');
            } else {
                // Autentikasi Gagal
                toast.error('Username atau Password salah.');
            }
            setLoading(false);
        }, 1000); // Penundaan 1 detik
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Toaster position="top-right" />
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-2xl border border-gray-200">
                
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900">
                        Admin Login
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Akses ke Panel Administrasi
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label 
                            htmlFor="username" 
                            className="block text-sm font-medium text-gray-700"
                        >
                            Username
                        </label>
                        <div className="mt-1">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                disabled={loading}
                            />
                        </div>
                    </div>

                    <div>
                        <label 
                            htmlFor="password" 
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <div className="mt-1">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                disabled={loading}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${
                                loading 
                                ? 'bg-blue-400 cursor-not-allowed' 
                                : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150'
                            }`}
                        >
                            {loading ? (
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (
                                <>
                                    <LogIn className="w-5 h-5 mr-2" />
                                    Login
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}