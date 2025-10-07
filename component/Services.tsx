// Services.tsx
import { FC } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { FaShoppingCart, FaLaptop, FaLock, FaCircle } from "react-icons/fa";

const servicesSection = {
  Title: 'Services',
  Description: 'This is a description of our Services',
  CallToAction: 'Be apart of our story!'
};

const serviceItems = [
  {
    title: "E-Commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    icon: <FaShoppingCart />,
  },
  {
    title: "Responsive Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    icon: <FaLaptop />,
  },
  {
    title: "Web Security",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    icon: <FaLock />,
  },
];

const Services: FC = () => {
  return (
    <Box component="section" id="services" sx={{ py: 10, backgroundColor: "#f9f9f9" }}>
      <Container>
        <Box textAlign="center" mb={8}>
          <Typography variant="h4" component="h2" sx={{ textTransform: "uppercase", fontWeight: "bold" }}>
            {servicesSection.Title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {servicesSection.Description}
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
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                {service.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
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
