const mongoose = require("mongoose");

// User model schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstname: { type: String },
  lastname: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;