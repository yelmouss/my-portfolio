"use client";

import Box from "@mui/material/Box";

import DepthCarousel from "@/components/DepthCarousel";

export default function ExperienceJourney({ experience }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          position: "relative",
          height: { xs: 430, md: 520 },
          borderRadius: 4,
          overflow: "hidden",
          background:
            "radial-gradient(circle at 50% 45%, rgba(163,230,53,0.12), transparent 42%), linear-gradient(180deg, rgba(255,255,255,0.04), transparent)",
        }}
      >
        <DepthCarousel
          items={experience.items.map((item) => ({
            image: item.logo,
            alt: `${item.company} logo`,
            content: (
              <>
                <span className="experience-depth-card__period">{item.period}</span>
                <strong className="experience-depth-card__role">{item.role}</strong>
                <span className="experience-depth-card__company">{item.company}</span>
                <span className="experience-depth-card__description">{item.description}</span>
              </>
            ),
          }))}
          cardWidth={280}
          cardHeight={340}
          radius={22}
          tint="#05060a"
          depth={170}
          spread={62}
          tilt={18}
          tiltDirection="right"
          perspective={1300}
          visibleCards={4}
          falloff={0.18}
          blur={4}
          duration={650}
          loop={false}
          showControls
          showIndicators
          className="experience-depth-carousel"
        />
      </Box>
    </Box>
  );
}
