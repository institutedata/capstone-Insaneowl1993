const mongoose = require("mongoose");
const TAG = "User";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, minLength: 3 },
  password: { type: String, required: true, minLength: 5 }
}, {
  collection: TAG
});

const User = mongoose.model(TAG, userSchema);
module.exports = { User };