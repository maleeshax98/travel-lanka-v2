import { client } from "@/sanity/client";

import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, whatsapp, phone, message } = await request.json();

  const newContactForm = {
    _type: "contact",
    fullName: name,
    email,
    whatsappNumber: whatsapp,
    phoneNumber: phone,
    message,
  };

  try {
    const result = await client.create(newContactForm);
    return NextResponse.json({ result }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err }, { status: 500 });
  }
}
