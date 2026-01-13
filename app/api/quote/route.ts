import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name, phone, email, address,
      serviceType, propertyType, squareFootage, currentFlooringType,
      floorRemoval, subfloorCondition, timeline, budgetRange,
      projectDescription, contactMethod, bestTimeToCall
    } = body;

    // Validate required fields
    if (!name || !phone || !email || !address) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send detailed email using Resend
    const data = await resend.emails.send({
      from: 'PROMARK FLOORING Website <noreply@promarkflooring.com>', // TODO: Update with actual domain
      to: ['promarkflooring@hotmail.com'],
      subject: `New Quote Request from ${name}`,
      html: `
        <h2>New Quote Request</h2>

        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Property Address:</strong> ${address}</p>

        <h3>Project Details</h3>
        ${serviceType ? `<p><strong>Service Type:</strong> ${serviceType}</p>` : ''}
        ${propertyType ? `<p><strong>Property Type:</strong> ${propertyType}</p>` : ''}
        ${squareFootage ? `<p><strong>Square Footage:</strong> ${squareFootage}</p>` : ''}
        ${currentFlooringType ? `<p><strong>Current Flooring:</strong> ${currentFlooringType}</p>` : ''}
        ${floorRemoval ? `<p><strong>Floor Removal Needed:</strong> ${floorRemoval}</p>` : ''}
        ${subfloorCondition ? `<p><strong>Subfloor Condition:</strong> ${subfloorCondition}</p>` : ''}
        ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
        ${budgetRange ? `<p><strong>Budget Range:</strong> ${budgetRange}</p>` : ''}

        ${projectDescription ? `
          <h3>Project Description</h3>
          <p>${projectDescription}</p>
        ` : ''}

        <h3>Contact Preferences</h3>
        ${contactMethod ? `<p><strong>Preferred Contact Method:</strong> ${contactMethod}</p>` : ''}
        ${bestTimeToCall ? `<p><strong>Best Time to Call:</strong> ${bestTimeToCall}</p>` : ''}

        <hr />
        <p><em>Submitted via PROMARK FLOORING website quote form</em></p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Quote form error:', error);
    return NextResponse.json(
      { error: 'Failed to send quote request' },
      { status: 500 }
    );
  }
}
