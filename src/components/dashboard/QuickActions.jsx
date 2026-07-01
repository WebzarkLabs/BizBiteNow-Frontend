import { useNavigate } from "react-router-dom";
import { PlusCircle, ShoppingBag, Settings, IndianRupee } from "lucide-react";

import Card from "../UI/Card";

const actions = [
  {
    title: "Add Product",
    description: "Create a new product",
    icon: PlusCircle,
    color: "bg-green-100 text-green-700",
    route: "/seller/products",
  },
  {
    title: "View Orders",
    description: "Manage customer orders",
    icon: ShoppingBag,
    color: "bg-blue-100 text-blue-700",
    route: "/seller/orders",
  },
  {
    title: "Store Settings",
    description: "Manage your store",
    icon: Settings,
    color: "bg-yellow-100 text-yellow-700",
    route: "/seller/settings",
  },
  {
    title: "Earnings",
    description: "Check your revenue",
    icon: IndianRupee,
    color: "bg-purple-100 text-purple-700",
    route: "/seller/earnings",
  },
];

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Quick Actions</h2>

        <p className="text-sm text-gray-500 mt-1">Frequently used shortcuts</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              onClick={() => navigate(action.route)}
              className="rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 p-5 text-left group"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${action.color}`}
              >
                <Icon size={22} />
              </div>

              <h3 className="mt-4 font-semibold text-gray-800 group-hover:text-[#1A4D2E] transition">
                {action.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">{action.description}</p>
            </button>
          );
        })}
      </div>
    </Card>
  );
};

export default QuickActions;
