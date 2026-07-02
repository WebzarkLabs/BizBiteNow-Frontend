import { Navigate, Outlet } from "react-router-dom";

const SellerProtectedRoute = () => {
  const token = localStorage.getItem("sellerToken");

  return token ? <Outlet /> : <Navigate to="/seller/login" replace />;
};

export default SellerProtectedRoute;