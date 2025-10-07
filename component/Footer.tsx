import { FC } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
} from "@mui/material";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" py={4} sx={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <Grid container alignItems="center">
          {/* Left: Copyright */}
          <Grid size={{ xs: 12, md: 4 }} textAlign={{ xs: "center", md: "left" }} mb={{ xs: 2, md: 0 }}>
            <Typography variant="body2" color="text.secondary">
              © Your Website {currentYear}
            </Typography>
          </Grid>

          {/* Center: Social Icons */}
          <Grid size={{ xs: 12, md: 4 }} textAlign="center" mb={{ xs: 2, md: 0 }}>
            <IconButton href="#!" aria-label="X (Twitter)" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton href="#!" aria-label="Facebook" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="#!" aria-label="LinkedIn" color="inherit">
              <LinkedIn />
            </IconButton>
          </Grid>

          {/* Right: Links */}
          <Grid size={{ xs: 12, md: 4 }} textAlign={{ xs: "center", md: "right" }}>
            <Link href="#!" underline="hover" color="text.secondary" sx={{ mr: 3 }}>
              Privacy Policy
            </Link>
            <Link href="#!" underline="hover" color="text.secondary">
              Terms of Use
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
