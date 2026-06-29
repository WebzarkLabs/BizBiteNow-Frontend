import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { Plus } from "lucide-react";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden flex flex-col cursor-pointer active:scale-95 transition-transform"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden" style={{ height: "140px" }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 50%)" }}
        />
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1 gap-1">
        <h3 className="font-bold text-[#1C1C1C] leading-tight line-clamp-1" style={{ fontSize: "13px" }}>
          {product.name}
        </h3>

        <p className="text-gray-400 line-clamp-2" style={{ fontSize: "11px", lineHeight: "1.5" }}>
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-[#1A4D2E]" style={{ fontSize: "15px" }}>
            ₹{product.price}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="flex items-center gap-1 text-white font-bold rounded-xl px-3"
            style={{
              backgroundColor: "#1A4D2E",
              minHeight: "36px",
              fontSize: "12px",
            }}
          >
            <Plus size={13} strokeWidth={2.5} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
