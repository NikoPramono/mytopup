// src/components/admin/AdminRouteGuard.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRouteGuard = () => {
    // Di aplikasi nyata, Anda akan memverifikasi token API
    const isAuthenticated = localStorage.getItem('isAdminLoggedIn') === 'true';

    // Jika sudah terautentikasi, biarkan akses ke child routes (Dashboard, Orders, dll.)
    // Jika belum, arahkan kembali ke halaman login
    return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default AdminRouteGuard;