import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [showPin, setShowPin] = useState(false);
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary frontend-only login
    localStorage.setItem("sellerAuth", "true");

    navigate("/seller/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A4D2E] via-[#205C38] to-[#163D24] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-[#1A4D2E] mx-auto flex items-center justify-center text-white text-2xl font-bold">
            B
          </div>

          <h1 className="text-3xl font-bold mt-5 text-gray-800">
            Seller Login
          </h1>

          <p className="text-gray-500 mt-2">
            Login to manage your BizBiteNow store
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#1A4D2E]"
                required
              />
            </div>
          </div>

          {/* PIN */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              PIN
            </label>

            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />

              <input
                type={showPin ? "text" : "password"}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter your PIN"
                className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-[#1A4D2E]"
                required
              />

              <button
                type="button"
                onClick={() => setShowPin(!showPin)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPin ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-[#1A4D2E] hover:underline"
            >
              Forgot PIN?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1A4D2E] hover:bg-[#163D24] text-white py-3 rounded-xl font-semibold transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-8">
          © 2026 BizBiteNow. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;