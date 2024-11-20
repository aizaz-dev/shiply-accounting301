import React, { useState } from "react";

const UpsInfo = ({ onChange }) => {
  const [upsData, setUpsData] = useState({
    accountNumber: "",
    username: "",
    password: "",
    invoiceFile: null, // Store the file
  });
  const [uploadStatus, setUploadStatus] = useState("");

  // Function to convert file to Base64 (similar to Miscellaneous)
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle field changes (file or text inputs)
  const handleChange = async (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === "file" ? (files.length > 0 ? files[0] : null) : value;

    if (type === "file" && newValue) {
      try {
        setUploadStatus("Uploading invoice...");

        // Check file type and size before uploading
        if (!newValue.type.startsWith("application/pdf")) {
          setUploadStatus("Invalid file type. Please upload a PDF.");
          return;
        }
        if (newValue.size > 5 * 1024 * 1024) { // Limit to 5MB
          setUploadStatus("File is too large. Please upload a PDF smaller than 5MB.");
          return;
        }

        const base64Data = await convertToBase64(newValue);
        const fileDetails = {
          fileName: newValue.name,
          contentType: newValue.type,
          data: base64Data,
        };

        setUpsData((prevData) => {
          const updatedData = { ...prevData, invoiceFile: fileDetails };
          onChange?.(updatedData); // Trigger onChange callback if provided
          return updatedData;
        });
        setUploadStatus("Invoice uploaded successfully!");
      } catch (error) {
        console.error("Error uploading file:", error);
        setUploadStatus("Failed to upload invoice. Please try again.");
      }
    } else {
      setUpsData((prevData) => {
        const updatedData = { ...prevData, [name]: newValue };
        onChange?.(updatedData); // Trigger onChange callback if provided
        return updatedData;
      });
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    const dataToSubmit = { UpsInfo: upsData };

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
      <div className="w-full max-w-[756px] mx-auto px-[16px] py-[50px]">
        <form className="flex flex-col">
          <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
            UPS account number
          </label>
          <input
            type="text"
            name="accountNumber"
            value={upsData.accountNumber}
            onChange={handleChange}
            className="w-[60%] max-md:w-full p-2 outline-none border border-solid border-black rounded-sm"
          />

          <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
            UPS.com username connected to account
          </label>
          <input
            type="text"
            name="username"
            value={upsData.username}
            onChange={handleChange}
            className="w-[60%] max-md:w-full p-2 outline-none border border-solid border-black rounded-sm"
          />

          <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
            UPS.com password
          </label>
          <input
            type="password"
            name="password"
            value={upsData.password}
            onChange={handleChange}
            className="w-[60%] max-md:w-full p-2 outline-none border border-solid border-black rounded-sm"
          />

          <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
            Latest UPS invoice (send a PDF)
          </label>
          <input
            type="file"
            name="invoiceFile"
            accept="application/pdf"
            onChange={handleChange}
            className="w-[60%] max-md:w-full p-2 outline-none border border-solid border-black rounded-sm"
          />
          {uploadStatus && <p className="mt-2 text-green-500">{uploadStatus}</p>}

          {/* Submit Button */}
      
        </form>
      </div>
    </div>
  );
};

export default UpsInfo;
