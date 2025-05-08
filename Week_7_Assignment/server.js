const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const itemRoutes = require("./routes/itemRoutes");

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/items", itemRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
