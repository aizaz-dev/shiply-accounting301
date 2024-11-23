// src/api/signup.js
import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req, res) {
  // Destructure the form data from the request body
  const body = await req.json();
  console.log("Received data:", body);


  const {
    contactInfo,
    upsInfo,
    fedExInfo,
    carrierInfo,
    miscellaneous,
    payment,
  } = body;
  
  // Configure the email transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 587,
    secure: false,
    auth: {
      user: "azaz@athenasols.com",
      pass: "!Aaizazkhan7866",
    },
  });
  // Define the email options
  const mailOptions = {
    from: "azaz@athenasols.com",
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
    return NextResponse.json({
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({
      message: "Error sending email",
      error: error.message,
    });
  }
}
