const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, default: "" },
  email: { type: String, required: true },
  message: { type: String, default: "" },
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
