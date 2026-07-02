import { useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  Search, Bell, Download, LayoutGrid, ShoppingCart,
  RefreshCw, User, LogOut, CheckCircle,
} from "lucide-react";
import { categories, allProducts } from "../../data/products";
import { useCart } from "../../context/CartContext";
import { isCustomerLoggedIn, logoutCustomer } from "../../api/customer/authApi";

const storeInfo = {
  name: "Store Name",
  initials: "SN",
  brandColor: "#1A4D2E",
};

const bannerSlides = [
  { tag: "GET 20% OFF ON ALL COMBOS", title: "Weekend Special Deal" },
  { tag: "FREE DELIVERY ON ORDERS ABOVE ₹299", title: "Order More, Save More" },
  { tag: "NEW ARRIVALS THIS WEEK", title: "Fresh Off The Kitchen" },
];

const allTabs = [{ id: 0, name: "All Items" }, ...categories];

const StoreFront = () => {
  const navigate = useNavigate();
  const { totalItems, addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState(0);
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState("");
  const searchRef = useRef(null);

  const showToast = useCallback((name) => {
    setToast(name);
    setTimeout(() => setToast(""), 2000);
  }, []);

  const filteredProducts = (() => {
    let products =
      activeCategory === 0
        ? allProducts
        : categories.find((c) => c.id === activeCategory)?.products || [];
    if (search)
      products = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    return products;
  })();

  const currentCategoryName =
    activeCategory === 0
      ? "All Items"
      : categories.find((c) => c.id === activeCategory)?.name || "";

  const handleLogout = async () => {
    await logoutCustomer();
    window.location.href = "/";
  };

  const sidebarItems = [
    { icon: LayoutGrid, label: "MENU", action: () => navigate("/menu") },
    { icon: Search, label: "SEARCH", action: () => { searchRef.current?.focus(); } },
    {
      icon: ShoppingCart,
      label: "CART",
      action: () => navigate("/cart"),
      badge: totalItems,
    },
    { icon: RefreshCw, label: "REORDER", action: () => {} },
    {
      icon: User,
      label: "PROFILE",
      action: () =>
        navigate(
          isCustomerLoggedIn() ? "/customer/profile" : "/customer/login"
        ),
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }} className="bg-[#FAFAF5] min-h-screen">

      {/* TOP HEADER */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 px-4 py-3">

          {/* Store Avatar + Name */}
          <div className="flex items-center gap-2 shrink-0">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
              style={{ backgroundColor: storeInfo.brandColor }}
            >
              {storeInfo.initials}
            </div>
            <div>
              <p className="font-bold text-[#1C1C1C] leading-tight" style={{ fontSize: "14px" }}>
                {storeInfo.name}
              </p>
              <p className="text-gray-400 leading-tight" style={{ fontSize: "10px" }}>
                POWERED BY BIZBITENOW
              </p>
            </div>
          </div>

          {/* Search bar */}
          <div
            className="flex-1 flex items-center bg-gray-50 border border-gray-200 rounded-xl px-3 gap-2"
            style={{ minHeight: "40px" }}
          >
            <Search size={15} className="text-gray-400 shrink-0" />
            <input
              ref={searchRef}
              type="text"
              placeholder={`Search in ${storeInfo.name}...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none text-sm bg-transparent text-[#1C1C1C] placeholder-gray-400"
              style={{ fontFamily: "Arial, sans-serif" }}
            />
          </div>

          {/* GET APP + Bell */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              className="hidden sm:flex items-center gap-1.5 font-bold rounded-xl px-3"
              style={{
                backgroundColor: "#F4A300",
                color: "#1C1C1C",
                minHeight: "36px",
                fontSize: "11px",
              }}
            >
              <Download size={12} />
              GET APP
            </button>
            <button
              className="flex items-center justify-center text-gray-500"
              style={{ minHeight: "44px", minWidth: "44px" }}
            >
              <Bell size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="flex">

        {/* LEFT SIDEBAR — desktop only */}
        <aside className="hidden lg:flex flex-col items-center py-4 gap-0.5 bg-white rounded-2xl shadow-sm mx-3 mt-4 mb-4 sticky top-20 h-fit" style={{ width: "72px" }}>
          {sidebarItems.map(({ icon: Icon, label, action, badge }) => (
            <button
              key={label}
              onClick={action}
              className="flex flex-col items-center gap-1 w-full py-3 text-gray-400 hover:text-[#1A4D2E] transition-colors"
            >
              <div className="relative">
                <Icon size={21} />
                {badge > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#F4A300] text-[#1C1C1C] font-bold rounded-full flex items-center justify-center" style={{ fontSize: "9px", width: "16px", height: "16px" }}>
                    {badge > 9 ? "9+" : badge}
                  </span>
                )}
              </div>
              <span className="font-bold tracking-wide" style={{ fontSize: "8px" }}>
                {label}
              </span>
            </button>
          ))}

          <div className="w-10 h-px bg-gray-100 my-1" />

          <button
            onClick={handleLogout}
            className="flex flex-col items-center gap-1 w-full py-3 text-gray-400 hover:text-red-500 transition-colors"
          >
            <LogOut size={21} />
            <span className="font-bold tracking-wide" style={{ fontSize: "8px" }}>
              LOG OUT
            </span>
          </button>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 min-w-0 px-3 lg:pr-4 lg:pl-0 py-4 pb-24 lg:pb-8">

          {/* BANNER */}
          <div className="rounded-2xl overflow-hidden mb-4" style={{ height: "220px" }}>
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              style={{ height: "100%" }}
            >
              {bannerSlides.map((slide, i) => (
                <SwiperSlide key={i}>
                  <div
                    className="w-full h-full flex flex-col justify-end p-6"
                    style={{ backgroundColor: "#1A4D2E" }}
                  >
                    <p
                      className="text-white/60 font-semibold tracking-widest uppercase mb-2"
                      style={{ fontSize: "11px" }}
                    >
                      {slide.tag}
                    </p>
                    <h2
                      className="text-white font-bold"
                      style={{ fontSize: "30px", lineHeight: "1.15" }}
                    >
                      {slide.title}
                    </h2>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* CATEGORY TABS */}
          <div
            className="flex gap-2 overflow-x-auto pb-2 mb-4"
            style={{ scrollbarWidth: "none" }}
          >
            {allTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveCategory(tab.id); setSearch(""); }}
                className="shrink-0 px-4 rounded-full text-sm font-semibold border transition-all"
                style={{
                  minHeight: "38px",
                  backgroundColor: activeCategory === tab.id ? "#1A4D2E" : "#fff",
                  color: activeCategory === tab.id ? "#fff" : "#1C1C1C",
                  borderColor: activeCategory === tab.id ? "#1A4D2E" : "#e5e7eb",
                }}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* SECTION HEADING */}
          <h2
            className="font-bold text-[#1C1C1C] mb-3 tracking-wide uppercase"
            style={{ fontSize: "14px" }}
          >
            {currentCategoryName}
          </h2>

          {/* PRODUCT LIST */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 text-gray-400 text-sm">
              No products found
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm cursor-pointer active:opacity-80"
                >
                  {/* Image */}
                  <div className="shrink-0 flex flex-col items-center gap-0.5">
                    <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <span className="text-gray-400 font-semibold" style={{ fontSize: "8px" }}>
                      NO IMAGE
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-[#1C1C1C] text-sm">{product.name}</p>
                    <p className="text-gray-400 mt-0.5 line-clamp-2" style={{ fontSize: "11px" }}>
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-bold text-[#1C1C1C] text-sm">
                        ₹{product.price}
                      </span>
                      <span
                        className="font-bold border rounded px-1.5 py-0.5 text-[#1A4D2E] border-[#1A4D2E]"
                        style={{ fontSize: "9px" }}
                      >
                        CUSTOMISABLE
                      </span>
                    </div>
                  </div>

                  {/* ADD button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); addToCart(product); showToast(product.name); }}
                    className="shrink-0 border-2 border-[#1A4D2E] text-[#1A4D2E] font-bold rounded-xl px-4 hover:bg-[#1A4D2E] hover:text-white transition-colors"
                    style={{ minHeight: "38px", fontSize: "13px" }}
                  >
                    ADD
                  </button>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* TOAST */}
      {toast && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-[#1A4D2E] text-white px-5 py-3 rounded-2xl shadow-lg"
          style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", whiteSpace: "nowrap" }}
        >
          <CheckCircle size={16} />
          <span><strong>{toast}</strong> added to cart</span>
        </div>
      )}
    </div>
  );
};

export default StoreFront;
