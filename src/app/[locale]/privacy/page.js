import { getMessages, setRequestLocale } from "next-intl/server";

import LegalPage from "@/components/LegalPage";
import { legalContent } from "@/lib/legal-content";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const page = legalContent[locale].privacy;
  return buildPageMetadata({
    locale,
    path: "/privacy",
    title: `${page.title} | Yelmouss`,
    description: page.description,
    index: false,
  });
}

export default async function Page({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();
  const content = legalContent[locale];

  return (
    <LegalPage locale={locale} messages={messages} page={content.privacy} updated={content.updated} />
  );
}
