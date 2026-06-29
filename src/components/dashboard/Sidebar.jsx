import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Settings,
  IndianRupee,
  LogOut,
} from "lucide-react";
import logoWithIcon from "../../assets/BIZ BITE NOW Horizontal with Icon.png";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Orders",
    path: "/dashboard/orders",
    icon: ShoppingBag,
  },
  {
    name: "Products",
    path: "/dashboard/products",
    icon: Package,
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
  },
  {
    name: "Earnings",
    path: "/dashboard/earnings",
    icon: IndianRupee,
  },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#1A4D2E] text-white shadow-xl z-50">
      {/* Logo */}
      <div className="h-20 flex flex-col items-center justify-center border-b border-white/10 px-4 gap-1">
        <div className="bg-white rounded-xl px-3 py-1.5">
          <img
            src={logoWithIcon}
            alt="BizBiteNow"
            className="h-8 object-contain"
          />
        </div>
        <p className="text-xs text-gray-300 tracking-wide">Seller Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="mt-6 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/dashboard"}
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
        <button className="flex items-center justify-center gap-3 w-full bg-red-500 hover:bg-red-600 transition rounded-xl py-3 font-medium">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;