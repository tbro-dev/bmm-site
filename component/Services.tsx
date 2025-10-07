// Services.tsx
import { FC } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { FaShoppingCart, FaLaptop, FaLock, FaCircle } from "react-icons/fa";

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
            Services
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
        </Box>

        <Grid container spacing={6} justifyContent="center">
          {serviceItems.map((service, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }} textAlign="center">
              <Box position="relative" display="inline-block" mb={2}>
                {/* Circle background + Icon */}
                <FaCircle size={100} color="#1976d2" style={{ position: "absolute", left: 0, right: 0, margin: "0 auto", zIndex: 0 }} />
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    color: "white",
                    fontSize: "2rem",
                    lineHeight: "100px",
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
