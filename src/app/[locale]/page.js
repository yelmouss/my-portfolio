import { getMessages, setRequestLocale } from "next-intl/server";

import PortfolioHome from "@/components/PortfolioHome";
import { buildPageMetadata, siteName, siteUrl } from "@/lib/seo";

const homeSeo = {
  fr: {
    title: "Développeur Web, Applications & SEO au Maroc | Yelmouss",
    description:
      "Développeur web au Maroc : création de sites web, applications sur mesure et référencement naturel SEO pour développer votre présence en ligne.",
  },
  en: {
    title: "Web Developer, Applications & SEO in Morocco | Yelmouss",
    description:
      "Web development, custom applications and SEO services in Morocco to help businesses strengthen their online presence.",
  },
  ar: {
    title: "تطوير المواقع والتطبيقات وتحسين محركات البحث في المغرب | Yelmouss",
    description:
      "تطوير مواقع الويب والتطبيقات حسب الطلب وتحسين محركات البحث لتعزيز الحضور الرقمي للشركات في المغرب.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const seo = homeSeo[locale];
  return buildPageMetadata({ locale, title: seo.title, description: seo.description });
}

export default async function Home({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = await getMessages();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteName,
    url: `${siteUrl}/${locale}`,
    image: `${siteUrl}/Mascotte B.png`,
    description: homeSeo[locale].description,
    areaServed: "MA",
    knowsAbout: ["Web development", "SEO", "Custom applications"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <PortfolioHome locale={locale} messages={messages} />
    </>
  );
}
