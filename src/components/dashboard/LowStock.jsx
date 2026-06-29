import Card from "../UI/Card";
import Badge from "../UI/Badge";
import Button from "../UI/Button";
import { lowStock } from "../../data/dashboardData";
import { AlertTriangle } from "lucide-react";

const LowStock = () => {
  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center">
            <AlertTriangle className="text-red-500" size={24} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Low Stock
            </h2>

            <p className="text-sm text-gray-500">
              Products that need immediate restocking
            </p>
          </div>
        </div>

        <Button variant="danger" className="text-sm px-4 py-2">
          View Inventory
        </Button>
      </div>

      <div className="space-y-5">
        {lowStock.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 rounded-2xl border border-red-100 bg-red-50 hover:bg-red-100 transition"
          >
            <div>
              <h3 className="font-semibold text-gray-800">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500">
                Only {item.stock} units remaining
              </p>
            </div>

            <Badge color="red">
              {item.stock} Left
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default LowStock;