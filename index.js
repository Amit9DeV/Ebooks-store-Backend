import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Ebook from "./model/book.model.js";
import userRouter from "./router/user.router.js";
import morgan from "morgan";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set
const URL = process.env.DB_URL; // MongoDB URL from .env

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Connect to MongoDB
mongoose.connect(URL)
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => {
        console.error("MongoDB connection error:", err.message);
        process.exit(1); // Exit process if DB connection fails
    });

// Root route to get all ebooks
app.get('/', async (req, res) => {
    try {
        const ebooks = await Ebook.find();
        res.json(ebooks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// User routes
app.use("/users", userRouter);

// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
});

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}!`));
