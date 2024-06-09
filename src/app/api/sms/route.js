import { NextResponse } from "next/server";
import twilio from "twilio";
import { LogContextImpl } from "twilio/lib/rest/serverless/v1/service/environment/log";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// console.log(accountSid, authToken);

const client = twilio(accountSid, authToken);

export async function POST(request) {
  try {
    const data = await request.json();

    const message = await client.messages.create({
      body: data.message,
      from: "+18608793586",
      to: data.phone,
    });
    console.log(message.sid);
    return NextResponse.json({ message: "Message sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error sending message" },
      { status: 400 }
    );
  }
}
