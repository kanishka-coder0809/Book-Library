import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  coverImage: { type: String, required: true }, // URL of book cover
  pdfUrl: { type: String, required: true }      // Link to PDF file
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
