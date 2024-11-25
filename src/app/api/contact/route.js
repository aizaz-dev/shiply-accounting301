import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { fullName, reason, phone, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 587,
    secure: false,
    auth: {
      user: "azaz@athenasols.com",
      pass: "!Aaizazkhan7866",
    },
  });

  const mailOptions = {
    from: "azaz@athenasols.com",
    to: "devshehzad@gmail.com",
    subject: "New Contact Form Submission",
    text: `
      New contact form submission:
      - Full Name: ${fullName}
      - Reason: ${reason}
      - Phone: ${phone}
      - Email: ${email}
      - Message: ${message}
    `,
    html: `
      <h3>New Contact Form Submission</h3>
      <ul>
        <li><b>Full Name:</b> ${fullName}</li>
        <li><b>Reason:</b> ${reason}</li>
        <li><b>Phone:</b> ${phone}</li>
        <li><b>Email:</b> ${email}</li>
        <li><b>Message:</b> ${message}</li>
      </ul>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Error sending email", error: error.message });
  }
}
