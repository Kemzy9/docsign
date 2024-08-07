// server.js

const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const User = require('./models/User');
const Upload = require('./models/Upload');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://hala908:hello@cluster0.9897yfs.mongodb.net/database_name?retryWrites=true&w=majority&ssl=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Multer configuration for file upload
const upload = multer({ dest: 'uploads/' });

// Middleware to authenticate users (dummy implementation)
const authenticateMiddleware = (req, res, next) => {
  // Check authentication, attach user information to req.user
  req.user = { id: '123' }; // Dummy user ID, replace it with actual authentication logic
  next();
};

// Upload endpoint
app.post('/api/uploadpdf', authenticateMiddleware, upload.single('pdf_file'), async (req, res) => {
  try {
    // Check the number of uploads for the current user
    const userId = req.user.id;
    const uploadCount = await Upload.countDocuments({ userId });

    // Check if the user has already uploaded 100 PDFs
    if (uploadCount >= 100) {
      return res.status(400).json({ message: 'You have reached the maximum limit of 100 PDF uploads.' });
    }

    // Proceed with the upload
    // Your upload logic here...

    // Create an upload record
    await Upload.create({ userId });

    // Send success response
    res.status(200).json({ message: 'Upload successful.' });
  } catch (error) {
    console.error('Error uploading file:', error.message);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
