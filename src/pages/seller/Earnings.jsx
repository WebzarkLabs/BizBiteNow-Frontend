import { motion } from "framer-motion";
import Card from "../../components/ui/Card";
import SectionTitle from "../../components/ui/SectionTitle";
import Badge from "../../components/ui/Badge";
import {
  IndianRupee,
  ShoppingBag,
  Clock3,
  CircleDot,
} from "lucide-react";

const Earnings = () => {
  const todayEarnings = 1280;
  const todayOrders = 8;
  const pendingOrders = 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <SectionTitle
        title="Earnings"
        subtitle="Track today's earnings and order activity."
      />

      {/* Hero Card */}
      <Card className="overflow-hidden bg-gradient-to-r from-[#1A4D2E] to-[#245C39] text-white border-0">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/20 p-3">
                <IndianRupee size={32} />
              </div>

              <div>
                <p className="text-sm text-white/80 uppercase tracking-wider">
                  Today's Earnings
                </p>

                <Badge color="green">Live</Badge>
              </div>
            </div>

            <h1 className="mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              ₹{todayEarnings.toLocaleString()}
            </h1>

            <p className="mt-3 text-white/80">
              Earnings from delivered orders today.
            </p>
          </div>

          <div className="hidden sm:flex rounded-3xl bg-white/10 p-6 backdrop-blur-lg items-center justify-center">
            <IndianRupee
              className="h-16 w-16 lg:h-20 lg:w-20 opacity-80"
            />
          </div>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Orders */}
        <Card className="transition-all duration-300 hover:scale-[1.02]">
          <div className="flex items-center justify-between">
            <div className="rounded-2xl bg-[#1A4D2E]/10 p-3">
              <ShoppingBag
                size={28}
                className="text-[#1A4D2E]"
              />
            </div>

            <span className="text-sm text-gray-500">
              Today
            </span>
          </div>

          <h2 className="mt-6 text-5xl font-bold text-gray-800">
            {todayOrders}
          </h2>

          <p className="mt-2 text-gray-500">
            Orders received today
          </p>
        </Card>

        {/* Pending */}
        <Card className="transition-all duration-300 hover:scale-[1.02]">
          <div className="flex items-center justify-between">
            <div className="rounded-2xl bg-yellow-100 p-3">
              <Clock3
                size={28}
                className="text-yellow-600"
              />
            </div>

            <Badge color="yellow">
              Order Placed
            </Badge>
          </div>

          <h2 className="mt-6 text-5xl font-bold text-gray-800">
            {pendingOrders}
          </h2>

          <div className="mt-2 flex items-center gap-2 text-gray-500">
            <CircleDot
              size={14}
              className="text-yellow-500"
            />
            Awaiting delivery
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

export default Earnings;