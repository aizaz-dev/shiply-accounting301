import React, { useState } from "react";

const Miscellaneous = ({ onChange }) => {
  const [miscData, setMiscData] = useState({
    logoFile: null, // URL string from Cloudinary
    emailTime: "",
    timeZone: "",
    comments: "",
  });
  const [uploadStatus, setUploadStatus] = useState("");

  // Handle field changes (file or text inputs)
  const handleChange = async (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === "file" ? (files.length > 0 ? files[0] : null) : value;

    if (type === "file" && newValue) {
      try {
        setUploadStatus("Uploading logo to Cloudinary...");

        // Check file type and size before uploading
        if (!newValue.type.startsWith("image/")) {
          setUploadStatus("Invalid file type. Please upload an image.");
          return;
        }
        if (newValue.size > 5 * 1024 * 1024) {
          setUploadStatus("File is too large. Please upload an image smaller than 5MB.");
          return;
        }

        // Upload to Cloudinary
        const formData = new FormData();
        formData.append("file", newValue);
        formData.append("upload_preset", "hg1m4ith"); // Replace with your Cloudinary upload preset
        formData.append("cloud_name", "darv36poz"); // Replace with your Cloudinary cloud name

        const response = await fetch("https://api.cloudinary.com/v1_1/darv36poz/image/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          setUploadStatus("Logo uploaded successfully!");

          // Update miscData with the Cloudinary URL
          setMiscData((prevData) => {
            const updatedData = {
              ...prevData,
              logoFile: data.secure_url, // Use the secure Cloudinary URL
            };
            onChange?.(updatedData); // Trigger onChange callback with updated data
            return updatedData;
          });
        } else {
          setUploadStatus("Error uploading logo to Cloudinary.");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        setUploadStatus("Failed to upload logo. Please try again.");
      }
    } else {
      setMiscData((prevData) => {
        const updatedData = { ...prevData, [name]: newValue };
        onChange?.(updatedData); // Trigger onChange callback with updated data
        return updatedData;
      });
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    const dataToSubmit = { Miscellaneous: miscData };

    console.log("Submitting form data:", dataToSubmit);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSubmit),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full max-w-[756px] mx-auto px-4 py-8">
        <form className="flex flex-col">
          {/* Image Upload Section */}
          <div className="flex flex-row max-md:flex-col gap-4">
            <div className="w-[65%] max-md:w-full">
              <label htmlFor="fileInput" className="py-4 cursor-pointer text-gray-700 text-lg font-lato">
                Attach Logo Here
              </label>
              <input
                type="file"
                id="fileInput"
                name="logoFile"
                accept="image/*"
                onChange={handleChange}
                className="w-full"
              />
              {uploadStatus && <p className="mt-2 text-green-500">{uploadStatus}</p>}
            </div>
            <div className="w-[35%] max-md:w-full">
              <p className="text-gray-700 text-sm leading-6 font-roboto font-semibold">
                Please send your logo that we will include on your emails to clients. We prefer a PNG or JPG.
              </p>
            </div>
          </div>

          {/* Email Time and Time Zone Fields */}
          <div className="flex flex-row max-md:flex-col gap-4 mt-4">
            <div className="w-[80%] max-md:w-full">
              <label className="text-gray-700 text-lg font-lato">
                What time do you want summary emails to arrive?
              </label>
              <input
                type="time"
                name="emailTime"
                value={miscData.emailTime}
                onChange={handleChange}
                className="w-full p-2 outline-none border border-black rounded-sm"
              />
            </div>
            <div className="w-[20%] max-md:w-full">
              <label className="text-gray-700 text-lg font-lato">
                Time Zone
              </label>
              <input
                type="text"
                name="timeZone"
                placeholder="EST"
                value={miscData.timeZone}
                onChange={handleChange}
                className="w-full p-2 outline-none border border-black rounded-sm placeholder:text-blue-500"
              />
            </div>
          </div>

          {/* Comments Field */}
          <label className="text-gray-700 text-lg font-lato mt-4">
            Comments
          </label>
          <textarea
            name="comments"
            rows="4"
            value={miscData.comments}
            onChange={handleChange}
            className="w-full p-2 outline-none border border-black rounded-sm"
          ></textarea>

        
        </form>
      </div>
    </div>
  );
};

export default Miscellaneous;
