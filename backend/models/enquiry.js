const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    match: [/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email format"] 
  },
  services: {
    type: String,
    enum: ["web-development", "mobile-app", "ui-ux-design", "digital-marketing", "consulting"],
    default: ""
  },
  budget: {
    type: String,
    enum: ["5k-10k", "10k-25k", "25k-50k", "50k+"],
    default: ""
  },
  message: { type: String, default: "" }
}, { timestamps: true });

module.exports = mongoose.model('Enquiry', enquirySchema);
