import { Bell, Search, UserCircle2 } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Seller Dashboard
          </h2>
          <p className="text-sm text-gray-500">
            Welcome back! Manage your store efficiently.
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-72">
            <Search className="text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm ml-2 w-full"
            />
          </div>

          {/* Notification */}
          <button className="relative bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition">
            <Bell size={20} className="text-gray-700" />
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500"></span>
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <UserCircle2 size={40} className="text-[#1A4D2E]" />

            <div className="hidden md:block">
              <h4 className="font-semibold text-gray-800">
                Seller Name
              </h4>
              <p className="text-xs text-gray-500">
                seller@bizbitenow.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;