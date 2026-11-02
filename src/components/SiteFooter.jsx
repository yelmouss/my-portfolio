"use client";

import * as CookieConsent from "vanilla-cookieconsent";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Link as IntlLink } from "@/i18n/navigation";

export default function SiteFooter({ labels }) {
  return (
    <Box
      component="footer"
      sx={{ borderTop: 1, borderColor: "divider", mt: "auto", py: { xs: 3, md: 2 }, pb: { xs: 12, md: 2 } }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          gap: { xs: 1.5, md: 3 },
        }}
      >
        <Stack
          component="nav"
          aria-label={labels.nav}
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, md: 3 }}
          sx={{ alignItems: "flex-start" }}
        >
          <Link component={IntlLink} href="/legal" color="text.secondary" underline="hover" variant="body2">
            {labels.legal}
          </Link>
          <Link component={IntlLink} href="/privacy" color="text.secondary" underline="hover" variant="body2">
            {labels.privacy}
          </Link>
          <Link
            component="button"
            type="button"
            onClick={() => CookieConsent.showPreferences()}
            color="text.secondary"
            underline="hover"
            variant="body2"
          >
            {labels.cookies}
          </Link>
        </Stack>
        <Typography variant="caption" color="text.secondary">
          © {new Date().getFullYear()} Yelmouss. {labels.rights}
        </Typography>
      </Container>
    </Box>
  );
}
