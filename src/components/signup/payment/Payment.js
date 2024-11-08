import React, { useState } from "react";

const Payment = ({ onChange }) => {
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

    onChange({
      ...paymentData,
      [name]: value,
    });
  };

  return (
    <div className="w-full">
      <div className="w-full max-w-[756px] mx-auto px-[16px] py-[50px]">
        <form className="w-full flex flex-col">
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
            className="w-full p-3 outline-none border border-solid border-black rounded-sm placeholder:text-purple-500"
          />

          <div className="w-full flex flex-row max-md:flex-col gap-4">
            <div className="w-[50%] max-md:w-full">
              <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato leading-[20px] mt-4">
                Expiration date <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="expirationDate"
                value={paymentData.expirationDate}
                onChange={handleChange}
                placeholder="MM/YY"
                className="w-full p-3 outline-none border border-solid border-black rounded-sm"
              />
            </div>
            <div className="w-[50%] max-md:w-full">
              <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato leading-[20px] mt-4">
                Security code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="securityCode"
                value={paymentData.securityCode}
                onChange={handleChange}
                placeholder="CVV"
                className="w-full p-3 outline-none border border-solid border-black rounded-sm"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
