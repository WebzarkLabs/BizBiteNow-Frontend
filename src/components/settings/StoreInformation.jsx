import Card from "../UI/Card";
import {
  Store,
  Phone,
  Mail,
  MapPin,
  Save,
  Utensils,
} from "lucide-react";

const inputClass =
  "w-full rounded-2xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 text-sm transition-all outline-none focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100";

const StoreInformation = () => {
  return (
    <Card className="rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-green-100 p-3 rounded-2xl">
          <Store className="text-green-700" size={24} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Store Information
          </h2>
          <p className="text-gray-500 text-sm">
            Update your restaurant details.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="relative">
          <Store
            className="absolute left-4 top-3.5 text-gray-400"
            size={18}
          />
          <input
            placeholder="Store Name"
            className={inputClass}
          />
        </div>

        <div className="relative">
          <Utensils
            className="absolute left-4 top-3.5 text-gray-400"
            size={18}
          />
          <select className={inputClass}>
            <option>Fast Food</option>
            <option>Restaurant</option>
            <option>Cafe</option>
            <option>Bakery</option>
          </select>
        </div>

        <div className="relative">
          <Phone
            className="absolute left-4 top-3.5 text-gray-400"
            size={18}
          />
          <input
            placeholder="Phone Number"
            className={inputClass}
          />
        </div>

        <div className="relative">
          <Mail
            className="absolute left-4 top-3.5 text-gray-400"
            size={18}
          />
          <input
            type="email"
            placeholder="Email"
            className={inputClass}
          />
        </div>

        <div className="relative md:col-span-2">
          <MapPin
            className="absolute left-4 top-4 text-gray-400"
            size={18}
          />

          <textarea
            rows={4}
            placeholder="Store Address"
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 text-sm outline-none transition-all focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
          />
        </div>

      </div>

      <div className="mt-8 flex justify-end">
        <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#1A4D2E] to-[#2D6A4F] px-6 py-3 text-white font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <Save size={18} />
          Save Changes
        </button>
      </div>
    </Card>
  );
};

export default StoreInformation;