import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      {/* Top Navbar */}
      <div className="top-navbar">
        <div className="logo">📚 BookBee</div>
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
          <button className="search-btn">🔍</button>
        </div>
        <div className="nav-icons">
          <span>❤️</span>
          <span>🛒</span>
          <button className="register-btn">Register</button>
        </div>
      </div>

      {/* Second Nav */}
      <div className="second-nav">
        <a href="#">Authors</a>
        <a href="#">Publishers</a>
        <a href="#">Novels</a>
        <a href="#">Sci-Fi</a>
        <a href="#">Adventure</a>
        <a href="#">Blogs</a>
        <a href="#">Best Seller Books</a>
        <a href="#">Best Deals</a>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <h1>There is no friend as loyal as a book</h1>
        <p>
          Reading boosts focus, memory, empathy, and communication, reduces
          stress, enhances mental health, and may even help you live longer.
        </p>
        <div className="hero-buttons">
          <button className="shop-btn" onClick={() => navigate("/books")}>
            Shop Now
          </button>
          <button className="best-btn">Best Selling Books</button>
        </div>
      </div>

      {/* Featured Books */}
      <div className="featured-books">
        <img
          src="https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF1000,1000_QL80_.jpg"
          alt="Book1"
        />
        <img
          src="https://m.media-amazon.com/images/I/81N4mK1j4nL.jpg"
          alt="Book2"
        />
        <img
          src="https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
          alt="Book3"
        />
        <img
          src="https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
          alt="Book4"
        />
        <img
          src="https://m.media-amazon.com/images/I/71KilybDOoL.jpg"
          alt="Book5"
        />
      </div>
    </div>
  );
}
