"use client";

import DarkModeRounded from "@mui/icons-material/DarkModeRounded";
import LightModeRounded from "@mui/icons-material/LightModeRounded";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { useColorMode } from "@/components/ThemeRegistry";

export default function ThemeToggle({ label }) {
  const { mode, setMode } = useColorMode();
  const nextMode = mode === "dark" ? "light" : "dark";

  return (
    <Tooltip title={label}>
      <IconButton
        aria-label={label}
        onClick={() => setMode(nextMode)}
        sx={{ color: "text.primary", border: 1, borderColor: "divider" }}
      >
        {mode === "dark" ? <LightModeRounded /> : <DarkModeRounded />}
      </IconButton>
    </Tooltip>
  );
}
