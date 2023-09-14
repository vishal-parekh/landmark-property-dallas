import { NewLeadEmail } from "../../templates/NewLeadEmail";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_SEND_TO = process.env.NEXT_PUBLIC_EMAIL as string;
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  const { senderName, senderPhoneNumber, senderEmail, senderHomeAddress } =
    await request.json();
  try {
    await resend.emails.send({
      from: "Home Seller Leads <onboarding@resend.dev>",
      to: EMAIL_SEND_TO,
      subject: "New Lead Submitted!",
      reply_to: senderEmail,
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
