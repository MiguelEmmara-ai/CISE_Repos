// app.js

const express = require("express");
const connectDB = require("./config/db");

// routes
const books = require("./routes/api/books.js");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello World!"));

// use Routes
app.use("/api/books", books);

const port = process.env.PORT || 5123;

app.listen(port, () => console.log(`Server running on port ${port}`));
