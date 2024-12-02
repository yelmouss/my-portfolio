"use client";
import Image from "next/image";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import { Divider, Grid2 } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";
import dynamic from "next/dynamic";
import { sampleArcs } from "@/data/sampleArcs";

const World = dynamic(
  () => import("./components/ui/globe").then((mod) => mod.World),
  {
    loading: () => <p>Loading...</p>,

    ssr: false,
  }
);

const languages = [
  {
    id: 1,
    name: "Javascript",
    designation: "Programming language",
    image: "/stack/Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    id: 2,
    name: "PHP",
    designation: "Programming language",
    image: "/stack/PHP_logo.png",
  },
  {
    id: 3,
    name: "HTML",
    designation: "Markup language",
    image: "/stack/html5.webp",
  },
  {
    id: 4,
    name: "CSS",
    designation: "Style language",
    image: "/stack/css.webp",
  },
];

const frameworks = [
  {
    id: 1,
    name: "React",
    designation: "JavaScript library",
    image: "/stack/react.jpg",
  },
  {
    id: 2,
    name: "Next",
    designation: "React framework",
    image: "/stack/next.jpg",
  },
  {
    id: 3,
    name: "Tailwind",
    designation: "CSS framework",
    image: "/stack/tailwind.webp",
  },
  {
    id: 4,
    name: "Bootstrap",
    designation: "CSS framework",
    image: "/stack/bootstrap.jpg",
  },
  {
    id: 8,
    name: "Expo",
    designation: "React Native framework",
    image: "/stack/expo.webp",
  },
  {
    id: 5,
    name: "Laravel",
    designation: "PHP framework",
    image: "/stack/laravel.webp",
  },
  {
    id: 6,
    name: "Express",
    designation: "Node.js framework",
    image: "/stack/express.png",
  },
  {
    id: 7,
    name: "React Native",
    designation: "Mobile framework",
    image: "/stack/react-native.png",
  },
];

const Sgbd = [
  {
    id: 1,
    name: "MySQL",
    designation: "Database",
    image: "/logo.png",
  },
  {
    id: 2,
    name: "PostgreSQL",
    designation: "Database",
    image: "/logo.png",
  },
  {
    id: 3,
    name: "MongoDB",
    designation: "Database",
    image: "/logo.png",
  },
  {
    id: 4,
    name: "Firebase",
    designation: "Database",
    image: "/logo.png",
  },
];

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

export default function Home() {
  return (
    <main>
      <Container maxWidth="xl" className="flex flex-col items-center py-5">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <Box
            sx={{
              position: "relative",
              width: 200,
              height: 200,
              borderRadius: "50%",
              overflow: "hidden",
              mb: 4,
              boxShadow: 6,
            }}
          >
            <Image
              src="/yass.jpg" // Add your photo path here
              alt="Yassine ELMOUSS"
              fill
              style={{ objectFit: "cover", filter: "bluescale(0.9)" }}
              priority
            />
          </Box>
          <Typography
            variant="h1"
            color="text.secondary"
            component="h1"
            // gutterBottom
          >
            Hi, I'm Yassine ELMOUSS
          </Typography>
        </motion.div>
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
                Software Developer
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ maxWidth: 800, mb: 4 }}
              >
                Passionate about creating innovative solutions and turning
                complex problems into elegant applications. Specializing in
                full-stack development with modern technologies.
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
                  There is my toolbelt for success.
                </Typography>

                <Box>
                  <Typography variant="h4" color="info.main" gutterBottom>
                    Programming Languages
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                  >
                    Core technologies I work with daily:
                  </Typography>
                  <div className="flex flex-row w-full">
                    <AnimatedTooltip items={languages} />
                  </div>
                </Box>
                <Box>
                  <Typography variant="h4" color="info.main" gutterBottom>
                    Frameworks & Libraries
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                  >
                    Modern tools I use to build robust applications:
                  </Typography>
                  <div className="flex flex-row w-full">
                    <AnimatedTooltip items={frameworks} />
                  </div>
                </Box>

                <Box>
                  <Typography variant="h4" color="info.main" gutterBottom>
                    Database Technologies
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                  >
                    Database systems I'm proficient with:
                  </Typography>
                  <div className="flex flex-row w-full">
                    <AnimatedTooltip items={Sgbd} />
                  </div>
                </Box>
              </Box>
              {/* Add About Button */}
            </Box>
          </Grid2>
        </Grid2>

        <Divider sx={{ my: 4 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link href="/about" passHref>
            <Button
              component={motion.button}
              whilehover={{ scale: 1.05 }}
              whiletap={{ scale: 0.95 }}
              variant="contained"
              color="info"
              size="large"
              sx={{
                borderRadius: 2,
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                textTransform: "none",
                boxShadow: 2,
                "&:hover": {
                  boxShadow: 4,
                },
              }}
            >
              Learn More About Me →
            </Button>
          </Link>
        </Box>
      </Container>
    </main>
  );
}
