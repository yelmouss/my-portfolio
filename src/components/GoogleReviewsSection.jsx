"use client";

import { useEffect, useState } from "react";
import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import GoogleReviewsCarousel from "@/components/GoogleReviewsCarousel";

const copy = {
  fr: {
    eyebrow: "Retours clients",
    title: "Avis Google",
    loading: "Chargement des avis Google…",
    error: "Les avis ne sont pas disponibles pour le moment.",
    link: "Voir tous les avis sur Google",
    rating: (value, count) => `${value} / 5 · ${count} avis Google`,
  },
  en: {
    eyebrow: "Client feedback",
    title: "Google reviews",
    loading: "Loading Google reviews…",
    error: "Reviews are unavailable right now.",
    link: "See all Google reviews",
    rating: (value, count) => `${value} / 5 · ${count} Google reviews`,
  },
  ar: {
    eyebrow: "آراء العملاء",
    title: "آراء Google",
    loading: "جارٍ تحميل آراء Google…",
    error: "الآراء غير متاحة حالياً.",
    link: "عرض جميع التقييمات على Google",
    rating: (value, count) => `${value} / 5 · ${count} تقييم على Google`,
  },
};

export default function GoogleReviewsSection({ locale }) {
  const text = copy[locale] || copy.fr;
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();

    async function loadReviews() {
      try {
        const response = await fetch(
          `/api/google-reviews?locale=${encodeURIComponent(locale)}`,
          { cache: "no-store", signal: controller.signal },
        );
        const result = await response.json().catch(() => ({}));
        if (!response.ok) {
          throw new Error(result.error || `Google reviews request failed (${response.status}).`);
        }

        setData(result);
        setStatus("ready");
      } catch (error) {
        if (error.name === "AbortError") return;
        console.error("Unable to load Google reviews.", error);
        setStatus("error");
      }
    }

    loadReviews();
    return () => controller.abort();
  }, [locale]);

  // Lenis and ScrollTrigger cache the page height; reviews load after mount.
  useEffect(() => {
    if (status === "loading") return undefined;
    const timer = window.setTimeout(() => {
      window.__portfolioLenis?.resize();
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => ScrollTrigger.refresh());
    }, 150);
    return () => window.clearTimeout(timer);
  }, [status]);

  const ratingText =
    data?.rating && data.totalReviewCount
      ? text.rating(
          new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(data.rating),
          new Intl.NumberFormat(locale).format(data.totalReviewCount),
        )
      : null;

  return (
    <Box
      component="section"
      aria-labelledby="google-reviews-title"
      sx={{ mb: { xs: 10, md: 16 }, minWidth: 0 }}
    >
      <Typography variant="overline" color="primary">
        {text.eyebrow}
      </Typography>
      <Typography
        id="google-reviews-title"
        component="h2"
        variant="h2"
        sx={{ mt: 1, mb: 2 }}
      >
        {text.title}
      </Typography>
      {ratingText && (
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          {ratingText}
        </Typography>
      )}
      {status === "loading" && (
        <Typography role="status" color="text.secondary" sx={{ mb: 3 }}>
          {text.loading}
        </Typography>
      )}
      {status === "error" && (
        <Typography role="status" color="text.secondary" sx={{ mb: 3 }}>
          {text.error}
        </Typography>
      )}
      {status === "ready" && data.reviews.length > 0 && (
        <GoogleReviewsCarousel locale={locale} reviews={data.reviews} />
      )}
      {status === "ready" && data.reviews.length === 0 && (
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          {text.error}
        </Typography>
      )}
      {data?.googleMapsUri && (
        <Button
          component="a"
          href={data.googleMapsUri}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<ArrowOutwardRounded />}
          sx={{ mt: 2 }}
        >
          {text.link}
        </Button>
      )}
    </Box>
  );
}
