"use client";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useTheme } from "@emotion/react";

export default function HeroSection() {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <Box
        sx={{
          position: "relative",
          width: 180,
          height: 180,
          borderRadius: "50%",
          overflow: "hidden",
          mb: 4,
          boxShadow: 6,
          border: `5px solid ${theme.palette.secondary.main}`,
        }}
      >
        <Image
          src="/yass.jpg" // Add your photo path here
          alt="Yassine ELMOUSS"
          fill
          style={{
            objectFit: "cover",
            filter: "bluescale(0.9)",
            objectPosition: "top",
          }}
          priority
        />
      </Box>
      {/* <Typography
        variant="h1"
        color="text.secondary"
        component="h1"
        textAlign={"center"}
        // gutterBottom
      >
        {t("hero.greeting")}
      </Typography> */}
    </motion.div>
  );
}
