import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);

// Fallback route
app.get("/", (req, res) => {
  res.send("📚 Book API is running...");
});

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1);
  }
};

startServer();
