"use client";
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  FormControl,
  Select,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import MaterialUISwitch from "./MaterialUISwitch";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import "../../i18n";
import { GlowingEffect } from "../ui/glowing-effect";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  // { name: "Services", path: "/services" },
  { name: "Works", path: "/works" },
  { name: "Contact", path: "/contact" },
];

const LanguageSelector = ({ language, handleLanguageChange, isMobile }) => (
  <FormControl sx={{ mr: 2 }} size="small">
    <Select
      value={language}
      onChange={handleLanguageChange}
      size="small"
      sx={{
        boxShadow: "none",
        ".MuiOutlinedInput-notchedOutline": { border: 0 },
        minWidth: 100,
      }}
    >
      {[
        { code: "fr", flag: "FR", label: "FR" },
        { code: "en", flag: "US", label: "EN" },
        // { code: "ar", flag: "MA", label: "AR" },
      ].map((lang) => (
        <MenuItem key={lang.code} value={lang.code}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2" color="secondary">
              {lang.label}
            </Typography>
            <Flag code={lang.flag} style={{ width: 24, height: 16 }} />
          </Box>
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

const Header = ({ toggleMode, mode }) => {
  const { scrollY, scrollYProgress } = useScroll();
  const theme = useTheme();
  const pathname = usePathname();
  const isLightMode = theme.palette.mode === "light";
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Tracking scroll progress for the progress bar
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  const handleLanguageChange = (event) => {
    const lng = event.target.value;
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  const trigger = useScrollTrigger({
    threshold: 50,
    disableHysteresis: true,
  });

  const LogoComponent = () => (
    <motion.div className="logo-container">
      <Box
        sx={{
          backgroundColor: 'white',
          borderRadius: '50%',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          width: { xs: 30, md: 50 },
          height: { xs: 30, md: 50 },
        }}
      >
        <Image
          src="/Geek.png"
          alt="Logo"
          width={40}
          height={40}
          priority
          style={{
            objectFit: 'contain',
          }}
        />
      </Box>
    </motion.div>
  );

  const styles = {
    appBar: {
      bgcolor: trigger
        ? mode === "dark"
          ? "rgba(0, 0, 0, 0.85)"
          : "rgba(255, 255, 255, 0.95)"
        : "transparent",
      backdropFilter: trigger ? "blur(10px)" : "none",
      transition: "all 0.3s ease",
      borderBottom: trigger
        ? `1px solid ${mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`
        : "none",
      boxShadow: trigger ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
      overflow: "visible",
    },
    mobileContainer: {
      width: "100%",
      display: { xs: "flex", md: "none" },
      justifyContent: "space-between",
      alignItems: "center",
      py: 1,
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    nav: {
      flexGrow: 1,
      display: { xs: "none", md: "flex" },
      justifyContent: "center",
      gap: 2,
    },
    button: {
      my: 2,
      px: 3,
      py: 1,
      color: mode === "dark" ? "white" : "black",
      position: "relative",
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: mode === "dark" ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
      },
      '&::after': {
        content: '""',
        position: "absolute",
        width: "0%",
        height: "2px",
        bottom: "8px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "info.main",
        transition: "width 0.3s ease",
      },
      "&:hover::after, &.active::after": {
        width: "80%",
      },
      "&.active": {
        backgroundColor: mode === "dark" ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)',
      }
    },
    progressBarContainer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "3px",
      backgroundColor: "transparent",
      zIndex: 10,
      overflow: "hidden",
    },
    progressBar: {
      height: "100%",
      background: theme.palette.mode === "dark" 
        ? "linear-gradient(90deg, #00ADB5,rgb(30, 181, 0))"
        : "linear-gradient(90deg, #00ADB5,rgb(30, 181, 0))",
      position: "relative",
    }
  };

  return (
    <AppBar position="sticky" sx={styles.appBar} elevation={0}>
      {/* Scroll Progress Bar avec GlowingEffect */}
      <Box sx={styles.progressBarContainer}>
        <Box
          component={motion.div}
          sx={{
            ...styles.progressBar,
            position: "relative",
            width: `${scrollProgress * 100}%`,
          }}
        >
          {/* Glowing effect pour la barre de progression */}
          <Box sx={{ position: "absolute", top: -10, bottom: -10, left: 0, right: 0, overflow: "hidden" }}>
            <GlowingEffect
              blur={10}
              borderWidth={0}
              spread={50}
              glow={true}
              disabled={false}
              proximity={0}
              inactiveZone={0}
              variant={theme.palette.mode === "dark" ? "default" : "white"}
            />
          </Box>
        </Box>
      </Box>

      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Layout */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", width: "100%" }}>
            <Link href="/" passHref>
              <Box sx={{ mr: 4 }}>
                <LogoComponent />
              </Box>
            </Link>

            <Box sx={styles.nav}>
              {pages.map((page) => (
                <Link key={page.path} href={page.path} passHref>
                  <Button
                    className={pathname === page.path ? "active" : ""}
                    sx={styles.button}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <LanguageSelector
                language={language}
                handleLanguageChange={handleLanguageChange}
              />
              <MaterialUISwitch
                checked={!isLightMode}
                onChange={toggleMode}
              />
            </Box>
          </Box>

          {/* Mobile Layout */}
          <Box sx={styles.mobileContainer}>
            <IconButton
              onClick={(e) => setAnchorElNav(e.currentTarget)}
              color="inherit"
              sx={{ p: 1 }}
            >
              <MenuIcon />
            </IconButton>

            <Link href="/" passHref>
              <Box sx={{ display: "flex", justifyContent: "center", ml: 3 }}>
                <LogoComponent />
              </Box>
            </Link>

            <MaterialUISwitch
              checked={!isLightMode}
              onChange={toggleMode}
              size="small"
            />
          </Box>
        </Toolbar>

        {/* Mobile Menu */}
        <Menu
          anchorEl={anchorElNav}
          open={Boolean(anchorElNav)}
          onClose={() => setAnchorElNav(null)}
          sx={{
            display: { xs: "block", md: "none" },
            mt: 1,
            "& .MuiPaper-root": {
              bgcolor: mode === "dark" ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              borderRadius: 2,
              border: "1px solid",
              borderColor: mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
            },
          }}
        >
          {pages.map((page) => (
            <Link key={page.path} href={page.path} passHref>
              <MenuItem
                onClick={() => setAnchorElNav(null)}
                selected={pathname === page.path}
              >
                <Typography textAlign="center">{page.name}</Typography>
              </MenuItem>
            </Link>
          ))}
          <MenuItem>
            <LanguageSelector
              language={language}
              handleLanguageChange={handleLanguageChange}
              isMobile
            />
          </MenuItem>
        </Menu>
      </Container>
    </AppBar>
  );
};

export default Header;