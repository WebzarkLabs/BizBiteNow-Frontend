import {
    ShoppingBag,
    Package,
    IndianRupee,
    Users,
    TrendingUp,
    Clock,
} from "lucide-react";

const stats = [
    {
        title: "Today's Orders",
        value: "28",
        icon: ShoppingBag,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "Products",
        value: "10",
        icon: Package,
        color: "bg-green-100 text-green-600",
    },
    {
        title: "Today's Earnings",
        value: "₹8,750",
        icon: IndianRupee,
        color: "bg-yellow-100 text-yellow-600",
    },
    {
        title: "Customers",
        value: "54",
        icon: Users,
        color: "bg-purple-100 text-purple-600",
    },
];

const recentOrders = [
    {
        id: "#BN1001",
        customer: "Rahul Sharma",
        amount: "₹420",
        status: "Pending",
    },
    {
        id: "#BN1002",
        customer: "Priya Singh",
        amount: "₹680",
        status: "Delivered",
    },
    {
        id: "#BN1003",
        customer: "Amit Kumar",
        amount: "₹350",
        status: "Pending",
    },
    {
        id: "#BN1004",
        customer: "Neha Gupta",
        amount: "₹900",
        status: "Delivered",
    },
];

const Dashboard = () => {
    return (
        <div className="space-y-8">
            {/* Welcome */}
            <div className="bg-white rounded-2xl shadow-sm p-6 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Welcome Back 👋
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Here's what's happening with your store today.
                    </p>
                </div>

                <div className="hidden md:flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-xl">
                    <TrendingUp size={18} />
                    Store Performing Well
                </div>
            </div>

            {/* Stats */}
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.title}
                            className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition"
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-gray-500 text-sm">
                                        {item.title}
                                    </p>

                                    <h2 className="text-3xl font-bold mt-2">
                                        {item.value}
                                    </h2>
                                </div>

                                <div
                                    className={`h-14 w-14 rounded-xl flex items-center justify-center ${item.color}`}
                                >
                                    <Icon size={28} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-2xl shadow-sm">
                <div className="border-b px-6 py-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">
                        Recent Orders
                    </h2>

                    <button className="text-[#1A4D2E] font-medium hover:underline">
                        View All
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr className="text-left text-sm text-gray-500">
                                <th className="px-6 py-4">Order ID</th>
                                <th className="px-6 py-4">Customer</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4">Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {recentOrders.map((order) => (
                                <tr
                                    key={order.id}
                                    className="border-t hover:bg-gray-50"
                                >
                                    <td className="px-6 py-4 font-medium">
                                        {order.id}
                                    </td>

                                    <td className="px-6 py-4">
                                        {order.customer}
                                    </td>

                                    <td className="px-6 py-4">
                                        {order.amount}
                                    </td>

                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${order.status === "Delivered"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl shadow-sm p-6">
                    <Package className="text-[#1A4D2E]" size={30} />

                    <h3 className="font-semibold mt-4">
                        Manage Products
                    </h3>

                    <p className="text-gray-500 text-sm mt-2">
                        Add, edit and organize products.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-6">
                    <ShoppingBag className="text-[#1A4D2E]" size={30} />

                    <h3 className="font-semibold mt-4">
                        Manage Orders
                    </h3>

                    <p className="text-gray-500 text-sm mt-2">
                        Track and update customer orders.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-6">
                    <Clock className="text-[#1A4D2E]" size={30} />

                    <h3 className="font-semibold mt-4">
                        Store Status
                    </h3>

                    <p className="text-gray-500 text-sm mt-2">
                        Store is currently accepting orders.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;