import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Settings,
  IndianRupee,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/seller/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Orders",
    path: "/seller/orders",
    icon: ShoppingBag,
  },
  {
    name: "Products",
    path: "/seller/products",
    icon: Package,
  },
  {
    name: "Settings",
    path: "/seller/settings",
    icon: Settings,
  },
  {
    name: "Earnings",
    path: "/seller/earnings",
    icon: IndianRupee,
  },
];

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem("sellerAuth");
    window.location.href = "/seller/login";
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#1A4D2E] text-white shadow-xl z-50">
      {/* Logo */}
      <div className="h-20 flex items-center justify-center border-b border-white/10">
        <div>
          <h1 className="text-2xl font-bold tracking-wide">
            BizBiteNow
          </h1>
          <p className="text-xs text-gray-300 text-center">
            Seller Dashboard
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-6 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/seller/dashboard"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all duration-200 ${
                  isActive
                    ? "bg-[#F4A300] text-black font-semibold"
                    : "hover:bg-white/10 text-gray-200"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="absolute bottom-6 left-0 w-full px-4">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-3 w-full bg-[#F4A300] hover:bg-[#b99100] transition rounded-xl py-3 text-black font-semibold"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;