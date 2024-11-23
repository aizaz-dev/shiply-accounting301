const express = require('express');
const multer = require('multer');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'darv36poz',
  api_key: '937875433665368',
  api_secret: 'EKqM_vxnN_buAJY2qh6qZz-dITI',
});

// Set up Multer with Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'uploads', // Folder name in Cloudinary
    allowed_formats: ['jpg', 'jpeg', 'png'], // Allowed file formats
    use_filename: true, // Preserve the original file name
    unique_filename: true, // Ensure unique file names
  },
});

const upload = multer({ storage });

const app = express();
app.use(cors());
app.use(express.json()); // For parsing JSON requests

// API endpoint for uploading the logo image
app.post('/api/upload', upload.single('logoFile'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded.' });
    }

    // Get the Cloudinary URL of the uploaded file
    const imageUrl = req.file.path;

    res.json({
      success: true,
      message: 'Logo uploaded successfully',
      fileUrl: imageUrl, // Cloudinary-hosted image URL
    });
  } catch (error) {
    console.error('Error during file upload:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// Start the server
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
