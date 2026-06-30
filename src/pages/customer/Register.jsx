import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, User, Mail, Phone, Lock } from "lucide-react";
import { registerCustomer } from "../../api/customer/authApi";
import logo from "../../assets/BIZ BITE NOW Icon.png";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (apiError) setApiError("");
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      errs.email = "Enter a valid email address";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(form.phone.trim()))
      errs.phone = "Enter a valid 10-digit mobile number";
    if (!form.password) errs.password = "Password is required";
    else if (form.password.length < 6)
      errs.password = "Password must be at least 6 characters";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    try {
      await registerCustomer({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        password: form.password,
      });
      navigate(from, { replace: true });
    } catch (err) {
      setApiError(err.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-[#FAFAF5] flex flex-col"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-[#1A4D2E]" />

      <div className="flex-1 flex flex-col px-5 py-8">
        {/* Logo + heading */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-[#1A4D2E] flex items-center justify-center shadow-md mb-4">
            <img
              src={logo}
              alt="BizBiteNow"
              className="w-10 h-10 object-contain"
            />
          </div>
          <h1
            className="font-bold text-[#1C1C1C] text-center"
            style={{ fontSize: "22px" }}
          >
            Create Account
          </h1>
          <p className="text-gray-500 text-sm text-center mt-1">
            Join to track your orders and more
          </p>
        </div>

        {/* API error */}
        {apiError && (
          <div className="mb-4 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            <p className="text-red-600 text-sm">{apiError}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">
              Full Name *
            </label>
            <div className="relative">
              <User
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                autoComplete="name"
                className={`w-full border rounded-xl pl-9 pr-3 text-sm text-[#1C1C1C] bg-white outline-none transition-colors focus:border-[#1A4D2E] focus:ring-2 focus:ring-[#1A4D2E]/10 ${
                  errors.name ? "border-red-400" : "border-gray-200"
                }`}
                style={{ minHeight: "48px", fontFamily: "Arial, sans-serif" }}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">
              Email Address *
            </label>
            <div className="relative">
              <Mail
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                className={`w-full border rounded-xl pl-9 pr-3 text-sm text-[#1C1C1C] bg-white outline-none transition-colors focus:border-[#1A4D2E] focus:ring-2 focus:ring-[#1A4D2E]/10 ${
                  errors.email ? "border-red-400" : "border-gray-200"
                }`}
                style={{ minHeight: "48px", fontFamily: "Arial, sans-serif" }}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">
              Mobile Number *
            </label>
            <div className="relative">
              <Phone
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                maxLength={10}
                autoComplete="tel"
                className={`w-full border rounded-xl pl-9 pr-3 text-sm text-[#1C1C1C] bg-white outline-none transition-colors focus:border-[#1A4D2E] focus:ring-2 focus:ring-[#1A4D2E]/10 ${
                  errors.phone ? "border-red-400" : "border-gray-200"
                }`}
                style={{ minHeight: "48px", fontFamily: "Arial, sans-serif" }}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">
              Password *
            </label>
            <div className="relative">
              <Lock
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Minimum 6 characters"
                autoComplete="new-password"
                className={`w-full border rounded-xl pl-9 pr-11 text-sm text-[#1C1C1C] bg-white outline-none transition-colors focus:border-[#1A4D2E] focus:ring-2 focus:ring-[#1A4D2E]/10 ${
                  errors.password ? "border-red-400" : "border-gray-200"
                }`}
                style={{ minHeight: "48px", fontFamily: "Arial, sans-serif" }}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 flex items-center justify-center"
                style={{ minHeight: "44px", minWidth: "44px" }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1A4D2E] text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-opacity mt-2"
            style={{
              minHeight: "52px",
              fontSize: "15px",
              fontFamily: "Arial, sans-serif",
              opacity: loading ? 0.8 : 1,
            }}
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Creating Account...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">already have an account?</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Login link */}
        <Link
          to="/customer/login"
          state={{ from }}
          className="w-full border-2 border-[#1A4D2E] text-[#1A4D2E] rounded-xl font-bold flex items-center justify-center transition-colors hover:bg-[#1A4D2E]/5"
          style={{ minHeight: "52px", fontSize: "15px" }}
        >
          Sign In
        </Link>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-8">
          © 2026 BizBiteNow. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Register;
