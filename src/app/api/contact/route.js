import nodemailer from "nodemailer";

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

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = getField(body, "name");
    const email = getField(body, "email");
    const subject = getField(body, "subject");
    const message = getField(body, "message");

    if (!name || !email || !subject || !message) {
      return Response.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !process.env.CONTACT_RECIPIENT) {
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

    await transporter.sendMail({
      from: `"Portfolio contact" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECIPIENT,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><hr /><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Unable to send contact email.", error);
    return Response.json({ error: "Unable to send your message." }, { status: 500 });
  }
}
