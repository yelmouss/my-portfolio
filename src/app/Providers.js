"use client";
import { ThemeProvider } from "@mui/material/styles";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { lightTheme, darkTheme } from "./theme";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import Header from "./components/template/Header";
import { useTheme } from "@emotion/react";

const Footer = dynamic(() => import("./components/template/Footer"), {
  ssr: false,
});

const Providers = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const theme = useTheme();
  const isDayTime = () => {
    const hours = new Date().getHours();
    console.log(hours);
    return hours >= 8 && hours < 17;
  };

  useEffect(() => {
    const storedMode = localStorage.getItem("theme-mode");
    const initialMode = storedMode || (isDayTime() ? "light" : "dark");
    setMode(initialMode);

    const interval = setInterval(() => {
      const newMode = isDayTime() ? "light" : "dark";
      setMode(newMode);
      localStorage.setItem("theme-mode", newMode);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme-mode", newMode);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
        <Box
          className={"flex min-h-screen flex-col items-center myAwesomeBg"}
          sx={{
            bgcolor: "primary.main",         
            transition: "background-color 0.5s, color 0.5s",
            width: "100%",
            height: "100%",
          }}
        >
          <Header toggleMode={toggleMode} mode={mode} />
          {children}
          <Footer />
        </Box>
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default Providers;
