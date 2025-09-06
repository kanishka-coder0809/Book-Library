import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BooksPage.css";

export default function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books") // backend route
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="books-page">
      <h2>All Books</h2>
      <div className="books-grid">
        {books.map((book) => (
          <div key={book._id} className="book-card">
            <img src={book.coverImage} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <a href={book.pdfUrl} target="_blank" rel="noopener noreferrer">
              Read PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
