// Header.tsx
import { FC } from "react";
import Image from 'next/image';
import { Box, Button, Container, Typography } from "@mui/material";


const headerSection = {
  Title: 'Busy Making Media',
  Description: 'Content Creation for Every Screen.',
  CallToAction: 'Click to learn more!',
  Img: '/img/stockbay.jpeg'
};

const Header: FC = () => {
  return (
    <Box
      component="header"
      id="header"
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "95vh",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Image
        src={headerSection.Img}
        alt="Image of a studio backdrop with single key light."
        layout='fill'
        objectFit="cover"
        objectPosition="center"
        style={{
          zIndex: '0',
        }}
      />
      <Container maxWidth="md">
        <Typography
          variant="h1"
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            zIndex: '1',
            position: 'relative',
            color: 'white',
            mb: 2,
          }}
        >
          {headerSection.Title}
        </Typography>
        <Typography
          sx={{
            mb: 4,
            fontSize: '2.25rem',
            zIndex: '1',
            position: 'relative',
            color: 'white',
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
