"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Box, 
  Typography, 
  Container, 
  Modal, 
  IconButton,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { 
  Close as CloseIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
  Fullscreen as FullscreenIcon
} from "@mui/icons-material";
import { RingA, RingB, RingC, RingD, RingE } from "./rings";

const images = [
  { src: RingA, alt: "Ring A", description: "Elegant diamond engagement ring" },
  { src: RingB, alt: "Ring B", description: "Classic solitaire design" },
  { src: RingC, alt: "Ring C", description: "Modern geometric band" },
  { src: RingD, alt: "Ring D", description: "Vintage-inspired setting" },
  { src: RingE, alt: "Ring E", description: "Contemporary minimalist ring" },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleImageClick = (image: typeof images[0]) => {
    setSelectedImage(image);
    setZoomLevel(1);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header */}
      <Box textAlign="center" mb={8}>
        <Typography 
          variant="h2" 
          component="h1"
          sx={{ 
            fontWeight: "bold", 
            color: "var(--color-accent)",
            letterSpacing: "0.02em",
            mb: 3,
          }}
        >
          Portfolio
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "var(--color-text)",
            maxWidth: "800px",
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          A selection of our bespoke pieces and signature designs
        </Typography>
      </Box>

      {/* Masonry Grid Layout */}
      <Box
        sx={{
          maxWidth: "900px",
          mx: "auto",
          position: "relative",
        }}
      >
        {images.map((img, idx) => {
          // Determine image dimensions and positioning
          const isWide = idx % 3 === 0; // Every 3rd image is wide
          const isOffset = idx % 2 === 1; // Every 2nd image has offset
          
          return (
            <Box
              key={img.alt}
              sx={{
                cursor: "pointer",
                position: "relative",
                display: "inline-block",
                width: isWide ? "100%" : "48%",
                marginBottom: 3,
                marginLeft: isWide ? 0 : (isOffset ? "2%" : "0%"),
                marginRight: isWide ? 0 : (isOffset ? "0%" : "2%"),
                transform: {
                  md: isOffset 
                    ? `translateY(${1.5 + (idx % 3) * 0.5}rem) translateX(${(idx % 2 === 0 ? 1 : -1) * 1.5}rem)` 
                    : `translateY(${(idx % 3) * 0.8}rem) translateX(${(idx % 2 === 0 ? 0.5 : -0.5)}rem)`
                },
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: {
                    md: isOffset 
                      ? `translateY(${1 + (idx % 3) * 0.5}rem) translateX(${(idx % 2 === 0 ? 1 : -1) * 1.5}rem) scale(1.02)` 
                      : `translateY(${(idx % 3) * 0.8}rem) translateX(${(idx % 2 === 0 ? 0.5 : -0.5)}rem) scale(1.02)`
                  },
                },
                "&:nth-child(3n+1)": {
                  // Wide images (every 3rd starting from 1st)
                  width: "100%",
                  marginLeft: 0,
                  marginRight: 0,
                },
                "&:nth-child(3n+2), &:nth-child(3n+3)": {
                  // Regular images (2nd and 3rd in each group of 3)
                  width: "48%",
                },
              }}
              onClick={() => handleImageClick(img)}
            >
              <Box
                sx={{
                  position: "relative",
                  backgroundColor: "var(--color-surface)",
                  borderRadius: 2,
                  border: "1px solid var(--color-border)",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: isWide ? "400px" : "300px", // Taller for wide images
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    placeholder="blur"
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center", // This centers the image
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                    color: "white",
                    p: 2,
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {img.alt}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.9 }}>
                    {img.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* Fullscreen Modal */}
      <Modal
        open={!!selectedImage}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
              zIndex: 10,
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Zoom Controls */}
          <Box
            sx={{
              position: "absolute",
              top: 20,
              left: 20,
              display: "flex",
              gap: 1,
              zIndex: 10,
            }}
          >
            <IconButton
              onClick={handleZoomIn}
              disabled={zoomLevel >= 3}
              sx={{
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                },
                "&:disabled": {
                  opacity: 0.5,
                },
              }}
            >
              <ZoomInIcon />
            </IconButton>
            <IconButton
              onClick={handleZoomOut}
              disabled={zoomLevel <= 0.5}
              sx={{
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                },
                "&:disabled": {
                  opacity: 0.5,
                },
              }}
            >
              <ZoomOutIcon />
            </IconButton>
            <IconButton
              onClick={handleResetZoom}
              sx={{
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                },
              }}
            >
              <FullscreenIcon />
            </IconButton>
          </Box>

          {/* Image Container */}
          <Box
            sx={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
              overflow: "hidden",
              cursor: "grab",
              "&:active": {
                cursor: "grabbing",
              },
            }}
          >
            <Image
              src={selectedImage?.src || RingA}
              alt={selectedImage?.alt || ""}
              placeholder="blur"
              style={{
                width: `${100 * zoomLevel}%`,
                height: `${100 * zoomLevel}%`,
                objectFit: "contain",
                transition: "width 0.3s ease, height 0.3s ease",
              }}
            />
          </Box>

          {/* Image Info */}
          {selectedImage && (
            <Box
              sx={{
                position: "absolute",
                bottom: 20,
                left: 20,
                right: 20,
                textAlign: "center",
                color: "white",
                zIndex: 10,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {selectedImage.alt}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {selectedImage.description}
              </Typography>
            </Box>
          )}
        </Box>
      </Modal>
    </Container>
  );
}
