import { Typography, Box } from "@mui/material";
import Image from "next/image";
import storefront from "./storefront.jpg";

export default function About() {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 4 }, py: { xs: 6, md: 10 } }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography component="h1" variant="h3" gutterBottom>
          About
        </Typography>
        <Typography variant="h6" sx={{ color: "var(--color-text)" }}>
          Premium custom jewellery crafted with passion and precision by Kunj Bansal
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 6,
          alignItems: "center",
        }}
      >
        <Box>
          <Typography component="h2" variant="h5" gutterBottom>
            Our Story
          </Typography>
          <Typography variant="body1" paragraph>
            Coming from a long line of Jewelers spanning over a 100 years, Kunj was exposed to
            Jewelry design and craftsmanship from an early age often visiting his family business.
            After years of admiring the beauty and intricacy of jewelry he decided to pursue his
            passion and start creating bespoke pieces. He began by studying at Gemological Institute
            Of America (GIA) and experimenting with different designs, eventually developing his own
            style. Today, Kunj is an accomplished jewelry designer with a deep appreciation for the
            art form and a passion for creating pieces that are both sophisticated and meaningful.
          </Typography>
        </Box>

        <Box
          className="surface"
          sx={{
            borderRadius: 2,
            border: "1px solid var(--color-border)",
            backgroundColor: "var(--color-surface)",
            overflow: "hidden",
          }}
        >
          <Image
            src={storefront}
            alt="KB Jewels storefront"
            placeholder="blur"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
