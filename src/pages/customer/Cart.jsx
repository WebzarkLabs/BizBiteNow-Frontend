 import { useNavigate } from "react-router-dom";
import { ChevronLeft, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cart, updateQty, removeFromCart, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-[#FAFAF5]"
        style={{ fontFamily: "Arial, sans-serif" }}>
        <ShoppingBag size={64} className="text-gray-200 mb-4" />
        <h2 className="font-bold text-[#1C1C1C]" style={{ fontSize: "18px" }}>
          Your cart is empty
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Add items from the store to get started
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-[#1A4D2E] text-white rounded-xl px-8 font-bold"
          style={{ minHeight: "48px", fontFamily: "Arial, sans-serif" }}>
          Browse Store
        </button>
      </div>
    );
  }

  return (
    <div
      className="bg-[#FAFAF5] min-h-screen"
      style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <div
        className="sticky top-0 z-30 bg-white border-b border-gray-100 px-4 flex items-center gap-2"
        style={{ minHeight: "56px" }}>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center text-[#1C1C1C]"
          style={{ minHeight: "44px", minWidth: "44px" }}>
          <ChevronLeft size={22} />
        </button>
        <h1 className="font-bold text-[#1C1C1C]" style={{ fontSize: "18px" }}>
          Your Cart
        </h1>
        <span className="text-sm text-gray-400 ml-1">({totalItems} items)</span>
      </div>

      {/* Cart Items */}
      <div className="px-4 py-3 space-y-3">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl p-3 flex gap-3 shadow-sm">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-lg object-cover shrink-0"
            />

            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-[#1C1C1C] text-sm truncate">
                {item.name}
              </h3>
              <p className="text-[#1A4D2E] font-bold text-sm mt-0.5">
                ₹{item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Session note */}
      <p className="text-xs text-gray-400 text-center mt-3 px-4">
        Cart is session-only — items clear on page refresh.
      </p>

      {/* Checkout Button */}
      <div className="px-4 pt-4 pb-28">
        <button
          onClick={() => navigate("/checkout")}
          className="w-full bg-[#F4A300] text-[#1C1C1C] rounded-xl font-bold flex items-center justify-center"
          style={{
            minHeight: "52px",
            fontSize: "15px",
            fontFamily: "Arial, sans-serif",
          }}>
          Proceed to Checkout — ₹{totalPrice.toFixed(0)}
        </button>
      </div>
    </div>
  );
};

export default Cart;
