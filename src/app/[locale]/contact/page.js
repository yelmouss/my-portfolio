import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PortfolioDock from "@/components/PortfolioDock";

export default async function ContactPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const messages = await getMessages();

  return (
    <>
      <PortfolioDock locale={locale} messages={messages} />
      <Container maxWidth="lg" sx={{ pt: { xs: 14, md: 16 }, pb: { xs: 8, md: 14 } }}>
        <Box sx={{ maxWidth: 760 }}>
          <Typography variant="overline" color="primary">{t("eyebrow")}</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: "3rem", md: "5rem" }, my: 2 }}>{t("title")}</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>{t("description")}</Typography>
          <Button variant="contained" href="mailto:hello@yelmouss.com">{t("email")}</Button>
        </Box>
      </Container>
    </>
  );
}
