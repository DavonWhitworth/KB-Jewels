import { Link, Typography, Box, Container } from "@mui/material";
import TestimonialsShowcase from "../components/sections/Testimonials"

export default function Home() {
  return (
    <>
      {/* Hero Section with Video */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        >
          <source src="/VID-20250327-WA0029.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Overlay */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
            gap: 2,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        >
          <Box>
            <Typography 
              variant="h3" 
              component="h1"
              sx={{ 
                color: "white",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                letterSpacing: "0.02em",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              }}
            >
              Premium Custom Jewellery
            </Typography>
          </Box>

          <Box>
            <Typography 
              variant="body1" 
              sx={{ 
                color: "white",
                fontFamily: "var(--font-geist-sans)",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
                fontSize: "1.1rem",
                lineHeight: 1.6,
              }}
            >
              ---------- This is a work in progress, visit the official site:
              {" "}
              <Link
                href="https://www.kb-jewels.com"
                target="_blank"
                rel="noopener noreferrer"
                underline="always"
                sx={{ 
                  color: "white",
                  fontWeight: 500,
                  "&:hover": {
                    color: "#f0f0f0"
                  }
                }}
              >
                kb-jewels.com
              </Link> ----------
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* About Section */}
      <Box
        sx={{
          py: 8,
          backgroundColor: "var(--color-bg)",
          color: "var(--color-text)",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography 
              variant="h2" 
              component="h2"
              sx={{ 
                color: "var(--color-accent)",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                letterSpacing: "0.02em",
                mb: 3,
              }}
            >
              About KB Jewels
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-geist-sans)",
                fontWeight: 400,
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Crafting Exquisite Custom Jewellery Since 2015
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
            {/* About Content */}
            <Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  mb: 3,
                }}
              >
                Our Story
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 3,
                  lineHeight: 1.8,
                  color: "var(--color-text)",
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Founded by master jeweller Kunj Bansal, KB Jewels has been at the forefront of custom jewellery design for nearly a decade. We specialize in creating unique, personalized pieces that tell your story through exquisite craftsmanship and innovative design.
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 3,
                  lineHeight: 1.8,
                  color: "var(--color-text)",
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                From engagement rings to family heirlooms, each piece is meticulously crafted using the finest materials and traditional techniques combined with modern innovation. Our commitment to quality and attention to detail ensures that every creation becomes a cherished treasure.
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  lineHeight: 1.8,
                  color: "var(--color-text)",
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                We believe that jewellery should be as unique as the person wearing it, which is why we work closely with our clients to bring their vision to life, creating pieces that are truly one-of-a-kind.
              </Typography>
            </Box>

            {/* About Image/Visual */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "400px",
                background: "var(--glass-bg)",
                backdropFilter: "blur(var(--blur))",
                borderRadius: 2,
                border: "var(--glass-border)",
              }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  color: "var(--color-text-muted)",
                  fontFamily: "var(--font-geist-sans)",
                  textAlign: "center",
                  px: 4,
                }}
              >
                [About Image Placeholder]
                <br />
                Add your about image here
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>


      <TestimonialsShowcase/>
    </>
  );
}
