import { routing } from "@/i18n/routing";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.yelmouss.ma").replace(/\/$/, "");
export const siteName = "Yelmouss";

const ogLocales = { fr: "fr_MA", en: "en_US", ar: "ar_MA" };

export function localizedPath(locale, path = "") {
  return `/${locale}${path}`;
}

export function buildPageMetadata({ locale, path = "", title, description }) {
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, localizedPath(l, path)]),
  );
  languages["x-default"] = localizedPath(routing.defaultLocale, path);

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: { canonical: localizedPath(locale, path), languages },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      siteName,
      url: `${siteUrl}${localizedPath(locale, path)}`,
      title,
      description,
      locale: ogLocales[locale],
      images: [{ url: "/Mascotte B.png", width: 512, height: 512, alt: siteName }],
    },
    twitter: { card: "summary", title, description, images: ["/Mascotte B.png"] },
  };
}
