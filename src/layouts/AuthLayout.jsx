import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A4D2E] via-[#205C38] to-[#163D24]">
      <Outlet />
    </div>
  );
};

export default AuthLayout;