       const mongoose = require("mongoose");

       const TAG = "User";
       
       const userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: [true, "Username is required"],
            unique: true,
            minLength: 3,
        },
       password: {
            type: String,
            required: [true, "Password is required"],
            minLength: 5,
        }
    });

    const User = mongoose.model(TAG, userSchema);
    module.exports = [User];