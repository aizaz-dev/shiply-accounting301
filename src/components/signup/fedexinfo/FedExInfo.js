import React, { useState } from "react";

const FedExInfo = ({ errors, setErrors, onChange }) => {
  const [fedexData, setFedexData] = useState({
    accountNumber: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    companyName: "",
    phone: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    countryCode: "",
  });

  const requiredFields = [
    "accountNumber",
    "firstName",
    "lastName",
    "jobTitle",
    "companyName",
    "phone",
    "email",
    "street",
    "city",
    "state",
    "zipCode",
    "countryCode",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFedexData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    onChange({
      ...fedexData,
      [name]: value,
    });

    // Remove error only for the specific field if it exists
    if (errors?.[name]) {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }
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
        name={fieldName}
        value={fedexData[fieldName]}
        onChange={handleChange}
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
          {renderField("FEDEX account number", "accountNumber")}
          <div className="w-full flex gap-3 max-md:flex-col">
            <div className="w-full">
              {renderField("FEDEX (billing) First Name", "firstName")}
            </div>
            <div className="w-full">
              {renderField("FEDEX (billing) Last Name", "lastName")}
            </div>
          </div>

          {renderField("Job Title", "jobTitle")}
          {renderField("FEDEX (billing) Company Name", "companyName")}
          <div className="w-full flex gap-3 max-md:flex-col">
            <div className="w-full">
              {renderField("FEDEX (billing) Phone", "phone")}
            </div>
            <div className="w-full">
              {renderField("FEDEX (billing) Email", "email", "example@domain.com", "email")}
            </div>
          </div>

          {renderField("FEDEX (billing) Street", "street")}
          <div className="w-full flex gap-3 max-md:flex-col">
            <div className="w-full">
              {renderField("FEDEX (billing) City", "city")}
            </div>
            <div className="w-full">
              {renderField("FEDEX (billing) State", "state")}
            </div>
            <div className="w-full">
              {renderField("FEDEX (billing) ZipCode", "zipCode")}
            </div>
          </div>

          {renderField("FEDEX (billing) Country Code (Two-letter code)", "countryCode")}
        </form>
      </div>
    </div>
  );
};

export default FedExInfo;
