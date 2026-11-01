"use client";

import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import CodeRounded from "@mui/icons-material/CodeRounded";
import DesignServicesRounded from "@mui/icons-material/DesignServicesRounded";
import SearchRounded from "@mui/icons-material/SearchRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreRounded from "@mui/icons-material/ExpandMoreRounded";

import TechText from "@/components/TechText";
import ScrambledText from "@/components/ScrambledText";
import ScrollReveal from "@/components/ScrollReveal";
import CircularCarousel from "@/components/CircularCarousel";
import FlexCarousel from "@/components/FlexCarousel";
import HorizontalApproach from "@/components/HorizontalApproach";
import ExpertiseCards from "@/components/ExpertiseCards";
import { useColorMode } from "@/components/ThemeRegistry";
import PortfolioDock from "@/components/PortfolioDock";
import { Link } from "@/i18n/navigation";

const services = [
  { icon: DesignServicesRounded, key: "design" },
  { icon: CodeRounded, key: "development" },
  { icon: SearchRounded, key: "seo" },
];

const servicePaths = {
  design: "creation-site-internet",
  development: "developpement-web",
  seo: "referencement-seo",
};

export default function PortfolioHome({ locale, messages }) {
  const theme = useColorMode();
  const t = (key) =>
    key.split(".").reduce((value, part) => value?.[part], messages.home);
  const content = messages.home;
  const projects = messages.projects;
  const stack = messages.stack;
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        width: "100%",
        maxWidth: "100vw",
        overflowX: "clip",
        py: { xs: 2, md: 4 },
        background:
          theme.mode === "dark"
            ? "radial-gradient(circle at 50% 36%, rgba(163, 230, 53, 0.1), transparent 24%), radial-gradient(circle at 8% 78%, rgba(163, 230, 53, 0.045), transparent 22%), radial-gradient(circle at 92% 8%, rgba(163, 230, 53, 0.035), transparent 20%), transparent"
            : "radial-gradient(circle at 50% 36%, rgba(101, 163, 13, 0.08), transparent 24%), radial-gradient(circle at 8% 78%, rgba(101, 163, 13, 0.035), transparent 22%), radial-gradient(circle at 92% 8%, rgba(101, 163, 13, 0.03), transparent 20%), transparent",
        color: "text.primary",
      }}
    >
      <Container maxWidth="lg">
        <PortfolioDock locale={locale} messages={messages} />
        {/* <Stack
          sx={{
            mb: { xs: 7, md: 12 },
            pt: { xs: 8, md: 6 },
            alignItems: "flex-start",
            textAlign: "left",
          }}
        >
          <Typography variant="h6" fontWeight={800} letterSpacing="-0.04em">
            yelmouss<span style={{ color: theme.mode === "dark" ? "#A3E635" : "#4D7C0F" }}>.</span>
          </Typography>
        </Stack> */}

        <Box component="section" sx={{ mb: { xs: 10, md: 16 }, maxWidth: 900 }}>
          <Box
            sx={{
              width: '100%',
              height: { xs: 82, md: 108 },
              mb: 1,
              color: theme.mode === "dark" ? "#FFFFFF" : "text.primary",
              textAlign: "left",
            }}
          >
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
              color={theme.mode === "dark" ? "#FFFFFF" : "text.primary"}
              selection
              labels
              draggable
              sweep
            />
          </Box>

            <Chip
            label={t("eyebrow")}
            color="primary"
            variant="contained"
            sx={{ mb: 1 }}
          />
          <Typography
            component="h1"
            variant="h1"
            sx={{
              fontSize: { xs: "2.9rem", md: "4.5rem" },
              lineHeight: 1.05,
              mb: 2,
              textAlign: "left",
            }}
          >
            {locale === "en" ? (
              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "text.primary",
                  "& .scrambled-text": {
                    display: "inline-block",
                    margin: 0,
                    maxWidth: "none",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    verticalAlign: "baseline",
                  },
                  "& .scrambled-text p": {
                    display: "inline",
                    margin: 0,
                  },
                }}
              >
                <ScrambledText
                  duration={1.8}
                  speed={0.35}
                  scrambleChars=".:/\\*+"
                  effect="scramble"
                  intro
                  className="hero-scrambled-segment"
                >
                  I build{" "}
                </ScrambledText>
                <ScrambledText
                  duration={1.8}
                  speed={0.35}
                  scrambleChars=".:/\\*+"
                  effect="scramble"
                  color={theme.mode === "dark" ? "#A3E635" : "#4D7C0F"}
                  intro
                  className="hero-scrambled-segment"
                >
                  digital experiences
                </ScrambledText>{" "}
                <ScrambledText
                  duration={1.8}
                  speed={0.35}
                  scrambleChars=".:/\\*+"
                  effect="scramble"
                  intro
                  className="hero-scrambled-segment"
                >
                  {" that move "}
                </ScrambledText>
                <ScrambledText
                  duration={1.8}
                  speed={0.35}
                  scrambleChars=".:/\\*+"
                  effect="scramble"
                  color={theme.mode === "dark" ? "#A3E635" : "#4D7C0F"}
                  intro
                  className="hero-scrambled-segment"
                >
                  businesses forward
                </ScrambledText>
                .
              </Box>
            ) : (
              t("title")
            )}
          </Typography>
          <Typography
            component="p"
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 680, lineHeight: 1.7, mb: 4 }}
          >
            {t("description")}
          </Typography>
          <Stack
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
            }}
          >
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              endIcon={<ArrowOutwardRounded />}
            >
              {t("cta")}
            </Button>
          </Stack>
        </Box>

        <Box component="section" sx={{ mb: { xs: 10, md: 16 }, maxWidth: 820 }}>
          <Typography variant="overline" color="primary">{t("introductionEyebrow")}</Typography>
          <ScrollReveal
            mode="scrub"
            splitBy="words"
            effect="rise"
            baseOpacity={0.12}
            baseOffset={24}
            baseRotation={0}
            enableBlur
            blurStrength={2}
            stagger={0.08}
            smoothing={0.45}
            containerClassName="introduction-title-reveal"
            textClassName="introduction-title-text"
          >
            {t("introductionTitle")}
          </ScrollReveal>
          {content.introductionParagraphs.map((paragraph) => (
            <ScrollReveal
              key={paragraph}
              mode="scrub"
              splitBy="words"
              effect="rise"
              highlightColor={theme.mode === "dark" ? "#A3E635" : "#4D7C0F"}
              baseOpacity={0.12}
              baseOffset={20}
              baseRotation={0}
              enableBlur
              blurStrength={3}
              stagger={0.06}
              smoothing={0.45}
              containerClassName="introduction-reveal"
            >
              {paragraph}
            </ScrollReveal>
          ))}
        </Box>

        <ExpertiseCards
          items={{
            eyebrow: t("servicesEyebrow"),
            title: t("servicesTitle"),
            cards: services.map(({ icon: Icon, key }) => ({
              icon: Icon,
              title: t(`services.${key}.title`),
              description: t(`services.${key}.description`),
              href: `/${servicePaths[key]}`,
            })),
          }}
        />

        <HorizontalApproach
          items={{
            eyebrow: t("methodEyebrow"),
            title: t("methodTitle"),
            cards: messages.home.method.map((item, index) => ({
              number: `0${index + 1}`,
              title: item.title,
              description: item.description,
            })),
          }}
        />

        <Box component="section" data-projects-section sx={{ mb: { xs: 10, md: 16 } }}>
          <Typography variant="overline" color="primary">
            {t("selectedWorkEyebrow")}
          </Typography>
          <Stack
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              gap: 2,
              mb: 4,
            }}
          >
            <ScrollReveal
              as="h2"
              mode="scrub"
              effect="rise"
              baseOpacity={0.12}
              baseOffset={24}
              stagger={0.08}
              smoothing={0.45}
              containerClassName="section-title-reveal"
            >
              {t("selectedWorkTitle")}
          </ScrollReveal>
          </Stack>
          <Box
            sx={{
              position: "relative",
              height: { xs: 300, sm: 350, md: 500 },
              overflow: "hidden",
              background: "transparent",
              "& .flex-carousel": {
                width: "100%",
                height: "100%",
              },
              "& .circular-carousel__caption, & .flex-carousel__caption": {
                bottom: { xs: 18, md: 26 },
                textShadow: "0 2px 18px rgba(0,0,0,0.7)",
              },
              "& .circular-carousel__title, & .flex-carousel__title": {
                fontSize: { xs: "1rem", md: "1.15rem" },
                fontWeight: 700,
              },
              "& .circular-carousel__subtitle, & .flex-carousel__subtitle": {
                color: theme.mode === "dark" ? "#A3E635" : "#4D7C0F",
                opacity: 1,
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              },
            }}
          >
            <CircularCarousel
              items={projects.map((project) => ({
                src: project.image,
                alt: project.title,
                title: project.title,
                subtitle: project.type,
                project,
              }))}
              onItemClick={(item) => {
                if (item.project?.demo) window.open(item.project.demo, "_blank", "noopener,noreferrer");
              }}
              preset="cylinder"
              intro="rise"
              cardWidth={260}
              aspectRatio={1.1}
              speed={10}
              captions
              gap={12}
              tilt={-5}
              curve={1}
              perspective={2500}
              autoplay="drift"
              interval={4}
              direction="left"
              momentum={0.65}
              snap
              pauseOnHover
              focusOnClick
              draggable
              parallax={0.24}
              stretch={0.35}
              fadeColor={theme.mode === "dark" ? "#0A0A0D" : "#F1E9D2"}
              depthFade={0.35}
              innerShade={0.12}
              cornerRadius={18}
            />
          </Box>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {projects.map((project) => (
              <Grid key={project.slug} size={{ xs: 12, sm: 6 }}>
                <Card variant="outlined" sx={{ height: "100%" }}>
                  <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", height: "100%", gap: 1.5 }}>
                    <Typography component="h3" variant="h6" fontWeight={800}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                      {project.stack.map((technology) => (
                        <Chip key={technology} size="small" label={technology} variant="outlined" />
                      ))}
                    </Box>
                    {project.demo && (
                      <Button
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<ArrowOutwardRounded />}
                        sx={{ mt: "auto", px: 0 }}
                      >
                        {content.projectLink}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box component="section" data-stack-section sx={{ mb: { xs: 10, md: 16 }, maxWidth: { xs: 820, md: 1080 }, mx: "auto" }}>
          <Typography variant="overline" color="primary">{stack.eyebrow}</Typography>
          <ScrollReveal
            as="h2"
            mode="scrub"
            effect="rise"
            baseOpacity={0.12}
            baseOffset={24}
            stagger={0.08}
            smoothing={0.45}
            containerClassName="section-title-reveal"
          >
            {stack.title}
          </ScrollReveal>
          <Box
            sx={{
              width: "100%",
              height: { xs: 350, sm: 400, md: 440 },
              mx: "auto",
              overflow: "hidden",
              px: { xs: 0.5, md: 1 },
              py: { xs: 0.5, md: 1 },
              border: "1px solid",
              borderColor: theme.mode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.1)",
              borderRadius: 3,
              background: theme.mode === "dark" ? "rgba(255,255,255,0.025)" : "rgba(248,242,227,0.72)",
              boxShadow: theme.mode === "dark" ? "0 18px 60px rgba(0,0,0,0.18)" : "0 18px 60px rgba(15,23,42,0.08)",
              "& .flex-carousel": {
                width: "100%",
                height: "100%",
              },
              "& .flex-carousel__caption": {
                bottom: { xs: 18, md: 26 },
                textShadow: "0 2px 18px rgba(0,0,0,0.7)",
              },
              "& .flex-carousel__title": {
                fontSize: { xs: "1rem", md: "1.15rem" },
                fontWeight: 700,
              },
              "& .flex-carousel__subtitle": {
                color: theme.mode === "dark" ? "#A3E635" : "#4D7C0F",
                opacity: 1,
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              },
            }}
          >
            <FlexCarousel
              items={[...stack.languages, ...stack.frameworks, ...stack.databases, ...stack.tools].map((technology) => ({
                src: technology.image,
                alt: technology.name,
                title: technology.name,
                subtitle: technology.description,
                technology,
              }))}
              preset="liquid"
              intro="rise"
              cardHeight={0.38}
              gap={8}
              squeeze={0.12}
              focusOnClick
              captions
              fit="natural"
              radius={999}
              lensWidth={0.82}
              lensHeight={1.08}
              tilt={62}
              roundness={1}
              bend={0.34}
              reach={0.38}
              curl="twist"
              dispersion={0.45}
              liquid={0}
              followCursor={false}
              autoplay={false}
              interval={4}
              captureWheel
            />
          </Box>
        </Box>

        <Box component="section" sx={{ mb: { xs: 10, md: 16 }, maxWidth: 900 }}>
          <Typography variant="overline" color="primary">{t("servicesDetailEyebrow")}</Typography>
          <ScrollReveal
            as="h2"
            mode="scrub"
            effect="rise"
            baseOpacity={0.12}
            baseOffset={24}
            stagger={0.08}
            smoothing={0.45}
            containerClassName="section-title-reveal"
          >
            {t("servicesDetailTitle")}
          </ScrollReveal>
          <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 5 }}>{t("servicesDetailIntro")}</Typography>
          <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1} sx={{ mb: 5 }}>
            {[
              ["web", "developpement-web"],
              ["apps", "applications-sur-mesure"],
              ["seo", "referencement-seo"],
              ["sites", "creation-site-internet"],
            ].map(([key, path]) => (
              <Button key={path} component={Link} href={`/${path}`} variant="outlined">
                {content.servicePageLinks[key]}
              </Button>
            ))}
          </Stack>
          <Stack spacing={5}>
            {content.servicesDetail.map((service) => (
              <Box key={service.title} component="article">
                <Typography component="h3" variant="h5" sx={{ fontWeight: 800, mb: 1.5 }}>
                  {service.title}
                </Typography>
                {service.paragraphs.map((paragraph) => (
                  <Typography key={paragraph} color="text.secondary" sx={{ lineHeight: 1.8, mb: 1.5 }}>
                    {paragraph}
                  </Typography>
                ))}
              </Box>
            ))}
          </Stack>
        </Box>

        <Box component="section" sx={{ mb: { xs: 10, md: 16 }, maxWidth: 820 }}>
          <Typography variant="overline" color="primary">{t("locationEyebrow")}</Typography>
          <ScrollReveal
            as="h2"
            mode="scrub"
            effect="rise"
            baseOpacity={0.12}
            baseOffset={24}
            stagger={0.08}
            smoothing={0.45}
            containerClassName="section-title-reveal"
          >
            {t("locationTitle")}
          </ScrollReveal>
          <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>{t("locationDescription")}</Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>{t("locationExtra")}</Typography>
          <Button component={Link} href="/contact" variant="outlined" endIcon={<ArrowOutwardRounded />}>{t("locationCta")}</Button>
        </Box>

        <Box component="section" sx={{ mb: { xs: 10, md: 16 }, maxWidth: 820 }}>
          <Typography variant="overline" color="primary">{t("faqEyebrow")}</Typography>
          <ScrollReveal
            as="h2"
            mode="scrub"
            effect="rise"
            baseOpacity={0.12}
            baseOffset={24}
            stagger={0.08}
            smoothing={0.45}
            containerClassName="section-title-reveal"
          >
            {t("faqTitle")}
          </ScrollReveal>
          {content.faq.map((item) => (
            <Accordion key={item.question} disableGutters elevation={0} sx={{ bgcolor: "transparent", borderBottom: 1, borderColor: "divider", "&:before": { display: "none" } }}>
              <AccordionSummary expandIcon={<ExpandMoreRounded />}>
                <Typography fontWeight={600}>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Divider sx={{ mb: 6 }} />
        <Box
          component="section"
          sx={{ borderTop: 1, borderColor: "divider", pt: 5, pb: 3 }}
        >
          <Typography variant="overline" color="primary">{t("closingEyebrow")}</Typography>
          <ScrollReveal
            as="h2"
            mode="scrub"
            effect="rise"
            baseOpacity={0.12}
            baseOffset={24}
            stagger={0.08}
            smoothing={0.45}
            containerClassName="section-title-reveal"
          >
            {t("closingTitle")}
          </ScrollReveal>
          <Typography color="text.secondary" sx={{ maxWidth: 680, mb: 3 }}>
            {t("closingDescription")}
          </Typography>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            endIcon={<ArrowOutwardRounded />}
          >
            {t("cta")}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
