// Portfolio.tsx
import { FC } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { FaPlus } from "react-icons/fa";

// Portfolio item data
const portfolioItems = [
  {
    title: "Threads",
    subtitle: "Illustrations",
    img: "/media/portfolio/1.jpg?width=600&height=480&rmode=stretch",
    modalId: "portfolioModal1",
  },
  {
    title: "Explore",
    subtitle: "Graphic Design",
    img: "/media/portfolio/2.jpg?width=600&height=480&rmode=stretch",
    modalId: "portfolioModal2",
  },
  {
    title: "Finish",
    subtitle: "Identity",
    img: "/media/portfolio/3.jpg?width=600&height=480&rmode=stretch",
    modalId: "portfolioModal3",
  },
  {
    title: "Lines",
    subtitle: "Branding",
    img: "/media/portfolio/4.jpg?width=600&height=480&rmode=stretch",
    modalId: "portfolioModal4",
  },
  {
    title: "Southwest",
    subtitle: "Web Design",
    img: "/media/portfolio/5.jpg?width=600&height=480&rmode=stretch",
    modalId: "portfolioModal5",
  },
  {
    title: "Window",
    subtitle: "Photography",
    img: "/media/portfolio/6.jpg?width=600&height=480&rmode=stretch",
    modalId: "portfolioModal6",
  },
];

const Portfolio: FC = () => {
  return (
    <Box component="section" id="portfolio" sx={{ py: 10, backgroundColor: "#f5f5f5" }}>
      <Container>
        <Box textAlign="center" mb={8}>
          <Typography variant="h4" component="h2" sx={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Portfolio
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {portfolioItems.map(({ title, subtitle, img, modalId }, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box position="relative" sx={{ overflow: "hidden", borderRadius: 1 }}>
                <a href={`#${modalId}`} data-bs-toggle="modal" style={{ display: "block", position: "relative" }}>
                  <Box
                    className="portfolio-hover"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0,0,0,0.6)",
                      opacity: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "opacity 0.3s ease-in-out",
                      zIndex: 1,
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    <FaPlus style={{ color: "#fff", fontSize: "2.5rem" }} />
                  </Box>
                  <Box
                    component="img"
                    src={img}
                    alt={title}
                    sx={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      borderRadius: 1,
                    }}
                  />
                </a>

                <Box textAlign="center" mt={2}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {subtitle}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;
