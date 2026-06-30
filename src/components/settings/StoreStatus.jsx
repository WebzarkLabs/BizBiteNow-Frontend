import { useState } from "react";
import Card from "../UI/Card";
import { Store, CheckCircle2, Clock } from "lucide-react";

const StoreStatus = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card className="rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-green-100 p-3 rounded-2xl">
          <Store className="text-green-700" size={24} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Store Status
          </h2>

          <p className="text-sm text-gray-500">
            Manage your availability.
          </p>
        </div>
      </div>

      {/* Status Card */}

      <div
        className={`rounded-2xl p-6 border transition-all duration-300 ${
          isOpen
            ? "bg-green-50 border-green-200"
            : "bg-red-50 border-red-200"
        }`}
      >
        <div className="flex justify-between items-center">

          <div>

            <p className="text-sm text-gray-500">
              Current Status
            </p>

            <h3
              className={`mt-2 text-2xl font-bold ${
                isOpen ? "text-green-700" : "text-red-600"
              }`}
            >
              {isOpen ? "Store Open" : "Store Closed"}
            </h3>

          </div>

          {isOpen ? (
            <CheckCircle2
              className="text-green-600"
              size={38}
            />
          ) : (
            <Clock
              className="text-red-500"
              size={38}
            />
          )}
        </div>

        <p className="text-sm text-gray-600 mt-4">
          {isOpen
            ? "Customers can place orders."
            : "Customers cannot place orders."}
        </p>
      </div>

      {/* Toggle */}

      <div className="flex justify-between items-center mt-8">

        <div>
          <h4 className="font-semibold text-gray-800">
            Accept Orders
          </h4>

          <p className="text-sm text-gray-500">
            Turn your restaurant online/offline.
          </p>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-16 h-9 rounded-full transition-all duration-300 ${
            isOpen ? "bg-green-600" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute top-1 left-1 h-7 w-7 rounded-full bg-white shadow-md transition-all duration-300 ${
              isOpen ? "translate-x-7" : ""
            }`}
          />
        </button>
      </div>
    </Card>
  );
};

export default StoreStatus;