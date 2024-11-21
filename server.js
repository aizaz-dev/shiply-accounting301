const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();

// Enable CORS
app.use(cors());

// Set CSP headers to allow Google Fonts
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; font-src 'self' https://fonts.gstatic.com; style-src 'self' https://fonts.googleapis.com;"
  );
  next();
});

// Serve static files from 'uploads' directory
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
app.use('/uploads', express.static(uploadDir));

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Save to the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Unique filename
  },
});

const upload = multer({ storage: storage });

// API endpoint for file upload
app.post('/api/signup', upload.single('logoFile'), (req, res) => {
  console.log('Form data:', req.body); // Non-file form data
  console.log('Uploaded file:', req.file); // File data

  // Respond with success message and file details
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
