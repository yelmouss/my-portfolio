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
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import "../../i18n";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
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
        { code: "ar", flag: "MA", label: "AR" },
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
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);
  const theme = useTheme();
  const pathname = usePathname();
  const isLightMode = theme.palette.mode === "light";
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

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
    },
    mobileContainer: {
      width: "100%",
      display: { xs: "flex", md: "none" },
      justifyContent: "space-between",
      alignItems: "center",
      py: 1,
    },
    logo: {
      width: { xs: 40, md: 50 },
      height: { xs: 40, md: 50 },
    },
    nav: {
      flexGrow: 1,
      display: { xs: "none", md: "flex" },
      justifyContent: "center",
    },
    button: {
      my: 2,
      px: 2,
      color: mode === "dark" ? "white" : "black",
      position: "relative",
      "&::after": {
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
    },
  };

  const LogoComponent = () => (
    <motion.div style={{ rotate }}>
      <Image
        src={mode === "dark" ? "/logo-blank.png" : "/logo-principal.png"}
        alt="Logo"
        width={styles.logo.width.xs}
        height={styles.logo.height.xs}
        priority
      />
    </motion.div>
  );

  return (
    <AppBar position="sticky" sx={styles.appBar} elevation={0}>
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
              <Box sx={{ display: "flex", justifyContent: "center" }}>
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