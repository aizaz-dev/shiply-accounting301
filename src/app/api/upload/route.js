import fs from 'fs';
import path from 'path';
import formidable from 'formidable';

// Define upload directory inside the public folder
const uploadDirectory = path.join(process.cwd(), 'public', 'uploads');

// Ensure the upload directory exists
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

export const config = {
  api: {
    bodyParser: false, // Disable bodyParser to handle file uploads manually
  },
};

const upload = (req, res) => {
  const form = new formidable.IncomingForm();

  // Set the upload directory and keep file extensions
  form.uploadDir = uploadDirectory;
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error parsing form data:', err);
      return res.status(500).json({ error: 'Failed to process the file' });
    }

    const uploadedFile = files.logoFile[0]; // Get the uploaded file
    const filePath = path.join(uploadDirectory, uploadedFile.newFilename); // Path of the uploaded file
    const fileUrl = `/uploads/${uploadedFile.newFilename}`; // URL to access the uploaded file

    // Send the file URL in the response
    res.status(200).json({
      message: 'File uploaded successfully',
      fileUrl: fileUrl,
    });
  });
};

export default upload;
