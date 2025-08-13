const mongoose = require("mongoose");

const adminLogSchema = new mongoose.Schema({
  admin: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  action: { type: String, required: true },
  details: mongoose.Schema.Types.Mixed, 
}, { timestamps: true });

module.exports = mongoose.model("AdminLog", adminLogSchema);
