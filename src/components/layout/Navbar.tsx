"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  AppBar, 
  Toolbar, 
  Box, 
  Typography, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useMediaQuery,
  useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(`(max-width:700px)`);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scrollY > 50;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigationLinks = [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        background: "var(--color-bg)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRight: "1px solid var(--color-border)",
      }}
    >
      <Typography 
        variant="h6" 
        sx={{ 
          my: 2,
          color: "var(--color-accent)",
          fontFamily: "var(--font-display)",
          fontWeight: 600,
        }}
      >
        KB Jewels
      </Typography>
      <List>
        {navigationLinks.map((link) => (
          <ListItem 
            key={link.label}
            component={Link} 
            href={link.href}
            onClick={() => setMobileOpen(false)}
            sx={{ 
              py: 2,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }
            }}
          >
            <ListItemText 
              primary={link.label} 
              sx={{ 
                textAlign: "center",
                "& .MuiTypography-root": {
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  color: "var(--color-text)",
                  fontFamily: "var(--font-geist-sans)",
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: isScrolled 
            ? "rgba(18, 18, 18, 0.95)" 
            : "rgba(18, 18, 18, 0.8)",
          backdropFilter: "blur(12px)",
          boxShadow: isScrolled 
            ? "0 2px 20px rgba(0, 0, 0, 0.3)" 
            : "none",
          transition: "all 0.3s ease",
          zIndex: 1000,
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: isScrolled ? 1 : 3,
            transition: "all 0.3s ease",
            px: 4, // Add horizontal padding for even spacing
          }}
        >
          {/* Left Navigation Links */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                gap: 4,
                alignItems: "center",
                flex: 1, // Take up available space
                justifyContent: "flex-end", // Push links to the right edge of their space
              }}
            >
              <Link href="/portfolio" passHref>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    cursor: "pointer",
                    color: isScrolled ? "var(--color-text)" : "var(--color-text-muted)",
                    fontFamily: "var(--font-geist-sans)",
                    fontWeight: isScrolled ? 500 : 400,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "var(--color-accent)",
                    }
                  }}
                >
                  Portfolio
                </Typography>
              </Link>
            </Box>
          )}

          {/* Mobile Menu Button - Left Side */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                color: isScrolled ? "var(--color-text)" : "var(--color-text-muted)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Emblem / Logo - Center with Homepage Link */}
          <Link href="/" passHref>
            <Box
              component="img"
              src="/logo.png" // replace with your emblem file
              alt="KB Jewels Logo"
              sx={{
                height: isScrolled ? 100 : 115, // Bigger when at top
                transition: "height 1.0s ease",
                mx: 3,
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.8,
                  transition: "opacity 0.2s ease",
                }
              }}
            />
          </Link>

          {/* Right Navigation Links */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                gap: 4,
                alignItems: "center",
                flex: 1, // Take up available space
                justifyContent: "flex-start", // Push links to the left edge of their space
              }}
            >
              <Link href="/contact" passHref>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    cursor: "pointer",
                    color: isScrolled ? "var(--color-text)" : "var(--color-text-muted)",
                    fontFamily: "var(--font-geist-sans)",
                    fontWeight: isScrolled ? 500 : 400,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "var(--color-accent)",
                    }
                  }}
                >
                  Contact
                </Typography>
              </Link>
            </Box>
          )}

          {/* Spacer for right side balance when mobile */}
          {isMobile && (
            <Box sx={{ width: 48 }} /> // Same width as IconButton for balance
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { 
            boxSizing: "border-box", 
            width: 250,
            backgroundColor: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(10px)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
