import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";




const Signup = () => {

  const [form,setForm] = useState({
    name:"",
    email:"",
    password:""
  })

  const navigate = useNavigate();


  const [msg, setMsg] = useState("");

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });

  }

  const handleSubmit = async(e)=>{
    e.preventDefault();

    try{

      const response = await api.post("/auth/signup",form);
      setMsg(response.data.message);

      setTimeout(() => {
      navigate("/login");
    }, 1500); 




    }

    catch (err){

      setMsg(err.response?.data?.message || "An error occured");

    }
  }



  
  








  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-10">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white">
          Create Account
        </h2>

                 {msg && (
  <div className="text-center text-sm mt-3 text-red-600 font-medium">
    {msg}
  </div>
    )}



        <p className="text-gray-400 text-center mt-2 text-sm sm:text-base">
          Sign up to start ordering your favorite food
        </p>

        {/* Form */}
        <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
          
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-lg bg-gray-700 px-4 py-2.5 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Email */}
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

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="w-full rounded-lg bg-gray-700 px-4 py-2.5 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white py-2.5 rounded-lg font-semibold transition"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-gray-400 text-center mt-6 text-sm sm:text-base">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-400 cursor-pointer hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
