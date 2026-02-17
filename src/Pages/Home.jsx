import React, { useState } from 'react';
import { useCart } from "../Pages/CartContext";
import { Link } from "react-router-dom";
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

const Home = () => {
  const { addToCart } = useCart();

  const [addedItems, setAddedItems] = useState([]);



  const handleAddToCart = (item) => {
    const size = item.category === "Pizza" ? "Small" : "Standard";

    const cartItem = {
      ...item,
      size,
      quantity: 1,
      basePrice: item.price,
    };


    addToCart(cartItem);
    toast.success(`${item.name}added to cart`);

    setAddedItems((prev) => [...prev, item.id]);

  };

  return (
    <div className="min-h-screen bg-gray-50">

      <section
        className="relative h-[80vh] flex items-center text-white"
        style={{
          backgroundImage: "url('/img/res.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Delicious Food Delivered To You
          </h1>
          <p className="text-lg mb-6 max-w-xl">
            Order your favorite meals from the best restaurants near you
          </p>

          <Link to="/menu">
            <button className="bg-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
              Order Now
            </button>
          </Link>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Dishes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {popularDishes.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              <Link to={`/menu-details/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover hover:scale-105 transition"
                  loading="lazy"
                />
              </Link>

              <div className="p-5 text-center flex-1 flex flex-col">
                <span className="text-sm bg-orange-100 text-orange-600 px-2 py-1 rounded-full mb-2 inline-block">
                  {item.category}
                </span>

                <h3 className="font-semibold text-xl mb-2">
                  {item.name}
                </h3>

                <p className="text-gray-500 mb-4">
                  {item.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xl font-bold text-red-500">
                    Rs.{item.price}
                  </span>

                  <button onClick={() => handleAddToCart(item)}
                    disabled={addedItems.includes(item.id)}
                      className={`px-4 py-2 rounded-lg transition text-white
                 ${
                     addedItems.includes(item.id)
                     ? "bg-green-500 cursor-not-allowed"
                     : "bg-red-500 hover:bg-red-600"
                 }`}


                  // className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                  {/* Add to Cart */}
                    {addedItems.includes(item.id) ? "Added" : "Add to Cart"}
                  </button>

                </div>
              </div>
            </div>
          ))}
    </div>
      </section >

    </div >
  );
};

export default Home;
