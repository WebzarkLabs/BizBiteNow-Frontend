import { useState } from "react";
import { Search } from "lucide-react";
import logoIcon from "../../assets/BIZ BITE NOW Icon.png";
import bannerImg from "../../assets/BIZ BITE NOW Horizontal with Subtext.png";
import ProductCard from "../../components/customer/ProductCard";
import CartBar from "../../components/customer/CartBar";
import { categories } from "../../data/products";

const storeInfo = {
  name: "Store Name",
  tagline: "Your favourite food, delivered fast",
  brandColor: "#1A4D2E",
};

const StoreFront = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [search, setSearch] = useState("");

  const currentCategory = categories.find((c) => c.id === activeCategory);

  const filteredProducts =
    currentCategory?.products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    ) || [];

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* Header */}
      <header
        className="sticky top-0 z-30 shadow-md"
        style={{ backgroundColor: storeInfo.brandColor }}
      >
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logoIcon}
              alt="BizBiteNow"
              className="h-12 w-12 rounded-full bg-white object-contain shrink-0"
              style={{ padding: "6px" }}
            />
            <div>
              <h1 className="font-bold text-white leading-tight" style={{ fontSize: "17px" }}>
                {storeInfo.name}
              </h1>
              <p className="text-white/70 text-xs mt-0.5">{storeInfo.tagline}</p>
            </div>
          </div>

          {/* Open badge */}
          <div
            className="flex items-center gap-2 rounded-full px-3 py-1.5"
            style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
          >
            <span
              className="w-2 h-2 rounded-full bg-[#F4A300]"
              style={{ boxShadow: "0 0 0 3px rgba(244,163,0,0.3)" }}
            />
            <span className="text-white text-xs font-semibold">Open Now</span>
          </div>
        </div>
      </header>

      {/* Banner with gradient overlay */}
      <div className="relative w-full overflow-hidden" style={{ height: "200px" }}>
        <img
          src={bannerImg}
          alt="Store Banner"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }}
        />
        <div className="absolute bottom-4 left-4">
          <p className="text-white font-bold" style={{ fontSize: "18px" }}>
            {storeInfo.name}
          </p>
          <p className="text-white/80 text-xs mt-0.5">{storeInfo.tagline}</p>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 pt-4 pb-2">
        <div
          className="flex items-center bg-white rounded-2xl px-4 gap-3 shadow-sm border border-gray-100"
          style={{ minHeight: "48px" }}
        >
          <Search size={17} className="text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-sm bg-transparent text-[#1C1C1C] placeholder-gray-400"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="px-4 pt-3 pb-1">
        <div
          className="flex gap-2 overflow-x-auto pb-1"
          style={{ scrollbarWidth: "none" }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSearch("");
              }}
              className="shrink-0 px-5 rounded-full text-sm font-semibold border transition-all"
              style={{
                minHeight: "40px",
                backgroundColor:
                  activeCategory === cat.id ? storeInfo.brandColor : "#fff",
                color: activeCategory === cat.id ? "#fff" : "#1C1C1C",
                borderColor:
                  activeCategory === cat.id ? storeInfo.brandColor : "#e5e7eb",
                boxShadow:
                  activeCategory === cat.id
                    ? "0 2px 8px rgba(26,77,46,0.25)"
                    : "none",
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Section Header */}
      <div className="px-4 pt-4 pb-3 flex items-center justify-between">
        <div>
          <h2 className="font-bold text-[#1C1C1C]" style={{ fontSize: "16px" }}>
            {currentCategory?.name}
          </h2>
          <p className="text-gray-400 text-xs mt-0.5">
            {filteredProducts.length} items available
          </p>
        </div>
        <span
          className="text-xs font-bold px-3 py-1 rounded-full"
          style={{ backgroundColor: "#F4A300", color: "#1C1C1C" }}
        >
          {categories.find((c) => c.id === activeCategory)?.products.length} items
        </span>
      </div>

      {/* Products Grid */}
      <div className="px-4 pb-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 text-gray-400 text-sm">
            No products found
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <CartBar />
    </div>
  );
};

export default StoreFront;
