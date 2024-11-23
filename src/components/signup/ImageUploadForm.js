import React, { useState } from "react";

const ImageUploadForm = () => {
  const [imageFile, setImageFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleUpload = async () => {
    if (!imageFile) {
      setUploadStatus("Please select a file to upload.");
      return;
    }

    if (!imageFile.type.startsWith("image/")) {
      setUploadStatus("Invalid file type. Please select an image.");
      return;
    }

    if (imageFile.size > 5 * 1024 * 1024) { // 5MB limit
      setUploadStatus("File is too large. Please select an image under 5MB.");
      return;
    }

    const formData = new FormData();
    formData.append("image", imageFile); // Field name should match "image" in the API

    try {
      setUploadStatus("Uploading...");

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setUploadedImageUrl(data.imageUrl);
        setUploadStatus("Image uploaded successfully!");
      } else {
        const errorText = await response.text();
        console.error("Upload failed:", errorText);
        setUploadStatus("Error uploading image.");
      }
    } catch (error) {
      console.error("Error:", error);
      setUploadStatus("An error occurred during the upload.");
    }
  };

  return (
    <div className="upload-container">
      <h1 className="text-2xl mb-4">Upload Image</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Upload
      </button>
      {uploadStatus && <p className="mt-2">{uploadStatus}</p>}
      {uploadedImageUrl && (
        <div className="mt-4">
          <p>Uploaded Image:</p>
          <img src={uploadedImageUrl} alt="Uploaded" className="mt-2" />
        </div>
      )}
    </div>
  );
};

export default ImageUploadForm;
