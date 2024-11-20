const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();

// Enable CORS
app.use(cors());

// Configure Multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'uploads');
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Create the 'uploads' folder if it doesn't exist
const fs = require('fs');
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// API endpoint for file upload
app.post('/api/signup', upload.single('logoFile'), (req, res) => {
    // Handle other form data
    console.log(req.body);  // For non-file data
    console.log(req.file);  // For file data (logoFile)
  
    // Send back a response
    res.json({
      success: true,
      message: 'Form submitted successfully',
      file: req.file,
    });
  });
// Start the server
const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
