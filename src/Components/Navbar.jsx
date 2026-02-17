import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaChevronDown, FaShoppingCart } from "react-icons/fa"; 

import { useCart } from "../Pages/CartContext";

import logo from "../assets/logo2.jpg";




const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); 

  const { cart } = useCart();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  setDropdownOpen(false);
  navigate("/login");
 };






  


  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-black-500 font-semibold"
      : "text-gray-700 hover:text-black-500";

  return (
    <nav className="w-full bg-white-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
        <div className="bg-orange-500 rounded-lg p-2">
  <img
    src={logo}
    alt="MyApp Logo"
    className="h-10 w-auto"
  />
</div>



          {/* Desktop Menu (Centered) */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/menu" className={navLinkClass}>Menu</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/cart" className="relative flex items-center gap-2 text-gray-700 hover:text-orange-500">
            
            <FaShoppingCart className="text-xl" />

            <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">

            {cart.length}

            </span>

            </NavLink>

          </div>

          {/* Dropdown Menu on Right */}
          {/* User Section */}
<div className="relative">
  {!token ? (
    <NavLink
      to="/login"
      className="text-gray-700 hover:text-orange-500 font-medium"
    >
      Account
    </NavLink>
  ) : (
    <div className="flex items-center gap-4">
      <span className="font-semibold text-gray-800">
        {user?.name}
      </span>

      <button
        onClick={handleLogout}
        className="text-red-600 hover:text-red-700 font-medium"
      >
        Logout
      </button>
    </div>
  )}
</div>




           



          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            <NavLink onClick={() => setOpen(false)} to="/" className={navLinkClass}>Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/menu" className={navLinkClass}>Menu</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className={navLinkClass}>Contact</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className={navLinkClass}>About</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/cart" className="flex items-center gap-2"><FaShoppingCart />Cart({cart.length})</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar
