import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const fetchProfile = async () => {

      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/user/profile",
        {
          headers: {
            Authorization: token
          }
        }
      );

      setUser(res.data);
    };

    fetchProfile();

  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>

      <h2>User Profile</h2>

      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>

      <h3>Orders</h3>

      {user.orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        user.orders.map((order) => (
          <div key={order._id}>
            <p>Total: ₹{order.total}</p>
            <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
            <hr />
          </div>
        ))
      )}

    </div>
  );
};

export default Profile;