import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BooksPage.css";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const defaultBooks = [
  {
    _id: "1",
    title: "The Alchemist",
    author: "Paulo Coelho",
    coverImage: "/cover/Alchemist.webp",   // ✅ leading slash
    pdfUrl: "/pdf/The Alchemist.pdf",
  },
  {
    _id: "2",
    title: "One Night at the Call Centre",
    author: "Chetan Bhagat",
    coverImage: "/cover/One night.webp",
    pdfUrl: "/pdf/One Night.pdf",
  },
  {
    _id: "3",
    title: "The Blue Umbrella",
    author: "Ruskin Bond",
    coverImage: "/cover/blue umbrella.webp",
    pdfUrl: "/pdf/The Blue Umbrella.pdf",
  },
];


  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/books");
        // Merge API books + defaultBooks
        setBooks([...defaultBooks, ...res.data]);
      } catch (err) {
        console.error("Error fetching books:", err);
        setError("⚠️ Failed to load books. Showing default books.");
        setBooks(defaultBooks); // fallback to defaults
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <p className="loading">⏳ Loading books...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
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
              {/* Cover image */}
              <a href={book.pdfUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="book-cover"
                  onError={(e) => (e.target.src = "/cover/placeholder.jpg")}
                />
              </a>

              {/* Book info */}
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">by {book.author}</p>
              </div>

              {/* Read button */}
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
