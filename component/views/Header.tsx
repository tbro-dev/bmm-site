// Header.tsx
import { FC } from "react";
import { Box, Button, Container, Typography } from "@mui/material";


const headerSection = {
  Title: 'Company Name',
  Description: 'This is a statement of our company!',
  CallToAction: 'Click to learn more!'
};

const Header: FC = () => {
  return (
    <Box
      component="header"
      id="header"
      sx={{
        backgroundImage: "url('img/backdropshot.jpg')", 
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
          variant="h1"
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            mb: 4,
          }}
        >
          {headerSection.Title}
        </Typography>
        <Typography
          sx={{
            mb: 2,
            fontSize: '2.25rem',            
          }}
        >
          {headerSection.Description}
        </Typography>
        <Button
          href="#services"
          variant="contained"
          color="primary"
          size="large"
          sx={{
            textTransform: "uppercase",
            px: 4,
            py: 2,
            fontSize: "1.1rem",
          }}
        >
          {headerSection.CallToAction}
        </Button>
      </Container>
    </Box>
  );
};

export default Header;
