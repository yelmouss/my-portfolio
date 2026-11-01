const BRAND = {
  bg: "#0A0A0D",
  card: "#141418",
  border: "#26262C",
  text: "#FFFFFF",
  muted: "#A1A1AA",
  accent: "#A3E635",
  accentText: "#0A0A0D",
};

const COPY = {
  fr: {
    dir: "ltr",
    visitorSubject: "Nous avons bien reçu votre demande",
    visitorTitle: "Merci pour votre message",
    visitorHello: (name) => `Bonjour ${name},`,
    visitorBody:
      "Nous avons bien reçu votre demande et nous reviendrons vers vous très rapidement.",
    recap: "Récapitulatif de votre message",
    ownerSubject: "Nouvelle demande de contact",
    ownerTitle: "Nouvelle demande de contact",
    ownerIntro: "Une demande de contact a été reçue depuis votre portfolio.",
    name: "Nom",
    email: "Email",
    subject: "Sujet",
    message: "Message",
    reply: "Répondre",
    footer: "Yelmouss — Studio digital",
  },
  en: {
    dir: "ltr",
    visitorSubject: "We have received your request",
    visitorTitle: "Thank you for your message",
    visitorHello: (name) => `Hello ${name},`,
    visitorBody:
      "We have received your request and will get back to you very soon.",
    recap: "Summary of your message",
    ownerSubject: "New contact request",
    ownerTitle: "New contact request",
    ownerIntro: "A contact request has been received from your portfolio.",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    reply: "Reply",
    footer: "Yelmouss — Digital studio",
  },
  ar: {
    dir: "rtl",
    visitorSubject: "لقد استلمنا طلبك",
    visitorTitle: "شكرًا على رسالتك",
    visitorHello: (name) => `مرحبًا ${name}،`,
    visitorBody: "لقد استلمنا طلبك وسنعاود الاتصال بك في أقرب وقت ممكن.",
    recap: "ملخص رسالتك",
    ownerSubject: "طلب تواصل جديد",
    ownerTitle: "طلب تواصل جديد",
    ownerIntro: "تم استلام طلب تواصل جديد من موقعك.",
    name: "الاسم",
    email: "البريد الإلكتروني",
    subject: "الموضوع",
    message: "الرسالة",
    reply: "رد",
    footer: "Yelmouss — استوديو رقمي",
  },
};

export function getCopy(locale) {
  return COPY[locale] || COPY.fr;
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

function row(label, value) {
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};">
      <div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:${BRAND.accent};margin-bottom:4px;">${label}</div>
      <div style="font-size:15px;line-height:1.6;color:${BRAND.text};">${value}</div>
    </td>
  </tr>`;
}

function layout({ dir, title, intro, rows, cta, footer }) {
  const align = dir === "rtl" ? "right" : "left";
  return `<!doctype html>
<html dir="${dir}">
<body style="margin:0;padding:0;background:${BRAND.bg};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.bg};padding:32px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:${BRAND.card};border:1px solid ${BRAND.border};border-radius:20px;overflow:hidden;font-family:Helvetica,Arial,sans-serif;text-align:${align};">
        <tr><td style="height:6px;background:${BRAND.accent};font-size:0;line-height:0;">&nbsp;</td></tr>
        <tr><td style="padding:32px 32px 8px;">
          <div style="font-size:22px;font-weight:900;color:${BRAND.text};letter-spacing:-0.03em;">yelmouss<span style="color:${BRAND.accent};">.</span></div>
        </td></tr>
        <tr><td style="padding:16px 32px 0;">
          <h1 style="margin:0 0 12px;font-size:26px;line-height:1.2;color:${BRAND.text};">${title}</h1>
          <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:${BRAND.muted};">${intro}</p>
        </td></tr>
        <tr><td style="padding:0 32px 8px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
        </td></tr>
        ${cta ? `<tr><td style="padding:20px 32px 8px;"><a href="${cta.href}" style="display:inline-block;background:${BRAND.accent};color:${BRAND.accentText};font-weight:700;font-size:14px;text-decoration:none;padding:12px 22px;border-radius:999px;">${cta.label}</a></td></tr>` : ""}
        <tr><td style="padding:28px 32px;font-size:12px;color:${BRAND.muted};">${footer}</td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function messageHtml(message) {
  return escapeHtml(message).replace(/\n/g, "<br />");
}

export function buildOwnerEmail({ locale, name, email, subject, message }) {
  const c = getCopy(locale);
  const safeEmail = escapeHtml(email);
  return {
    subject: `[Portfolio] ${c.ownerSubject} — ${subject}`,
    text: `${c.ownerIntro}\n\n${c.name}: ${name}\n${c.email}: ${email}\n${c.subject}: ${subject}\n\n${message}`,
    html: layout({
      dir: c.dir,
      title: c.ownerTitle,
      intro: c.ownerIntro,
      rows:
        row(c.name, escapeHtml(name)) +
        row(c.email, `<a href="mailto:${safeEmail}" style="color:${BRAND.accent};text-decoration:none;">${safeEmail}</a>`) +
        row(c.subject, escapeHtml(subject)) +
        row(c.message, messageHtml(message)),
      cta: { href: `mailto:${safeEmail}`, label: c.reply },
      footer: c.footer,
    }),
  };
}

export function buildVisitorEmail({ locale, name, subject, message }) {
  const c = getCopy(locale);
  return {
    subject: c.visitorSubject,
    text: `${c.visitorHello(name)}\n\n${c.visitorBody}\n\n${c.subject}: ${subject}\n${message}`,
    html: layout({
      dir: c.dir,
      title: c.visitorTitle,
      intro: `${escapeHtml(c.visitorHello(name))} ${c.visitorBody}`,
      rows: row(c.subject, escapeHtml(subject)) + row(c.message, messageHtml(message)),
      footer: c.footer,
    }),
  };
}
