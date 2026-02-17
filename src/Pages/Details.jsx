import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../Pages/CartContext";
import toast from "react-hot-toast";

const popularDishes = [
  { id: 1, name: "Margherita Pizza", category: "Pizza", description: "Classic pizza topped with fresh tomatoes, mozzarella, and basil.", image: "/img/marghrita.jpg", price: 50 },
  { id: 2, name: "Burger", category: "Burger", description: "Juicy grilled burger with fresh veggies and special sauce.", image: "/img/burger.jpg", price: 100 },
  { id: 3, name: "Sandwich", category: "Sandwich", description: "Toasted sandwich filled with fresh vegetables and cheese.", image: "/img/sandwich.jpg", price: 150 },
  { id: 4, name: "Pasta", category: "Pasta", description: "Creamy pasta cooked with Italian herbs and rich sauce.", image: "/img/pasta.jpg", price: 200 },
  { id: 5, name: "Noodles", category: "Noodles", description: "Stir-fried noodles with vegetables and flavorful spices.", image: "/img/Noodles.jpg", price: 100 },
  { id: 6, name: "Cheese Burger", category: "Burger", description: "Loaded cheeseburger with melted cheese and soft bun.", image: "/img/cheeseburger.jpg", price: 120 },
  { id: 7, name: "Sweetcorn Pizza", category: "Pizza", description: "Sweetcorn-loaded pizza with cheesy goodness.", image: "/img/sweetcornpizza.jpg", price: 90 },
  { id: 8, name: "Cheese Sandwich", category: "Sandwich", description: "Cheesy sandwich grilled to perfection.", image: "/img/cheesesandwich.jpg", price: 100 },
  { id: 9, name: "Sada Dosa", category: "Dosa", description: "Crispy plain dosa served with coconut chutney and sambar.", image: "/img/sadadosa.jpg", price: 80},
  { id: 10, name: "Masala Dosa", category: "Dosa", description: "Golden dosa filled with spiced potato masala, served with chutney and sambar.", image: "/img/masaladosa.jpg", price: 120},

];

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cart, addToCart, increaseQty, decreaseQty } = useCart();

  const [size, setSize] = useState("Small");

  const item = popularDishes.find((a) => a.id === Number(id));
  if (!item) return <div className="text-center mt-20 text-xl">Item not found</div>;

  const isPizza = item.category === "Pizza";

  // Find if item is already in cart
  const cartItem = cart.find((c) =>
    isPizza
      ? c.id === item.id && c.size === size
      : c.id === item.id
  );

  const quantity = cartItem ? cartItem.quantity : 1;

  // Price logic based on pizza size
  const basePrice = isPizza
    ? size === "Small"
      ? item.price
      : size === "Medium"
      ? item.price + 30
      : item.price + 60
    : item.price;

  const totalPrice = basePrice * quantity;

  const handleAddToCart = () => {
    if (cartItem) return; // Already in cart, just use + button

    addToCart({
      ...item,
      basePrice,
      quantity: 1,
      totalPrice: basePrice,
      ...(isPizza && { size }),
    });

    toast.success(`${item.name} added to cart`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="bg-gray-200">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          </div>

          <div className="p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">{item.name}</h1>
              <p className="mt-2 text-sm text-gray-500 uppercase tracking-wide">
                Category: {item.category}
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">{item.description}</p>

              {isPizza && (
                <div className="mt-6">
                  <p className="font-semibold text-gray-800 mb-3">Choose Size</p>
                  <div className="flex gap-3">
                    {["Small", "Medium", "Large"].map((s) => (
                      <button
                        key={s}
                        onClick={() => setSize(s)}
                        className={`px-5 py-2 rounded-full border transition ${
                          size === s
                            ? "bg-red-500 text-white border-red-500"
                            : "bg-white text-gray-700 hover:border-red-400"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <p className="mt-6 text-3xl font-bold text-red-500">
                Rs. {totalPrice} <span className="text-sm text-gray-500">({basePrice} × {quantity})</span>
              </p>

              <div className="flex items-center gap-4 mt-6">
                <button
                  onClick={() =>
                    isPizza ? decreaseQty(item.id, size) : decreaseQty(item.id)
                  }
                  disabled={!cartItem || quantity === 1}
                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 text-xl disabled:opacity-50"
                >
                  −
                </button>

                <span className="text-xl font-semibold">{quantity}</span>

                <button
                  onClick={() =>
                    cartItem
                      ? isPizza
                        ? increaseQty(item.id, size)
                        : increaseQty(item.id)
                      : handleAddToCart()
                  }
                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 text-xl"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
              >
                Add to Cart
              </button>
              <button
                onClick={() => navigate(-1)}
                className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
