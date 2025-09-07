import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();
const __dirname = path.resolve();

// Paths to your cover and pdf folders
const coverDir = path.join(__dirname, "frontend", "public", "cover");
const pdfDir = path.join(__dirname, "frontend", "public", "pdf");

router.get("/", (req, res) => {
  try {
    // Read all cover and pdf files
    const covers = fs.readdirSync(coverDir);
    const pdfs = fs.readdirSync(pdfDir);

    // Create book objects (match by filename order)
    const books = covers.map((coverFile, index) => {
      return {
        id: index + 1,
        title: `Book ${index + 1}`,
        cover: coverFile,
        pdf: pdfs[index] || null,
      };
    });

    res.json(books);
  } catch (err) {
    console.error("Error reading books:", err);
    res.status(500).json({ error: "Failed to load books" });
  }
});

export default router;
