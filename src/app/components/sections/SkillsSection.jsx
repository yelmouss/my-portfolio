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

const World = dynamic(() => import("../ui/globe").then((mod) => mod.World), {
  loading: () => <p>Loading...</p>,

  ssr: false,
});
const { languages, frameworks, databases } = technologies;

const globeConfig = {
  pointSize: 4,
  globeColor: "#393E46",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(0, 173, 181, 0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
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
  const { t } = useTranslation();

  return (
    <Container>
      <Grid2 container spacing={4}>
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
              color="text.secondary"
              sx={{  mb: 4 }}
            >
              {t("hero.description")}
            </Typography>
            <Box width={420} height={400}>
              <World data={sampleArcs} globeConfig={globeConfig} />
            </Box>
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
            <Box mt={"auto"}>
              <Typography variant="h3" gutterBottom color="text.secondary">
                {t("skills.toolbelt")}
              </Typography>

              <Box>
                <Typography variant="h4" color="info.main" gutterBottom>
                  {t("skills.languages.title")}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  {t("skills.languages.description")}
                </Typography>
                <div className="flex flex-row w-full">
                  <AnimatedTooltip items={languages} />
                </div>
              </Box>
              <Divider sx={{ my: 4 }} />
              <Box>
                <Typography variant="h4" color="info.main" gutterBottom>
                  {t("skills.frameworks.title")}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  {t("skills.frameworks.description")}
                </Typography>
                <div className="flex flex-row w-full">
                  <AnimatedTooltip items={frameworks} />
                </div>
              </Box>
              <Divider sx={{ my: 4 }} />
              <Box>
                <Typography variant="h4" color="info.main" gutterBottom>
                  {t("skills.databases.title")}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  {t("skills.databases.description")}
                </Typography>
                <div className="flex flex-row w-full">
                  <AnimatedTooltip items={databases} />
                </div>
              </Box>
            </Box>
            {/* Add About Button */}
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
}
