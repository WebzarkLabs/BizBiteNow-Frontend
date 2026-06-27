import Card from "../UI/Card";
import Badge from "../UI/Badge";
import Button from "../UI/Button";
import { recentOrders } from "../../data/dashboardData";
import { ArrowRight } from "lucide-react";

const statusColor = {
  Delivered: "green",
  Preparing: "blue",
  Pending: "yellow",
  Cancelled: "red",
};

const RecentOrders = () => {
  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Recent Orders
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Latest customer orders
          </p>
        </div>

        <Button variant="secondary" className="text-sm px-4 py-2">
          View All
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-gray-200">
              <th className="pb-4 text-gray-500 font-semibold">Order ID</th>
              <th className="pb-4 text-gray-500 font-semibold">Customer</th>
              <th className="pb-4 text-gray-500 font-semibold">Amount</th>
              <th className="pb-4 text-gray-500 font-semibold">Status</th>
              <th className="pb-4"></th>
            </tr>
          </thead>

          <tbody>
            {recentOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="py-5 font-semibold text-gray-700">
                  {order.id}
                </td>

                <td className="text-gray-700">
                  {order.customer}
                </td>

                <td className="font-bold text-[#1A4D2E]">
                  {order.amount}
                </td>

                <td>
                  <Badge color={statusColor[order.status]}>
                    {order.status}
                  </Badge>
                </td>

                <td>
                  <button className="hover:text-[#1A4D2E] transition">
                    <ArrowRight size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default RecentOrders;