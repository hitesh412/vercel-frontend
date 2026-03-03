import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setData(res.data);
      } catch (error) {
        console.log("Error loading profile");
      }
    };

    fetchProfile();
  }, []);

  if (!data) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>My Profile</h2>

      <p><strong>Username:</strong> {data.username}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Total Orders:</strong> {data.totalOrders}</p>

      <h3>My Orders</h3>

      {data.orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        data.orders.map((order) => (
          <div key={order._id}>
            <p><strong>Total:</strong> ₹{order.total}</p>
            <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default Profile;