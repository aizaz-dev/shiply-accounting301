import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Parse the request body to extract form data
    const {
      contactInfo,
      upsInfo,
      fedExInfo,
      carrierInfo,
      miscellaneous,
      payment,
    } = await req.json(); // Ensure req.json() is used to parse the request body

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.mandrillapp.com", // Replace with your SMTP host
      port: 587, // Port for the SMTP server
      secure: false, // true for port 465, false for other ports
      auth: {
        user: "info@printerassistant.com", // Replace with your email address
        pass: "md-QuuNStzy9Dt66eJnCIS6EA", // Replace with your email password or app password
      },
    });

    // Define the email options
    const mailOptions = {
      from: "info@printerassistant.com", // Sender's email
      to: "info@printerassistant.com", // Receiver's email
      subject: "New Signup Form Submission", // Email subject
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

    // Send the email using nodemailer
    await transporter.sendMail(mailOptions);

    // Return a success response
    return NextResponse.json({
      message: "Email sent successfully",
    });
  } catch (error) {
    // Handle errors and return an error response
    console.error("Error sending email:", error);
    return NextResponse.json({
      message: "Error sending email",
      error: error.message,
    });
  }
}
