"use client";
import React, { useState } from "react";

const ContactInfo = ({ errors, setErrors, onChange }) => {
  const [localData, setLocalData] = useState({
    companyName: "",
    yourName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    adminEmail: "",
    generalEmail: "",
    website: "",
    phone: "",
    carriers: "",
    shipmentsPerDay: "",
    thermalPrinter: "",
    erpSystem: "",
    scaleConnected: "",
    labelSize: "",
  });

  const requiredFields = [
    "companyName",
    "yourName",
    "address",
    "city",
    "state",
    "zipCode",
    "adminEmail",
    "phone",
  ];

  const handleInputChange = (field, value) => {
    // Update local data
    setLocalData((prev) => ({ ...prev, [field]: value }));
  
    // Remove error only for the specific field
    if (errors?.[field]) {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[field]; // Clear the error for the current field
        return updatedErrors;
      });
    }
  
    // Pass updated data to the main form
    onChange({ ...localData, [field]: value });
  };
  
  const renderField = (label, fieldName, placeholder = "", type = "text") => (
    <>
      <label
        htmlFor={fieldName}
        className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
      >
        {label}
        {requiredFields.includes(fieldName) && (
          <span className="text-red-500">*</span>
        )}
      </label>
      <input
        id={fieldName}
        value={localData[fieldName]}
        onChange={(e) => handleInputChange(fieldName, e.target.value)}
        placeholder={placeholder}
        type={type}
        className={`w-full p-3 outline-none border rounded-sm ${
          errors?.[fieldName] ? "border-red-500" : "border-black"
        } ${placeholder ? "placeholder:text-blue-500" : ""}`}
      />
      {errors?.[fieldName] && (
        <p className="text-red-500 text-sm">{errors[fieldName]}</p>
      )}
    </>
  );

  return (
    <div className="w-full">
      <div className="w-full max-w-[756px] mx-auto px-[16px] py-[50px]">
        <form className="flex flex-col">
          {renderField("Company Name", "companyName")}
          {renderField("Your Name", "yourName")}
          {renderField("Address", "address")}
          {renderField("City", "city")}
          {renderField("State", "state")}
          {renderField("Zip Code", "zipCode")}
          {renderField("Admin Email", "adminEmail", "example@admin.com")}
          {renderField("General Email", "generalEmail", "example@domain.com")}
          {renderField("Website", "website", "https://example.com")}
          {renderField("Phone", "phone")}
          {renderField(
            "Which carriers do you use? (List your preferred carrier first)",
            "carriers",
            "UPS,FEDEX,USPS"
          )}
          {renderField(
            "How many shipments do you do per day?",
            "shipmentsPerDay"
          )}
          {renderField(
            "What kind of thermal printer do you have on your shipping computer?",
            "thermalPrinter",
            "Zebra? What model?"
          )}
          {renderField("Which ERP/MIS system do you use?", "erpSystem")}
          {renderField(
            "Do you have a scale connected to your shipping computer?",
            "scaleConnected"
          )}
          {renderField(
            "What size label do you print shipping labels on?",
            "labelSize",
            '4" x 6.25"'
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactInfo;
