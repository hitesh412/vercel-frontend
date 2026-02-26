import React, { useState } from "react";
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

const categories = ["All", ...new Set(popularDishes.map(item => item.category))];

const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "0 - 50", min: 0, max: 50 },
  { label: "50 - 100", min: 50, max: 100 },
  { label: "100 - 200", min: 100, max: 200 },
];

const Menu = () => {
  const { addToCart } = useCart();

  const [addedItems, setAddedItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredItems = popularDishes.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    const selectedPrice = priceRanges.find(
      (range) => range.label === priceRange
    );

    const matchesPrice =
      item.price >= selectedPrice.min && item.price <= selectedPrice.max;

    return matchesCategory && matchesSearch && matchesPrice;
  });

  const handleAddToCart = (item) => {
    const size = item.category === "Pizza" ? "Small" : "Standard";
    const cartItem = {
      ...item,
      size,
      quantity: 1,
      basePrice: item.price
    };
    addToCart(cartItem);
    toast.success(`${item.name} (${size}) added to cart`);
    setAddedItems((prev) => [...prev, item.id]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-orange-500 text-white py-6 text-center text-2xl sm:text-3xl font-bold shadow-md">
        Food Delivery Menu
      </header>

      {/* Subheading */}
      <div className="max-w-7xl mx-auto mt-6 px-4 text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">
          Choose from our popular dishes and enjoy fresh, delicious meals delivered to your door!
        </h2>
      </div>

      {/* Main Container with Sidebar */}
      <div className="max-w-7xl mx-auto mt-6 px-4 pb-12 flex gap-6">
        {/* Mobile Filter Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed bottom-4 right-4 z-50 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </button>

        {/* Sidebar Filters */}
        <aside
          className={`fixed lg:static top-0 bottom-0 left-0 z-40 w-64 bg-white shadow-lg lg:shadow-md rounded-lg lg:self-start lg:sticky lg:top-6 transform transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          } overflow-hidden`}
        >
          <div className="p-6 space-y-5">
            {/* Close button for mobile */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-xl font-bold text-gray-800">Filters</h3>

            {/* Category Filter */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-2 text-sm">Category</h4>
              <div className="space-y-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSidebarOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                      selectedCategory === cat
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-orange-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-2 text-sm">Price Range</h4>
              <div className="space-y-1.5">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => {
                      setPriceRange(range.label);
                      setSidebarOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                      priceRange === range.label
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-orange-100"
                    }`}
                  >
                    Rs.{range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSelectedCategory("All");
                setPriceRange("All");
                setSidebarOpen(false);
              }}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition font-semibold text-sm"
            >
              Clear Filters
            </button>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          />
        )}

        {/* Main Content */}
        <div className="flex-1 mb-8">
          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search food..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Menu Grid */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300 flex flex-col"
                >
                  <Link to={`/menu-details/${item.id}`}>
                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  </Link>

                  <div className="p-4 flex flex-col flex-1">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-500 text-sm flex-1">{item.description}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-red-500 font-bold">Rs.{item.price}</span>
                      <button
                        type="button"
                        onClick={() => handleAddToCart(item)}
                        className={`px-4 py-2 rounded-lg transition text-white ${
                          addedItems.includes(item.id)
                            ? "bg-green-500 cursor-not-allowed"
                            : "bg-red-500 hover:bg-red-600"
                        }`}
                      >
                        {addedItems.includes(item.id) ? "Added" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">
                No items found 😕
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;