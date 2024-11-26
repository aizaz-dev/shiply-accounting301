"use client";
import React, { useState } from "react";

const UpsInfo = ({ errors, setErrors, onChange }) => {
  const [upsData, setUpsData] = useState({
    accountNumber: "",
    username: "",
    password: "",
    invoiceFile: null,
  });
  const [uploadStatus, setUploadStatus] = useState("");

  const requiredFields = ["accountNumber", "username", "password", "invoiceFile"];

  const handleChange = async (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === "file" ? (files.length > 0 ? files[0] : null) : value;

    if (type === "file" && newValue) {
      // Validate the uploaded file
      if (newValue.type !== "application/pdf") {
        setUploadStatus("Invalid file type. Please upload a PDF.");
        return;
      }
      if (newValue.size > 5 * 1024 * 1024) {
        setUploadStatus("File is too large. Please upload a PDF smaller than 5MB.");
        return;
      }

      try {
        setUploadStatus("Uploading PDF to Cloudinary...");

        // Upload PDF to Cloudinary
        const formData = new FormData();
        formData.append("file", newValue);
        formData.append("upload_preset", "hg1m4ith"); // Replace with your Cloudinary upload preset
        formData.append("cloud_name", "darv36poz"); // Replace with your Cloudinary cloud name
        formData.append("resource_type", "raw"); // Use 'raw' for non-image files

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/darv36poz/raw/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const data = await response.json();
          setUploadStatus("PDF uploaded successfully!");

          // Update upsData with the Cloudinary URL
          setUpsData((prevData) => {
            const updatedData = {
              ...prevData,
              invoiceFile: data.secure_url, // Use Cloudinary's secure URL
            };
            onChange?.(updatedData);
            return updatedData;
          });
        } else {
          setUploadStatus("Error uploading PDF to Cloudinary.");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        setUploadStatus("Failed to upload PDF. Please try again.");
      }
    } else {
      setUpsData((prevData) => {
        const updatedData = { ...prevData, [name]: newValue };
        onChange?.(updatedData);
        return updatedData;
      });

      // Remove field error on input change
      if (errors?.[name]) {
        setErrors((prevErrors) => {
          const updatedErrors = { ...prevErrors };
          delete updatedErrors[name];
          return updatedErrors;
        });
      }
    }
  };

  const handleSubmit = () => {
    const newErrors = {};
    requiredFields.forEach((field) => {
      if (!upsData[field] || (field === "invoiceFile" && typeof upsData[field] !== "string")) {
        newErrors[field] = `${field} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Submit successful with data:", upsData);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full max-w-[756px] mx-auto px-[16px] py-[50px]">
        <form className="flex flex-col">
          <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
            UPS account number
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="accountNumber"
            value={upsData.accountNumber}
            onChange={handleChange}
            className={`w-[60%] max-md:w-full p-2 outline-none border rounded-sm ${
              errors?.accountNumber ? "border-red-500" : "border-black"
            }`}
          />
          {errors?.accountNumber && <p className="text-red-500">{errors.accountNumber}</p>}

          <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
            UPS.com username connected to account
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="username"
            value={upsData.username}
            onChange={handleChange}
            className={`w-[60%] max-md:w-full p-2 outline-none border rounded-sm ${
              errors?.username ? "border-red-500" : "border-black"
            }`}
          />
          {errors?.username && <p className="text-red-500">{errors.username}</p>}

          <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
            UPS.com password
            <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={upsData.password}
            onChange={handleChange}
            className={`w-[60%] max-md:w-full p-2 outline-none border rounded-sm ${
              errors?.password ? "border-red-500" : "border-black"
            }`}
          />
          {errors?.password && <p className="text-red-500">{errors.password}</p>}

          <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
            Latest UPS invoice (send a PDF)
            <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name="invoiceFile"
            accept="application/pdf"
            onChange={handleChange}
            className={`w-[60%] max-md:w-full p-2 outline-none border rounded-sm ${
              errors?.invoiceFile ? "border-red-500" : "border-black"
            }`}
          />
          {uploadStatus && <p className="text-green-500 mt-2">{uploadStatus}</p>}
          {errors?.invoiceFile && <p className="text-red-500">{errors.invoiceFile}</p>}
        </form>
      </div>
    </div>
  );
};

export default UpsInfo;
