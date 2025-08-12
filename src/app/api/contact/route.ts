import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log("Received contact form submission:", formData);

    // Create transporter with hardcoded credentials (FOR TESTING ONLY)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "vijeportfolio@gmail.com", // Hardcoded for testing
        pass: "ilohkpmhgnnfgteg", // Hardcoded for testing
      },
      tls: {
        rejectUnauthorized: false // Bypass certificate verification for testing
      }
    });

    // Email options
    const mailOptions = {
      from: "vijeportfolio@gmail.com",
      to: "vijayanga123@gmail.com",
      replyTo: formData.email,
      subject: `New Contact Form Submission from ${formData.name}`,
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json(
      { message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
} //hii