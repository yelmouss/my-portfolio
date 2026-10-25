"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

gsap.registerPlugin(ScrollTrigger);

export default function ExpertiseCards({ items }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return undefined;

    const context = gsap.context(() => {
      const cardElements = Array.from(cards.children);
      gsap.set(cardElements, {
        opacity: 0,
        scale: 0.2,
        y: 80,
        rotateX: 14,
        filter: "blur(12px)",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${cardElements.length * 115}%`,
          pin: true,
          scrub: 0.9,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cardElements.forEach((card, index) => {
        timeline.to(card, {
          opacity: 1,
          scale: 1,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
        });

        if (index < cardElements.length - 1) {
          timeline.to(card, {
            opacity: 0,
            scale: 1.55,
            y: -35,
            filter: "blur(5px)",
            duration: 0.8,
            ease: "power2.in",
          });
        }
      });
    }, section);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refresh);
    window.addEventListener("page-transition-complete", refresh);

    return () => {
      window.removeEventListener("resize", refresh);
      window.removeEventListener("page-transition-complete", refresh);
      context.revert();
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      component="section"
      data-expertise-section
      sx={{
        position: "relative",
        mb: { xs: 10, md: 16 },
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        overflow: "visible",
        pt: { xs: 3, md: 10 },
      }}
    >
      <Typography variant="overline" color="primary" sx={{ position: "relative", zIndex: 2 }}>
        {items.eyebrow}
      </Typography>
      <Typography
        component="h2"
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: 820,
          mb: { xs: 4, md: 0 },
          fontSize: { xs: "2rem", md: "clamp(2.5rem, 5vw, 4.8rem)" },
          lineHeight: 1.02,
          fontWeight: 800,
          letterSpacing: "-0.05em",
        }}
      >
        {items.title}
      </Typography>
      <Box
        ref={cardsRef}
        sx={{
          position: "absolute",
          top: { xs: "50%", md: "68%" },
          right: 0,
          width: { xs: "100%", md: "min(54vw, 700px)" },
          height: { xs: 320, md: 390 },
          transform: { xs: "translateY(-18%)", md: "translateY(-50%)" },
          display: "block",
          perspective: 1200,
        }}
      >
        {items.cards.map(({ icon: Icon, title, description }) => (
          <Card
            key={title}
            variant="outlined"
            sx={{
              position: "absolute",
              inset: 0,
              height: "100%",
              transformOrigin: "50% 100%",
              willChange: "transform, opacity, filter",
              borderColor: "rgba(163, 230, 53, 0.25)",
              borderRadius: 3,
              background: (theme) =>
                theme.palette.mode === "dark"
                  ? "linear-gradient(145deg, rgba(42,42,45,0.98), rgba(13,13,16,0.96))"
                  : "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(241,241,238,0.96))",
              boxShadow: "0 24px 70px rgba(0,0,0,0.22)",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Icon color="primary" sx={{ fontSize: 34, mb: 5 }} />
              <Typography variant="h5" component="h3" sx={{ fontWeight: 800, mb: 2 }}>{title}</Typography>
              <Typography color="text.secondary">{description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
