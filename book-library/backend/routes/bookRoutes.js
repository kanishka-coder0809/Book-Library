import express from "express";
import Book from "../models/Book.js";

const router = express.Router();

// GET all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new book (optional for testing)
router.post("/", async (req, res) => {
  try {
    const { title, author, coverImage, pdfUrl } = req.body;
    const book = new Book({ title, author, coverImage, pdfUrl });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
