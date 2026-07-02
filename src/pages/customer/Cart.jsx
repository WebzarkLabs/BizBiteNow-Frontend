import { useNavigate } from "react-router-dom";
import { ChevronLeft, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cart, updateQty, removeFromCart, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  // Empty state
  if (cart.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-[#FAFAF5]"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-5">
          <ShoppingBag size={40} className="text-gray-300" />
        </div>
        <h2 className="font-bold text-[#1C1C1C]" style={{ fontSize: "20px" }}>
          Your cart is empty
        </h2>
        <p className="text-gray-400 text-sm mt-2">
          Add items from the store to get started
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-[#1A4D2E] text-white rounded-xl px-8 font-bold"
          style={{ minHeight: "48px", fontFamily: "Arial, sans-serif" }}
        >
          Browse Store
        </button>
      </div>
    );
  }

  const grandTotal = totalPrice;

  return (
    <div
      className="bg-[#FAFAF5] min-h-screen"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      {/* Header */}
      <div
        className="sticky top-0 z-30 bg-white border-b border-gray-100 px-4 flex items-center gap-2"
        style={{ minHeight: "56px" }}
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center text-[#1C1C1C]"
          style={{ minHeight: "44px", minWidth: "44px" }}
        >
          <ChevronLeft size={22} />
        </button>
        <h1 className="font-bold text-[#1C1C1C]" style={{ fontSize: "18px" }}>
          Your Cart
        </h1>
        <span className="text-sm text-gray-400 ml-1">({totalItems} items)</span>
      </div>

      <div className="px-4 py-4 space-y-3 pb-40">

        {/* Cart Items */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {cart.map((item, index) => (
            <div key={item.id}>
              <div className="p-4 flex items-center gap-3">

                {/* Image */}
                <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#1C1C1C] text-sm">{item.name}</h3>
                  <p className="text-[#1A4D2E] font-bold text-sm mt-0.5">
                    ₹{item.price}
                  </p>
                </div>

                {/* Qty controls + remove */}
                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="flex items-center justify-center text-[#1A4D2E] font-bold"
                      style={{ minHeight: "36px", minWidth: "36px" }}
                    >
                      <Minus size={14} />
                    </button>
                    <span
                      className="font-bold text-[#1C1C1C] px-2 text-sm"
                      style={{ minWidth: "24px", textAlign: "center" }}
                    >
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="flex items-center justify-center text-[#1A4D2E] font-bold"
                      style={{ minHeight: "36px", minWidth: "36px" }}
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center justify-center text-red-400"
                    style={{ minHeight: "36px", minWidth: "36px" }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {/* Item subtotal */}
              <div className="px-4 pb-3 flex justify-between items-center">
                <span className="text-xs text-gray-400">
                  {item.qty} × ₹{item.price}
                </span>
                <span className="text-sm font-bold text-[#1C1C1C]">
                  ₹{item.price * item.qty}
                </span>
              </div>

              {index < cart.length - 1 && (
                <div className="mx-4 border-t border-gray-100" />
              )}
            </div>
          ))}
        </div>

        {/* Bill Summary */}
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <h2 className="font-bold text-[#1C1C1C] mb-3" style={{ fontSize: "15px" }}>
            Bill Summary
          </h2>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Item Total</span>
              <span className="font-semibold text-[#1C1C1C]">₹{totalPrice}</span>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-3 pt-3 flex justify-between items-center">
            <span className="font-bold text-[#1C1C1C]" style={{ fontSize: "15px" }}>
              Grand Total
            </span>
            <span className="font-bold text-[#1A4D2E]" style={{ fontSize: "17px" }}>
              ₹{grandTotal}
            </span>
          </div>
        </div>

      </div>

      {/* Checkout Button — fixed bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3">
        <button
          onClick={() => navigate("/checkout")}
          className="w-full bg-[#1A4D2E] text-white rounded-xl font-bold flex items-center justify-center"
          style={{
            minHeight: "52px",
            fontSize: "15px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Proceed to Checkout — ₹{grandTotal}
        </button>
      </div>
    </div>
  );
};

export default Cart;
