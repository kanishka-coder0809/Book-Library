import React from "react";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="top-navbar">
      <div className="logo">📚 BookBee</div>

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
        <button className="register-btn">Register</button>
      </div>
    </div>
  );
}
