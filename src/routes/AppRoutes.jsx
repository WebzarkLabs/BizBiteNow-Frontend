import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// Seller Pages
import Login from "../pages/seller/Login";
import Dashboard from "../pages/seller/Dashboard";
import Orders from "../pages/seller/Orders";
import Products from "../pages/seller/Products";
import Settings from "../pages/seller/Settings";
import Earnings from "../pages/seller/Earnings";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect */}
        <Route path="/" element={<Navigate to="/seller/login" replace />} />

        {/* Seller Authentication */}
        <Route path="/seller" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>

        {/* Seller Dashboard */}
        <Route path="/seller" element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="settings" element={<Settings />} />
          <Route path="earnings" element={<Earnings />} />
        </Route>

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center min-h-screen text-2xl font-bold">
              404 | Page Not Found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;