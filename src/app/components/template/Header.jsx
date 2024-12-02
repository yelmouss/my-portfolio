"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import MaterialUISwitch from "./MaterialUISwitch";
import { useScrollTrigger } from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Works", path: "/works" },
  { name: "Contact", path: "/contact" },
  { name: "FAQ", path: "/faq" },
];

const Header = ({ toggleMode, mode }) => {
  // Dans le composant Header, ajouter:
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);
  const theme = useTheme();
  const pathname = usePathname();
  const isLightMode = theme.palette.mode === "light";
  const [anchorElNav, setAnchorElNav] = useState(null);

  const trigger = useScrollTrigger({
    threshold: 50,
    disableHysteresis: true,
  });

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const navStyles = {
    button: {
      my: 2,
      px: 2,
      color: mode === "dark" ? "white" : "black",
      display: "block",
      position: "relative",
      transition: "all 0.3s ease",
      "&:hover": {
        color: "primary.main",
        backgroundColor: "secondary.main",
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: "0%",
        height: "2px",
        bottom: "8px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "secondary.main",
        transition: "width 0.3s ease",
      },
      "&.active::after": {
        width: "80%",
      },
    },
    menuItem: {
      "&.active": {
        backgroundColor: "secondary.main",
      },
    },
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: trigger
          ? mode === "dark"
            ? "rgba(0, 0, 0, 0.85)"
            : "rgba(255, 255, 255, 0.95)"
          : "transparent",
        backdropFilter: trigger ? "blur(10px)" : "none",
        transition: "all 0.3s ease",
        borderBottom: trigger
          ? `1px solid ${
              mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
            }`
          : "none",
      }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo Desktop */}
          <Link href="/" passHref>
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 4 }}>
              <motion.div style={{ rotate }}>
                <Image
                  src={
                    mode === "dark" ? "/logo-blank.png" : "/logo-principal.png"
                  }
                  alt="GETOP Logo"
                  width={50}
                  height={50}
                  priority
                />
              </motion.div>
            </Box>
          </Link>
          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu navigation"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <Link href={page.path} key={page.path} passHref>
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    className={pathname === page.path ? "active" : ""}
                    sx={navStyles.menuItem}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          {/* Logo Mobile */}
          <Link href="/" passHref>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <motion.div style={{ rotate }}>
                <Image
                  src={
                    mode === "dark" ? "/logo-blank.png" : "/logo-principal.png"
                  }
                  alt="GETOP Logo"
                  width={50}
                  height={50}
                  priority
                />
              </motion.div>
            </Box>
          </Link>
          {/* Desktop Navigation */}
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 2 }}
          >
            {pages.map((page) => (
              <Link href={page.path} key={page.path} passHref>
                <Button
                  onClick={handleCloseNavMenu}
                  className={pathname === page.path ? "active" : ""}
                  sx={navStyles.button}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
          {/* Right Side Items */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <MaterialUISwitch
              checked={!isLightMode}
              onChange={toggleMode}
              aria-label="toggle theme"
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
