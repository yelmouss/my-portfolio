"use client";
import { useState, useEffect } from "react";
import { Container, Typography, Box, Chip, Stack, Grid, Paper, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Certifs } from "../../../data/Certificates";
import { GlowingEffect } from "../../components/ui/glowing-effect";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import { LinkPreview } from "../../components/ui//link-preview";


// Lazy load Lottie
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => null
});

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};



// Simple tooltip component
const SimpleTooltip = ({ children, title }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      sx={{ position: 'relative' }}
    >
      {children}
      {isVisible && (
        <Box
          sx={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            marginBottom: '4px',
            whiteSpace: 'nowrap',
            zIndex: 100
          }}
        >
          {title}
        </Box>
      )}
    </Box>
  );
};

const AboutClient = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [animationData, setAnimationData] = useState(null);
  const [developerAnimation, setDeveloperAnimation] = useState(null);

  useEffect(() => {
    // Charge l'animation principale
    fetch("/Animation - 1742265567636.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));

    // Charge l'animation du développeur
    fetch("/AnimationDeveloper.json")
      .then((response) => response.json())
      .then((data) => setDeveloperAnimation(data))
      .catch((error) => console.error("Error loading developer animation:", error));
  }, []);

  // Personal info with icons
  const personalInfo = [
    { key: "birthday", value: "24 October 1994", icon: "🎂" },
    { key: "phone", value: "+212 612 865 681", icon: "📱" },
    { key: "city", value: "Rabat, Morocco", icon: "📍" },
    { key: "age", value: "30", icon: "⏳" },
    { key: "degree", value: "Diploma Level 5 Rncp", icon: "🎓" },
    { key: "email", value: "yelmouss.devt@gmail.com", icon: "✉️" },
    { key: "freelance", value: "Available", icon: "👨‍💻" },
  ];

  // Transform education data
  const educationItems = ["webdev", "bachelor"].map(edu => ({
    title: t(`about.education.${edu}.title`),
    period: t(`about.education.${edu}.period`),
    description: t(`about.education.${edu}.description`)
  }));

  // Experience data
  const experienceItems = t("about.experience.positions", { returnObjects: true });

  // Company icons
  const companyIcons = {
    GoMyCode: { logo: "/companies/go.jpeg" },
    "Sitel Group": { logo: "/companies/sitel.jpg" },
    Intelcia: { logo: "/companies/intelcia.png" },
    "Webhelp Maroc": { logo: "/companies/webhelp.png" }
  };

  // Glass Card Style
  const glassCardStyle = {
    background: theme.palette.mode === "dark"
      ? "rgba(30,41,59,0.4)"
      : "rgba(255,255,255,0.8)",
    backdropFilter: "blur(10px)",
    border: "1px solid",
    borderColor: theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.1)"
      : "rgba(255,255,255,0.7)",
    borderRadius: "16px",
    padding: "24px",
    position: "relative",
    overflow: "hidden"
  };



  return (
    <Container maxWidth="xl" className="py-10">
      {/* Hero Section */}
      <Box sx={{ mb: 10, textAlign: "center", position: "relative" }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Typography
            variant="h1"
            className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500"
            sx={{
              fontSize: { xs: "3rem", md: "4.5rem" },
              fontWeight: 800,
              mb: 2,
              textShadow: theme.palette.mode === "dark"
                ? "0 0 40px rgba(0,173,181,0.3)"
                : "none"
            }}
          >
            {t("about.title")}
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: "800px", mx: "auto", mb: 6 }}
          >
            {t("about.subtitle")}
          </Typography>
        </motion.div>
        <Divider sx={{ my: 2 }} />
        {/* Animation */}
        {animationData && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ width: "240px", height: "240px", mx: "auto", position: "relative" }}>
              <Lottie
                animationData={animationData}
                loop={true}
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </motion.div>
        )}
      </Box>

      {/* Role Section */}
      <Box sx={{ mb: 10 }}>
        <ContainerScroll
        // titleComponent={
        //   <Box className="text-center">
        //     <motion.div className="flex flex-wrap justify-center">
        //       {t("about.role").split('').map((char, index) => (
        //         <Typography
        //           key={index}
        //           component={motion.span}
        //           className="inline-block"
        //           sx={{
        //             display: 'inline-block',
        //             color: theme.palette.info.main,
        //             fontWeight: 700,
        //             textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        //             fontSize: {
        //               xs: '2rem',
        //               sm: '2.5rem',
        //               md: '3.75rem'
        //             }
        //           }}
        //           initial={{ opacity: 0, y: -20, rotateX: -90 }}
        //           animate={{ opacity: 1, y: 0, rotateX: 0 }}
        //           transition={{
        //             duration: 0.8,
        //             delay: index * 0.05,
        //             type: 'spring',
        //             stiffness: 100
        //           }}
        //           whileHover={{
        //             scale: 1.2,
        //             rotateY: 10,
        //             color: theme.palette.secondary.main,
        //             transition: { duration: 0.2 }
        //           }}
        //         >
        //           {char === ' ' ? '\u00A0' : char}
        //         </Typography>
        //       ))}
        //     </motion.div>
        //   </Box>
        // }
        >
          <Box
            sx={{
              ...glassCardStyle,
              color: theme.palette.text.primary
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                maxWidth: "800px",
                mx: "auto"
              }}
            >
              {t("about.intro")}
            </Typography>

            {/* Personal Info Cards */}
            <Box sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 3,
              mt: 4
            }}>
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: theme.palette.background.paper,
                      height: "100%"
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `linear-gradient(135deg, ${theme.palette.info.main}22, ${theme.palette.info.main}44)`
                      }}
                    >
                      <Typography variant="h6">{info.icon}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        {t(`about.personalInfo.${info.key}`)}
                      </Typography>
                      <Typography variant="body1" fontWeight="medium" color="text.primary">
                        {info.value}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </ContainerScroll>
      </Box>

      {/* Experience Timeline */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mb-16"
      >
        <Typography
          variant="h3"
          align="center"
          sx={{ color: theme.palette.info.main, fontWeight: 700, mb: 6 }}
        >
          {t("about.experience.title")}
        </Typography>

        <Box className="relative">
          {/* Vertical line */}
          <Box
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 z-0"
            sx={{
              background: `linear-gradient(to bottom, transparent, ${theme.palette.info.main}, transparent)`
            }}
          />

          {/* Timeline items */}
          <Box className="relative z-10 space-y-12">
            {experienceItems.map((position, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInUp}
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
              >
                {/* Content */}
                <Box className="w-1/2 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="w-full max-w-md"
                  >
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        backgroundColor: theme.palette.background.paper,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                        border: "1px solid",
                        borderColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                        position: "relative",
                        overflow: "hidden"
                      }}
                    >
                      {/* Accent bar */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 3,
                          backgroundColor: theme.palette.info.main
                        }}
                      />

                      {/* Content */}
                      <Box sx={{ pt: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{ color: theme.palette.info.main, fontWeight: 600 }}
                        >
                          {position.role}
                        </Typography>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1, mb: 2 }}>
                          <Box sx={{ position: "relative", width: 24, height: 24, flexShrink: 0 }}>
                            <Image
                              src={companyIcons[position.company].logo}
                              alt={position.company}
                              fill
                              style={{ objectFit: "contain", borderRadius: "50%" }}
                            />
                          </Box>
                          <Typography variant="body2" color="text.primary" fontWeight="medium">
                            {position.company}
                          </Typography>
                        </Box>

                        <Chip
                          label={position.year}
                          size="small"
                          sx={{
                            backgroundColor: theme.palette.info.main,
                            color: "#fff",
                            fontWeight: 500
                          }}
                        />
                      </Box>
                    </Box>
                  </motion.div>
                </Box>

                {/* Center dot */}
                <Box className="relative">
                  <Box
                    sx={{
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      backgroundColor: theme.palette.info.main,
                      border: "3px solid",
                      borderColor: theme.palette.background.paper,
                      position: "relative"
                    }}
                  >
                    <GlowingEffect
                      blur={5}
                      borderWidth={0}
                      spread={30}
                      glow={true}
                      variant="default"
                    />
                  </Box>
                </Box>

                {/* Empty space */}
                <Box className="w-1/2"></Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </motion.div>

      {/* Education Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mb-16"
      >
        <Typography
          variant="h3"
          align="center"
          sx={{ color: theme.palette.info.main, fontWeight: 700, mb: 6 }}
        >
          {t("about.education.title")}
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 4
          }}
        >
          {educationItems.map((education, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Box sx={{ position: "relative", height: "100%" }}>
                <Box className="absolute inset-0 rounded-2xl -z-10">
                  <GlowingEffect
                    blur={10}
                    borderWidth={4}
                    spread={20}
                    glow={true}
                    disabled={true}
                  // proximity={100}
                  />
                </Box>

                <Box
                  sx={{
                    ...glassCardStyle,
                    height: "100%",
                    color: theme.palette.text.primary
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        backgroundColor: theme.palette.info.main,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <Typography variant="h6" sx={{ color: '#fff' }}>
                        {idx + 1}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{ color: theme.palette.info.main, fontWeight: 600 }}
                    >
                      {education.title}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "inline-block",
                      mb: 2,
                      px: 2,
                      py: 0.5,
                      borderRadius: 50,
                      backgroundColor: theme.palette.mode === "dark" ? "rgba(0,173,181,0.15)" : "rgba(0,173,181,0.1)"
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.info.main, fontWeight: 500 }}
                    >
                      {education.period}
                    </Typography>
                  </Box>

                  <Typography variant="body1">
                    {education.description}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </motion.div>

      {/* Certifications with SimpleMacBook */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mb-8"
      >
        <Typography
          variant="h3"
          align="center"
          sx={{ color: theme.palette.info.main, fontWeight: 700, mb: 6 }}
        >
          {t("about.certifications.title")}
        </Typography>

        {/* Animation developer  */}
        {developerAnimation && (
          <Box sx={{ maxWidth: "750px", mx: "auto", my: 4, position: "relative" }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Lottie
                animationData={developerAnimation}
                loop={true}
                style={{ width: "100%", height: "300px" }}
              />
            </motion.div>
          </Box>
        )}

        {/* Certificate chips */}
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="h6" gutterBottom sx={{ color: theme.palette.text.secondary }}>
            {t("about.certifications.clickToView")}
          </Typography>
          <Stack
            direction="row"
            spacing={1.5}
            useFlexGap
            flexWrap="wrap"
            justifyContent="center"
            sx={{ mt: 2 }}
          >
            {Certifs.map((cert, idx) => (
              <SimpleTooltip key={idx} title={cert.title}>
                <LinkPreview
                  url={cert.LinkCert}          
                  className="font-bold"
                >
                  

                  <Chip
                    label={cert.title.length > 15 ? `${cert.title.substring(0, 15)}...` : cert.title}
                    onClick={() => window.open(cert.LinkCert, '_blank')}
                    sx={{
                      bgcolor: theme.palette.info.main,
                      color: "#fff",
                      fontWeight: 500,
                      '&:hover': {
                        bgcolor: theme.palette.info.dark,
                      },
                      my: 0.5
                    }}
                    clickable
                  />
                </LinkPreview>{" "}
              </SimpleTooltip>
            ))}
          </Stack>
        </Box>
      </motion.div>
    </Container>
  );
};

export default AboutClient;