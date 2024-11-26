import React, { useState } from "react";

const Payment = ({ onChange, errors, setErrors }) => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPaymentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear the error for the field being updated
    if (errors?.[name]) {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }

    onChange({
      ...paymentData,
      [name]: value,
    });
  };

  const renderFieldError = (fieldName) =>
    errors?.[fieldName] && <p className="text-red-500 text-sm mt-1">{errors[fieldName]}</p>;

  return (
    <div className="w-full">
      <div className="w-full max-w-[756px] mx-auto px-[16px] py-[50px]">
        <form className="w-full flex flex-col">
          {/* Card Number */}
          <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato leading-[20px] mt-4">
            Credit card number **By providing your credit card information, you
            acknowledge and agree that in the event of canceling USPS postage,
            refunds can take up to 4 weeks to process.{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="cardNumber"
            value={paymentData.cardNumber}
            onChange={handleChange}
            placeholder="The card will be charged after the trial and be used for any postage you purchase."
            className={`w-full p-3 outline-none border rounded-sm placeholder:text-purple-500 ${
              errors?.cardNumber ? "border-red-500" : "border-black"
            }`}
          />
          {renderFieldError("cardNumber")}

          <div className="w-full flex flex-row max-md:flex-col gap-4 mt-4">
            {/* Expiration Date */}
            <div className="w-[50%] max-md:w-full">
              <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato leading-[20px]">
                Expiration date <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="expirationDate"
                value={paymentData.expirationDate}
                onChange={handleChange}
                placeholder="MM/YY"
                className={`w-full p-3 outline-none border rounded-sm ${
                  errors?.expirationDate ? "border-red-500" : "border-black"
                }`}
              />
              {renderFieldError("expirationDate")}
            </div>

            {/* Security Code */}
            <div className="w-[50%] max-md:w-full">
              <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato leading-[20px]">
                Security code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="securityCode"
                value={paymentData.securityCode}
                onChange={handleChange}
                placeholder="CVV"
                className={`w-full p-3 outline-none border rounded-sm ${
                  errors?.securityCode ? "border-red-500" : "border-black"
                }`}
              />
              {renderFieldError("securityCode")}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
