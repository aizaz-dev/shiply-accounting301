"use client";
import CarrierInfo from "@/components/signup/carrierInfo/CarrierInfo";
import ContactInfo from "@/components/signup/contactinfo/ContactInfo";
import FedExInfo from "@/components/signup/fedexinfo/FedExInfo";
import Success from "@/components/signup/form-sucess/Sucess";
import Miscellaneous from "@/components/signup/miscellaneous/Miscellaneous";
import Payment from "@/components/signup/payment/Payment";
import UpsInfo from "@/components/signup/upsinfo/UpsInfo";
import React, { useState } from "react";

const Page = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Single state to store all form data
  const [formData, setFormData] = useState({
    contactInfo: {},
    upsInfo: {},
    fedExInfo: {},
    carrierInfo: {},
    miscellaneous: {},
    payment: {},
  });

  // Function to update form data for each tab
 const handleFormChange = (section, data) => {
  // Reset the error for the updated field
  const updatedErrors = { ...errors[section] };
  Object.keys(data).forEach((key) => {
    if (updatedErrors[key]) {
      delete updatedErrors[key]; // Remove the error for the specific field
    }
  });

  // Update the form data and errors
  setFormData((prevData) => ({
    ...prevData,
    [section]: data,
  }));

  setErrors((prevErrors) => ({
    ...prevErrors,
    [section]: updatedErrors,
  }));
};
const handlePrevious = () => {
  // Decrease the active tab index by 1 to go to the previous tab
  setActiveTab((prevTab) => (prevTab > 1 ? prevTab - 1 : prevTab));
};


  // Submit handler to send form data
  const handleSubmit = async () => {
    console.log("Submitting form data:", formData);

    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Form submitted successfully!");

      setActiveTab(7); // Go to success tab
    } else {
      alert("Error submitting form");
    }

    const requiredFields = ["companyName", "yourName", "address", "city", "state", "zipCode", "adminEmail", "phone"];
    const missingFields = requiredFields.filter((field) => !formData.contactInfo[field]?.trim());
  
    if (missingFields.length > 0) {
      alert(`Please fill in the required fields: ${missingFields.join(", ")}`);
      return;
    }
  
    // Proceed if all fields are filled
    console.log("Form is valid!");
  };

  // Next and previous handlers
  const handleNext = () => {
    const requiredFieldsByTab = {
      1: ["companyName", "yourName", "address", "city", "state", "zipCode", "adminEmail", "phone"],
      2: ["accountNumber", "username", "password"],
      3: ["accountNumber", "firstName", "lastName", "jobTitle", "companyName", "phone", "email"],
      4: ["carrierName", "accountNumber", "username", "password"],
      5: ["emailTime", "timeZone", "comments"],
      6: ["cardNumber", "expirationDate", "securityCode"],
    };
  
    const currentTabRequiredFields = requiredFieldsByTab[activeTab] || [];
    const currentTabData = formData[Object.keys(formData)[activeTab - 1]] || {};
  
    const newErrors = {};
  
    currentTabRequiredFields.forEach((field) => {
      if (!currentTabData[field]?.trim()) {
        newErrors[field] = `${field.replace(/([A-Z])/g, " $1")} is required`;
      }
    });
  
    if (Object.keys(newErrors).length > 0) {
      // Set errors for the current tab and prevent moving to the next tab
      setErrors((prevErrors) => ({
        ...prevErrors,
        [Object.keys(formData)[activeTab - 1]]: newErrors,
      }));
      return;
    }
  
    // Clear errors for the current tab and move to the next tab
    setErrors((prevErrors) => ({
      ...prevErrors,
      [Object.keys(formData)[activeTab - 1]]: {},
    }));
  
    if (activeTab < 6) {
      setActiveTab(activeTab + 1);
    } else {
      handleSubmit();
    }
  };
  

