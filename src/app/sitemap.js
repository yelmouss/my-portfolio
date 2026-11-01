import { routing } from "@/i18n/routing";
import { serviceSlugs } from "@/lib/service-pages";
import { siteUrl } from "@/lib/seo";

const pages = [
  "",
  "/about",
  "/contact",
  ...serviceSlugs.map((slug) => `/${slug}`),
];

export default function sitemap() {
  return routing.locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${siteUrl}/${locale}${page}`,
      changeFrequency: "monthly",
      priority: page === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          [
            ...routing.locales.map((l) => [l, `${siteUrl}/${l}${page}`]),
            ["x-default", `${siteUrl}/${routing.defaultLocale}${page}`],
          ],
        ),
      },
    })),
  );
}
