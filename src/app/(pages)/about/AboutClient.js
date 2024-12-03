"use client";
import { Container, Typography, Grid, Box, Paper } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import { ContainerScroll } from "@/app/components/ui/container-scroll-animation";

const AboutClient = () => {

    const { t } = useTranslation();
    const theme = useTheme();
  

    const personalInfo = [
      { key: "birthday", value: "24 October 1994" },
      { key: "phone", value: "+212 612 865 681" },
      { key: "city", value: "Rabat, Morocco" },
      { key: "age", value: "30" },
      { key: "degree", value: "Diploma Level 5 Rncp" },
      { key: "email", value: "yelmouss.devt@gmail.com" },
      { key: "freelance", value: "Available" }
    ];
  

  
    const companyLogos = {
      GoMyCode: "/companies/go.jpeg",
      "Sitel Group": "/companies/sitel.jpg",
      Intelcia: "/companies/intelcia.png",
      "Webhelp Maroc": "/companies/webhelp.png"
    };
  
    const glassMorphism = {
      background: theme.palette.mode === "dark"
        ? "linear-gradient(145deg, rgba(30,41,59,0.4), rgba(30,41,59,0.1))"
        : "linear-gradient(145deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2))",
      backdropFilter: "blur(10px)",
      border: "1px solid",
      borderColor: theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.1)"
        : "rgba(255,255,255,0.7)",
      boxShadow: theme.palette.mode === "dark"
        ? "0 8px 32px rgba(0,0,0,0.3)"
        : "0 8px 32px rgba(31,38,135,0.15)"
    };
  return (
    <Container maxWidth="xl" className="py-10">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        sx={{
          textAlign: "center",
          mb: 8,
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: -100,
            left: "50%",
            transform: "translateX(-50%)",
            width: "200px",
            height: "200px",
            background: theme.palette.info.main,
            filter: "blur(100px)",
            opacity: 0.2,
            borderRadius: "50%",
            zIndex: -1,
          },
        }}
      >
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography
            variant="h2"
            color="info.main"
            gutterBottom
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            {t("about.title")}
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: "800px", mx: "auto" }}
          >
            {t("about.subtitle")}
          </Typography>
        </motion.div>
      </Box>

      <Grid container spacing={6}>
        {/* Profile Image */}
        <Grid item xs={12} md={3}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
         
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  height: "100%",
                  overflow: "hidden",
                  borderRadius: 4,
                  ...glassMorphism,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 3,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(45deg, rgba(0,173,181,0.2), transparent)",
                      pointerEvents: "none",
                    },
                  }}
                >
                  <Image
                    src="/hack2.jpg"
                    alt="Profile"
                    width={300}
                    height={300}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      transform: "scale(1.02)",
                    }}
                  />
                </Box>
              </Paper>
            
          </motion.div>
        </Grid>

        {/* Personal Info */}
        <Grid item xs={12} md={9}>
          <ContainerScroll
          // titleComponent={
          //   <>
          //     <h1 className="text-4xl font-semibold text-black dark:text-white">
          //       Unleash the power of <br />
          //       <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
          //         Scroll Animations
          //       </span>
          //     </h1>
          //   </>
          // }
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 4,
                ...glassMorphism,
                bgcolor: "primary.main",
              }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  color="info.main"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    background: "linear-gradient(45deg, #00ADB5, #393E46)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {t("about.role")}
                </Typography>
                <Typography
                  paragraph
                  sx={{
                    mb: 4,
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                  }}
                >
                  {t("about.intro")}
                </Typography>

                <Grid container spacing={3}>
                  {personalInfo.map((info) => (
                    <Grid item xs={12} sm={6} key={info.key}>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          p: 1,
                          borderRadius: 2,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            bgcolor: "background.paper",
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        <Typography fontWeight="bold" color="info.main">
                          {t(`about.personalInfo.${info.key}`)}:
                        </Typography>
                        <Typography>{info.value}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Paper>
          </ContainerScroll>
        </Grid>

        {/* Education */}
        <Grid item xs={12} md={6} className="flex justify-center">
          
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 4,
              ...glassMorphism,
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              color="info.main"
              sx={{ mb: 4 }}
            >
              {t("about.education.title")}
            </Typography>
            <Grid container spacing={4}>
              {["webdev", "bachelor"].map((edu) => (
                <Grid item xs={12} md={6} key={edu}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        bgcolor: "background.paper",
                        boxShadow: 1,
                        height: "100%",
                      }}
                    >
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{ color: "info.main", fontWeight: 600 }}
                      >
                        {t(`about.education.${edu}.title`)}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="info.main"
                        sx={{ mb: 2, fontWeight: 500 }}
                      >
                        {t(`about.education.${edu}.period`)}
                      </Typography>
                      <Typography sx={{ lineHeight: 1.8 }}>
                        {t(`about.education.${edu}.description`)}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Experience Timeline */}
        <Grid item xs={12} md={6}>
       
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 4,
                ...glassMorphism,
                position: "relative",
                overflow: "hidden",
                bgcolor: "primary.main",
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                color="info.main"
                sx={{ mb: 4 }}
              >
                {t("about.experience.title")}
              </Typography>

              <Timeline position="alternate">
                {t("about.experience.positions", { returnObjects: true }).map(
                  (position, index) => (
                    <TimelineItem key={index}>
                      <TimelineSeparator>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <TimelineDot
                            sx={{
                              p: 0,
                              overflow: "hidden",
                              bgcolor: "background.paper",
                              boxShadow: 3,
                              border: "2px solid",
                              borderColor: "info.main",
                            }}
                          >
                            <Box
                              sx={{
                                width: 50,
                                height: 50,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                bgcolor: "white",
                                p: 1,
                              }}
                            >
                              <Image
                                src={companyLogos[position.company]}
                                alt={position.company}
                                width={40}
                                height={40}
                                style={{ objectFit: "contain" }}
                              />
                            </Box>
                          </TimelineDot>
                        </motion.div>
                        <TimelineConnector sx={{ bgcolor: "info.main" }} />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Box
                          sx={{
                            p: 3,
                            borderRadius: 2,
                            bgcolor: "background.paper",
                            width: "auto",
                            boxShadow: 1,
                            transition: "all 0.3s ease",
                            "&:hover": {
                              transform: "translateY(-3px)",
                              boxShadow: 3,
                            },
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{ color: "info.main", fontWeight: 600 }}
                          >
                            {position.role}
                          </Typography>
                          <Typography color="text.secondary" gutterBottom>
                            {position.company}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "info.main",
                              fontWeight: 500,
                            }}
                          >
                            {position.year}
                          </Typography>
                        </Box>
                      </TimelineContent>
                    </TimelineItem>
                  )
                )}
              </Timeline>
            </Paper>
        
        </Grid>
      </Grid>
    </motion.div>
  </Container>
  )
}

export default AboutClient