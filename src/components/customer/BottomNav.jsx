import { NavLink } from "react-router-dom";
import { Home, ShoppingCart, ClipboardList } from "lucide-react";
import { useCart } from "../../context/CartContext";

const tabs = [
  { name: "Home", path: "/", icon: Home },
  { name: "Cart", path: "/cart", icon: ShoppingCart },
  { name: "Orders", path: "/orders", icon: ClipboardList },
];

const BottomNav = () => {
  const { totalItems } = useCart();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <NavLink
            key={tab.path}
            to={tab.path}
            end={tab.path === "/"}
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center justify-center py-3 text-xs font-medium transition-colors min-h-[44px] ${
                isActive ? "text-[#1A4D2E]" : "text-gray-400"
              }`
            }
          >
            <div className="relative">
              <Icon size={22} />
              {tab.name === "Cart" && totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#F4A300] text-[#1C1C1C] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </div>
            <span className="mt-1">{tab.name}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default BottomNav;
