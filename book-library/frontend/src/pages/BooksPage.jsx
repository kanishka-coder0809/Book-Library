import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BooksPage.css";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/books");
        setBooks(res.data);
      } catch (err) {
        console.error("Error fetching books:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <p className="loading">Loading books...</p>;
  }

  return (
    <div className="books-page">
      <h2 className="page-title">📚 All Books</h2>

      {books.length === 0 ? (
        <p className="no-books">No books available. Add some first!</p>
      ) : (
        <div className="books-grid">
          {books.map((book) => (
            <div key={book._id} className="book-card">
              <a href={book.pdfUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="book-cover"
                />
              </a>
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">by {book.author}</p>
              </div>
              <a
                href={book.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="read-btn"
              >
                📖 Read
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
