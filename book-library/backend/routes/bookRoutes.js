import express from "express";
const router = express.Router();

const sampleBooks = [
  { _id: 1, title: "The Alchemist", author: "Paulo Coelho", pdfUrl: "https://example.com/alchemist.pdf" },
  { _id: 2, title: "Atomic Habits", author: "James Clear", pdfUrl: "https://example.com/atomic-habits.pdf" }
];

router.get("/", (req, res) => {
  res.json(sampleBooks);
});

export default router;
