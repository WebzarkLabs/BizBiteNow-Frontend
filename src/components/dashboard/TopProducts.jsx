import Card from "../UI/Card";
import Badge from "../UI/Badge";
import { topProducts } from "../../data/dashboardData";
import { TrendingUp } from "lucide-react";

const TopProducts = () => {
  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Top Selling Products
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Best performing products this week
          </p>
        </div>

        <TrendingUp className="text-green-500" size={28} />
      </div>

      <div className="space-y-5">
        {topProducts.map((product, index) => (
          <div
            key={product.id}
            className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A4D2E] to-[#2D6A4F] text-white flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-500">
                  Bestseller Product
                </p>
              </div>
            </div>

            <div className="text-right">
              <Badge color="green">
                {product.sold} Sold
              </Badge>

              <div className="w-28 h-2 rounded-full bg-gray-200 mt-3 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-600"
                  style={{
                    width: `${Math.min(product.sold / 2, 100)}%`,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TopProducts;