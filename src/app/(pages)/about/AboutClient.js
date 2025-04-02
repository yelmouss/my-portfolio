"use client";
import { useState, useEffect } from "react";
import { Container, Typography, Box, Chip, Grid, Divider, Card, CardContent, CardMedia, CardActionArea } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Certifs } from "../../../data/Certificates";
import { GlowingEffect } from "../../components/ui/glowing-effect";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";

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

// Certificate Card Component
const CertificateCard = ({ certificate, index }) => {
  const theme = useTheme();
  const [showIframe, setShowIframe] = useState(false);
  
  return (
    <motion.div
      custom={index}
      variants={fadeInUp}
      whileHover={{ 
        y: -10,
        boxShadow: theme.palette.mode === "dark" 
          ? "0 20px 30px rgba(0,173,181,0.2)"
          : "0 20px 30px rgba(0,0,0,0.1)"
      }}
      transition={{ duration: 0.3 }}
    >
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '16px',
          overflow: 'hidden',
          background: theme.palette.mode === "dark"
            ? "rgba(30,41,59,0.7)"
            : "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          border: "1px solid",
          borderColor: theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.1)"
            : "rgba(0,0,0,0.05)"
        }}
      >
        <CardActionArea onClick={() => setShowIframe(!showIframe)}>
          {!showIframe ? (
            <CardMedia
              component="div"
              sx={{ 
                height: 180,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(180deg, transparent 60%, ${theme.palette.background.paper} 100%)`
                }
              }}
            >
              <Image
                src={certificate.ImageUrl}
                alt={certificate.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </CardMedia>
          ) : (
            <Box sx={{ height: 350, p: 1 }}>
              <iframe
                src={certificate.LinkCert}
                title={certificate.title}
                width="100%"
                height="100%"
                style={{ border: 'none', borderRadius: '8px' }}
              />
            </Box>
          )}
          <CardContent>
            <Typography 
              variant="h6" 
              component="h3"
              sx={{ 
                mb: 1, 
                color: theme.palette.info.main,
                fontWeight: 600,
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2
              }}
            >
              {certificate.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {certificate.issuer}
            </Typography>
            <Chip
              label={showIframe ? "Hide Certificate" : "View Certificate"}
              size="small"
              sx={{
                mt: 2,
                bgcolor: theme.palette.info.main,
                color: "#fff",
                '&:hover': {
                  bgcolor: theme.palette.info.dark,
                }
              }}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </motion.div>
  );
};

// Experience Timeline Item Component
const ExperienceItem = ({ position, index, theme }) => {
  return (
    <motion.div
      custom={index}
      variants={fadeInUp}
      className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
    >
      {/* Content */}
      <Box className="w-1/2 flex items-center justify-center">
        <motion.div
          whileHover={{ 
            scale: 1.03,
            boxShadow: theme.palette.mode === "dark" 
              ? `0 10px 30px ${theme.palette.info.main}33` 
              : "0 10px 30px rgba(0,0,0,0.1)"
          }}
          className="w-full max-w-md"
        >
          <Box
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: theme.palette.mode === "dark" 
                ? "rgba(30,41,59,0.7)" 
                : theme.palette.background.paper,
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
                background: `linear-gradient(90deg, ${theme.palette.info.light}, ${theme.palette.info.main})`
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

              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1, mb: 2 }}>
                {/* Company logo - improved to show full logo */}
                <Box 
                  sx={{ 
                    position: "relative", 
                    width: 40, 
                    height: 40, 
                    flexShrink: 0,
                    borderRadius: "4px",
                    overflow: "hidden",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#fff"
                  }}
                >
                  <Image
                    src={position.logoUrl}
                    alt={position.company}
                    width={35}
                    height={35}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Typography variant="body2" color="text.primary" fontWeight="medium">
                  {position.company}
                </Typography>
              </Box>
              
              {/* Position description in English */}
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ mb: 2 }}
              >
                {position.description}
              </Typography>

              <Chip
                label={position.year}
                size="small"
                sx={{
                  backgroundColor: `${theme.palette.info.main}`,
                  color: "#fff",
                  fontWeight: 500
                }}
              />
            </Box>
          </Box>
        </motion.div>
      </Box>

      {/* Center dot with pulse animation */}
      <Box className="relative">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <Box
            sx={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              backgroundColor: theme.palette.info.main,
              border: "3px solid",
              borderColor: theme.palette.background.paper,
              position: "relative",
              zIndex: 2
            }}
          >
            <GlowingEffect
              blur={8}
              borderWidth={0}
              spread={30}
              glow={true}
              variant="default"
            />
          </Box>
        </motion.div>
      </Box>

      {/* Empty space */}
      <Box className="w-1/2"></Box>
    </motion.div>
  );
};

// Education Card Component
const EducationCard = ({ education, idx, theme, glassCardStyle }) => {
  return (
    <motion.div
      key={idx}
      custom={idx}
      variants={fadeInUp}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      <Box sx={{ position: "relative", height: "100%" }}>
        <Box className="absolute inset-0 rounded-2xl -z-10">
          <GlowingEffect
            blur={10}
            borderWidth={4}
            spread={20}
            glow={true}
            disabled={true}
          />
        </Box>

        <Box
          sx={{
            ...glassCardStyle,
            height: "100%",
            color: theme.palette.text.primary,
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: theme.palette.mode === "dark" 
                ? `0 20px 30px ${theme.palette.info.main}22` 
                : "0 20px 30px rgba(0,0,0,0.1)",
            }
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${theme.palette.info.light}, ${theme.palette.info.main})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: `0 4px 10px ${theme.palette.info.main}55`,
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
              background: `linear-gradient(90deg, ${theme.palette.info.main}20, ${theme.palette.info.main}10)`
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
  );
};

const AboutClient = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [animationData, setAnimationData] = useState(null);
  const [developerAnimation, setDeveloperAnimation] = useState(null);

  useEffect(() => {
    // Load main animation
    fetch("/Animation - 1742265567636.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));

    // Load developer animation
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

  // Company icons mappings
  const companyIcons = {
    GoMyCode: "/companies/go.jpeg",
    "Sitel Group": "/companies/sitel.jpg",
    Intelcia: "/companies/intelcia.png",
    "Webhelp Maroc": "/companies/webhelp.png"
  };

  // Function to get position descriptions in English
  function getPositionDescription(role) {
    const descriptions = {
      "Software Instructor": "Teaching web development technologies and mentoring students in software engineering projects.",
      "Workforce Manager": "Managing team schedules, forecasting, and optimizing resource allocation for operational efficiency.",
      "Web Developer": "Developing and maintaining web applications using React, Node.js, and other modern technologies.",
      "Resource Planner": "Analyzing staffing needs, creating schedules, and optimizing workforce deployment.",
      "Analytics Specialist": "Analyzing operational data to identify trends and provide insights for business improvement.",
      "Real-Time Analyst": "Monitoring real-time metrics, making adjustments to staffing, and ensuring service level compliance."
    };
    return descriptions[role] || "Working on various projects and initiatives.";
  }

  // Process experience items with descriptions and logo URLs
  const experienceItems = t("about.experience.positions", { returnObjects: true }).map(position => ({
    ...position,
    description: getPositionDescription(position.role),
    logoUrl: companyIcons[position.company]
  }));

  // Ensure educationItems is always an array
  const rawEducationItems = t("about.education.items", { returnObjects: true });
  const educationItems = Array.isArray(rawEducationItems) ? rawEducationItems : [
    {
      title: "Full Stack Development",
      period: "2021 - 2022",
      description: "Comprehensive training in modern web development technologies including React, Node.js, and database management."
    },
    {
      title: "Bachelor in Management",
      period: "2015 - 2018",
      description: "Studied business administration with focus on operational management and analytics."
    }
  ];

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

  // Section header style
  const sectionHeaderStyle = {
    position: 'relative', 
    color: theme.palette.info.main, 
    fontWeight: 700, 
    mb: 6, 
    textAlign: 'center',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '4px',
      backgroundColor: theme.palette.info.main,
      borderRadius: '2px'
    }
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

      {/* Personal Info Section */}
      <Box sx={{ mb: 10 }}>
        <ContainerScroll>
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
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" },
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
                      backgroundColor: theme.palette.mode === "dark" 
                        ? "rgba(30,41,59,0.7)" 
                        : theme.palette.background.paper,
                      height: "100%",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                      border: "1px solid",
                      borderColor: theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(0,0,0,0.03)",
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `linear-gradient(135deg, ${theme.palette.info.light}, ${theme.palette.info.main})`,
                        boxShadow: `0 4px 20px ${theme.palette.info.main}33`,
                      }}
                    >
                      <Typography variant="h6" sx={{ color: "#fff" }}>{info.icon}</Typography>
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

      {/* Certifications Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mb-16"
      >
        <Typography variant="h3" sx={sectionHeaderStyle}>
          {t("about.certifications.title")}
        </Typography>

        <Typography 
          variant="h6" 
          color="text.secondary" 
          align="center" 
          sx={{ mb: 5 }}
        >
          {t("about.certifications.subtitle")}
        </Typography>

        {/* Developer animation above certificates */}
        {developerAnimation && (
          <Box sx={{ maxWidth: "750px", mx: "auto", mb: 6, position: "relative" }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Lottie
                animationData={developerAnimation}
                loop={true}
                style={{ width: "100%", height: "280px" }}
              />
            </motion.div>
          </Box>
        )}

        {/* Certificate Cards Grid */}
        <Grid container spacing={3}>
          {Certifs.map((cert, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <CertificateCard certificate={cert} index={idx} />
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mb-16"
      >
        <Typography variant="h3" sx={sectionHeaderStyle}>
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
              <ExperienceItem 
                key={index}
                position={position}
                index={index}
                theme={theme}
              />
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
  <Typography variant="h3" sx={sectionHeaderStyle}>
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
      <EducationCard
        key={idx}
        education={education}
        idx={idx}
        theme={theme}
        glassCardStyle={glassCardStyle}
      />
    ))}
  </Box>
</motion.div>
    </Container>
  );
};

export default AboutClient;