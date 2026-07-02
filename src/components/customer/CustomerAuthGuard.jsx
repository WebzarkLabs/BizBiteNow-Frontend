import { Navigate, useLocation } from "react-router-dom";

const CustomerAuthGuard = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem("customerToken");

  if (!token) {
    return (
      <Navigate
        to="/customer/login"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return children;
};

export default CustomerAuthGuard;
