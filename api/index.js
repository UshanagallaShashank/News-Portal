import express from "express";
import mongoose from "mongoose";
import  bodyparser from "body-parser"
import dotenv from "dotenv";

dotenv.config()
const app = express();
app.use(bodyparser.json())
const port = 5000;

const dbURI = process.env.MONGO
mongoose.connect(dbURI)
  .then(() => {
    console.log("MongoDB connected successfully...!");
    app.listen(port, () => console.log(`Server running on port ${port}!`));
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
