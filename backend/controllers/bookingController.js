const Booking = require('../models/Booking'); // Match file name case exactly

exports.createBooking = async (req, res) => {
  try {
    const { fullName, phone, email, date, time } = req.body;

    if (!fullName || !phone || !email || !date || !time) {
      return res.status(400).json({ message: 'Please fill all required fields.' });
    }

    const booking = new Booking(req.body);
    await booking.save();

    res.status(201).json({ message: 'Booking saved successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Error saving booking', error });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
};
