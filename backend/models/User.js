const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensures username is unique
    trim: true, // Removes unnecessary whitespace
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures email is unique
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true, // Ensures phone number is unique
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
