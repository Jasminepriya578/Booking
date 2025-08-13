const Enquiry = require('../models/enquiry');

exports.createEnquiry = async (req, res) => {
  try {
    const { name, email, services, budget, message } = req.body;

    // Server-side validation
    if (!name || !email || !budget || !message) {
      return res.status(400).json({ message: "Please fill all required fields." });
    }

    const newEnquiry = new Enquiry({ name, email, services, budget, message });
    await newEnquiry.save();

    res.status(201).json({ message: "Enquiry submitted successfully", enquiry: newEnquiry });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching enquiries", error: error.message });
  }
};
