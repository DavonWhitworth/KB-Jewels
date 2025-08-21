import { Link, Typography, Box } from "@mui/material";

export default function Hero() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight={700}
      sx={{ textAlign: "center", gap: 2 }}
    >
      <Box>
        <Typography variant="h3" component="h1">
          Premium Custom Jewellery
        </Typography>
      </Box>

      <Box>
        <Typography variant="body1" sx={{ color: "var(--color-text)" }}>
          This is a work in progress, visit the official site:
          {" "}
          <Link
            href="https://www.kb-jewels.com"
            target="_blank"
            rel="noopener noreferrer"
            underline="always"
          >
            kb-jewels.com
          </Link>
        </Typography>
      </Box>

      <Box sx={{ width: "min(100%, 1000px)", mt: 3 }}>
        <Box
          sx={{
            borderRadius: 0,
            overflow: "hidden",
            border: "none",
            aspectRatio: "16 / 9",
            backgroundColor: "transparent",
          }}
        >
          <iframe
            src="https://console.studio360.tech/explore/d/058b4b08-861e-4627-a707-001dbd5d6263#!"
            title="KB Jewels Studio 360 Experience"
            style={{ width: "100%", height: "100%", border: 0, display: "block", backgroundColor: "transparent" }}
            allowFullScreen
          />
        </Box>
      </Box>
    </Box>
  );
}
