const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  condition: {
    type: String,
    enum: ["New", "Like New", "Good", "Fair", "Poor"],
    required: true
  },
  price: { type: Number, required: true },
  images: [String],
  description: String,
  status: { type: String, enum: ["available", "sold"], default: "available" },
}, { timestamps: true });

module.exports = mongoose.model("Device", deviceSchema);
