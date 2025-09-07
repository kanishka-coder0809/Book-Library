import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

// Go up one level (..), then into frontend/public
const coverDir = path.join(process.cwd(), "../frontend/public/cover");
const pdfDir = path.join(process.cwd(), "../frontend/public/pdf");

router.get("/", (req, res) => {
  try {
    const coverFiles = fs.readdirSync(coverDir);
    const pdfFiles = fs.readdirSync(pdfDir);

    const books = coverFiles.map((cover, index) => {
      const title = path.parse(cover).name;
      const pdf = pdfFiles.find((file) => path.parse(file).name === title);

      return {
        id: index + 1,
        title: title,
        author: "Unknown",
        coverImage: `/cover/${cover}`, // static serving
        pdfUrl: pdf ? `/pdf/${pdf}` : null,
      };
    });

    res.json(books);
  } catch (err) {
    console.error("Error reading books:", err);
    res.status(500).json({ error: "Failed to load books" });
  }
});

export default router;
