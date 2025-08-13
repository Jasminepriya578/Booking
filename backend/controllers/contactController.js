const Contact = require('../models/contact');

exports.createContact = async (req, res) => {
  console.log("Incoming request body:", req.body);

  try {
    const { name, phoneNumber, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Please fill all required fields.' });
    }

    if (phoneNumber && !/^\d{10}$/.test(phoneNumber)) {
      return res.status(400).json({ message: 'Phone number must be 10 digits.' });
    }

    const contact = new Contact({ name, phoneNumber, email, message });
    const savedContact = await contact.save();

    console.log("Saved contact:", savedContact);

    res.status(201).json({ message: 'Message sent successfully', contact: savedContact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching contacts', error });
  }
};
