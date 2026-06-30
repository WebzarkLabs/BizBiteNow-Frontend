import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import defaultAvatar from "../../assets/default-avatar.svg";
import ProFeatureModal from "../UI/ProFeatureModal";
import {
  Bell,
  Search,
  Mail,
  ShieldCheck,
  Check,
  Menu,
  Palette,
  Type,
} from "lucide-react";
const Navbar = ({ openSidebar }) => {
  const navigate = useNavigate();
  const initialNotifications = [
    {
      id: 1,
      title: "🍔 New Order #1024",
      time: "Just now",
      read: false,
    },
    {
      id: 2,
      title: "🚚 Order Delivered",
      time: "10 min ago",
      read: false,
    },
    {
      id: 3,
      title: "🍕 Product Updated",
      time: "25 min ago",
      read: false,
    },
    {
      id: 4,
      title: "🏪 Store Opened",
      time: "Today",
      read: false,
    },
  ];

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);
  const [showProModal, setShowProModal] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((item) => ({
        ...item,
        read: true,
      })),
    );
  };
  const handleProFeature = () => {
    setShowProModal(true);
  };
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }

      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfile(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <ProFeatureModal
        open={showProModal}
        onClose={() => setShowProModal(false)}
        onUpgrade={() => {
          setShowProModal(false);

          // We'll navigate to Pricing later
          alert("Pricing page coming soon!");
        }}
      />
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-4 md:px-6 py-4 gap-3">
          {/* Left */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <button
              onClick={openSidebar}
              className="lg:hidden rounded-lg p-2 hover:bg-gray-100 transition"
            >
              <Menu size={22} />
            </button>

            <div className="min-w-0">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                Seller Dashboard
              </h2>

              <p className="hidden md:block text-sm text-gray-500">
                Welcome back! Manage your store efficiently.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            {/* Search */}

            <div className="hidden lg:flex items-center bg-gray-100 rounded-xl px-3 py-2 w-72">
              <Search className="text-gray-400" size={18} />

              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm ml-2 w-full min-w-0"
              />
            </div>
            {/* Premium Features */}

            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={handleProFeature}
                className="
                    relative
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    px-4
                    py-2
                    text-white
                    font-semibold
                    shadow-lg
                    transition-all
                    duration-500
                    bg-gradient-to-r
                    from-violet-600
                    via-fuchsia-500
                    to-pink-500
                    bg-[length:200%_200%]
                    animate-gradient
                    hover:scale-105
                    hover:shadow-fuchsia-300/50
"
              >
                <Palette size={18} />
                <span className="text-sm font-medium">Theme</span>

                <span className="absolute -top-2 -right-2 rounded-full bg-yellow-400 px-2 py-0.5 text-[10px] font-bold text-black">
                  PRO
                </span>
              </button>

              <button
                onClick={handleProFeature}
                className="
                    relative
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    px-4
                    py-2
                    text-white
                    font-semibold
                    shadow-lg
                    transition-all
                    duration-500
                    bg-gradient-to-r
                    from-violet-600
                    via-fuchsia-500
                    to-pink-500
                    bg-[length:200%_200%]
                    animate-gradient
                    hover:scale-105
                    hover:shadow-fuchsia-300/50
"
              >
                <Type size={18} />
                <span className="text-sm font-medium">Fonts</span>

                <span className="absolute -top-2 -right-2 rounded-full bg-gradient-to-r from-yellow-300 to-orange-500 px-2 py-0.5 text-[10px] font-bold text-black shadow-md animate-pulse">
                  PRO
                </span>
              </button>
            </div>

            {/* Notification */}

            <div ref={notificationRef} className="relative">
              <button
                onClick={() => {
                  setShowNotifications((prev) => !prev);
                  setShowProfile(false);
                }}
                className="relative bg-gray-100 hover:bg-gray-200 p-2 md:p-2.5 rounded-xl transition"
              >
                <Bell size={20} className="text-gray-700" />

                {unreadCount > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notification Preview */}

              <div
                className={`
                  absolute
                  -right-15
                  mt-3
                  w-72
                  md:w-80
                  rounded-3xl
                  bg-white
                  border
                  border-gray-100
                  shadow-2xl
                  overflow-hidden
                  z-50
                  transition-all
                  duration-300
                  ${
                    showNotifications
                      ? "visible opacity-100 translate-y-0"
                      : "invisible opacity-0 translate-y-3"
                  }
                  `}
              >
                <div className="px-5 py-4 border-b bg-gray-50">
                  <h3 className="font-bold text-gray-800">Notifications</h3>

                  <p className="text-xs text-gray-500">
                    {unreadCount === 0
                      ? "You're all caught up!"
                      : `${unreadCount} unread notification${unreadCount > 1 ? "s" : ""}`}
                  </p>
                </div>

                <div className="divide-y">
                  {notifications.map((item) => (
                    <div
                      key={item.id}
                      className={`px-5 py-4 cursor-pointer transition ${
                        item.read
                          ? "bg-white text-gray-400"
                          : "bg-green-50 hover:bg-green-100"
                      }`}
                    >
                      <p
                        className={`font-medium ${
                          item.read ? "text-gray-400" : "text-gray-800"
                        }`}
                      >
                        {item.title}
                      </p>

                      <p className="text-sm text-gray-500">{item.time}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={markAllRead}
                  disabled={unreadCount === 0}
                  className="flex w-full items-center justify-center gap-2 border-t border-gray-100 py-3 font-semibold text-green-700 hover:bg-green-50 transition-all duration-200 disabled:text-gray-400 disabled:hover:bg-white disabled:cursor-not-allowed"
                >
                  <Check size={18} />

                  {unreadCount === 0
                    ? "All notifications read"
                    : "Mark all as read"}
                </button>
              </div>
            </div>

            {/* Profile */}

            <div className="relative group">
              <button
                onClick={() => navigate("/seller/profile")}
                className="flex items-center gap-2 rounded-xl p-1.5 md:p-2 hover:bg-gray-100 transition"
              >
                <img
                  src={defaultAvatar}
                  alt="Seller"
                  className="h-10 w-10 md:h-11 md:w-11 rounded-full object-cover border-2 border-green-600"
                />

                <div className="hidden md:block text-left">
                  <h4 className="font-semibold text-gray-800">Seller Name</h4>

                  <p className="text-xs text-gray-500">seller@bizbitenow.com</p>
                </div>
              </button>

              {/* Hover Profile Preview */}

              <div
                className="
                invisible
                opacity-0
                translate-y-3
                group-hover:visible
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all
                duration-300
                absolute
                right-0
                mt-2
                w-[90vw] max-w-xs md:w-72
                rounded-3xl
                bg-white
                shadow-2xl
                border
                border-gray-100
                p-6
                z-50
              "
              >
                <div className="flex items-center gap-4">
                  <img
                    src={defaultAvatar}
                    alt="Seller"
                    className="h-11 w-11 rounded-full object-cover border-2 border-green-600"
                  />

                  <div>
                    <h3 className="font-bold text-lg">Seller Name</h3>

                    <p className="text-sm text-gray-500">Restaurant Owner</p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Mail size={16} />
                    seller@bizbitenow.com
                  </div>

                  <div className="flex items-center gap-2 text-green-700 text-sm">
                    <ShieldCheck size={16} />
                    Verified Seller
                  </div>
                </div>

                <button
                  onClick={() => navigate("/seller/profile")}
                  className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#1A4D2E] to-[#2D6A4F] py-3 text-white font-semibold hover:shadow-lg transition"
                >
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
