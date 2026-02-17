// import React from "react";
// import { useCart } from "../Pages/CartContext";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const { cart, removeFromCart, increaseQty, decreaseQty, totalPrice } = useCart();
//   const navigate = useNavigate();

//   const handleCheckout = () => {
//     navigate("/checkout");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
//       <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

//       {cart.length === 0 ? (
//         <div className="flex flex-col items-center justify-center mt-20">
//           <p className="text-gray-500 text-lg">Your cart is empty 🛒</p>
//           <button
//             onClick={() => navigate("/menu")}
//             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//           >
//             Continue Shopping
//           </button>
//         </div>
//       ) : (
//         <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6 space-y-6">
//           {cart.map((item) => (
//             <div
//               key={`${item.id}-${item.size || "default"}`}
//               className="flex flex-col sm:flex-row justify-between items-center border-b pb-4 gap-4 sm:gap-6"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg shrink-0"
//                 loading="lazy"
//               />

//               <div className="flex-1 text-center sm:text-left">
//                 <h2 className="font-semibold text-lg">
//                   {item.name} {item.size && `(${item.size})`}
//                 </h2>
//                 <p className="text-orange-500 font-bold mt-1">
//                   Rs. {item.basePrice} × {item.quantity}
//                 </p>
//                 <p className="font-bold text-red-500">Rs. {item.totalPrice}</p>
//               </div>

//               <div className="flex items-center gap-3 mt-2 sm:mt-0">
//                 <button
//                   onClick={() => decreaseQty(item.id, item.size)}
//                   disabled={item.quantity === 1}
//                   className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition"
//                 >
//                   -
//                 </button>
//                 <span className="font-semibold w-6 text-center">{item.quantity}</span>
//                 <button
//                   onClick={() => increaseQty(item.id, item.size)}
//                   className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
//                 >
//                   +
//                 </button>
//               </div>

//               <button
//                 onClick={() => removeFromCart(item.id, item.size)}
//                 className="text-red-500 hover:text-red-700 font-semibold mt-2 sm:mt-0"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           <div className="text-right text-2xl font-bold mt-4">
//             Total: Rs. {totalPrice}
//           </div>

//           <button
//             className="w-full mt-4 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-semibold"
//             onClick={handleCheckout}
//           >
//             Checkout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import { useCart } from "../Pages/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Shopping Cart</h1>
                <p className="text-sm text-gray-500 mt-1">
                  {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
                </p>
              </div>
            </div>
            {cart.length > 0 && (
              <button
                onClick={() => navigate("/menu")}
                className="hidden sm:flex items-center text-green-600 hover:text-green-700 font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add More Items
              </button>
            )}
          </div>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-white rounded-lg shadow-sm p-12 sm:p-16 text-center">
            <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Add items to get started with your order.</p>
            <button
              onClick={() => navigate("/menu")}
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Browse Menu
            </button>
          </div>
        ) : (
          /* Cart with Items */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items - Left Side */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.size || "default"}`}
                  className="bg-white rounded-lg shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full sm:w-28 h-28 object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {item.name}
                          </h3>
                          {item.size && (
                            <span className="inline-block mt-1 px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                              {item.size}
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.size)}
                          className="ml-4 text-gray-400 hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => decreaseQty(item.id, item.size)}
                            disabled={item.quantity === 1}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                          >
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="text-gray-900 font-semibold w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => increaseQty(item.id, item.size)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                          >
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-sm text-gray-500">
                            Rs. {item.basePrice} × {item.quantity}
                          </p>
                          <p className="text-lg font-bold text-green-600 mt-1">
                            Rs. {item.totalPrice}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary - Right Side */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6 pb-3 border-b">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({cart.length} items)</span>
                    <span>Rs. {totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (GST)</span>
                    <span>Rs. 0</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-green-600">Rs. {totalPrice}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition-colors shadow-sm flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Proceed to Checkout
                </button>

                <button
                  onClick={() => navigate("/menu")}
                  className="w-full mt-3 bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-lg transition-colors border border-gray-300"
                >
                  Continue Shopping
                </button>

                {/* Security Info */}
                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <p className="text-xs text-gray-600">
                      Secure checkout with encrypted payment processing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
