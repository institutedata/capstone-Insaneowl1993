// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, minLength: 3 },
  password: { type: String, required: true, minLength: 5 }
});

// Create the model from the schema
const User = mongoose.model("User", userSchema);

// Export the model directly (no destructuring)
module.exports = User;