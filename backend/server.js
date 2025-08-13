require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const bookingRoutes = require('./routes/bookingRoutes');
const enquiryRoutes = require('./routes/enquiryRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' })); 
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

app.use('/api/bookings', bookingRoutes);
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/contacts', contactRoutes);

app.get('/', (req, res) => res.send('API is running...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
