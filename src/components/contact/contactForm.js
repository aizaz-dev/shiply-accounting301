export default function ContactForm() {
    return (
        <div className="w-full bg-[url('/contact/contactbg.png')]">
      <div className="flex flex-col lg:flex-row min-h-screen justify-center items-center max-w-[1200px] mx-auto px-[80px] max-tab:px-tab max-md:px-mobile" >
        <div className="lg:w-1/2 p-8 lg:p-12 bg-white shadow-2xl h-fit rounded-[12px]">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3  outline-none  bg-[#fafafa] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <select
              className="w-full p-3   rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-[#fafafa]"
              defaultValue=""
            >
              <option value="" disabled>Reason for contacting us</option>
              <option value="support">Support</option>
              <option value="sales">Sales</option>
              <option value="other">Other</option>
            </select>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3  bg-[#fafafa]  rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3  bg-[#fafafa]  rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Write Us"
              rows={4}
              className="w-full p-3  bg-[#fafafa]  rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out flex items-center justify-center"
            >
              SEND
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </form>
        </div>
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <p className="text-indigo-600 mb-2 font-nunito text-[20px] font-[300]">Call Us, Email Us, Or Schedule A Demo</p>
          <h2 className="text-[#3D4459] text-[35px] font-lato font-[700]  mb-4">
            We Would Be Happy To <br /> Learn All About Your <br /> Business
          </h2>
          <p className="text-[#646464] font-[300] mb-6 text-[21px] font-lato">
            Let&apos;s connect. We can help you ship more <br /> efficiently.
          </p>
          <p className="text-[#3D4459] font-lato font-[400] text-[18px] ">Monday - Friday: 9AM - 5PM Eastern</p>
        </div>
      </div>
      </div>
    )
  }