import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PortfolioDock from "@/components/PortfolioDock";

export default async function WorkPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("work");
  const messages = await getMessages();

  return (
    <>
      <PortfolioDock locale={locale} messages={messages} />
      <Container
        maxWidth="lg"
        sx={{ pt: { xs: 14, md: 16 }, pb: { xs: 8, md: 14 } }}
      >
        <Box sx={{ maxWidth: 760 }}>
          <Typography variant="overline" color="primary">
            {t("eyebrow")}
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "3rem", md: "5rem" }, my: 2 }}
          >
            {t("title")}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {t("description")}
          </Typography>
        </Box>
      </Container>
    </>
  );
}
