import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Image from "next/image";

import PortfolioDock from "@/components/PortfolioDock";
import ExperienceJourney from "@/components/ExperienceJourney";
import RevealTicketSection from "@/components/RevealTicketSection";
import DriftWall from "@/components/DriftWall";
import TechText from "@/components/TechText";

export default async function AboutPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const messages = await getMessages();
  const { profile, experience, certifications, stack } = messages;
  const technologies = [
    ...stack.languages,
    ...stack.frameworks,
    ...stack.databases,
    ...stack.tools,
  ];

  return (
    <>
      <PortfolioDock locale={locale} messages={messages} />
      <AboutPageContent
        locale={locale}
        messages={messages}
        t={t}
        profile={profile}
        experience={experience}
        certifications={certifications}
        stack={stack}
        technologies={technologies}
      />
    </>
  );
}

function AboutPageContent({ locale, messages, t, profile, experience, certifications, stack, technologies }) {
  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 10 }, pb: { xs: 8, md: 16 } }}>
      <Box component="header" sx={{ maxWidth: 900, mb: { xs: 10, md: 16 } }}>
        <Box sx={{ mb: 2, display: "flex", alignItems: "center", height: { xs: 82, md: 108 } }}>
          <Image
            src="/Mascotte B.png"
            alt="Yelmouss"
            width={120}
            height={120}
            priority
            style={{ width: "auto", height: "100%", objectFit: "contain" }}
          />
        </Box>
        <Box sx={{ width: "100%", height: { xs: 70, md: 92 }, mb: 1, color: "text.primary" }}>
          <TechText
            text="Yelmouss"
            align="left"
            fontWeight={900}
            fontSize={150}
            reveal="letter"
            specks={15}
            intro="none"
            clickKick
            guides={false}
            accentColor="currentColor"
            color="text.primary"
            selection
            labels
            draggable
            sweep
          />
        </Box>
        <Chip label={t("eyebrow")} color="primary" sx={{ mb: 1 }} />
        <Typography
          component="h1"
          variant="h1"
          sx={{ fontSize: { xs: "2.9rem", md: "4.5rem" }, lineHeight: 1.05, mb: 2 }}
        >
          {t("title")}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 680, lineHeight: 1.7, mb: 4 }}>
          {profile.bio}
        </Typography>
        <Stack
          sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, mb: 3 }}
        >
          <Button href={`/${locale}/work`} variant="contained" endIcon={<ArrowOutwardRounded />}>
            {messages.home.workCta}
          </Button>
          <Button href={`/${locale}/contact`} variant="outlined">
            {messages.home.cta}
          </Button>
        </Stack>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          <Chip label={profile.role} color="primary" />
          <Chip label={profile.location} variant="outlined" />
          <Chip label={profile.availability} variant="outlined" />
        </Box>
      </Box>

        <Box component="section" sx={{ mb: { xs: 10, md: 16 } }}>
          <Typography variant="overline" color="primary">{experience.eyebrow}</Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 5, maxWidth: 820 }}>
            {experience.title}
          </Typography>
          <ExperienceJourney experience={experience} />
        </Box>

        <Grid container spacing={3} sx={{ mb: { xs: 10, md: 16 } }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="section" sx={{ height: "100%" }}>
              <Typography variant="overline" color="primary">{certifications.eyebrow}</Typography>
              <Typography variant="h2" sx={{ mt: 1, mb: 4 }}>{certifications.title}</Typography>
              <RevealTicketSection
                title={t("certificationsTicketTitle")}
                hint={t("certificationsTicketHint")}
                stubLabel={t("certificationsTicketStub")}
                ariaLabel={t("certificationsTicketAriaLabel")}
              >
                <Box sx={{ display: "grid", gap: 2 }}>
                  {certifications.items.map((item, index) => (
                    <Card key={item.title} variant="outlined">
                      <CardContent sx={{ p: 2.5, display: "flex", alignItems: "center", gap: 2 }}>
                        <Typography color="primary" fontWeight={800} sx={{ minWidth: 32 }}>
                          {String(index + 1).padStart(2, "0")}
                        </Typography>
                        <Typography variant="h6" component="h3" fontWeight={800}>
                          {item.title}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </RevealTicketSection>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="section">
              <Typography variant="overline" color="primary">{t("profileEyebrow")}</Typography>
              <Typography variant="h2" sx={{ mt: 1, mb: 4 }}>{t("profileTitle")}</Typography>
              <RevealTicketSection
                title={t("profileTicketTitle")}
                hint={t("profileTicketHint")}
                stubLabel={t("profileTicketStub")}
                ariaLabel={t("profileTicketAriaLabel")}
              >
                <Card variant="outlined">
                  <CardContent sx={{ p: 3 }}>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>{t("profileDescription")}</Typography>
                    <Divider sx={{ my: 3 }} />
                    <Typography variant="body2"><strong>{t("emailLabel")}:</strong> {profile.email}</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}><strong>{t("phoneLabel")}:</strong> {profile.phone}</Typography>
                  </CardContent>
                </Card>
              </RevealTicketSection>
            </Box>
          </Grid>
        </Grid>

        <Box component="section">
          <Typography variant="overline" color="primary">{t("stackEyebrow")}</Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 5, maxWidth: 820 }}>{t("stackTitle")}</Typography>
          <Grid container spacing={2}>
            <Grid size={12}>
              <Box
                sx={{
                  position: "relative",
                  height: 600,
                  borderRadius: 4,
                  overflow: "hidden",
                  border: "1px solid",
                  borderColor: "divider",
                  backgroundColor: "rgba(10, 10, 13, 0.18)",
                }}
              >
                <DriftWall
                  items={technologies.map((technology) => ({
                    image: technology.image,
                    title: technology.name,
                  }))}
                  columns={5}
                  tileWidth={200}
                  tileHeight={132}
                  gap={18}
                  tilt={16}
                  turn={-14}
                  perspective={1200}
                  depth={120}
                  speed={42}
                  direction="up"
                  variance={0.45}
                  parallax={0.6}
                  lift={64}
                  fade={0.6}
                  dim={0.55}
                  radius={14}
                  roll={0}
                  pauseOnHover={false}
                  grayscale={false}
                  overlayColor="var(--background)"
                  className="about-stack-drift-wall"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
    </Container>
  );
}
