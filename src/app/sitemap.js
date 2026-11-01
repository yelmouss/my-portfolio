import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/seo";

const pages = ["", "/about", "/contact"];

export default function sitemap() {
  const lastModified = new Date();
  return routing.locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${siteUrl}/${locale}${page}`,
      lastModified,
      changeFrequency: "monthly",
      priority: page === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${siteUrl}/${l}${page}`]),
        ),
      },
    })),
  );
}
