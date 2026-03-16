import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Cart = () => {

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-3">
        <h1 className="text-3xl font-bold w-full p-5 text-amber-300 mb-8 bg-[#012a4a]">
          🛒 Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-lg">Your cart is empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 border rounded-lg p-4 mb-4 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />

                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-gray-500">₹{item.price}</p>
                  <p className="text-sm">Qty: {item.quantity}</p>
                </div>

                <div className="text-lg font-semibold">
                  ₹{item.price * item.quantity}
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total */}
            <div className="text-right text-2xl font-bold mt-8">
              Total: ₹{totalPrice}
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;