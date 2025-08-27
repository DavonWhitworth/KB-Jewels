"use client";

import Link from "next/link";
import { Box, Typography, Container } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        background: "var(--glass-bg)",
        backdropFilter: "blur(var(--blur))",
        borderTop: "var(--glass-border)",
        py: 4,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
            gap: 4,
            alignItems: "start",
          }}
        >

          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "var(--color-accent)",
                fontSize: "1rem",
                fontWeight: 600,
                mb: 1,
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "var(--color-text)",
                opacity: 0.9,
                lineHeight: 1.6,
              }}
            >
              <Link
                href="/contact"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
                className="footer-link"
              >
                Message Us
              </Link>
              <br />
              +91 70888 06000
            </Typography>
          </Box>

          <Box sx={{ gridColumn: { md: "1 / -1" } }}>
            <Typography
              variant="body2"
              sx={{
                color: "var(--color-text-muted)",
                borderTop: "1px dashed var(--color-border)",
                paddingTop: 2,
                marginTop: 1,
                fontSize: "0.9rem",
                textAlign: "center",
              }}
            >
              &copy; 2025 KB Jewels. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
