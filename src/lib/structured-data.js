import { siteName, siteUrl } from "@/lib/seo";

const inLanguage = { fr: "fr-MA", en: "en", ar: "ar-MA" };

export function buildHomeJsonLd({ locale, messages, description }) {
  const { profile, home } = messages;
  const pageUrl = `${siteUrl}/${locale}`;
  const personId = `${siteUrl}/#person`;
  const businessId = `${siteUrl}/#business`;
  const websiteId = `${siteUrl}/#website`;
  const sameAs = ["https://github.com/yelmouss"];

  const person = {
    "@type": "Person",
    "@id": personId,
    name: profile.name,
    alternateName: profile.displayName,
    jobTitle: profile.role,
    url: siteUrl,
    image: `${siteUrl}/Mascotte B.png`,
    email: profile.email,
    telephone: profile.phone,
    address: { "@type": "PostalAddress", addressLocality: "Rabat", addressCountry: "MA" },
    knowsAbout: ["Web development", "Next.js", "React", "Custom applications", "SEO", "GEO"],
    sameAs,
  };

  const business = {
    "@type": "ProfessionalService",
    "@id": businessId,
    name: siteName,
    url: siteUrl,
    image: `${siteUrl}/Mascotte B.png`,
    description,
    founder: { "@id": personId },
    email: profile.email,
    telephone: profile.phone,
    address: { "@type": "PostalAddress", addressLocality: "Rabat", addressCountry: "MA" },
    areaServed: [{ "@type": "Country", name: "Morocco" }, "Worldwide"],
    availableLanguage: ["fr", "en", "ar"],
    sameAs,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: home.selectedWorkTitle,
      itemListElement: Object.values(home.services).map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: { "@id": businessId },
        },
      })),
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl,
    name: siteName,
    inLanguage: ["fr-MA", "en", "ar-MA"],
    publisher: { "@id": businessId },
  };

  const webpage = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: home.title,
    description,
    inLanguage: inLanguage[locale],
    isPartOf: { "@id": websiteId },
    about: { "@id": businessId },
  };

  const faq = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    inLanguage: inLanguage[locale],
    mainEntity: home.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return { "@context": "https://schema.org", "@graph": [person, business, website, webpage, faq] };
}

export function serializeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
