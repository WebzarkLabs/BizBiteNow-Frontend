import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import CustomerLayout from "../layouts/CustomerLayout";

import Dashboard from "../pages/seller/Dashboard";
import Orders from "../pages/seller/Orders";
import Products from "../pages/seller/Products";
import Settings from "../pages/seller/Settings";
import Earnings from "../pages/seller/Earnings";

import StoreFront from "../pages/customer/StoreFront";
import ProductDetail from "../pages/customer/ProductDetail";
import Cart from "../pages/customer/Cart";
import Checkout from "../pages/customer/Checkout";
import OrderConfirmation from "../pages/customer/OrderConfirmation";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Customer Storefront */}
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<StoreFront />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order/:id" element={<OrderConfirmation />} />
        </Route>

        {/* Seller Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="settings" element={<Settings />} />
          <Route path="earnings" element={<Earnings />} />
        </Route>

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center h-screen text-2xl font-bold text-[#1C1C1C]">
              404 | Page Not Found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
