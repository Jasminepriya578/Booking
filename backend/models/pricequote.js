const mongoose = require("mongoose");

const priceQuoteSchema = new mongoose.Schema({
  deviceType: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  basePrice: { type: Number, required: true },
  conditionMultiplier: {
    New: Number,
    LikeNew: Number,
    Good: Number,
    Fair: Number,
    Poor: Number,
  },
}, { timestamps: true });

module.exports = mongoose.model("PriceQuote", priceQuoteSchema);
