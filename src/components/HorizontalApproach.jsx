"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalApproach({ items }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return undefined;

    const cards = Array.from(track.children);
    const isMobile = window.matchMedia("(max-width: 899px)").matches;
    const context = gsap.context(() => {
      gsap.set(cards, {
        xPercent: isMobile ? 105 : 125,
        yPercent: 18,
        opacity: 0,
        rotate: 10,
        scale: 0.82,
        filter: "blur(10px)",
        transformOrigin: "50% 100%",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${Math.max(cards.length * 85, 280)}%`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1.2,
          invalidateOnRefresh: true,
        },
      });

      const fanPositions = [
        { x: -15, y: 12, rotation: -9, scale: 0.92 },
        { x: -8, y: 6, rotation: -5, scale: 0.95 },
        { x: 0, y: 0, rotation: 0, scale: 0.98 },
        { x: 8, y: 6, rotation: 5, scale: 0.95 },
      ];
      const mobilePosition = { x: 0, y: 0, rotation: 0, scale: 1 };

      cards.forEach((card, index) => {
        const position = isMobile ? mobilePosition : fanPositions[index] || {
          x: (index - (cards.length - 1) / 2) * 8,
          y: Math.abs(index - (cards.length - 1) / 2) * 5,
          rotation: (index - (cards.length - 1) / 2) * 5,
          scale: 0.95,
        };

        timeline.to(card, {
          xPercent: position.x,
          yPercent: position.y,
          opacity: 1,
          rotate: position.rotation,
          scale: position.scale,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "back.out(1.2)",
        });

        if (index < cards.length - 1) {
          timeline.to(card, {
            xPercent: isMobile ? 0 : position.x - 34,
            yPercent: isMobile ? -2 : position.y - 3,
            rotate: position.rotation - 2,
            scale: isMobile ? 0.94 : position.scale - 0.025,
            opacity: isMobile ? 0.48 : 0.72,
            filter: isMobile ? "blur(0.5px)" : "blur(1.5px)",
            duration: 0.75,
            ease: "power2.inOut",
          }, "-=0.08");
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
      sx={{
        position: "relative",
        mb: { xs: 10, md: 16 },
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
          maxWidth: 780,
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
        ref={trackRef}
        sx={{
          position: "absolute",
          top: { xs: "50%", md: "68%" },
          right: 0,
          width: { xs: "100%", md: "min(58vw, 760px)" },
          maxWidth: "100%",
          height: { xs: 330, md: 400 },
          transform: { xs: "translateY(-18%)", md: "translateY(-50%)" },
          perspective: 1200,
          display: "block",
        }}
      >
        {items.cards.map(({ icon: Icon, number, title, description }) => (
          <Card
            key={number}
            variant="outlined"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              maxWidth: "100%",
              display: "flex",
              alignItems: "stretch",
              overflow: "hidden",
              willChange: "transform, opacity, filter",
              borderColor: "rgba(163, 230, 53, 0.25)",
                borderRadius: { xs: 2, md: 3 },
                background: (theme) =>
                  theme.palette.mode === "dark"
                    ? "linear-gradient(145deg, rgba(42,42,45,0.98), rgba(13,13,16,0.96))"
                    : "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(241,241,238,0.96))",
                boxShadow: "0 24px 70px rgba(0,0,0,0.22)",
                transformOrigin: "50% 100%",
                transition: "box-shadow 300ms ease, border-color 300ms ease",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  inset: 10,
                  border: "1px solid",
                  borderColor: "rgba(163, 230, 53, 0.14)",
                  borderRadius: { xs: 1.5, md: 2.5 },
                  pointerEvents: "none",
                },
              }}
          >
            <CardContent
              sx={{
                width: "100%",
                minHeight: { xs: 240, md: 400 },
                p: { xs: 3, md: 5 },
                display: "flex",
                flexDirection: "column",
                position: "relative",
                zIndex: 1,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 6 }}>
                <Typography color="primary" sx={{ fontWeight: 800, letterSpacing: "0.12em" }}>
                  {number}
                </Typography>
                {Icon ? <Icon color="primary" sx={{ fontSize: { xs: 32, md: 42 } }} /> : null}
              </Box>
              <Typography variant="h4" component="h3" sx={{ fontWeight: 800, letterSpacing: "-0.04em", mb: 2 }}>
                {title}
              </Typography>
              <Typography color="text.secondary" sx={{ maxWidth: 520, lineHeight: 1.7 }}>
                {description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
