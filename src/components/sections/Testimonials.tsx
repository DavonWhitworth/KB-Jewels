"use client";
import { useState, useEffect, useRef } from "react";
import { testimonies } from "./testimoniesList";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance every 8 seconds
  useEffect(() => {
    if (!hovered) {
      timeoutRef.current = setTimeout(() => {
        next();
      }, 8000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, hovered]);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonies.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonies.length) % testimonies.length);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        py: { xs: 4, md: 8 },
        bgcolor: "var(--color-bg)",
        color: "var(--color-text)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Slider track */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6 }}
            style={{ width: "100%", maxWidth: 600 }}
          >
            <Card
              sx={{
                bgcolor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "20px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
              }}
            >
              <CardContent sx={{ textAlign: "center", px: 4, py: 6 }}>
                <Typography
                  variant="h6"
                  sx={{ color: "var(--color-heading)", mb: 2, fontStyle: "italic" }}
                >
                  &ldquo;{testimonies[index].message}&rdquo;
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "var(--color-muted)" }}
                >
                  — {testimonies[index].customerName} •{" "}
                  {testimonies[index].location}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </Box>

      {/* Arrows */}
      <IconButton
        onClick={prev}
        sx={{
          position: "absolute",
          top: "50%",
          left: { xs: 8, md: 32 },
          transform: "translateY(-50%)",
          color: "var(--color-heading)",
          opacity: hovered ? 0.9 : 0.3,
          transition: "opacity 0.3s",
          "&:hover": { opacity: 1 },
        }}
      >
        <ChevronLeft size={28} />
      </IconButton>
      <IconButton
        onClick={next}
        sx={{
          position: "absolute",
          top: "50%",
          right: { xs: 8, md: 32 },
          transform: "translateY(-50%)",
          color: "var(--color-heading)",
          opacity: hovered ? 0.9 : 0.3,
          transition: "opacity 0.3s",
          "&:hover": { opacity: 1 },
        }}
      >
        <ChevronRight size={28} />
      </IconButton>
    </Box>
  );
}
