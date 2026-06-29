import {
  Store,
  Sparkles,
} from "lucide-react";

import Card from "../../components/UI/Card";
import SectionTitle from "../../components/UI/SectionTitle";
import { motion } from "framer-motion";
import StatCard from "../../components/dashboard/StatCard";
import RecentOrders from "../../components/dashboard/RecentOrders";
import TopProducts from "../../components/dashboard/TopProducts";
import LowStock from "../../components/dashboard/LowStock";
import QuickActions from "../../components/dashboard/QuickActions";

import { stats } from "../../data/dashboardData";
const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning ☀️";
  if (hour < 17) return "Good Afternoon 🌤️";
  if (hour < 21) return "Good Evening 🌇";

  return "Good Night 🌙";
};

const Dashboard = () => {
    const greeting = getGreeting();
    const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    });
  return (
    <motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
>
    <div className="space-y-8">

      {/* Welcome Banner */}

      <Card
        hover={false}
        className="relative overflow-hidden bg-gradient-to-r from-[#1A4D2E] via-[#205C38] to-[#2D6A4F] text-white border-none"
      >
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/5 blur-3xl"></div>

        <div className="relative flex flex-col lg:flex-row justify-between gap-8">

          <div>

            <div className="flex items-center gap-3 mb-5">

              <Store size={34} />

                <h1 className="text-4xl font-bold">
                {greeting} 👋
                </h1>
                <p className="text-green-100 mt-2">
                {today}
                </p>

            </div>

            <h2 className="text-2xl font-semibold">
              Welcome back, Seller
            </h2>

            <p className="text-green-100 mt-3 max-w-2xl leading-7">
              Manage your products, orders and customers from one
              place. Here's today's overview of your business.
            </p>

          </div>

          <div className="flex flex-col justify-center">

            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-5 border border-white/20">

              <div className="flex items-center gap-3">

                <Sparkles className="text-yellow-300" />

                <div>

                  <p className="text-sm text-green-100">
                    Store Status
                  </p>

                  <h3 className="text-xl font-bold">
                    Active
                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </Card>

      {/* Statistics */}

      <SectionTitle
        title="Overview"
        subtitle="Track your store performance at a glance."
      />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => (
          <StatCard
            key={item.id}
            {...item}
          />
        ))}

      </div>

      {/* Middle Section */}

      <div className="grid xl:grid-cols-3 gap-6">

        <div className="xl:col-span-2">

          <RecentOrders />

        </div>

        <TopProducts />

      </div>

      {/* Bottom */}

      <div className="grid xl:grid-cols-3 gap-6">

        <div className="xl:col-span-2">

          <LowStock />

        </div>

        <QuickActions />

      </div>

    </div>
    </motion.div>
  );
};

export default Dashboard;