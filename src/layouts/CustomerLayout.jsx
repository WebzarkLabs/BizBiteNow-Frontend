import { Outlet } from "react-router-dom";
import BottomNav from "../components/customer/BottomNav";

const CustomerLayout = () => {
  return (
    <div
      className="min-h-screen bg-[#FAFAF5] text-[#1C1C1C]"
      style={{ fontFamily: "Arial, sans-serif", fontSize: "14px", lineHeight: "1.6" }}
    >
      <main className="pb-20 w-full">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default CustomerLayout;
