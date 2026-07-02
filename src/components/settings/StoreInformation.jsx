import { useEffect, useState } from "react";
import Card from "../UI/Card";
import { Store, Mail, Save } from "lucide-react";
import { getMyProfile, updateProfile } from "../../services/sellerProfile";
const inputClass =
  "w-full rounded-2xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 text-sm transition-all outline-none focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100";

const StoreInformation = () => {
  const [storeInfo, setStoreInfo] = useState({
    shopName: "",
    email: "",
  });
  const [sellerId, setSellerId] = useState("");
  useEffect(() => {
  fetchProfile();
}, []);

const fetchProfile = async () => {
  try {
    const res = await getMyProfile();

    const seller = res.data;

    setSellerId(seller.id || seller._id);

    setStoreInfo({
      shopName: seller.shopName || "",
      email: seller.email || "",
    });
  } catch (err) {
    console.error(err);
  }
};
  const handleSave = async () => {
    try {
      console.log(storeInfo);

      await updateProfile(sellerId, storeInfo);

      alert("Store information updated successfully");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Card className="min-h-[360px] rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
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
          <Store className="absolute left-4 top-3.5 text-gray-400" size={18} />
          <input
            placeholder="Shop Name"
            value={storeInfo.shopName}
            onChange={(e) =>
              setStoreInfo({
                ...storeInfo,
                shopName: e.target.value,
              })
            }
            className={inputClass}
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-4 top-3.5 text-gray-400" size={18} />
          <input
            type="email"
            placeholder="Email"
            value={storeInfo.email}
            onChange={(e) =>
              setStoreInfo({
                ...storeInfo,
                email: e.target.value,
              })
            }
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#1A4D2E] to-[#2D6A4F] px-6 py-3 text-white font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <Save size={18} />
          Save Changes
        </button>
      </div>
    </Card>
  );
};

export default StoreInformation;
