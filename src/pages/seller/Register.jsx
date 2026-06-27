import {
    User,
    Mail,
    Phone,
    Building2,
    Lock,
    Eye,
    EyeOff,
    MapPin,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/branding/BIZ BITE NOW Horizontal Complete.png";
import logo1 from "../../assets/branding/BIZBITENOW Vertical Complete1.png";
import { motion } from "framer-motion";
const Register = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [form, setForm] = useState({
        ownerName: "",
        businessName: "",
        email: "",
        phone: "",
        city: "",
        address: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

        const handleRegister = (e) => {
            e.preventDefault();

            if (!agreeTerms) {
                alert("Please accept the Terms & Conditions.");
                return;
            }

            if (form.password !== form.confirmPassword) {
                alert("Passwords do not match");
                return;
            }

            alert("Seller Registration Successful");

            navigate("/seller/login");
        };
    const inputStyle =
        "w-full rounded-xl border border-gray-300 bg-gray-50 py-3.5 pl-12 pr-4 outline-none transition-all duration-300 focus:border-[#1A4D2E] focus:ring-4 focus:ring-green-100";

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#16522d] flex items-center justify-center p-6">

            {/* White Blob */}
            <div
                className="absolute -top-48 -right-48 w-[700px] h-[700px] rounded-full"
                style={{
                    background: "rgba(255,255,255,0.75)",
                    filter: "blur(140px)",
                }}
            />

            {/* Yellow Blob */}
            <div
                className="absolute -bottom-56 -left-56 w-[650px] h-[650px] rounded-full"
                style={{
                    background: "rgba(255,199,0,0.70)",
                    filter: "blur(140px)",
                }}
            />

            {/* Center Green Highlight */}
            <div
                className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                    background: "rgba(255,255,255,0.08)",
                    filter: "blur(120px)",
                }}
            />

            {/* Small White Blob */}
            <div
                className="absolute top-24 left-24 w-[280px] h-[280px] rounded-full"
                style={{
                    background: "rgba(255,255,255,0.35)",
                    filter: "blur(90px)",
                }}
            />

            {/* Small Yellow Blob */}
            <div
                className="absolute bottom-20 right-32 w-[260px] h-[260px] rounded-full"
                style={{
                    background: "rgba(255,199,0,0.45)",
                    filter: "blur(90px)",
                }}
            />
            <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{
                    duration: 0.45,
                    ease: "easeInOut",
                }}
                className="relative z-20 w-full max-w-6xl"
            >

                <div className="w-full max-w-7xl grid lg:grid-cols-2 rounded-[32px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,.35)]">

                    {/* LEFT */}

                    <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-[#123524] via-[#18452C] to-[#1A4D2E] text-white p-14 relative overflow-hidden">

                        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-green-400/10 blur-3xl" />

                        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" />

                        <div>

                            <img
                                src={logo}
                                alt="BizBiteNow"
                                className="h-20 object-contain"
                            />

                            <span className="inline-flex mt-10 rounded-full bg-green-500/20 border border-green-400/30 px-4 py-1">
                                Seller Registration
                            </span>

                            <h2 className="mt-8 text-4xl font-bold">
                                Become a
                                <br />
                                BizBiteNow Seller
                            </h2>

                            <p className="mt-6 text-green-100 leading-8">
                                Join thousands of food businesses using BizBiteNow to manage
                                products, receive online orders and grow faster.
                            </p>
                        </div>

                        <div className="space-y-5">

                            {[
                                "Receive Online Orders",
                                "Manage Products",
                                "Track Sales",
                                "Real-time Analytics",
                                "Secure Dashboard",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 bg-white/5 rounded-xl p-3"
                                >
                                    <span className="text-green-300">✓</span>
                                    <span>{item}</span>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* RIGHT */}

                    <div className="bg-white px-8 py-7 md:px-10 md:py-8 flex flex-col justify-center">

                        <div className="text-center mb-4">

                            <img
                                src={logo1}
                                alt="BizBiteNow"
                                className="h-20 mx-auto object-contain"
                            />

                            <h2 className="mt-3 text-3xl font-bold">
                                Create Seller Account
                            </h2>

                            <p className="text-gray-500 mt-1 text-sm">
                                Fill in your business details.
                            </p>

                        </div>

                        <form
                            onSubmit={handleRegister}
                            className="grid md:grid-cols-2 gap-3"
                        >

                            <div className="relative">
                                <User className="absolute left-4 top-4 text-gray-400" size={20} />
                                <input
                                    name="ownerName"
                                    placeholder="Owner Name"
                                    className={inputStyle}
                                    value={form.ownerName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="relative">
                                <Building2 className="absolute left-4 top-4 text-gray-400" size={20} />
                                <input
                                    name="businessName"
                                    placeholder="Business Name"
                                    className={inputStyle}
                                    value={form.businessName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="relative">
                                <Mail className="absolute left-4 top-4 text-gray-400" size={20} />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Business Email"
                                    className={inputStyle}
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="relative">
                                <Phone className="absolute left-4 top-4 text-gray-400" size={20} />
                                <input
                                    name="phone"
                                    placeholder="Phone Number"
                                    className={inputStyle}
                                    value={form.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="relative">
                                <MapPin className="absolute left-4 top-4 text-gray-400" size={20} />
                                <input
                                    name="city"
                                    placeholder="City"
                                    className={inputStyle}
                                    value={form.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <textarea
                                rows="3"
                                name="address"
                                placeholder="Business Address"
                                className="md:col-span-2 rounded-xl border border-gray-300 bg-gray-50 p-4 outline-none focus:border-[#1A4D2E] focus:ring-4 focus:ring-green-100"
                                value={form.address}
                                onChange={handleChange}
                                required
                            />

                            <div className="relative">

                                <Lock className="absolute left-4 top-4 text-gray-400" size={20} />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    className={inputStyle}
                                    value={form.password}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="relative">

                                <Lock className="absolute left-4 top-4 text-gray-400" size={20} />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    className={inputStyle}
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-4"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>

                            </div>

                                <label className="md:col-span-2 flex items-center gap-3 text-sm cursor-pointer select-none">

                                    <input
                                        type="checkbox"
                                        checked={agreeTerms}
                                        onChange={(e) => setAgreeTerms(e.target.checked)}
                                        className="h-4 w-4 accent-[#16522d] cursor-pointer"
                                    />

                                    <span>
                                        I agree to the{" "}
                                        <button
                                            type="button"
                                            className="font-medium text-[#16522d] hover:underline"
                                        >
                                            Terms & Conditions
                                        </button>
                                    </span>

                                </label>

                            <button
                                type="submit"
                                className="md:col-span-2 w-full rounded-xl bg-gradient-to-r from-[#1A4D2E] to-[#2D6A4F] py-3.5 font-semibold text-white hover:-translate-y-0.5 transition"
                            >
                                Create Seller Account
                            </button>

                        </form>

                        <div className="mt-8 text-center">

                            <p className="text-gray-500">
                                Already have an account?
                            </p>

                            <button
                                onClick={() => navigate("/seller/login")}
                                className="mt-2 text-[#1A4D2E] font-semibold hover:underline">
                                Sign In
                            </button>

                        </div>

                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;