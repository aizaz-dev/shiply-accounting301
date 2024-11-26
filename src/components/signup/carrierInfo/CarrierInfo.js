import React, { useState } from "react";

const CarrierInfo = ({ onChange, errors, setErrors }) => {
  const [carrierData, setCarrierData] = useState({
    carrierName: "",
    accountNumber: "",
    username: "",
    password: "",
  });

  const requiredFields = ["carrierName", "accountNumber", "username", "password"];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update carrier data
    setCarrierData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Remove error for the current field
    if (errors?.[name]) {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }

    // Pass updated data to the parent
    onChange({
      ...carrierData,
      [name]: value,
    });
  };

  const renderField = (label, fieldName, type = "text", placeholder = "") => (
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
        name={fieldName}
        type={type}
        placeholder={placeholder}
        value={carrierData[fieldName]}
        onChange={handleChange}
        className={`w-full p-2 outline-none border rounded-sm ${
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
          {renderField(
            "Other carrier name (GSO, Ontrac, etc.)",
            "carrierName",
            "text",
            "GSO, Ontrac"
          )}
          {renderField("Account number", "accountNumber")}
          {renderField("Username", "username")}
          {renderField("Password", "password", "password")}
        </form>
      </div>
    </div>
  );
};

export default CarrierInfo;
