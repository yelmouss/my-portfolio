import { notFound } from "next/navigation";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import PortfolioDock from "@/components/PortfolioDock";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import { routing } from "@/i18n/routing";
import { servicePages, serviceSlugs } from "@/lib/service-pages";
import { buildPageMetadata } from "@/lib/seo";

export const dynamicParams = false;

function getServicePage(locale, slug) {
  return servicePages[slug]?.[locale];
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    serviceSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const page = getServicePage(locale, slug);
  if (!page) notFound();

  return buildPageMetadata({
    locale,
    path: `/${slug}`,
    title: page.title,
    description: page.description,
  });
}

export default async function ServicePage({ params }) {
  const { locale, slug } = await params;
  const page = getServicePage(locale, slug);
  if (!page) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations("contact");
  const details = messages.home.servicesDetail;
  const sections = [
    ...page.sections.map((index) => details[index]),
    ...(page.contentSections || []),
  ];
  const relatedHeading = {
    fr: "Pages utiles",
    en: "Related pages",
    ar: "صفحات ذات صلة",
  }[locale];
  const relatedPages = (page.relatedSlugs || []).map((relatedSlug) => ({
    slug: relatedSlug,
    page: servicePages[relatedSlug][locale],
  }));

  return (
    <>
      <PortfolioDock locale={locale} messages={messages} />
      <Container
        component="main"
        maxWidth="md"
        sx={{ pt: { xs: 10, md: 14 }, pb: { xs: 10, md: 16 } }}
      >
        <Box component="header" sx={{ mb: { xs: 7, md: 10 } }}>
          <Typography component="h1" variant="h1" sx={{ fontSize: { xs: "2.8rem", md: "4.5rem" }, lineHeight: 1.08, mb: 3 }}>
            {page.heading}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 760, lineHeight: 1.7 }}>
            {page.intro}
          </Typography>
        </Box>
        <Stack component="section" spacing={6}>
          {sections.map((section) => (
            <Box component="article" key={section.title}>
              <Typography component="h2" variant="h4" sx={{ mb: 2, fontWeight: 800 }}>
                {section.title}
              </Typography>
              <Stack spacing={2}>
                {section.paragraphs.map((paragraph) => (
                  <Typography key={paragraph} color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {paragraph}
                  </Typography>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
        {relatedPages.length > 0 && (
          <Box component="nav" aria-label={relatedHeading} sx={{ mt: 6 }}>
            <Typography component="h2" variant="h5" sx={{ mb: 2, fontWeight: 800 }}>
              {relatedHeading}
            </Typography>
            <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1}>
              {relatedPages.map(({ slug, page: relatedPage }) => (
                <Button
                  key={slug}
                  href={`/${locale}/${slug}`}
                  title={relatedPage.heading}
                  variant="outlined"
                >
                  {relatedPage.heading}
                </Button>
              ))}
            </Stack>
          </Box>
        )}
        <GoogleReviewsSection locale={locale} />
        <Button
          href={`/${locale}/contact`}
          title={page.ctaLabel || t("email")}
          variant="contained"
          endIcon={<ArrowOutwardRounded />}
          sx={{ mt: 6 }}
        >
          {page.ctaLabel || t("email")}
        </Button>
      </Container>
    </>
  );
}
