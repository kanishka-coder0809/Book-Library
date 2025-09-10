import React from "react";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ import navigation hook
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate(); // ✅ use navigate

  return (
    <div className="top-navbar">
      {/* Logo */}
      <div className="logo" onClick={() => navigate("/")}>📚 BookBee</div>

      {/* Search */}
      <div className="search-container">
        <select className="category-dropdown">
          <option>Categories</option>
          <option>Fiction</option>
          <option>Non-Fiction</option>
          <option>Romance</option>
          <option>Adventure</option>
        </select>
        <input
          type="text"
          placeholder="Search books..."
          className="search-input"
        />
        <button className="search-btn">
          <FaSearch />
        </button>
      </div>

      {/* Icons */}
      <div className="nav-icons">
        <FaHeart />
        <FaShoppingCart />
        {/* ✅ Register button navigates to /register */}
        <button className="register-btn" onClick={() => navigate("/register")}>
          Register
        </button>
      </div>
    </div>
  );
}
