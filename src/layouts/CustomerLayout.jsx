import { Outlet } from "react-router-dom";

const CustomerLayout = () => {
  return (
    <div
      className="min-h-screen bg-[#FAFAF5] text-[#1C1C1C]"
      style={{ fontFamily: "Arial, sans-serif", fontSize: "14px", lineHeight: "1.6" }}
    >
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default CustomerLayout;
