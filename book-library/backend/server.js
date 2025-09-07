import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes.js";
import connectDB from "./config/db.js";
import booksRouter from "./routes/books.js";
import path from "path";
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/books", booksRouter);
app.use("/cover", express.static(path.join(__dirname, "frontend", "public", "cover")));
app.use("/pdf", express.static(path.join(__dirname, "frontend", "public", "pdf")));



// Routes
app.use("/api/books", bookRoutes);

// Fallback route
app.get("/", (req, res) => {
  res.send("📚 Book API is running...");
});

const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
    process.exit(1);
  }
};

startServer();
