import Card from "./Card";
import Button from "./Button";
import { Phone, MapPin, Package, CircleCheck } from "lucide-react";

const OrderCard = ({ order, activeTab, markAsDelivered }) => {
  return (
    <Card className="flex h-full flex-col justify-between p-5 w-full max-w-md">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-800">
            {order.customerName}
          </h2>

          <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
            <Phone size={14} />
            <span>{order.phone}</span>
          </div>
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          ₹ {order.total}
        </span>
      </div>

      {/* Address */}
      <div className="mt-4 flex items-start gap-2 text-sm text-gray-600">
        <MapPin size={16} className="mt-0.5 text-red-500" />
        <p className="line-clamp-2">{order.address}</p>
      </div>

      {/* Items */}
      <div className="mt-5">
        <div className="mb-3 flex items-center gap-2">
          <Package size={16} className="text-[#F4A300]" />
          <h3 className="text-sm font-semibold text-gray-800">Items Ordered</h3>
        </div>

        <div className="space-y-2">
          {order.items.slice(0, 2).map((item) => (
            <div
              key={item.productId}
              className="flex justify-between rounded-lg bg-gray-50 px-3 py-2"
            >
              <span className="text-sm text-gray-700">
                {item.name} × {item.quantity}
              </span>
              <span className="text-sm font-semibold">₹{item.price}</span>
            </div>
          ))}

          {order.items.length > 2 && (
            <p className="text-xs text-[#1A4D2E] font-medium">
              +{order.items.length - 2} more items
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6">
        {activeTab === "new" ? (
          <Button className="w-full" onClick={() => markAsDelivered(order.id)}>
            Mark as Delivered
          </Button>
        ) : (
          <div className="flex justify-end">
            <span className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-2 text-sm font-semibold text-green-700">
              <CircleCheck size={16} />
              Delivered
            </span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default OrderCard;
