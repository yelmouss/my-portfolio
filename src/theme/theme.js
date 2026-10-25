import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#A3E635" : "#4D7C0F",
        contrastText: mode === "dark" ? "#0A0A0D" : "#F1E9D2",
      },
      background: {
        default: mode === "dark" ? "#0A0A0D" : "#F1E9D2",
        paper: mode === "dark" ? "#18181B" : "#F8F2E3",
      },
      text: {
        primary: mode === "dark" ? "#FAFAFA" : "#18181B",
        secondary: mode === "dark" ? "#A1A1AA" : "#52525B",
      },
      divider: mode === "dark" ? "#27272A" : "#E4E4E7",
    },
    shape: {
      borderRadius: 14,
    },
    typography: {
      fontFamily: "var(--font-geist-sans), var(--font-noto-arabic), sans-serif",
      h1: { fontWeight: 700, letterSpacing: "-0.04em" },
      h2: { fontWeight: 700, letterSpacing: "-0.03em" },
      h3: { fontWeight: 600 },
      button: { textTransform: "none", fontWeight: 600 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: { transition: "background-color 180ms ease, color 180ms ease" },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 12, minHeight: 46 },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: { borderRadius: 18, backgroundImage: "none" },
        },
      },
    },
  });
