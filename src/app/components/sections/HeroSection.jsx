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
          border: `2px solid ${theme.palette.secondary.main}`,
        }}
      >
        <Image
          src="/IMG_0161.jpg"
          alt="Yassine ELMOUSS"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
          style={{
            objectFit: "cover",
            objectPosition: "right",
          }}
          priority
        />
      </Box>

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
          {t("hero.greeting").split('').map((char, index) => (
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
