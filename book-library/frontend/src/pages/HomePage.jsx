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
          <button className="register-btn" onClick={() => navigate("/register")}>Register</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-left">
          <h1>There is no friend as loyal as a book</h1>
          <p>
            Reading boosts focus, memory, empathy, and communication, reduces
            stress, enhances mental health, and may even help you live longer.
          </p>
          <div className="hero-buttons">
            <button className="shop-btn" onClick={() => navigate("/books")}>
              Read Books
            </button>
          </div>
        </div>

        <div className="hero-right">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/books.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="featured-books">
  <div className="book-track">
    {/* Row 1 */}
    <img src="https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF1000,1000_QL80_.jpg" alt="Book1" />
    <img src="https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg" alt="Book2" />
    <img src="https://m.media-amazon.com/images/I/91bYsX41DVL.jpg" alt="Book3" />
    <img src="https://m.media-amazon.com/images/I/71KilybDOoL.jpg" alt="Book4" />
    <img src="https://m.media-amazon.com/images/I/71UwSHSZRnS.jpg" alt="Book5" />
    <img src="https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg" alt="Book6" />
    <img src="https://m.media-amazon.com/images/I/91OINeHnJGL.jpg" alt="Book7" />
    <img src="https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg" alt="Book8" />
    <img src="https://m.media-amazon.com/images/I/81iqZ2HHD-L.jpg" alt="Book9" />
    <img src="https://m.media-amazon.com/images/I/81drfTT9ZfL.jpg" alt="Book10" />

    {/* Row 2 (duplicate for seamless scroll) */}
    <img src="https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF1000,1000_QL80_.jpg" alt="Book1" />
    <img src="https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg" alt="Book2" />
    <img src="https://m.media-amazon.com/images/I/91bYsX41DVL.jpg" alt="Book3" />
    <img src="https://m.media-amazon.com/images/I/71KilybDOoL.jpg" alt="Book4" />
    <img src="https://m.media-amazon.com/images/I/71UwSHSZRnS.jpg" alt="Book5" />
    <img src="https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg" alt="Book6" />
    <img src="https://m.media-amazon.com/images/I/91OINeHnJGL.jpg" alt="Book7" />
    <img src="https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg" alt="Book8" />
    <img src="https://m.media-amazon.com/images/I/81iqZ2HHD-L.jpg" alt="Book9" />
    <img src="https://m.media-amazon.com/images/I/81drfTT9ZfL.jpg" alt="Book10" />
  </div>
</div>

    </div>
  );
}
