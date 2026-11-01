"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import FormatQuoteRounded from "@mui/icons-material/FormatQuoteRounded";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const MAX_REVIEWS = 15;
const labels = {
  fr: { prev: "Avis précédents", next: "Avis suivants" },
  en: { prev: "Previous reviews", next: "Next reviews" },
  ar: { prev: "الآراء السابقة", next: "الآراء التالية" },
};

export default function GoogleReviewsCarousel({ locale, reviews }) {
  const trackRef = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const text = labels[locale] || labels.fr;
  const items = reviews.filter((review) => review.comment).slice(0, MAX_REVIEWS);

  const updateEdges = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    const position = Math.abs(track.scrollLeft);
    setEdges({ start: position <= 4, end: position >= max - 4 });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    updateEdges();
    const observer = new ResizeObserver(updateEdges);
    observer.observe(track);
    return () => observer.disconnect();
  }, [updateEdges, items.length]);

  const scrollByPage = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const rtl = getComputedStyle(track).direction === "rtl";
    track.scrollBy({
      left: direction * (rtl ? -1 : 1) * track.clientWidth * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        ref={trackRef}
        onScroll={updateEdges}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          pb: 1,
        }}
      >
        {items.map((review, index) => {
          const author = review.reviewer;
          const date = review.createTime
            ? new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(
                new Date(review.createTime),
              )
            : null;

          return (
            <Box
              component="article"
              key={review.reviewId || `${author.displayName}-${index}`}
              sx={{
                flex: { xs: "0 0 86%", sm: "0 0 calc(50% - 8px)", lg: "0 0 calc(33.333% - 11px)" },
                minWidth: 0,
                scrollSnapAlign: "start",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                p: 3,
                minHeight: 240,
                border: 1,
                borderColor: "divider",
                borderRadius: 4,
                backgroundColor: "color-mix(in srgb, var(--card) 55%, transparent)",
                transition: "border-color 0.2s, transform 0.2s",
                "&:hover": { borderColor: "primary.main", transform: "translateY(-3px)" },
              }}
            >
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Rating value={review.starRating} readOnly size="small" />
                <FormatQuoteRounded color="primary" sx={{ opacity: 0.6 }} />
              </Stack>
              <Typography
                color="text.secondary"
                sx={{
                  lineHeight: 1.7,
                  whiteSpace: "pre-wrap",
                  overflowWrap: "anywhere",
                  display: "-webkit-box",
                  WebkitLineClamp: 6,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {review.comment}
              </Typography>
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mt: "auto" }}>
                <Avatar
                  src={author.profilePhotoUrl || undefined}
                  alt=""
                  sx={{ width: 40, height: 40 }}
                >
                  {author.displayName.charAt(0)}
                </Avatar>
                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    component={author.uri ? "a" : "p"}
                    href={author.uri || undefined}
                    target={author.uri ? "_blank" : undefined}
                    rel={author.uri ? "noopener noreferrer" : undefined}
                    variant="body2"
                    fontWeight={700}
                    color="text.primary"
                    noWrap
                    sx={{ display: "block" }}
                  >
                    {author.displayName}
                  </Typography>
                  {date && (
                    <Typography variant="caption" display="block" color="text.secondary">
                      {date}
                    </Typography>
                  )}
                </Box>
              </Stack>
            </Box>
          );
        })}
      </Box>
      <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ mt: 2 }}>
        <IconButton
          aria-label={text.prev}
          onClick={() => scrollByPage(-1)}
          disabled={edges.start}
          sx={{ border: 1, borderColor: "divider" }}
        >
          <ChevronLeftRounded />
        </IconButton>
        <IconButton
          aria-label={text.next}
          onClick={() => scrollByPage(1)}
          disabled={edges.end}
          sx={{ border: 1, borderColor: "divider" }}
        >
          <ChevronRightRounded />
        </IconButton>
      </Stack>
    </Box>
  );
}
