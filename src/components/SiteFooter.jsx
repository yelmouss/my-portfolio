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
      sx={{ borderTop: 1, borderColor: "divider", mt: "auto", pt: 4, pb: { xs: 14, md: 12 } }}
    >
      <Container maxWidth="lg">
        <Stack
          component="nav"
          aria-label={labels.nav}
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1.5, sm: 3 }}
          sx={{ mb: 2, alignItems: "flex-start" }}
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
