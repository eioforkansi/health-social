import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import userRoute from "./routes/user.js";
import userRoute from "./routes/user.js";

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// Routes
app.use("/api/user", userRoute);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected!!"))
  .catch((error) => console.log(error.message));

// Start server
const PORT = process.env.MONGO_PORT || 5500;
app.listen(PORT, () => {
  console.log(`Serving running on ${PORT}`);
});
