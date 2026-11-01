import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PortfolioDock from "@/components/PortfolioDock";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "work" });
  return buildPageMetadata({
    locale,
    path: "/work",
    title: `${t("title")} | Yelmouss`,
    description: t("description"),
  });
}

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
