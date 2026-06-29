import { useState } from "react";
import Card from "../UI/Card";
import {
  ShieldCheck,
  Lock,
  Eye,
  EyeOff,
  Save,
} from "lucide-react";

const inputClass =
  "w-full rounded-2xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-12 text-sm outline-none transition-all focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100";

const Security = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [password, setPassword] = useState("");

  const strength = () => {
    if (password.length < 6)
      return {
        width: "25%",
        color: "bg-red-500",
        text: "Weak",
      };

    if (password.length < 10)
      return {
        width: "60%",
        color: "bg-yellow-500",
        text: "Medium",
      };

    return {
      width: "100%",
      color: "bg-green-600",
      text: "Strong",
    };
  };

  const level = strength();

  return (
    <Card className="rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">

      {/* Header */}

      <div className="flex items-center gap-3 mb-8">

        <div className="bg-green-100 p-3 rounded-2xl">
          <ShieldCheck
            className="text-green-700"
            size={24}
          />
        </div>

        <div>

          <h2 className="text-2xl font-bold text-gray-800">
            Security
          </h2>

          <p className="text-sm text-gray-500">
            Keep your seller account secure.
          </p>

        </div>

      </div>

      <div className="space-y-6">

        {/* Current */}

        <div className="relative">

          <Lock
            size={18}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type={showCurrent ? "text" : "password"}
            placeholder="Current Password"
            className={inputClass}
          />

          <button
            type="button"
            onClick={() => setShowCurrent(!showCurrent)}
            className="absolute right-4 top-4 text-gray-500"
          >
            {showCurrent ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>

        </div>

        {/* New */}

        <div className="relative">

          <Lock
            size={18}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type={showNew ? "text" : "password"}
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClass}
          />

          <button
            type="button"
            onClick={() => setShowNew(!showNew)}
            className="absolute right-4 top-4 text-gray-500"
          >
            {showNew ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>

        </div>

        {/* Strength */}

        <div>

          <div className="flex justify-between mb-2">

            <span className="text-sm text-gray-600">
              Password Strength
            </span>

            <span className="font-semibold text-sm">
              {level.text}
            </span>

          </div>

          <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">

            <div
              className={`${level.color} h-full transition-all duration-300`}
              style={{ width: level.width }}
            />

          </div>

        </div>

        {/* Confirm */}

        <div className="relative">

          <Lock
            size={18}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            className={inputClass}
          />

          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-4 top-4 text-gray-500"
          >
            {showConfirm ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>

        </div>

      </div>

      <div className="mt-8 flex justify-end">

        <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#1A4D2E] to-[#2D6A4F] px-6 py-3 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">

          <Save size={18} />

          Change Password

        </button>

      </div>

    </Card>
  );
};

export default Security;