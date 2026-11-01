import en from "@/messages/en.json";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const { profile, home } = en;
  const services = Object.values(home.services)
    .map((s) => `- ${s.title}: ${s.description}`)
    .join("\n");
  const faq = home.faq.map((f) => `### ${f.question}\n${f.answer}`).join("\n\n");

  const body = `# Yelmouss

> ${profile.name} (${profile.displayName}) is a ${profile.role} based in ${profile.location}. He builds high-performing websites, custom web applications and SEO / GEO strategies for businesses, independents and founders in Morocco and abroad. Content is available in French, English and Arabic.

## Pages
- [Home (French)](${siteUrl}/fr): Services, approach, projects, stack and FAQ
- [Home (English)](${siteUrl}/en): Services, approach, projects, stack and FAQ
- [Home (Arabic)](${siteUrl}/ar): Services, approach, projects, stack and FAQ
- [About](${siteUrl}/en/about): Experience, certifications and technology stack
- [Contact](${siteUrl}/en/contact): Project inquiries

## Services
${services}

## Key facts
- Name: ${profile.name}
- Role: ${profile.role}
- Location: ${profile.location}
- Availability: ${profile.availability}
- Email: ${profile.email}
- Languages: French, English, Arabic
- Main technologies: Next.js, React, Node.js, Express, MongoDB, MySQL, PHP, Laravel, Tailwind CSS, Material UI

## FAQ
${faq}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
