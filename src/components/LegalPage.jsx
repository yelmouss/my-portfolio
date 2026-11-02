import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import PortfolioDock from "@/components/PortfolioDock";

export default function LegalPage({ locale, messages, page, updated }) {
  return (
    <>
      <PortfolioDock locale={locale} messages={messages} />
      <Container maxWidth="md" sx={{ pt: { xs: 10, md: 12 }, pb: { xs: 8, md: 12 } }}>
        <Typography component="h1" variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "4rem" }, mb: 1 }}>
          {page.title}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 5 }}>{updated}</Typography>
        {page.sections.map((section) => (
          <Box component="section" key={section.h} sx={{ mb: 4 }}>
            <Typography component="h2" variant="h5" sx={{ fontWeight: 800, mb: 1.5 }}>
              {section.h}
            </Typography>
            {section.p?.map((text) => (
              <Typography key={text} color="text.secondary" sx={{ lineHeight: 1.8, mb: 1.5, overflowWrap: "anywhere" }}>
                {text}
              </Typography>
            ))}
            {section.list && (
              <Box component="ul" sx={{ m: 0, pl: 3, color: "text.secondary", lineHeight: 1.8, overflowWrap: "anywhere" }}>
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </Container>
    </>
  );
}
