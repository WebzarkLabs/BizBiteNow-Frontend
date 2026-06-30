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
<aside className="h-full w-full bg-[#1A4D2E] text-white flex flex-col">
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
      <nav className="mt-6 px-4 flex-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/seller/dashboard"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 lg:px-4 py-3 rounded-xl mb-2 transition-all duration-200 ${
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
      <div className="p-4 border-t border-white/10">
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