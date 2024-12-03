"use client";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2";
import { useTranslation } from "react-i18next";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import technologies from "@/data/technologies.json";
import dynamic from "next/dynamic";
import { sampleArcs } from "@/data/sampleArcs";
import { Container, Divider } from "@mui/material";
import ActionButon from "./ActionButon";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "@emotion/react";

const World = dynamic(() => import("../ui/globe").then((mod) => mod.World), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const { languages, frameworks, databases } = technologies;

const globeConfig = {
  pointSize: 8,
  globeColor: "#1282a2",
  showAtmosphere: true,
  atmosphereColor: "#00ADB5",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(0, 173, 181, 0.7)",
  ambientLight: "#00ADB5",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#00ADB5",
  pointLight: "#222831",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};
export default function SkillsSection() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Container
      sx={{
        p: 4,
      }}
    >
      <Grid2 container spacing={8}>
        <Grid2 size={{ xs: 12, md: 7 }}>
          {/* Hero Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              gap: 4,
              py: 4,
            }}
          >
            {/* Profile Image */}
            <Typography variant="h2" color="info.main" gutterBottom>
              {t("hero.title")}
            </Typography>
            <Typography
              variant="h5"
              sx={{ maxWidth: 800, mb: 4 }}
              color="secondary.main"
              textAlign={"justify"}
            >
              <TypeAnimation
                sequence={[t("hero.description"), 1000]}
                wrapper="span"
                speed={15}
                repeat={0}
                cursor            
              />
            </Typography>
            <Box width={{ xs: 200, md: 350 }} height={{ xs: 200, md: 400 }}>
              <World data={sampleArcs} globeConfig={globeConfig} />
            </Box>

            <ActionButon />
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 5 }}>
          {/* Skills Section */}

          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            sx={{ py: 4 }}
            className="flex flex-col justify-center h-full"
          >
            <Container>
              <Box mt={"auto"}>
                <Typography variant="h3" gutterBottom color="text.secondary">
                  {t("skills.toolbelt")}
                </Typography>

                <Box>
                  <Typography variant="h4" color="info.main" gutterBottom>
                    <TypeAnimation
                      sequence={[t("skills.languages.title"), 1000]}
                      wrapper="span"
                      speed={100}
                      repeat={0}
                      cursor={false}
                    />
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                  >
                    {t("skills.languages.description")}
                  </Typography>
                  <Container className="flex flex-row flex-wrap">
                    <AnimatedTooltip items={languages} />
                  </Container>
                </Box>
                <Divider sx={{ my: 4 }} />
                <Box>
                  <Typography variant="h4" color="info.main" gutterBottom>
                    <TypeAnimation
                      sequence={[t("skills.frameworks.title"), 1000]}
                      wrapper="span"
                      speed={50}
                      repeat={0}
                      cursor={false}
                    />
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                  >
                    {t("skills.frameworks.description")}
                  </Typography>
                  <Container className="flex flex-row flex-wrap">
                    <AnimatedTooltip items={frameworks} />
                  </Container>
                </Box>
                <Divider sx={{ my: 4 }} />
                <Box>
                  <Typography variant="h4" color="info.main" gutterBottom>
                    <TypeAnimation
                      sequence={[t("skills.databases.title"), 1000]}
                      wrapper="span"
                      speed={50}
                      repeat={0}
                      cursor={false}
                    />
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                  >
                    {t("skills.databases.description")}
                  </Typography>
                  <Container className="flex flex-row flex-wrap">
                    <AnimatedTooltip items={databases} />
                  </Container>
                </Box>
              </Box>
            </Container>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
}
