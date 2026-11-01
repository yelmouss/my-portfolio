import nodemailer from "nodemailer";

import { buildOwnerEmail, buildVisitorEmail } from "@/lib/contact-emails";
import { contactEmail } from "@/lib/contact";

const MAX_LENGTHS = {
  name: 120,
  email: 254,
  subject: 180,
  message: 5000,
};

function getField(body, field) {
  const value = typeof body?.[field] === "string" ? body[field].trim() : "";
  return value.slice(0, MAX_LENGTHS[field]);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = getField(body, "name");
    const email = getField(body, "email");
    const subject = getField(body, "subject");
    const message = getField(body, "message");
    const locale = ["fr", "en", "ar"].includes(body?.locale) ? body.locale : "fr";

    if (!name || !email || !subject || !message) {
      return Response.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Contact email configuration is incomplete.");
      return Response.json({ error: "Email service is not configured." }, { status: 503 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const owner = buildOwnerEmail({ locale, name, email, subject, message });
    const visitor = buildVisitorEmail({ locale, name, subject, message });

    await transporter.sendMail({
      from: `"Portfolio contact" <${process.env.GMAIL_USER}>`,
      to: contactEmail,
      replyTo: email,
      ...owner,
    });

    try {
      await transporter.sendMail({
        from: `"Yelmouss" <${process.env.GMAIL_USER}>`,
        to: email,
        replyTo: contactEmail,
        ...visitor,
      });
    } catch (confirmationError) {
      console.error("Unable to send confirmation email.", confirmationError);
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Unable to send contact email.", error);
    return Response.json({ error: "Unable to send your message." }, { status: 500 });
  }
}
