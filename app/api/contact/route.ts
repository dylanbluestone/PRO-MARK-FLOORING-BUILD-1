import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Lazy initialization to prevent build-time errors
let resend: Resend | null = null;

function getResend() {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, address, service, message } = body;

    // Validate required fields
    if (!name || !phone || !email || !address || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const resendClient = getResend();
    if (!resendClient) {
      console.error('Resend API key not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Send email using Resend
    const data = await resendClient.emails.send({
      from: 'PROMARK FLOORING Website <noreply@promarkflooring.com>', // TODO: Update with actual domain
      to: ['promarkflooring@hotmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr />
        <p><em>Submitted via PROMARK FLOORING website contact form</em></p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
