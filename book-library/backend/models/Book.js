import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  coverImage: String, // URL to book cover
  pdfUrl: String      // URL to PDF file
});

export default mongoose.model("Book", bookSchema);
