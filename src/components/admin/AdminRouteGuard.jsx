import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRouteGuard = () => {
    // Mengecek kunci spesifik untuk Admin
    const isAuthenticated = localStorage.getItem('isAdminLoggedIn') === 'true';

    // Jika TRUE, tampilkan halaman (Outlet). Jika FALSE, ke login admin.
    return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default AdminRouteGuard;