const [errors, setErrors] = useState({
  contactInfo: {},
  upsInfo: {},
  fedExInfo: {},
  carrierInfo: {},
  miscellaneous: {},
  payment: {},
});

  return (
    <>
      <div className="w-full bg-[#1C8606] text-center px-[16px] pt-[200px] pb-[70px]">
        <h1 className="font-lato font-[600] text-white text-[40px] md:text-[50px] lg:text-[60px]">
          Welcome to the ShipLeap Signup Page
        </h1>
        <p className="font-Nunito font-[400] text-white text-[20px] md:text-[25px] lg:text-[30px]">
          Safely send us your setup information below
        </p>
      </div>

      <div className="p-[10px]">
        <button onClick={() => fetchApi()}>fetch</button>
      </div>

      <div className="w-full">
        <div className="w-full max-w-[756px] mx-auto px-[16px] py-[50px]">
          <p className="text-center text-[#646464] text-[20px] font-lato font-[400]">
            Please share your connection information with us below.
          </p>

          {/* Tab Header */}
          <div className="flex flex-row items-center justify-between pt-[80px]">
            {[
              "Contact Info",
              "UPS Info",
              "FedEx Info",
              "Other Carrier Info",
              "Miscellaneous",
              "Payment",
            ].map((label, index) => {
              const isActive = activeTab === index + 1;
              const isPrevious = activeTab > index + 1;

              return (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-fit flex flex-col items-center font-lato font-[700] text-[14px] ${
                        isActive
                          ? "text-[#61CE70]"
                          : isPrevious
                          ? "text-[#61CE70]"
                          : "text-[#7A7A7A]"
                      }`}
                    >
                      <div
                        className={`rounded-full border border-solid w-[37px] h-[37px] flex justify-center items-center ${
                          isActive
                            ? "border-[#61CE70]"
                            : isPrevious
                            ? "bg-[#61CE70] border-[#61CE70]"
                            : "border-gray-500"
                        }`}
                      >
                        <span className={`${isPrevious ? "text-white" : ""}`}>
                          {index + 1}
                        </span>
                      </div>
                      <h1 className="text-center mt-2">
                        {label.split(" ")[0]}
                      </h1>
                      {label.split(" ").length > 1 && (
                        <h1 className="text-center -mt-2">
                          {label.split(" ").slice(1).join(" ")}
                        </h1>
                      )}
                    </div>
                  </div>

                  {/* Add line between circles except the last one */}
                  {index < 5 && (
                    <div className="flex-grow flex items-center">
                      <div className="w-full h-[0.5px] border-t-2 bg-[#61CE70] mx-2 -mt-[40px]"></div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Content */}
          <div className="mt-10">
            {activeTab === 1 && (
              <ContactInfo
              setErrors={(newErrors) =>
                setErrors((prev) => ({
                  ...prev,
                  contactInfo: { ...prev.contactInfo, ...newErrors },
                }))
              }
              errors={errors.contactInfo}
              onChange={(data) => handleFormChange("contactInfo", data)}
            />
            )}
            {activeTab === 2 && (
              <UpsInfo 
              setErrors={(newErrors) =>
                setErrors((prev) => ({
                  ...prev,
                  upsInfo: { ...prev.upsInfo, ...newErrors },
                }))
              }
              errors={errors.upsInfo}

              onChange={(data) => handleFormChange("upsInfo", data)} />
            )}
            {activeTab === 3 && (
              <FedExInfo
              setErrors={(newErrors) =>
                setErrors((prev) => ({
                  ...prev,
                  fedExInfo: { ...prev.fedExInfo, ...newErrors },
                }))
              }
              errors={errors.fedExInfo}
                onChange={(data) => handleFormChange("fedExInfo", data)}
              />
            )}
            {activeTab === 4 && (
              <CarrierInfo
              setErrors={(newErrors) =>
                setErrors((prev) => ({
                  ...prev,
                  carrierInfo: { ...prev.carrierInfo, ...newErrors },
                }))
              }
              errors={errors.carrierInfo}
                onChange={(data) => handleFormChange("carrierInfo", data)}
              />
            )}
            {activeTab === 5 && (
              <Miscellaneous
              setErrors={(newErrors) =>
                setErrors((prev) => ({
                  ...prev,
                  Miscellaneous: { ...prev.Miscellaneous, ...newErrors },
                }))
              }
              errors={errors.miscellaneous}
                onChange={(data) => handleFormChange("miscellaneous", data)}
              />
            )}
            {activeTab === 6 && (
              <Payment
              setErrors={(newErrors) =>
                setErrors((prev) => ({
                  ...prev,
                  Payment: { ...prev.payment, ...newErrors },
                }))
              }
              errors={errors.payment} onChange={(data) => handleFormChange("payment", data)} />
            )}
            {activeTab === 7 && <Success />}

            {/* Next/Previous Button */}
            <div className="flex gap-3 mt-1 px-[16px]">
              {activeTab > 1 && activeTab < 7 && (
                <button
                  onClick={handlePrevious}
                  className="w-[50%] text-white font-Roboto font-[500] text-[16px] text-center py-3 rounded-md bg-[#61CE70] mt-2"
                >
                  Previous
                </button>
              )}
              {activeTab < 7 && (
                <button
                  onClick={handleNext}
                  className={`${
                    activeTab === 1 ? "w-full" : "w-[50%]"
                  } text-white font-Roboto font-[500] text-[16px] text-center py-3 rounded-md bg-[#61CE70] mt-2`}
                >
                  {activeTab === 6 ? "Submit" : "Next"}
                </button>
              )}
            </div>
          </div>

          <div className="px-[150px] max-md:px-[100px] max-sm:px-[40px] py-[50px]">
            <hr className="w-full border-1 border-solid border-black" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
