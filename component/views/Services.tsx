// Services.tsx
import { FC } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { FaVideo, FaMusic, FaTools } from "react-icons/fa";

const servicesSection = {
  Title: 'Services',
  Description: 'This is a description of our Services',
  CallToAction: 'Be apart of our story!'
};


const serviceItems = [
  {
    title: "Video Services",
    description:
      "We craft high-impact video content designed to engage, inspire, and perform across all platforms. This includes advertisements, social media content (landscape & portrait formats), short films, and vlogs.",
    icon: <FaVideo />,
  },
  {
    title: "Audio Services",
    description:
      "We provide professional audio services from start to finish, including studio-quality voiceover recording, custom music and soundtrack integration, audio editing, mixing and mastering for video and other digital media.",
    icon: <FaMusic />,
  },
  {
    title: "Production Crew Services",
    description:
      "Our team can operate independently or integrate into your crew, contributing as camera operators, boom pole holders, grips, lighting specialists, and editors to support your complete video and audio production process.",
    icon: <FaTools />,
  },
];


const Services: FC = () => {
  return (
    <Box component="section" id="services" sx={{ py: 10, backgroundColor: "#f9f9f9" }}>
      <Container>
        <Box textAlign="center" mb={8}>
          <Typography variant="h2" component="h2" sx={{ textTransform: "uppercase", fontWeight: "bold", mb: 2 }}>
            {servicesSection.Title}
          </Typography>      
        </Box>

        <Grid container spacing={6} justifyContent="center">
          {serviceItems.map((service, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }} textAlign="center">
              <Box position="relative" display="inline-block" mb={2}>

                {/* Icon on top */}
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,                    
                    fontSize: "2.5rem",
                    height: "200%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: 'black'
                  }}
                >
                  {service.icon}
                </Box>
              </Box>
              <Typography variant="h2" sx={{ fontWeight: "bold", mt: 2, mb: 2, fontSize: '1.25rem' }}>
                {service.title}
              </Typography>
              <Typography variant="body1" color="textSecondary" textAlign={"left"}>
                {service.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
