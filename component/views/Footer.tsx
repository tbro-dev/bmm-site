'use client'
import { FC } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn, YouTube, } from "@mui/icons-material";

const Footer: FC = () => {

  const footerSection = {
    Title: 'Company Name 2025',
    Description: 'This is a description of this section',
    Policy: 'Coming soon...',
    UseTerms: 'Coming soon...',
    Facebook: 'https://www.facebook.com/profile.php?id=61580791546289',
    Instagram: 'https://www.instagram.com/busymakingmedia/',
    LinkedIn: 'https://www.linkedin.com/in/tylerbroussard-profile/',
    Youtube: 'https://www.youtube.com/@busymakingmedia',
    TikTok: 'tiktok.com',
  };

  const openNewWindow = (_url: string) => {
    window.open(_url, '_blank', 'noopener,noreferrer')
  }

  return (
    <Box component="footer" py={4} sx={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <Grid container alignItems="center">
          {/* Left: Copyright */}
          <Grid size={{ xs: 12, md: 4 }} textAlign={{ xs: "center", md: "left" }} mb={{ xs: 2, md: 0 }}>
            <Typography variant="body2" color="text.secondary">
              {footerSection.Title}
            </Typography>
          </Grid>

          {/* Center: Social Icons */}
          <Grid size={{ xs: 12, md: 4 }} textAlign="center" mb={{ xs: 2, md: 0 }}>            
            <IconButton onClick={() => openNewWindow(footerSection.Facebook)} aria-label="Facebook" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton onClick={() => openNewWindow(footerSection.Instagram)} aria-label="LinkedIn" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton onClick={() => openNewWindow(footerSection.LinkedIn)} aria-label="LinkedIn" color="inherit">
              <LinkedIn />
            </IconButton>
            <IconButton onClick={() => openNewWindow(footerSection.Youtube)} aria-label="YouTube" color="inherit">
              <YouTube />
            </IconButton>
          </Grid>

          {/* Right: Links */}
          <Grid size={{ xs: 12, md: 4 }} textAlign={{ xs: "center", md: "right" }}>
            <Link href="#!" underline="hover" color="text.secondary" sx={{ mr: 3 }}>
              {footerSection.Policy}
            </Link>
            <Link href="#!" underline="hover" color="text.secondary">
              {footerSection.UseTerms}
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
