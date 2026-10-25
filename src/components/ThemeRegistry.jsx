"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { getTheme } from "@/theme/theme";

const ColorModeContext = createContext(null);

export function useColorMode() {
  return useContext(ColorModeContext);
}

export default function ThemeRegistry({ children }) {
  const [mode, setMode] = useState("dark");
  const hasSelectedMode = useRef(false);
  const theme = useMemo(() => getTheme(mode), [mode]);

  useEffect(() => {
    const savedMode = window.localStorage.getItem("portfolio-color-mode");
    if (savedMode === "light" || savedMode === "dark") {
      const timer = window.setTimeout(() => {
        if (!hasSelectedMode.current) setMode(savedMode);
      }, 0);
      return () => window.clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("portfolio-color-mode", mode);
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  const updateMode = (nextMode) => {
    hasSelectedMode.current = true;
    setMode(nextMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ColorModeContext.Provider value={{ mode, setMode: updateMode }}>
        {children}
      </ColorModeContext.Provider>
    </ThemeProvider>
  );
}
