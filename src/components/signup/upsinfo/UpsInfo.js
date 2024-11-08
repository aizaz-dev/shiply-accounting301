import React, { useState } from "react";

const UpsInfo = ({ onChange }) => {
  const [upsData, setUpsData] = useState({
    accountNumber: "",
    username: "",
    password: "",
    invoiceFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = name === "invoiceFile" ? files[0] : value;

    setUpsData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));

    onChange({
      ...upsData,
      [name]: newValue,
    });
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
            onChange={handleChange}
            className=""
          />
        </form>
      </div>
    </div>
  );
};

export default UpsInfo;
