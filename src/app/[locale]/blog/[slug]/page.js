import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import ArrowBackRounded from "@mui/icons-material/ArrowBackRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import MuiLink from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import PortfolioDock from "@/components/PortfolioDock";
import { routing } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";
import { articles } from "../articles";

export const dynamicParams = false;

const copy = {
  fr: { back: "Tous les articles", sources: "Pour aller plus loin" },
  en: { back: "All articles", sources: "Further reading" },
  ar: { back: "كل المقالات", sources: "للمزيد من القراءة" },
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    articles.map((article) => ({ locale, slug: article.slug })),
  );
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article || !article.content[locale]) notFound();
  const content = article.content[locale];
  return buildPageMetadata({
    locale,
    path: `/blog/${slug}`,
    title: `${content.title} | Yelmouss`,
    description: content.description,
  });
}

export default async function ArticlePage({ params }) {
  const { locale, slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article || !article.content[locale]) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  const content = article.content[locale];
  const text = copy[locale];

  return (
    <>
      <PortfolioDock locale={locale} messages={messages} />
      <Container component="main" maxWidth="md" sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 10, md: 16 } }}>
        <Button href={`/${locale}/blog`} startIcon={<ArrowBackRounded />} sx={{ mb: 5, px: 0 }}>
          {text.back}
        </Button>
        <Box component="article">
          <Box component="header" sx={{ mb: { xs: 6, md: 8 } }}>
            <Chip label={article.category[locale]} color="primary" variant="outlined" sx={{ mb: 2 }} />
            <Typography component="h1" variant="h1" sx={{ fontSize: { xs: "2.6rem", md: "4.2rem" }, lineHeight: 1.1, mb: 3 }}>
              {content.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              {content.description}
            </Typography>
          </Box>
          <Stack spacing={6}>
            {content.sections.map((section) => (
              <Box component="section" key={section.title}>
                <Typography component="h2" variant="h4" fontWeight={800} sx={{ mb: 2 }}>
                  {section.title}
                </Typography>
                <Stack spacing={2}>
                  {section.paragraphs.map((paragraph) => (
                    <Typography key={paragraph} color="text.secondary" sx={{ lineHeight: 1.9 }}>
                      {paragraph}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>
        <Box component="section" sx={{ mt: 7, pt: 4, borderTop: 1, borderColor: "divider" }}>
          <Typography component="h2" variant="h5" fontWeight={800} sx={{ mb: 2 }}>{text.sources}</Typography>
          <Box component="ul" sx={{ pl: 3, pr: 3, display: "grid", gap: 1 }}>
            {article.sources.map((source) => (
              <li key={source.url}>
                <MuiLink href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</MuiLink>
              </li>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
}
