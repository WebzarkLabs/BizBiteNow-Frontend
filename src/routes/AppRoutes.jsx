import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import CustomerLayout from "../layouts/CustomerLayout";

// Seller Pages
import Login from "../pages/seller/Login";
import Dashboard from "../pages/seller/Dashboard";
import Orders from "../pages/seller/Orders";
import Products from "../pages/seller/Products";
import Settings from "../pages/seller/Settings";
import Earnings from "../pages/seller/Earnings";
import Register from "../pages/seller/Register";
import Profile from "../pages/seller/profile";
import StoreFront from "../pages/customer/StoreFront";
import ProductDetail from "../pages/customer/ProductDetail";
import Cart from "../pages/customer/Cart";
import Checkout from "../pages/customer/Checkout";
import OrderConfirmation from "../pages/customer/OrderConfirmation";
import CustomerRegister from "../pages/customer/Register";
import CustomerProfile from "../pages/customer/Profile";
import OrderDetails from "../pages/seller/OrderDetails";
import SellerProtectedRoute from "./SellerProtectedRoute";

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
          <Route path="customer/register" element={<CustomerRegister />} />
          <Route path="customer/profile" element={<CustomerProfile />} />
        </Route>


        {/* Seller Authentication */}
        <Route path="/seller" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Seller Dashboard */}
      
          <Route path="/seller" element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="orders/:orderId" element={<OrderDetails />} />
            <Route path="products" element={<Products />} />
            <Route path="settings" element={<Settings />} />
            <Route path="earnings" element={<Earnings />} />
            <Route path="profile" element={<Profile />} />
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
