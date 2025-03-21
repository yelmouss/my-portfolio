"use client";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2";
import { useTranslation } from "react-i18next";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import technologies  from "../../../data/technologies.json";

import dynamic from "next/dynamic";
import { sampleArcs } from "../../../data/sampleArcs";
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
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 1,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
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
            <Box
              sx={{
                perspective: '1000px',
                width: '100%',
                textAlign: 'center',
                mb: 4
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {t("hero.title").split('').map((char, index) => (
                  <Typography
                    key={index}
                    component={motion.span}
                    variant="h1"
                    sx={{
                      display: 'inline-block',
                      color: theme.palette.info.main,
                      fontWeight: 700,
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                      fontSize: {
                        xs: '2rem',
                        sm: '2.5rem',
                        md: '3.75rem'
                      }
                    }}
                    initial={{ opacity: 0, y: -20, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.05,
                      type: 'spring',
                      stiffness: 100
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotateY: 10,
                      color: theme.palette.secondary.main,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </Typography>
                ))}
              </motion.div>
            </Box>
            <Typography
              variant="h5"
              sx={{ maxWidth: 800, mb: 4 }}
              color="secondary.main"
              textAlign={"justify"}
            >
              <TypeAnimation
                sequence={[t("hero.description"), 1000]}
                wrapper="span"
                speed={75}
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
