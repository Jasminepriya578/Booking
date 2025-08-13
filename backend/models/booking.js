const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  adults: { type: Number, default: 0 },
  children: { type: Number, default: 0 },
  message: { type: String, default: "" },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
