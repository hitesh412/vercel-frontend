import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);

    axios
      .get("https://project-backend-txga.onrender.com/api/orders/")
      .then((res) => {
        if (storedUser) {
          const userOrders = res.data.filter(
            (order) => order.customer.email === storedUser.email
          );
          setOrders(userOrders);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top Buttons */}
        <div className="mb-6 flex gap-4">
          <button
            onClick={() => navigate("/")}
            className="bg-indigo-500 text-white px-5 py-2 rounded-lg hover:bg-indigo-600 transition"
          >
             Go to Home
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-10 flex items-center gap-6">

          {/* Avatar */}
          <div className="w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center text-white text-2xl font-bold">
            {user?.name?.charAt(0)}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              My Profile
            </h2>

            {user && (
              <div className="grid md:grid-cols-3 gap-6 mt-2">

                <div>
                  <p className="text-gray-500 text-sm">Name</p>
                  <p className="font-semibold">{user.name}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="font-semibold">{user.email}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Total Orders</p>
                  <p className="font-semibold">{orders.length}</p>
                </div>

              </div>
            )}
          </div>
        </div>

        {/* Orders Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          My Orders
        </h2>

        {/* Loading */}
        {loading && (
          <div className="text-center text-gray-500">
            Loading orders...
          </div>
        )}

        {/* No Orders */}
        {!loading && orders.length === 0 && (
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <p className="text-gray-500 text-lg">
              🛒 You have not placed any orders yet
            </p>
          </div>
        )}

        {/* Orders Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition duration-300"
            >

              <p className="text-xs text-gray-400 mb-1">
                Order ID
              </p>

              <p className="font-semibold text-gray-700 mb-2">
                {order._id}
              </p>

              <p className="text-xs text-gray-400">
                Total
              </p>

              <p className="font-semibold text-green-600 mb-2">
                ₹{order.total}
              </p>

              <p className="text-xs text-gray-400">
                Address
              </p>

              <p className="text-gray-700 mb-3">
                {order.customer.address}
              </p>

              {/* Items */}
              <div className="border-t pt-3">

                <p className="font-semibold mb-2 text-sm">
                  Items
                </p>

                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-sm text-gray-600"
                  >
                    <span>
                      {item.name} ({item.size})
                    </span>

                    <span>
                      x{item.quantity}
                    </span>
                  </div>
                ))}

              </div>

              {/* Order Date */}
              <p className="text-xs text-gray-400 mt-3">
                {new Date(order.createdAt).toLocaleDateString()}
              </p>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Profile;