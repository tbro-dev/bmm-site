// Header.tsx
import { FC } from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const Header: FC = () => {
  return (
    <Box
      component="header"
      id="header"
      sx={{
        backgroundImage: "url('/path/to/your/background.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h5"
          sx={{
            mb: 2,
          }}
        >
          Welcome To Our Studio!
        </Typography>

        <Typography
          variant="h2"
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            mb: 4,
          }}
        >
          Busy Making Media
        </Typography>

        <Button
          href="#services"
          variant="contained"
          color="primary"
          size="large"
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            px: 4,
            py: 2,
            fontSize: "1.1rem",
          }}
        >
          Tell Me More
        </Button>
      </Container>
    </Box>
  );
};

export default Header;
