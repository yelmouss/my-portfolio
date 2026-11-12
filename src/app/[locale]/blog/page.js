import { getMessages, setRequestLocale } from "next-intl/server";
import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import PortfolioDock from "@/components/PortfolioDock";
import { buildPageMetadata } from "@/lib/seo";
import { articles } from "./articles";

const copy = {
  fr: {
    title: "Blog : développement web, IA et SEO",
    description: "Des guides pratiques pour concevoir, maintenir et améliorer vos projets numériques.",
    eyebrow: "Ressources",
    read: "Lire l'article",
  },
  en: {
    title: "Blog: web development, AI and SEO",
    description: "Practical guides to planning, maintaining and improving your digital projects.",
    eyebrow: "Resources",
    read: "Read article",
  },
  ar: {
    title: "المدونة: تطوير الويب والذكاء الاصطناعي وSEO",
    description: "أدلة عملية لتخطيط مشاريعك الرقمية وصيانتها وتحسينها.",
    eyebrow: "موارد",
    read: "اقرأ المقال",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const text = copy[locale];
  return buildPageMetadata({
    locale,
    path: "/blog",
    title: `${text.title} | Yelmouss`,
    description: text.description,
  });
}

export default async function BlogPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();
  const text = copy[locale];

  return (
    <>
      <PortfolioDock locale={locale} messages={messages} />
      <Container component="main" maxWidth="lg" sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 10, md: 16 } }}>
        <Box component="header" sx={{ maxWidth: 850, mb: { xs: 6, md: 9 } }}>
          <Typography variant="overline" color="primary">{text.eyebrow}</Typography>
          <Typography component="h1" variant="h1" sx={{ fontSize: { xs: "2.8rem", md: "4.5rem" }, lineHeight: 1.08, my: 2 }}>
            {text.title}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.7 }}>
            {text.description}
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {articles.map((article) => {
            const content = article.content[locale];
            return (
              <Grid key={article.slug} size={{ xs: 12, md: 6 }}>
                <Card component="article" variant="outlined" sx={{ height: "100%" }}>
                  <CardContent sx={{ p: { xs: 3, md: 4 }, height: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2 }}>
                    <Chip label={article.category[locale]} color="primary" variant="outlined" />
                    <Typography component="h2" variant="h5" fontWeight={800}>{content.title}</Typography>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>{content.description}</Typography>
                    <Button href={`/${locale}/blog/${article.slug}`} endIcon={<ArrowOutwardRounded />} sx={{ mt: "auto", px: 0 }}>
                      {text.read}
                      <span className="sr-only"> : {content.title}</span>
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
