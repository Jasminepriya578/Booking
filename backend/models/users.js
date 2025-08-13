const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  phone: { type: String },
  role: { type: String, enum: ["buyer", "seller", "admin"], default: "buyer" },
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
  },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
