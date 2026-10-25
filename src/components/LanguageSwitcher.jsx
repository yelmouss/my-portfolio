import { FR, GB, SA } from "country-flag-icons/react/3x2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const flags = { fr: FR, en: GB, ar: SA };

export default function LanguageSwitcher({ label, languages }) {
  return (
    <Stack sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 0.5 }}>
      <Typography variant="caption" color="text.secondary" sx={{ mr: 0.5 }}>
        {label}
      </Typography>
      {routing.locales.map((locale) => {
        const Flag = flags[locale];
        return (
          <Link
            key={locale}
            href="/"
            locale={locale}
            aria-label={languages(locale)}
            title={languages(locale)}
            style={{ display: "inline-flex", width: 24, opacity: 0.9 }}
          >
            <Flag title={languages(locale)} />
          </Link>
        );
      })}
    </Stack>
  );
}
