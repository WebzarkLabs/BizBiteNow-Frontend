import Card from "../UI/Card";
import Badge from "../UI/Badge";
import {
  IndianRupee,
  ShoppingBag,
  Package,
  Users,
} from "lucide-react";

const icons = {
  "Total Revenue": IndianRupee,
  Orders: ShoppingBag,
  Products: Package,
  Customers: Users,
};

const badgeColors = {
  green: "green",
  blue: "blue",
  yellow: "yellow",
  purple: "purple",
};

const StatCard = ({ title, value, change, color }) => {
  const Icon = icons[title];

  return (
    <Card className="relative overflow-hidden">
      <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gradient-to-br from-white/40 to-transparent" />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs sm:text-sm text-gray-500">
            {title}
          </p>

          <h2 className="mt-2 md:mt-3 text-3xl md:text-4xl font-bold text-gray-800 break-words">
            {value}
          </h2>

          <div className="mt-4">
            <Badge color={badgeColors[color]}>
              {change}
            </Badge>
          </div>
        </div>

        <div className="w-16 h-16 rounded-2xl bg-[#1A4D2E] text-white flex items-center justify-center shadow-lg">
          <Icon size={28} />
        </div>
      </div>
    </Card>
  );
};

export default StatCard;