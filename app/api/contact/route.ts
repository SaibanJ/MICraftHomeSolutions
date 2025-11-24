import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to your email service provider
  auth: {
    user: process.env.EMAIL_USER || 'Alex@micrafthomesolutions.com', // Business email
    pass: process.env.EMAIL_PASSWORD, // Use environment variable for security
  },
});

export async function POST(request: Request) {
  try {
    // Parse the request body
    const formData = await request.json();

    // Extract form fields
    const { name, phone, email, message } = formData;

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Prepare email content
    const mailOptions = {
      from: 'website-contact@micraft.com', // Sender address
      to: process.env.EMAIL_USER || 'Alex@micrafthomesolutions.com', // Business email
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}

        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Log the data
    console.log('Form submission received and email sent:', { name, phone, email, message });

    // Return success response
    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
