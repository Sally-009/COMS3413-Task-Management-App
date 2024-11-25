const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

// Create an Express application
const app = express();

// Middleware to parse JSON requests
app.use(express.json());
// Cors middleware
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");

    // Start the server after successful database connection
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// Route to test server is running
app.get("/", (req, res) => {
  res.send("Server is running.");
});

// Import routes
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);