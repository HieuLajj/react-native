const express = require("express");
const app = express();
const cors = require("cors");

const connectDB = require("./config/db");

// Connect DB
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());

// Routes
app.use("/api/transactions", require("./routes/transaction"));

const PORT = process.env.PORT || 4000;

// Listening port
app.listen(PORT, () => console.log(`Server running port ${PORT}`));