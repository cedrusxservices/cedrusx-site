import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "CedrusX Quotes <onboarding@resend.dev>",
        to: "cedrusx.services@cedrusx.com",
        subject: `New Quote Request from ${body.name}`,
        html: `
          <h3>New Quote Request</h3>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Phone:</strong> ${body.phone}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Service:</strong> ${body.service}</p>
          <p><strong>Message:</strong> ${body.message}</p>
        `,
      }),
    })

    if (!res.ok) {
      throw new Error("Failed to send email via Resend")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Email delivery failed" }, { status: 500 })
  }
}
