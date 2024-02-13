import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.route.js"
dotenv.config()
const app = express();
app.use(express.json())
const port = 5000;

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB connected successfully...!");
    app.listen(port, () => console.log(`Server running on port ${port}!`));
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
      success: false,
      statusCode,
      message,
  });
});
