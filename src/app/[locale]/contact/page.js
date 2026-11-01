import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PortfolioDock from "@/components/PortfolioDock";
import ContactForm from "@/components/ContactForm";
import { buildPageMetadata } from "@/lib/seo";
import { contactEmail } from "@/lib/contact";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return buildPageMetadata({
    locale,
    path: "/contact",
    title: `${t("title")} | Yelmouss`,
    description: t("description"),
  });
}

export default async function ContactPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const messages = await getMessages();

  return (
    <>
      <PortfolioDock locale={locale} messages={messages} />
      <Container maxWidth="lg" sx={{ pt: { xs: 10, md: 12 }, pb: { xs: 8, md: 14 } }}>
        <Box sx={{ maxWidth: 760, mb: { xs: 7, md: 10 } }}>
          <Typography variant="overline" color="primary">{t("eyebrow")}</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: "3rem", md: "5rem" }, my: 2 }}>{t("title")}</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>{t("description")}</Typography>
          <Button variant="contained" href={`mailto:${contactEmail}`} title={t("email")}>{t("email")}</Button>
        </Box>
        <Card
          variant="outlined"
          sx={{
            maxWidth: 760,
            backgroundColor: "color-mix(in srgb, var(--card) 42%, transparent)",
            backdropFilter: "blur(14px) saturate(135%)",
            WebkitBackdropFilter: "blur(14px) saturate(135%)",
            border: "1px solid",
            borderColor: "rgba(163, 230, 53, 0.28)",
            boxShadow: "0 24px 80px rgba(0, 0, 0, 0.24), inset 0 1px 0 rgba(255,255,255,0.12)",
          }}
        >
          <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
            <ContactForm copy={t.raw("form")} />
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
