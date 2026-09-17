import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const errorMsg = result.error.issues.map((e: { message: string }) => e.message).join(", ");
      return NextResponse.json({ error: errorMsg }, { status: 400 });
    }

    const { name, email, phone, message } = result.data;
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL_TO || "lukadjuricdjurke@pm.me";
    const senderEmail = process.env.CONTACT_EMAIL_FROM || "Portfolio Contact <onboarding@resend.dev>";

    // If Resend API key is configured, send the real email
    if (resendApiKey && resendApiKey.trim() !== "") {
      const resend = new Resend(resendApiKey);

      const emailResponse = await resend.emails.send({
        from: senderEmail,
        to: recipientEmail,
        replyTo: email,
        subject: `New Portfolio Inquiry from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; line-height: 1.6; color: #333;">
            <h2 style="color: #10b981; border-bottom: 2px solid #eee; padding-bottom: 8px;">New Contact Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
            <div style="margin-top: 16px; padding: 12px; background: #f9f9f9; border-left: 4px solid #10b981;">
              <strong>Message:</strong>
              <p style="white-space: pre-wrap; margin-top: 8px;">${message}</p>
            </div>
            <p style="margin-top: 24px; font-size: 12px; color: #999;">Sent via Luka Đurić's Portfolio contact handler.</p>
          </div>
        `,
      });

      if (emailResponse.error) {
        console.error("Resend API Error:", emailResponse.error);
        return NextResponse.json(
          { error: "Failed to deliver email through provider." },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { success: true, message: "Your message has been sent successfully!" },
        { status: 200 }
      );
    }

    // Graceful fallback for local development or when API key is not yet set
    console.log("=== LOCAL CONTACT FORM SUBMISSION ===");
    console.log({ name, email, phone, message, timestamp: new Date().toISOString() });
    console.log("To enable real email dispatch, provide RESEND_API_KEY in .env.local");

    return NextResponse.json(
      {
        success: true,
        message: "Message received! (Running in development mode; configure RESEND_API_KEY for live delivery).",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact route handler error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
