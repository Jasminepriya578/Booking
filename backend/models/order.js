const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  device: { type: mongoose.Schema.Types.ObjectId, ref: "Device", required: true },
  price: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "paid", "shipped", "completed", "cancelled"],
    default: "pending"
  },
  paymentMethod: { type: String, enum: ["COD", "Online"], required: true },
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
