import React, { useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Login = () => {

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });

  }

  const handleSubmit = async(e)=>{
    e.preventDefault();

    try{

      const res = await api.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      localStorage.setItem("user", JSON.stringify(res.data.user));


      setMsg("Login Successful");

      setTimeout(() => {

        navigate("/");

      }, 1000);

    }

    catch (err){

      setMsg(err.response?.data?.message || "An error occured");

    }
  }  



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-10">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white">
          Login
        </h2>

              {msg && (
  <div className="text-center text-sm mt-3 text-red-600 font-medium">
    {msg}
  </div>
    )}


        <p className="text-gray-400 text-center mt-2 text-sm sm:text-base">
          Login to start ordering your favorite food
        </p>

        <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
          

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-lg bg-gray-700 px-4 py-2.5 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full rounded-lg bg-gray-700 px-4 py-2.5 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <p className="text-gray-400 text-left mt-6 text-sm sm:text-base">
          
          <Link
            to="/forgot-password"
            className="text-orange-400 cursor-pointer hover:underline"
          >
            Forgot Password?
          </Link>
          </p>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white py-2.5 rounded-lg font-semibold transition"
          >
            Login
          </button>
        </form>

        <p className="text-gray-400 text-center mt-6 text-sm sm:text-base">
          Create an account?{" "}
          <Link
            to="/signup"
            className="text-orange-400 cursor-pointer hover:underline"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
