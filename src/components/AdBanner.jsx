"use client";

import { useEffect, useRef, useState } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import Box from "@mui/material/Box";

const client = "ca-pub-8676346410264412";
const slot = "9257660371";

export default function AdBanner() {
  const [allowed, setAllowed] = useState(false);
  const pushed = useRef(false);

  useEffect(() => {
    const sync = () => setAllowed(CookieConsent.acceptedCategory("advertising"));
    sync();
    window.addEventListener("cc:onConsent", sync);
    window.addEventListener("cc:onChange", sync);
    return () => {
      window.removeEventListener("cc:onConsent", sync);
      window.removeEventListener("cc:onChange", sync);
    };
  }, []);

  useEffect(() => {
    if (!allowed || pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, [allowed]);

  if (!allowed) return null;

  return (
    <Box sx={{ my: 4, overflow: "hidden" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </Box>
  );
}
