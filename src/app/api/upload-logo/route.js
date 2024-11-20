import multer from "multer";
import nextConnect from "next-connect";
import path from "path";

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      console.log("Saving file to public/uploads");
      cb(null, path.join(process.cwd(), "public/uploads"));
    },
    filename: (req, file, cb) => {
      console.log("File received:", file.originalname);
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
});


apiRoute.post((req, res) => {
  console.log("Request Body:", req.body);
  console.log("Request File:", req.file);
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    res.status(200).json({
      message: "File uploaded successfully",
      filename: req.file.filename,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disable built-in body parser to use multer
  },
};
