import { NextResponse } from "next/server";
import { Resend } from "resend";
import { NewLeadEmail } from "../../templates/NewLeadEmail";

const EMAIL_SEND_TO = process.env.NEXT_PUBLIC_EMAIL as string;
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

const ALLOWED_COUNTRIES = ["US"];

export async function POST(request: Request) {
  const country = request.headers.get("x-vercel-ip-country");

  if (!country || !ALLOWED_COUNTRIES.includes(country)) {
    return NextResponse.json(
      {
        error: "Submissions are currently only accepted from the United States.",
        status: 403,
      },
      { status: 403 }
    );
  }

  const { senderName, senderPhoneNumber, senderEmail, senderHomeAddress } =
    await request.json();
  try {
    await resend.emails.send({
      from: "Home Seller Leads <onboarding@resend.dev>",
      to: EMAIL_SEND_TO,
      subject: "New Lead Submitted!",
      replyTo: senderEmail,
      react: NewLeadEmail({
        senderName,
        senderPhoneNumber,
        senderHomeAddress,
      }),
    });
    return NextResponse.json({
      message: "Ok",
      status: 200,
    });
  } catch (error) {
    if (error instanceof Error) {
      /* eslint-disable no-console */
      console.error(`Failed to send email: ${error.message}`);
      /* eslint-enable no-console */
    }
    return NextResponse.json({
      error: "Internal server error.",
      status: 500,
    });
  }
}
