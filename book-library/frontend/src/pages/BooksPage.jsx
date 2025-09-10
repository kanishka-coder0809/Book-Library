import React, { useState, useEffect } from "react";
import "./BooksPage.css";

export default function BooksPage() {
  const defaultBooks = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    coverImage: "/cover/alchemist.webp",
    pdfUrl: "/pdf/alchemist.pdf",
  },
  {
    id: 2,
    title: "One Night at the Call Centre",
    author: "Chetan Bhagat",
    coverImage: "/cover/One night.webp",
    pdfUrl: "/pdf/One Night.pdf",
  },
  {
    id: 3,
    title: "The Blue Umbrella",
    author: "Ruskin Bond",
    coverImage: "/cover/blue umbrella.webp",
    pdfUrl: "/pdf/The Blue Umbrella.pdf",
  },
  {
    id: 4,
    title: "The Theory Of Everything",
    author: "Stephen Hawking",
    coverImage: "/cover/theory.webp",
    pdfUrl: "/pdf/Theory.pdf",
  },
  {
    id: 5,
    title: "Rich Dad Poor Dad",
    author: "Robert T Kiyosaki",
    coverImage: "/cover/rich dad.webp",
    pdfUrl: "/pdf/Rich Dad.pdf",
  },
  {
    id: 6,
    title: "Ikigai: The Japanese Secret to a Long and Happy Life",
    author: "Francesc Miralles and Hector Garcia",
    coverImage: "/cover/ikigai.webp",
    pdfUrl: "/pdf/Ikigai.pdf",
  },
  {
    id: 7,
    title: "Charlie and the Chocolate Factory",
    author: "Roald Dahl",
    coverImage: "/cover/charlie.webp",
    pdfUrl: "/pdf/Choclate.pdf",
  },
  {
    id: 8,
    title: "Little Women",
    author: "Louisa Alcot",
    coverImage: "/cover/little women.webp",
    pdfUrl: "/pdf/Little-Women.pdf",
  },
  {
    id: 9,
    title: "Alice in Wonderland",
    author: "Lewis Caroll",
    coverImage: "/cover/alice.webp",
    pdfUrl: "/pdf/alice.pdf",
  },
  {
    id: 10,
    title: "Atomic Habits",
    author: "James Clear",
    coverImage: "/cover/atomic.webp",
    pdfUrl: "/pdf/Atomic.pdf",
  },
  {
    id: 10,
    title: "Nancy Drew 01 : The Secret Of The Old Cl: The Secret of the Old Clock",
    author: "Carolyn G. Keene ",
    coverImage: "/cover/nancy.webp",
    pdfUrl: "/pdf/nancy.pdf",
  },
  {
    id: 10,
    title: "Building a Second Brain",
    author: "TIAGO FORTE ",
    coverImage: "/cover/brain.webp",
    pdfUrl: "/pdf/brain.pdf",
  },
];

  const [books, setBooks] = useState([]);

  useEffect(() => {
    // For now, just show defaultBooks
    setBooks(defaultBooks);
  }, []);

  return (
    <div className="books-page">
      <h2 className="page-title">📚 All Books</h2>
      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <a href={book.pdfUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={book.coverImage}
                alt={book.title}
                className="book-cover"
                onError={(e) => (e.target.src = "/cover/placeholder.jpg")}
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
    </div>
  );
}
