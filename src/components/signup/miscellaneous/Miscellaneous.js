import React, { useState } from "react";

const Miscellaneous = ({ onChange }) => {
  const [miscData, setMiscData] = useState({
    logoFile: null,
    emailTime: "",
    timeZone: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === "file" ? files[0] : value;

    setMiscData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));

    onChange({
      ...miscData,
      [name]: newValue,
    });
  };

  return (
    <div className="w-full">
      <div className="w-full max-w-[756px] mx-auto px-[16px] py-[50px]">
        <form className="w-full flex flex-col">
          <div className="flex flex-row w-full max-md:flex-col gap-2">
            <div className="w-[65%] max-md:w-full flex flex-col">
              <label
                htmlFor="fileInput"
                className="py-4 cursor-pointer text-[#7A7A7A] text-[16px] font-[400] font-lato"
              >
                Attach Logo Here
              </label>
              <input
                type="file"
                id="fileInput"
                name="logoFile"
                onChange={handleChange}
                className="hidden"
              />
              <input type="file" name="logoFile" onChange={handleChange} />
            </div>
            <div className="w-[35%] max-md:w-full">
              <p className="text-[#7A7A7A] text-[14px] leading-[25.2px] font-[600] font-Roboto">
                Please send your logo that we will include on your emails to
                clients. We prefer a PNG or JPG.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-row max-md:flex-col gap-4 mt-4">
            <div className="w-[80%] max-md:w-full">
              <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
                What time do you want summary emails to arrive?
              </label>
              <input
                type="time"
                name="emailTime"
                value={miscData.emailTime}
                onChange={handleChange}
                className="w-full max-md:w-full p-2 outline-none border border-solid border-black rounded-sm"
              />
            </div>
            <div className="w-[20%] max-md:w-full">
              <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
                Time Zone
              </label>
              <input
                type="text"
                name="timeZone"
                placeholder="EST"
                value={miscData.timeZone}
                onChange={handleChange}
                className="w-full max-md:w-full p-2 outline-none border border-solid border-black rounded-sm placeholder:text-blue-500"
              />
            </div>
          </div>

          <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
            Comments
          </label>
          <textarea
            name="comments"
            rows="4"
            value={miscData.comments}
            onChange={handleChange}
            className="w-full max-md:w-full p-2 outline-none border border-solid border-black rounded-sm"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Miscellaneous;
