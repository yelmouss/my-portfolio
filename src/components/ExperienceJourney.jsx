"use client";

import { useState } from "react";
import ArrowBackRounded from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function ExperienceJourney({ experience }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = experience.items[activeIndex];
  const lastIndex = experience.items.length - 1;

  if (!activeItem) return null;

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 1, md: 2 },
          mb: { xs: 3, md: 4 },
        }}
      >
        <IconButton
          aria-label="Previous experience"
          onClick={() => setActiveIndex((index) => Math.max(0, index - 1))}
          disabled={activeIndex === 0}
          sx={{
            border: "1px solid",
            borderColor: "divider",
            color: "primary.main",
          }}
        >
          <ArrowBackRounded />
        </IconButton>

        <Box
          sx={{
            position: "relative",
            flex: 1,
            height: 3,
            borderRadius: 99,
            backgroundColor: "divider",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: `${lastIndex ? (activeIndex / lastIndex) * 100 : 100}%`,
              borderRadius: 99,
              backgroundColor: "primary.main",
              boxShadow: "0 0 16px rgba(163, 230, 53, 0.65)",
              transition: "width 250ms ease",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {experience.items.map((item, index) => (
              <Box
                key={`${item.company}-${item.period}-${item.role}`}
                component="button"
                type="button"
                aria-label={`Show ${item.role} at ${item.company}`}
                onClick={() => setActiveIndex(index)}
                sx={{
                  width: { xs: 14, md: 18 },
                  height: { xs: 14, md: 18 },
                  p: 0,
                  border: "3px solid",
                  borderColor: "background.default",
                  borderRadius: "50%",
                  backgroundColor: index <= activeIndex ? "primary.main" : "background.paper",
                  boxShadow: index === activeIndex ? "0 0 0 5px rgba(163, 230, 53, 0.2)" : "none",
                  cursor: "pointer",
                  transition: "background-color 200ms ease, box-shadow 200ms ease",
                }}
              />
            ))}
          </Box>
        </Box>

        <IconButton
          aria-label="Next experience"
          onClick={() => setActiveIndex((index) => Math.min(lastIndex, index + 1))}
          disabled={activeIndex === lastIndex}
          sx={{
            border: "1px solid",
            borderColor: "divider",
            color: "primary.main",
          }}
        >
          <ArrowForwardRounded />
        </IconButton>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, mb: 2 }}>
        <Typography variant="overline" color="primary" fontWeight={800}>
          {String(activeIndex + 1).padStart(2, "0")} / {String(experience.items.length).padStart(2, "0")}
        </Typography>
        <Typography variant="overline" color="text.secondary">
          {activeItem.period}
        </Typography>
      </Box>

      <Card
        variant="outlined"
        sx={{
          width: "100%",
          minHeight: { xs: 270, md: 300 },
          backgroundColor: "color-mix(in srgb, var(--card) 92%, transparent)",
          transition: "opacity 180ms ease",
        }}
      >
        <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 2.5,
              minHeight: 48,
            }}
          >
            <Image
              src={activeItem.logo}
              alt={`${activeItem.company} logo`}
              width={144}
              height={48}
              style={{ width: 144, height: 48, objectFit: "contain" }}
            />
            <Typography color="text.secondary" fontWeight={700}>
              {activeItem.company}
            </Typography>
          </Box>
          <Typography variant="h4" component="h3" fontWeight={800} sx={{ lineHeight: 1.1 }}>
            {activeItem.role}
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 820, lineHeight: 1.7 }}>
            {activeItem.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
