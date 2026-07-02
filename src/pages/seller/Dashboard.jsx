import { Store, Sparkles } from "lucide-react";
import { Lock } from "lucide-react";
import ProFeatureModal from "../../components/UI/ProFeatureModal";
import { useState } from "react";
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
  const [showProModal, setShowProModal] = useState(false);
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
      <div className="space-y-6 md:space-y-8">
        {/* Welcome Banner */}

        <Card
          hover={false}
          className="relative overflow-hidden bg-gradient-to-r from-[#1A4D2E] via-[#205C38] to-[#2D6A4F] text-white border-none"
        >
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/5 blur-3xl"></div>

          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
                <Store className="w-7 h-7 md:w-9 md:h-9" />

                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  {greeting} 👋
                </h1>
                <p className="text-green-100 text-sm md:text-base">{today}</p>
              </div>

              <h2 className="text-xl md:text-2xl font-semibold">
                Welcome back, Seller
              </h2>

              <p className="mt-3 max-w-2xl text-green-100 text-sm md:text-base leading-6 md:leading-7">
                Manage your products, orders and customers from one place.
                Here's today's overview of your business.
              </p>
            </div>

            <div className="w-full lg:w-auto flex justify-start lg:justify-center">
              <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-5 border border-white/20">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-yellow-300" />

                  <div>
                    <p className="text-sm text-green-100">Store Status</p>

                    <h3 className="text-lg md:text-xl font-bold">Active</h3>
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

        <div className="relative">
          <div className="grid gap-4 md:gap-6 sm:grid-cols-2 xl:grid-cols-4 blur-[5px] pointer-events-none opacity-70">
            {stats.map((item) => (
              <StatCard key={item.id} {...item} />
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setShowProModal(true)}
              className="rounded-2xl bg-white/95 px-6 py-4 shadow-xl border border-yellow-300 hover:scale-105 transition"
            >
              <Lock className="mx-auto text-yellow-500 mb-2" />

              <h3 className="font-bold">Unlock Analytics</h3>

              <p className="text-sm text-gray-500">Upgrade to Plus</p>
            </button>
          </div>
        </div>

        {/* Middle Section */}

        <div className="grid xl:grid-cols-3 gap-4 md:gap-6">
          <div className="xl:col-span-2 relative">
            <div className="blur-[5px] pointer-events-none opacity-70">
              <RecentOrders />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setShowProModal(true)}
                className="rounded-2xl bg-white/95 px-6 py-4 shadow-xl border border-yellow-300 hover:scale-105 transition"
              >
                <Lock className="mx-auto mb-2 text-yellow-500" />

                <h3 className="font-bold">Unlock Recent Orders</h3>

                <p className="text-sm text-gray-500">Upgrade to Pro</p>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="blur-[5px] pointer-events-none opacity-70">
              <TopProducts />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setShowProModal(true)}
                className="rounded-2xl bg-white/95 px-6 py-4 shadow-xl border border-yellow-300 hover:scale-105 transition"
              >
                <Lock className="mx-auto mb-2 text-yellow-500" />
                <h3 className="font-bold">Top Selling Products</h3>

                <div className="text-xs text-gray-500">Upgrade to Plus</div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="grid xl:grid-cols-3 gap-4 md:gap-6">
          <div className="xl:col-span-2">
            <LowStock />
          </div>

          <div className="relative">
            <div>
              <QuickActions />
            </div>
          </div>
        </div>
      </div>
      <ProFeatureModal
        open={showProModal}
        onClose={() => setShowProModal(false)}
        onUpgrade={() => {
          setShowProModal(false);
          alert("Pricing page coming soon!");
        }}
      />
    </motion.div>
  );
};

export default Dashboard;
