// pages/api/signup.js

import nodemailer from "nodemailer";

export async function signup(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Destructure the form data from the request body
  const {
    contactInfo,
    upsInfo,
    fedExInfo,
    carrierInfo,
    miscellaneous,
    payment,
  } = req.body;

  // Configure the email transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.mandrillapp.com", // e.g., smtp.gmail.com for Gmail
    port: 587, // or 465 for secure
    secure: false, // true for 465, false for other ports
    auth: {
      user: "devshehzad@gmail.com", // Your email address
      pass: "md-QuuNStzy9Dt66eJnCIS6EA", // Your email password or app password
    },
  });

  // Define the email options
  const mailOptions = {
    from: "info@printerassistant.com", // Sender address
    replyTo: "devshehzad@gmail.com",
    to: "devshehzad@gmail.com",
    subject: "New Signup Form Submission",
    text: `
      New signup form submission:
      
      Contact Info: ${JSON.stringify(contactInfo, null, 2)}
      UPS Info: ${JSON.stringify(upsInfo, null, 2)}
      FedEx Info: ${JSON.stringify(fedExInfo, null, 2)}
      Carrier Info: ${JSON.stringify(carrierInfo, null, 2)}
      Miscellaneous: ${JSON.stringify(miscellaneous, null, 2)}
      Payment: ${JSON.stringify(payment, null, 2)}
    `,
    html: `
      <h3>New Signup Form Submission</h3>
      <pre>
      Contact Info: ${JSON.stringify(contactInfo, null, 2)}
      UPS Info: ${JSON.stringify(upsInfo, null, 2)}
      FedEx Info: ${JSON.stringify(fedExInfo, null, 2)}
      Carrier Info: ${JSON.stringify(carrierInfo, null, 2)}
      Miscellaneous: ${JSON.stringify(miscellaneous, null, 2)}
      Payment: ${JSON.stringify(payment, null, 2)}
      </pre>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
    
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ message: "Error sending email", error: error.message });
  }
}
