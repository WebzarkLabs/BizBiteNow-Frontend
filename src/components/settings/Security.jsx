import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { ShieldCheck, Lock, Eye, EyeOff, Save, KeyRound } from "lucide-react";

const inputClass =
  "w-full rounded-2xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-12 text-sm outline-none transition-all focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100";

const Security = () => {
  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState("");
const handleUpdatePin = async () => {
  try {
    await updateProfile(sellerId, {
      pin,
    });

    alert("PIN updated successfully");
  } catch (err) {
    console.error(err);
  }
};

  return (
    <Card className="rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Header */}

      <div className="flex items-center gap-3 mb-8">
        <div className="rounded-2xl bg-green-100 p-3">
          <KeyRound size={24} className="text-green-700" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">Security PIN</h2>

          <p className="text-sm text-gray-500">
            Manage your 4-digit security PIN.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-2xl border border-green-100 bg-green-50 p-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-green-600" size={22} />

            <div>
              <h3 className="font-semibold text-gray-800">Security PIN</h3>

              <p className="text-sm text-gray-500">
                This 4-digit PIN protects your seller account.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <Lock size={18} className="absolute left-4 top-4 text-gray-400" />

          <input
            type={showPin ? "text" : "password"}
            placeholder="Enter 4-digit PIN"
            value={pin}
            maxLength={4}
            inputMode="numeric"
            onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
            className={inputClass}
          />

          <button
            type="button"
            onClick={() => setShowPin(!showPin)}
            className="absolute right-4 top-4 text-gray-500"
          >
            {showPin ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#1A4D2E] to-[#2D6A4F] px-6 py-3 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
          <Save size={18} />
          Update PIN
        </Button>
      </div>
    </Card>
  );
};

export default Security;
