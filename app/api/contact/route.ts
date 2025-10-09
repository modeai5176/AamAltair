import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, domeName, checkIn, checkOut, guests, addOns, preferences, agreeToRules } = body;

    // Validate required fields
    if (!name || !email || !domeName || !checkIn || !checkOut || !guests) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create the booking message
    const bookingMessage = `Booking Request for ${domeName} at Aam Altair:

Contact Information:
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Booking Details:
Check-in: ${checkIn}
Check-out: ${checkOut}
Guests: ${guests}
Add-ons: ${addOns && addOns.length > 0 ? addOns.join(', ') : 'None'}

Special Requests:
${preferences || 'None'}

Terms Accepted: ${agreeToRules ? 'Yes' : 'No'}

This is a booking request. Please confirm availability and provide final pricing.`;

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send WhatsApp notification
    // 4. Send confirmation to customer

    console.log('Booking request received:', {
      domeName,
      name,
      email,
      phone,
      checkIn,
      checkOut,
      guests,
      addOns,
      preferences,
      agreeToRules
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Booking request submitted successfully',
        bookingMessage 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing booking request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
