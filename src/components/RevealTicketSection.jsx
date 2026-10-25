"use client";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import TearTicket from "@/components/TearTicket";
import { useColorMode } from "@/components/ThemeRegistry";

export default function RevealTicketSection({
  title,
  hint,
  stubLabel,
  ariaLabel,
  children,
}) {
  const [revealed, setRevealed] = useState(false);
  const { mode } = useColorMode();
  const isDark = mode === "dark";

  useEffect(() => {
    if (!revealed) return;
    const refreshLayout = () => {
      window.__portfolioLenis?.resize?.();
      window.dispatchEvent(new Event("resize"));
    };
    const frame = window.requestAnimationFrame(refreshLayout);
    const timer = window.setTimeout(refreshLayout, 650);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [revealed]);

  return (
    <Box>
      <Box
        sx={{
          display: revealed ? "none" : "flex",
          justifyContent: "center",
          width: "100%",
          minHeight: { xs: 300, md: 320 },
          mb: 5,
        }}
      >
        <TearTicket
          width={620}
          height={280}
          stubSize={180}
          radius={20}
          holes={14}
          holeSize={7}
          tearAngle={28}
          stretch={34}
          resistance={0.48}
          background={isDark ? "#27272a" : "#f8f2e3"}
          color={isDark ? "#f5f5f5" : "#263018"}
          stubBackground={isDark ? "#365314" : "#dce8bd"}
          border
          ariaLabel={ariaLabel}
          onTear={() => setRevealed(true)}
          stub={
            <Box sx={{ height: "100%", display: "grid", placeItems: "center", p: 2, textAlign: "center" }}>
              <Typography sx={{ fontWeight: 900, color: "inherit", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                {stubLabel}
              </Typography>
            </Box>
          }
        >
          <Box sx={{ p: { xs: 2.5, md: 4 }, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Typography variant="h4" component="h3" sx={{ fontWeight: 900, letterSpacing: "-0.04em" }}>
              {title}
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 380 }}>
              {hint}
            </Typography>
          </Box>
        </TearTicket>
      </Box>

      <Box
        role="region"
        aria-live="polite"
        sx={{
          display: revealed ? "block" : "none",
          animation: "revealTicketContent 700ms cubic-bezier(0.22, 1, 0.36, 1)",
          "@keyframes revealTicketContent": {
            from: { opacity: 0, transform: "translateY(24px)" },
            to: { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
