import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <Link to={`/books/${book.id}`}>
      <div className="rounded shadow-lg bg-white hover:scale-105 transition-transform">
        <img src={book.coverUrl} alt={book.title} className="w-full h-64 object-cover rounded-t" />
        <div className="p-3">
          <h3 className="font-semibold text-lg">{book.title}</h3>
          <p className="text-sm text-gray-600">{book.author}</p>
        </div>
      </div>
    </Link>
  );
}
